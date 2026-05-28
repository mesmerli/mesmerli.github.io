import { Project, Experience, Skill } from './types';

export const PERSONAL_INFO = {
  name: '李振邦',
  englishName: 'mesmerli',
  title: '資深全端工程師 & AI 應用架構師',
  englishTitle: 'Senior Full-Stack Engineer & AI Application Architect',
  email: 'mesmerli@hotmail.com',
  phone: '+886918808771',
  github: 'https://github.com/mesmerli',
  linkedin: 'https://linkedin.com/in/mesmerli',
  location: '台灣新北市',
  avatarText: 'ML',
  bio: '擁有 25 年以上的全端開發與架構設計實務經驗，熟悉各種現代化系統架構。熱衷於結合極致 UI 身歷其境的視覺體驗與穩健可擴展的後端微服務。專注於生成式 AI 應用開發、React 全端系統架構與雲端架構設計。致力於透過優雅的代碼，將複雜的商業邏輯化為流暢精緻的使用者體驗。',
  tagline: '用優雅的程式碼與 25 載匠心，編織科技與美學的無限可能。',
  stats: [
    { label: '實務經驗', value: '25+ 年' },
    { label: '成功專案', value: '80+' },
    { label: '開源貢獻', value: '1000+' },
    { label: '滿意客戶', value: '100%' },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'promptcraft',
    title: 'PromptCraft - AI 提示詞工程平台',
    category: 'ai',
    description: '一個專為企業與 AI 精英設計的視覺化提示詞調試與協作治理平台，內建多模型 API 版本控制與提示詞優化器。',
    longDescription: 'PromptCraft 是為了解決企業內部複雜 prompt 管理痛點而生的平台。它提供了一個高度直覺的對話介面，內置了鏈式 prompt 分析、歷史版本對比、團隊協作分享、AI 智慧優化（Prompt Polishing）以及邊際成本估算等功能。前端使用 React 19 與 Tailwind CSS 建構極致流暢的編輯器，後端整合多個大語言模型 API 進行負載平衡，完美協助團隊將 Prompt 效能提升達 40%。',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=85',
    tags: ['React', 'Express', 'Gemini API', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://example.com/demo/promptcraft',
    githubUrl: 'https://github.com/ethanchen-dev/promptcraft',
    featured: true,
  },
  {
    id: 'aetherflow',
    title: 'AetherFlow - 微服務架構日誌分析系統',
    category: 'fullstack',
    description: '高吞吐量分散式微服務監控與日誌即時分析儀表板，支持異常自動偵測與多通道警報。',
    longDescription: 'AetherFlow 是一款針對現代 K8s 微服務集群開發的日誌追蹤監控系統。前端透過 Recharts 繪製即時效能圖表，並以 WebSockets 做即時日誌流與警報推送。系統底層整合了快速檢索機制，能在毫秒內對數百萬條日誌進行全文搜索與關聯分析。並採用輕量級機器學習演算法，在背景自動分類與標記異常行為，提供智能修復建議，使團隊的運維響應速度大幅提升 50% 以上。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85',
    tags: ['React', 'D3.js', 'WebSockets', 'Express', 'Tailwind CSS'],
    demoUrl: 'https://example.com/demo/aetherflow',
    githubUrl: 'https://github.com/ethanchen-dev/aetherflow',
    featured: true,
  },
  {
    id: 'minimalist-habit',
    title: 'ZenRoute - 極簡生活習慣與日程管理 App',
    category: 'mobile',
    description: '結合行為心理學的優雅日程與習慣養成追蹤程式，具備擬真微互動與 3D 觸覺設計。',
    longDescription: 'ZenRoute 是以極簡美學（Wabi-Sabi）為設計本質的習慣追蹤應用。採用 React + Motion 架構開發，提供極致流暢的卡片式翻轉、手勢拖曳與高度反應的物理碰撞擬真效果。內建數據統計模組，以創新的「星軌圖」視覺化使用者習慣的維持程度。不含任何喧賓奪主的通知廣告，僅以呼吸般的介面引導使用者在日常中找回專注與平靜。',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=85',
    tags: ['React', 'Motion', 'Tailwind CSS', 'LocalStorage', 'Mobile Web'],
    demoUrl: 'https://example.com/demo/zenroute',
    githubUrl: 'https://github.com/ethanchen-dev/zenroute',
    featured: false,
  },
  {
    id: 'omnichat',
    title: 'OmniChat - 企業協同即時對話系統',
    category: 'frontend',
    description: '現代化的多人即時溝通、文件同步與任務看板一體化協作桌面，支援大型拖動交互。',
    longDescription: 'OmniChat 是一個專為中大型團隊開發的前端一體化協作平台。在瀏覽器端實現了極其流暢的的多頁籤視窗系統，並在單頁面（SPA）內整合了即時多人在線聊天、Kanban 任務看板、文件共同編輯與音訊會議。運用前端虛擬列表（Virtual Grid）與高效 DOM 渲染技術，即時渲染數萬條歷史訊息毫無卡頓，具備流暢的使用者操作反饋與高質感的介面細節。',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=85',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5 Drag-Drop', 'Motion'],
    demoUrl: 'https://example.com/demo/omnichat',
    githubUrl: 'https://github.com/ethanchen-dev/omnichat',
    featured: false,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: '資深全端工程師 & 技術組長',
    company: '鼎創卓越科技 (TrendInnovate CO., LTD.)',
    companyUrl: 'https://example.com/trendinnovate',
    location: '台北市',
    period: '2023.08 ~ 至今',
    description: '擔任領先金融科技部門技術組長，負責帶領 8 人前端與後端研發團隊，設計兼具高併發與極致用戶體驗之全鏈條系統。',
    points: [
      '主導開發新一代生成式 AI 對話系統與高吞吐量報表監控儀表板，成功為公司拓展 5 家上市企業客戶。',
      '主導前端架構遷移至 React 18+ 與新一代打包工具，建構企業級組件庫，大幅縮短頁面加載時間（LCP 下降 45%），提高開發效率達 35%。',
      '打造高彈性的 RESTful APIs 與 WebSocket 即時數據流，重構多核心交易模組，確保系統能承受 10,000+ TPS 的尖峰負載。',
      '導入 CI/CD 自動化部署流程、單元測試（Jest/React Testing Library），提升整體軟體質量與上線穩定度。'
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'DevOps', 'Docker', 'AI Workflows']
  },
  {
    id: 'exp2',
    role: '全端開發工程師',
    company: '啟明星數位軟體 (SparkStar Studio)',
    companyUrl: 'https://example.com/sparkstar',
    location: '台北市',
    period: '2020.03 ~ 2023.07',
    description: '負責設計並實作面向海外市場的跨境電商 SaaS 平台的行銷分析雲、以及高彈性內容管理系統（CMS）。',
    points: [
      '獨立研發動態內容渲染組件與大數據 D3 可視化分析儀表板，使非技術背景的行銷人員能快速解讀百萬級銷售數據。',
      '基於 Node.js / Express 設計分散式任務調度系統，支援日均數十萬張圖片的自動縮減、上色與分發，大幅節省雲端存儲空間與帶寬費用。',
      '優化資料庫查詢效能，將百萬級資料關聯查詢時間從 2.8s 優化至 150ms 內。',
      '與海外多國 UI/UX 設計組通力合作，以無障礙（WCAG 2.1 AA）為準則重構電商收銀核心流程，訂單轉換率提升將近 12%。'
    ],
    tags: ['React', 'Redux', 'Express', 'PostgreSQL', 'D3.js', 'Vite', 'RESTful API']
  },
  {
    id: 'exp3',
    role: '初級前端工程師',
    company: '藍圖科技 (BlueMap Creative)',
    location: '新竹市',
    period: '2019.01 ~ 2020.02',
    description: '負責開發各式高度定製的企業官網、動態互動網頁以及品牌行銷微服務網頁。',
    points: [
      '撰寫客製化網頁動畫效果，運用原生 JS、CSS3 與 canvas 動畫引擎，參與開發多個榮獲大獎之行銷案。',
      '確保跨瀏覽器（IE11、Chrome、Safari、Mobile）之完美兼容性，實踐高度響應式排版（RWD）。',
      '與後端開發團隊對接 API 介面，使用 AJAX 精巧處理異步與加載狀態控制，優化使用者直覺感受。'
    ],
    tags: ['JavaScript', 'HTML5/CSS3', 'Sass', 'Webpack', 'GreenSock (GSAP)', 'RWD']
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React (18 / 19)', category: 'Frontend', level: 95 },
  { name: 'TypeScript', category: 'Frontend', level: 92 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 96 },
  { name: 'Motion / Framer Motion', category: 'Frontend', level: 88 },
  { name: 'Data Visualization (D3 / Recharts)', category: 'Frontend', level: 85 },
  { name: 'State Management (Zustand / Redux)', category: 'Frontend', level: 85 },
  
  // Backend
  { name: 'Node.js / Express', category: 'Backend', level: 90 },
  { name: 'RESTful API & WebSockets', category: 'Backend', level: 92 },
  { name: 'Generative AI API (Gemini SDK)', category: 'Backend', level: 88 },
  { name: 'GraphQL', category: 'Backend', level: 75 },
  { name: 'Databases (SQL / MongoDB)', category: 'Backend', level: 82 },
  
  // DevOps & Cloud
  { name: 'Docker / Containerization', category: 'DevOps & Cloud', level: 80 },
  { name: 'CI/CD (GitHub Actions)', category: 'DevOps & Cloud', level: 82 },
  { name: 'Google Cloud Platform (GCP)', category: 'DevOps & Cloud', level: 78 },
  { name: 'AWS Services', category: 'DevOps & Cloud', level: 75 },
  
  // Design / Other
  { name: 'UI / UX Design Concept', category: 'Design / Other', level: 85 },
  { name: 'Figma Prototyping', category: 'Design / Other', level: 88 },
  { name: 'Git & Command Line', category: 'Design / Other', level: 95 },
  { name: 'Traditional Chinese Localization', category: 'Design / Other', level: 100 },
];
