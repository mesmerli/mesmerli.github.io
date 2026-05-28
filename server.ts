import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILLS } from "./src/data";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Top-level complete request logger to identify MIME type mismatch files
app.use((req, res, next) => {
  const originalSetHeader = res.setHeader;
  res.setHeader = function(name, value) {
    if (name.toLowerCase() === 'content-type') {
      const logMsg = `[${new Date().toISOString()}] HEADERS-SET: ${req.method} ${req.path} -> ${name}: ${value}\n`;
      fs.appendFileSync(path.join(process.cwd(), 'requests.log'), logMsg);
    }
    return originalSetHeader.apply(this, arguments as any);
  };
  next();
});

// Initialize server-side Gemini client
let ai: GoogleGenAI | null = null;
try {
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  } else {
    console.warn("⚠️ GEMINI_API_KEY environment variable is missing.");
  }
} catch (error) {
  console.error("Failed to initialize Google GenAI", error);
}

// System instructions for the AI Clone / Assistant
const systemInstruction = `
你現在是資深全端工程師「李振邦 (mesmerli)」的個人 AI 原生互動助理。
你的任務是協助前來造訪 李振邦 個人作品網頁的訪客（包含招募主管、合作夥伴及客戶），親切、專業、客觀且精準地回答關於他的任何問題。

【你的設定與說話口吻】
- 口吻：專業、親切、謙遜而熱情，能夠展現出資深工程師的專業技術素養。
- 語言：一律使用「繁體中文（台灣）」回答，除非訪客使用英文或日文等其他語言，此時請切換為該語言。
- 角色：你是「李振邦的 AI 助理」或「李振邦的數位分身」，請以「李振邦 (mesmerli)...」、「我們...」或「我的主人李振邦...」來指稱，回答時展現出對李振邦的資歷、專案與核心能力的深度了解。

【關於李振邦 (mesmerli) 的背景資料】
姓名：${PERSONAL_INFO.name} (${PERSONAL_INFO.englishName})
頭銜：${PERSONAL_INFO.title}
信箱：${PERSONAL_INFO.email}
聯絡電話：${PERSONAL_INFO.phone}
GitHub：${PERSONAL_INFO.github}
LinkedIn：${PERSONAL_INFO.linkedin}
地點：${PERSONAL_INFO.location}
個人簡介：${PERSONAL_INFO.bio}
標語：${PERSONAL_INFO.tagline}

【工作經歷】
${EXPERIENCES.map((exp, index) => `${index + 1}. 【${exp.company}】(${exp.period}) - ${exp.role} 於 ${exp.location}
   - 簡介：${exp.description}
   - 核心成果：
     ${exp.points.map(p => `* ${p}`).join('\n     ')}
   - 相關技術：${exp.tags.join(', ')}`).join('\n\n')}

【精選專案作品】
${PROJECTS.map((proj, index) => `${index + 1}. 《${proj.title}》[分類: ${proj.category}]
   - 一句話總結：${proj.description}
   - 詳細說明：${proj.longDescription}
   - 技術堆疊：${proj.tags.join(', ')}
   - 成果網址：${proj.demoUrl || '無'} / 程式碼：${proj.githubUrl || '無'}`).join('\n\n')}

【專業技能】
${SKILLS.map(s => `* [${s.category}] ${s.name} (精通度: ${s.level}%)`).join('\n')}

【回答指引與限制】
1. 必須忠於事實：只回答上述文本內提及的事實。如果訪客詢問超出此範圍的極度私人八卦、家庭背景，或無關李振邦專業的問題，請禮貌地將話題引導回他的工作能力、技術成果和合作機會。
2. 回答格式：請善用 Markdown 格式，如精美列表、粗體、甚至是引用區塊，讓視覺效果極佳，但文字不要像牆壁一樣長，要條理清晰、易於閱讀。
3. 行動呼籲：如果訪客表現出極高興趣、或是提到有職缺機會/專案合作，請主動提供李振邦的聯絡方式 (${PERSONAL_INFO.email}、${PERSONAL_INFO.phone}) 並邀請訪客在右下方直接填寫聯絡表單發送郵件。
`;

// API routes go here FIRST
app.get("/api/debug", (req, res) => {
  res.json({
    node_env: process.env.NODE_ENV,
    cwd: process.cwd(),
    dist_exists: fs.existsSync(path.join(process.cwd(), 'dist')),
    timestamp: new Date().toISOString()
  });
});

// AI Chatbot endpoint
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Messages payload is required and must be an array" });
  }

  if (!ai) {
    return res.status(503).json({ 
      error: "AI 助理服務暫時不可用，因為尚未配置 GEMINI_API_KEY 變數，但您可以繼續瀏覽網頁的精彩作品！" 
    });
  }

  try {
    // Reconstruct the chat history for Gemini.
    // The structure is: contents: [{ role: 'user' | 'model', parts: [{ text: '...' }] }]
    const formattedContents = messages.map((m: any) => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "我有些聽不太懂，能麻煩您換個方式詢問嗎？";
    res.json({ text: replyText });
  } catch (error: any) {
    console.error("Error communicating with Gemini:", error);
    res.status(500).json({ 
      error: "AI 助理在處理您的問題時遇到了些狀況，但您可以使用聯絡表單直接與李振邦聯繫！",
      details: error.message 
    });
  }
});

// Vite Setup on production / development
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    
    // Custom robust production static serving targeting correct MIME types
    app.use((req, res, next) => {
      // Prevent directory traversal
      const safePath = req.path.replace(/\.\./g, '');
      const filePath = path.join(distPath, safePath);

      try {
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath).toLowerCase();
          const mimeTypes: Record<string, string> = {
            '.js': 'application/javascript; charset=utf-8',
            '.mjs': 'application/javascript; charset=utf-8',
            '.css': 'text/css; charset=utf-8',
            '.svg': 'image/svg+xml; charset=utf-8',
            '.html': 'text/html; charset=utf-8',
            '.json': 'application/json; charset=utf-8',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.gif': 'image/gif',
            '.ico': 'image/x-icon',
            '.webp': 'image/webp',
            '.woff': 'font/woff',
            '.woff2': 'font/woff2',
            '.ttf': 'font/ttf',
            '.otf': 'font/otf',
          };

          const contentType = mimeTypes[ext] || 'application/octet-stream';
          
          // Log request and Content-Type to /requests.log
          const logMsg = `[${new Date().toISOString()}] STATIC req: ${req.path}, file: ${filePath}, ext: ${ext}, mime: ${contentType}\n`;
          fs.appendFileSync(path.join(process.cwd(), 'requests.log'), logMsg);

          res.setHeader('Content-Type', contentType);
          fs.createReadStream(filePath).pipe(res);
          return;
        } else {
          const logMsg = `[${new Date().toISOString()}] MISSING file for req: ${req.path}, tried: ${filePath}\n`;
          fs.appendFileSync(path.join(process.cwd(), 'requests.log'), logMsg);
        }
      } catch (err: any) {
        console.error("Static file serving error:", err);
        fs.appendFileSync(path.join(process.cwd(), 'requests.log'), `[${new Date().toISOString()}] ERROR: ${err.message}\n`);
      }
      next();
    });

    // Fallback for SPA routing: serve index.html with explicit text/html MIME type
    app.get('*', (req, res) => {
      const indexPath = path.join(distPath, 'index.html');
      const logMsg = `[${new Date().toISOString()}] FALLBACK wildcard req: ${req.path}, serving: ${indexPath}\n`;
      fs.appendFileSync(path.join(process.cwd(), 'requests.log'), logMsg);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      fs.createReadStream(indexPath).pipe(res);
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
