import { Project, Experience, Skill } from './types';

export const PERSONAL_INFO = {
  name: '李振邦',
  englishName: 'mesmerli',
  title: '資深全端工程師 & AI 應用架構師',
  englishTitle: 'Senior Full-Stack Engineer & AI Application Architect',
  email: 'mesmerli@hotmail.com',
  phone: '+886918808771',
  github: 'https://github.com/mesmerli',
  linkedin: 'https://www.linkedin.com/in/diego-cp-lee-b236b21/',
  location: '台灣新北市',
  avatarText: 'ML',
  bio: '擁有 25 年以上的全端開發與架構設計實務經驗，熟悉各種現代化系統架構。熱衷於結合極致 UI 身歷其境的視覺體驗與穩健可擴展的後端微服務。專注於生成式 AI 應用開發、React 全端系統架構與雲端架構設計。致力於透過優雅的代碼，將複雜的業務痛點轉化為令人驚豔的產品體驗。',
  tagline: '用生命和熱情寫好每一行代碼，賦予系統靈活流暢、穩定可靠的靈魂。',
  education: {
    degree: '國立台灣大學 資訊工程學系 博士',
    englishDegree: 'National Taiwan University - Computer Science'
  },
  stats: [
    { label: '實務開發經驗', value: '25+' },
    { label: '開源專案項目', value: '10+' },
    { label: '引領技術團隊', value: '8+' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'twbig2',
    title: '台灣大老二線上遊戲 (Big Two)',
    category: 'frontend',
    description: '經典台灣規則大老二撲克牌遊戲！支援網頁跨平台，具備絲滑順暢的發牌與出牌動畫、智慧選牌、生動音效與精準的牌型判斷。',
    longDescription: '這是一個專為網頁端建置的經典台灣「大老二」撲克牌遊戲。運用 React + TypeScript 與 Framer Motion 建構極致流暢的手牌物理互動、3D 牌面質感與動態出牌特效。系統內建完整的牌型審查引擎，精準判定台灣大老二的各式經典組合（梅花三開局、單張、對子、順子、同花、葫蘆、鐵支、同花順）以及出牌限制。未來規劃支援 Socket.io 進行多人即時連線對戰，將道地的台灣卡牌文化帶到世界的舞台。',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=85',
    tags: ['React', 'TypeScript', 'Motion', 'Tailwind CSS', 'Web Audio API'],
    demoUrl: 'https://mesmerli.github.io/twbig2/',
    githubUrl: 'https://github.com/mesmerli/taiwan-big-two-ai',
    featured: true,
  },
  {
    id: 'menubartodo',
    title: 'MenuBar Todo - 輕量常駐選單列待辦助手',
    category: 'mobile',
    description: '專為 macOS 效率人士打造的常駐選單列極簡待辦工具，支援快捷鍵極速喚醒、智慧語意解析與超低記憶體佔用。',
    longDescription: '這是一款專為 macOS 用戶設計的常駐選單列（Menu Bar）待辦事項高效管理工具。採用 Swift 與 SwiftUI 進行原生開發，具有極輕量化的背景常駐機制，確保超低延遲與系統資源佔用。平台內建智慧 NLP 語意分析引擎，能自動提取任務輸入中的日期與優先度等級（如輸入「下午 3 點會議」即刻自動生成提醒）。支援豐富的主題風格切換、全局 Hotkey 快捷喚醒、精美的流暢動畫。開源後於社群獲得廣泛好評。',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=85',
    tags: ['Swift', 'SwiftUI', 'macOS App', 'Combine', 'CocoaPods'],
    demoUrl: '',
    githubUrl: 'https://github.com/mesmerli/MenuBarTodo',
    featured: true,
  },
  {
    id: 'aicompare',
    title: 'aiCompare - 智慧 FFI 檔案與資料夾比對工具',
    category: 'fullstack',
    description: '結合極速 Rust 差異比對引擎與 Compose Desktop GUI (Kotlin) 的高質感、高效能檔案與資料夾比對工具。',
    longDescription: 'aiCompare 是一款結合極速 Rust 差異比對引擎 與 Compose Desktop GUI (Kotlin) 的高質感、高效能檔案與資料夾比對工具，底層採用 JNI/FFI (JNA) 技術進行動態對接。傳統的比較工具是鐵面無私的機器，只看物理路徑，無法妥善處理重構、移位、改名等情境。而我們的 aiCompare 實作了「智慧虛擬對齊」演算法，能精準看懂工程師的重構習慣，具備深度的理解直覺，能讓資深開發者在使用時由衷驚嘆：『這才是 2026 年該有的智慧比對工具！』在未來的 AI 協作時代中，AI Agent 作為重構與生成代碼的大腦，aiCompare 則為其專屬的顯微鏡與手術刀。AI Agent 能自動呼叫 aiCompare 在背景高速比對、過濾並合併萬行複雜代碼，僅在遇到連 AI 都無法通靈的世紀大衝突時，便在前端彈出我們精心設計的精美黑標 UI，引導人類工程師登入系統，實行「線上代碼手術」手動點擊確認。',
    image: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=800&q=85',
    tags: ['Rust', 'Kotlin', 'Compose', 'JNI / JNA FFI', 'Diff Engine', 'Agent Tooling'],
    demoUrl: '',
    githubUrl: 'https://github.com/mesmerli/aiCompare',
    featured: true,
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
    githubUrl: 'https://github.com/mesmerli/omnichat',
    featured: false,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: '技術總監 & 首席架構師 (CTO & Chief Architect)',
    company: '梅西萊 (mesmerli CO., LTD.)',
    companyUrl: 'https://github.com/mesmerli',
    location: '台北市',
    period: '2020.10 ~ 至今',
    description: '擔任技術委員會核心領導者與首席架構師，負責引領研發團隊設計兼具高併發、極致動態渲染與生成式 AI 架構之微服務與雲端基礎設施。',
    points: [
      '主導建置雲端原生微服務與混合雲架構，導入自動伸縮機制與分散式負載平衡，設計支持 10萬+ RPS 級別的大規模生產系統。',
      '引領團隊研發智能生成式 AI 工具鏈、主導開發高階 FFI 跨平台檔案比對工具（aiCompare），透過 Rust 與 Compose Desktop 實現極速虛擬動態對齊與核心引擎設計。',
      '將核心系統逐步現代化為 React 18 / 19 結合新型編譯架構，創立高度模組化的 UI 組件體系，使新產品落地週期大幅縮短 40%。',
      '規劃多代核心架構演進，並與全球研發、安全與設計部門緊密協作，確保系統兼具高擴展性與極致的用戶體驗。'
    ],
    tags: ['Next.js / React 19', 'TypeScript', 'Node.js', 'Kubernetes', 'AWS / GCP Cloud', 'Generative AI', 'High-Scale Dev']
  },
  {
    id: 'exp2',
    role: '資深全端研發主管 & 技術專家 (Senior Staff Full-Stack Engineer)',
    company: 'IBM (International Business Machine)',
    companyUrl: 'https://github.com/mesmerli',
    location: '台北市',
    period: '2012.05 ~ 2020.09',
    description: '負責指導公司核心全端產品設計與性能最佳化，主導跨國 SaaS 電商平台與大型企業級協同對話系統架構之改良。',
    points: [
      '獨立規劃並主導開發極致順暢的單頁面團隊協同對話系統（OmniChat），在極大資料量下實現毫秒級虛擬滾動與零延遲交互體驗。',
      '重構海量資料關聯庫查詢與寫入阻礙問題，導入智能分表與多級緩存策略，成功將核心報表產出反應速度最佳化 10 倍以上。',
      '帶領核心技術攻堅小組，推動全端代碼標準及前端動態效能遷移，為公司的 SaaS 業務提供強大的穩定運作保障。',
      '推行完善的自動化測試流（CI/CD Tools / Vitest / End-to-End Testing）與容器化部署流程，使開發上線出錯機率大幅降低 80%'
    ],
    tags: ['React', 'TypeScript', 'Node.js / Express', 'PostgreSQL', 'WebSockets', 'Docker', 'SaaS Architecture']
  },
  {
    id: 'exp3',
    role: '資深系統分析師 & 遊戲 AI 研發專家 (Senior Systems Analyst & Game Engine Architect)',
    company: '台灣大學智慧生活研究室 (National Taiwan Univerity, Smart Living Research Lab)',
    location: '新北市',
    period: '2000.01 ~ 2012.04',
    description: '將深厚的台大資工博士學術背景與系統設計相結合，專注於經典遊戲交互引擎設計、自適應 AI 計算以及高性能底層網路拓撲。',
    points: [
      '自研高物理擬真與出牌判定規則之台灣卡牌遊戲引擎（Big Two Engine），精準涵蓋道地台灣規則，並透過微秒級演算法優化出牌決策判定與智慧選牌。',
      '採用 Swift/SwiftUI 為 macOS 開發多款極輕量背景常駐常值工具，包括兼具卓越語意解析的選單列待辦工具（MenuBar Todo），榮登開源社群熱門。',
      '撰寫與最佳化多個核心異步 Socket 即時同步伺服器，解決極端網路擁塞與瞬發連線不穩定情境下的連線狀態同步問題。',
      '負責大型分布式多人線上桌遊的核心資料同步與牌局決策樹計算，提供高流暢度之音效合成、物體運動及玩家策略回饋。'
    ],
    tags: ['C++ / Java', 'Game Physics Engine', 'Heuristic AI', 'Socket Programming', 'macOS Cocoa / Swift', 'Databases']
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
