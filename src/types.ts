export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: 'frontend' | 'fullstack' | 'ai' | 'mobile';
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  description: string;
  points: string[];
  tags: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps & Cloud' | 'Design / Other';
  level: number; // 0-100
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
