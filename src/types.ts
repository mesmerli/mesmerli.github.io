export interface Project {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  longDescription: string;
  longDescriptionEn: string;
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
  roleEn: string;
  company: string;
  companyEn: string;
  companyUrl?: string;
  location: string;
  locationEn: string;
  period: string;
  periodEn: string;
  description: string;
  descriptionEn: string;
  points: string[];
  pointsEn: string[];
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
