import { Project, Experience, Skill } from './types';

export const PERSONAL_INFO = {
  name: '李振邦',
  englishName: 'mesmerli',
  nameEn: 'Diego (Zhen-Bang) Lee',
  title: '資深全端工程師 & AI 應用架構師',
  englishTitle: 'Senior Full-Stack Engineer & AI Application Architect',
  email: 'mesmerli@hotmail.com',
  phone: '+886918808771',
  github: 'https://github.com/mesmerli',
  linkedin: 'https://www.linkedin.com/in/diego-cp-lee-b236b21/',
  location: '台灣新北市',
  locationEn: 'New Taipei City, Taiwan',
  avatarText: 'ML',
  bio: '擁有 25 年以上的全端開發與架構設計實務經驗，熟悉各種現代化系統架構。熱衷於結合極致 UI 身歷其境的視覺體驗與穩健可擴展的後端微服務。專注於生成式 AI 應用開發、React 全端系統架構與雲端架構設計。致力於透過優雅的代碼，將複雜的業務痛點轉化為令人驚豔的產品體驗。',
  bioEn: 'Over 25 years of full-stack engineering and architectural design, specializing in robust system ecosystems. Passionate about marrying immersive user interfaces with performant, secure cloud services. Focused on generative AI integrations, React-centric enterprise product layouts, and scalable cloud systems. Dedicated to writing clean, elegant code that translates complex business pain points into stunning digital products.',
  tagline: '用生命和熱情寫好每一行代碼，賦予系統靈活流暢、穩定可靠的靈魂。',
  taglineEn: 'Writing every line of code with life and passion, gifting systems with an elegant, stable, and reliable soul.',
  education: {
    degree: '國立台灣大學 資訊工程學系 博士',
    englishDegree: 'Ph.D. in Computer Science, National Taiwan University'
  },
  stats: [
    { label: '實務開發經驗', labelEn: 'Years of Dev Exp', value: '25+' },
    { label: '開源專案項目', labelEn: 'Open Source Projects', value: '10+' },
    { label: '引領技術團隊', labelEn: 'Tech Teams Led', value: '8+' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'twbig2',
    title: '台灣大老二線上遊戲 (Big Two)',
    titleEn: 'Taiwanese Big Two Online Game',
    category: 'frontend',
    description: '經典台灣規則大老二撲克牌遊戲！支援網頁跨平台，具備絲滑順暢的發牌與出牌動畫、智慧選牌、生動音效與精準的牌型判斷。',
    descriptionEn: 'Classic Taiwanese rules Big Two card game! Web-based cross-platform featuring fluid Dealing & Playing physics, smart card selection, custom sound effects, and strict card pattern validation.',
    longDescription: '這是一個專為網頁端建置的經典台灣「大老二」撲克牌遊戲。運用 React + TypeScript 與 Framer Motion 建構極致流暢的手牌物理互動、3D 牌面質感與動態出牌特效。系統內建完整的牌型審查引擎，精準判定台灣大老二的各式經典組合（梅花三開局、單張、對子、順子、同花、葫蘆、鐵支、同花順）以及出牌限制。未來規劃支援 Socket.io 進行多人即時連線對戰，將道地的台灣卡牌文化帶到世界的舞台。',
    longDescriptionEn: 'A modern, highly interactive web implementation of Taiwanese favorite "Big Two" card game. Engineered using React, TypeScript, and Framer Motion for high-fidelity physical hand dealt movements, tactile card textures, and immersive play animations. Built with a comprehensive card analysis engine that strictly handles Taiwanese formulations (Club 3 starts, pairs, straights, flushes, full house, four-of-a-kind, straight flushes) and structural limits. Upgrades are underway to introduce Socket.io real-time matchmaking, carrying local gaming traditions to global players.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=85',
    tags: ['React', 'TypeScript', 'Motion', 'Tailwind CSS', 'Web Audio API'],
    demoUrl: 'https://mesmerli.github.io/twbig2/',
    githubUrl: 'https://github.com/mesmerli/taiwan-big-two-ai',
    featured: true,
  },
  {
    id: 'menubartodo',
    title: 'MenuBar Todo - 輕量常駐選單列待辦助手',
    titleEn: 'MenuBar Todo - macOS menu bar task assistant',
    category: 'mobile',
    description: '專為 macOS 效率人士打造的常駐選單列極簡待辦工具，支援快捷鍵極速喚醒、智慧語意解析與超低記憶體佔用。',
    descriptionEn: 'A minimalist menu bar productivity companion built strictly for macOS power users. Supports custom hotkey wakeup, NLP semantic parsing, and sub-10MB resource efficiency.',
    longDescription: '這是一款專為 macOS 用戶設計的常駐選單列（Menu Bar）待辦事項高效管理工具。採用 Swift 與 SwiftUI 進行原生開發，具有極輕量化的背景常駐機制，確保超低延遲與系統資源佔用。平台內建智慧 NLP 語意分析引擎，能自動提取任務輸入中的日期與優先度等級（如輸入「下午 3 點會議」即刻自動生成提醒）。支援豐富的主題風格切換、全局 Hotkey 快捷喚醒、精美的流暢動畫。開源後於社群獲得廣泛好評。',
    longDescriptionEn: 'A high-performance, native macOS menu bar task workflow suite designed to maximize cognitive focus. Developed using pure Swift and SwiftUI to ensure maximum runtime responsiveness and tiny system footprints (<10MB RAM). It leverages an intelligent natural language parsing module to auto-schedule dates and tags directly from typed descriptions (e.g., typing "Sync review at 3PM today" triggers automatic alarms). Supports full design customizability, global wakeup coordinates, and clean, tactile macOS transitions.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=85',
    tags: ['Swift', 'SwiftUI', 'macOS App', 'Combine', 'CocoaPods'],
    demoUrl: '',
    githubUrl: 'https://github.com/mesmerli/MenuBarTodo',
    featured: true,
  },
  {
    id: 'aicompare',
    title: 'aiCompare - 智慧 FFI 檔案與資料夾比對工具',
    titleEn: 'aiCompare - Smart FFI File & Folder Diff Tool',
    category: 'fullstack',
    description: '結合極速 Rust 差異比對引擎與 Compose Desktop GUI (Kotlin) 的高質感、高效能檔案與資料夾比對工具。',
    descriptionEn: 'A gorgeous, high-powered desktop directory diff utility pairing a blazing-fast Rust differential algorithm engine with a Kotlin Compose Desktop layout.',
    longDescription: 'aiCompare 是一款結合極速 Rust 差異比對引擎 與 Compose Desktop GUI (Kotlin) 的高質感、高效能檔案與資料夾比對工具。傳統的比較工具是鐵面無私的機器，只看物理路徑，無法妥善處理重構、移位、改名等情境。而我們的 aiCompare 實作了「智慧虛擬對齊」演算法，能精準看懂工程師的重構習慣，具備深度的理解直覺。在未來的 AI 協作時代中，AI Agent 作為重構與生成代碼的大腦，aiCompare 則為其專屬的顯微鏡與手術刀。',
    longDescriptionEn: 'aiCompare is a gorgeous, high-performance folder diffing interface pairing a lightning Rust calculation system with Compose Desktop (Kotlin). While conventional tools align purely by rigid file structure, aiCompare implements a "Smart Virtual Alignment" algorithm mapping refactored, renamed, and moved classes intuitively. As AI agents drive autonomous codebases, aiCompare provides engineers with precise microscopic insights, enabling background agents to merge complex file lines while prompting interactive desktop overlays for resolution conflicts.',
    image: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=800&q=85',
    tags: ['Rust', 'Kotlin', 'Compose', 'JNI / JNA FFI', 'Diff Engine', 'Agent Tooling'],
    demoUrl: '',
    githubUrl: 'https://github.com/mesmerli/aiCompare',
    featured: true,
  },
  {
    id: 'urktv',
    title: 'urKTV - 智慧家庭一體化娛樂歌唱平台',
    titleEn: 'urKTV - Smart Home All-in-One Karaoke Station',
    category: 'frontend',
    description: '專為家庭開發的前端一體化娛樂平台，實現極致流暢的多頁籤與多人在線歌唱互動。',
    descriptionEn: 'An immersive household-level leisure web station. Delivers lightning-smooth multi-tab queues and collaborative real-time Karaoke playlists.',
    longDescription: 'urKTV 是一個專為家庭開發的前端一體化娛樂平台。實現了極其流暢的的多頁籤視窗系統，整合了即時多人點歌、曲目看板、曲目文件共同編輯與遠距歡唱互動。運用人聲智慧分離技術製作高品質 KTV 素材，高效美聲渲染技術，即時渲染歌聲毫無卡頓，具備流暢的使用者經驗與高質感的介面細節。',
    longDescriptionEn: 'urKTV is a high-interactivity household social web engine. Engineered with a multi-tabbed window environment in React, family members can search, queue, and synchronize lyrics simultaneously with no refresh lag. Leverages high-fidelity DSP vocal separation models to extract studio streams alongside precise local audio rendering pipelines, ensuring flawless vocal echo loops on any home device.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=85',
    tags: ['React', 'TypeScript', 'Web Audio', 'AI Vocal Split', 'Tailwind CSS', 'Motion'],
    demoUrl: '',
    githubUrl: 'https://github.com/mesmerli/urKTV',
    featured: false,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: '技術總監 & 首席架構師 (CTO & Chief Architect)',
    roleEn: 'CTO & Chief Architect',
    company: '梅西萊 (mesmerli CO., LTD.)',
    companyEn: 'mesmerli CO., LTD.',
    companyUrl: 'https://mesmerli.github.io/',
    location: '台北市',
    locationEn: 'Taipei, Taiwan',
    period: '2024.12 ~ 至今',
    periodEn: 'Dec 2024 ~ Present',
    description: '擔任技術委員會核心領導者與首席架構師，負責引領研發團隊設計兼具高併發、極致動態渲染與生成式 AI 架構之微服務與雲端基礎設施。',
    descriptionEn: 'Serving as the Technical Committee Director and Chief Architect. Spearheading high-concurrency cloud-native microservices, generative AI platforms, and high-performance desktop tools.',
    points: [
      '主導建置雲端原生微服務與混合雲架構，導入自動伸縮機制與分散式負載平衡，設計支持 10萬+ RPS 級別的大規模生產系統。',
      '引領團隊研發智能生成式 AI 工具鏈、主導開發高階 FFI 跨平台檔案比對工具（aiCompare），透過 Rust 與 Compose Desktop 實現極速虛擬動態對齊與核心引擎設計。',
      '將核心系統逐步現代化為 React 18 / 19 結合新型編譯架構，創立高度模組化的 UI 組件體系，使新產品落地週期大幅縮短 40%。',
      '規劃多代核心架構演進，並與全球研發、安全與設計部門緊密協作，確保系統兼具高擴展性與極致的用戶體驗。'
    ],
    pointsEn: [
      'Architected robust cloud-native Kubernetes workloads and hybrid-cloud api gateways with auto-scaling metrics, handling 100k+ concurrent RPS scaling properties.',
      'Sprinted the development of generative AI pipelines, orchestrating local LLM systems, alongside a rust FFI core compiler backend for Desktop comparisons (aiCompare).',
      'Refactored legacy assets towards React 18/19 ecosystem with custom localized components and localized UI primitives, successfully reducing successive product deployment cycles by 40%.',
      'Mapped and executed technology roadmaps across safety, DevOps frameworks, and frontend guidelines, delivering reliable system stability.'
    ],
    tags: ['Next.js / React 19', 'TypeScript', 'Node.js', 'Kubernetes', 'AWS / GCP Cloud', 'Generative AI', 'High-Scale Dev']
  },
  {
    id: 'exp2',
    role: '資深全端研發主管 & 技術專家 (Senior Staff Full-Stack Engineer)',
    roleEn: 'Senior Staff Full-Stack Engineer & Lead',
    company: 'IBM (International Business Machine)',
    companyEn: 'IBM (International Business Machines)',
    companyUrl: 'https://www.ibm.com/us-en',
    location: '台北市',
    locationEn: 'Taipei, Taiwan',
    period: '2011.07 ~ 2024.11',
    periodEn: 'Jul 2111 ~ Nov 2024',
    description: '負責指導公司核心全端產品設計與性能最佳化，主導跨國 SaaS 電商平台與家庭娛樂點歌系統（urKTV）架構設計。',
    descriptionEn: 'Spearheaded full-stack platform layouts and performance telemetry, leading high-availability ecommerce structures and the "urKTV" social entertainment framework.',
    points: [
      '獨立規劃並主導開發極致順暢的單頁面家庭娛樂點歌歌唱系統（urKTV），在複雜多頁籤視窗與即時多人點曲中實現極速流暢、毫無卡頓的用戶體驗。',
      '重構海量資料關聯庫查詢與寫入阻礙問題，導入智慧分表與多級快取策略，成功將核心報表產出反應速度最佳化 10 倍以上。',
      '帶領核心技術攻堅小組，推動全端代碼標準及前端動態效能遷移，為公司的 SaaS 業務提供強大的穩定運作保障。',
      '推行完善的自動化測試流（CI/CD Tools / Vitest / End-to-End Testing）與容器化部署流程，使開發上線出錯機率大幅降低 80%'
    ],
    pointsEn: [
      'Independently designed and compiled the frontend rendering core for "urKTV", enabling ultra-low-latency real-time playlist queues with multiple persistent view tabs.',
      'Audited PostgreSQL storage systems in core SaaS workflows, implementing indices, intelligent partition shards, and Redis caching layers to optimize document generation speeds by 10x.',
      'Led staff developer chapters establishing strict typescript coding blueprints, testing routines, and build parameters across high-throughput server boundaries.',
      'Automated integration paths (CI/CD tools, Vitest, E2E playbooks) and dockerized images, effectively decreasing deployment failure incidents by 80%.'
    ],
    tags: ['React', 'TypeScript', 'Node.js / Express', 'PostgreSQL', 'WebSockets', 'Docker', 'SaaS Architecture']
  },
  {
    id: 'exp3',
    role: '資深系統分析師 & 遊戲 AI 研發專家 (Senior Systems Analyst & Game Engine Architect)',
    roleEn: 'Senior Systems Analyst & Game Engine Architect',
    company: '台灣大學智慧生活研究室 (National Taiwan Univerity, Smart Living Research Lab)',
    companyEn: 'Smart Living Lab, National Taiwan University',
    location: '新北市',
    locationEn: 'New Taipei City, Taiwan',
    period: '2000.01 ~ 2011.06',
    periodEn: 'Jan 2000 ~ Jun 2011',
    description: '將深厚的台大資工博士學術背景與系統設計相結合，專注於經典遊戲交互引擎設計、自適應 AI 計算以及高性能底層網路拓撲。',
    descriptionEn: 'Paired advanced PhD CS research with practical game computing layouts. Specialized in robust heuristic game models, real-time packet protocols, and UI physics engines.',
    points: [
      '自研高物理擬真與出牌判定規則之台灣卡牌遊戲引擎（Big Two Engine），精準涵蓋道地台灣規則，並透過微秒級演算法優化出牌決策判定與智慧選牌。',
      '採用 Swift/SwiftUI 為 macOS 開發多款極輕量背景常駐常值工具，包括兼具卓越語意解析的選單列待辦工具（MenuBar Todo），榮登開源社群熱門。',
      '撰寫與最佳化多個核心異步 Socket 即時同步伺服器，解決極端網路擁塞與瞬發連線不穩定情境下的連線狀態同步問題。',
      '負責大型分布式多人線上桌遊的核心資料同步與牌局決策樹計算，提供高流暢度之音效合成、物體運動及玩家策略回饋。'
    ],
    pointsEn: [
      'Authored the mathematical layout for Big Two poker engines, configuring fast-matching rulesets corresponding with local card game traditions.',
      'Programmed custom macOS helper applications in Swift/SwiftUI, such as MenuBar Todo, optimizing local memory layout loops to conserve device battery with sub-10MB footprints.',
      'Optimized core connection layers with asynchronous socket adapters, preventing packet loss collisions under extreme edge latency states.',
      'Integrated minimax state structures for multithreaded cloud gaming boards, synchronizing user physical movements and sound FX channels.'
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
