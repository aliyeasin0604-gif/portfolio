export type TabType = 'home' | 'ai-works' | 'projects' | 'skills' | 'about-me' | 'certificates' | 'contact';

export interface AiWorkItem {
  id: string;
  title: string;
  category: 'videos' | 'images' | 'marketing' | 'experiments';
  categoryLabel: string;
  badge: string;
  tag: string;
  tools: string;
  description: string;
  imageUrl: string;
  aspect?: string;
  metrics?: string;
  promptSnippet?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  badge: string;
  title: string;
  description: string;
  tools: string[];
  role: string;
  impact?: string;
  accentColor: 'primary' | 'secondary' | 'tertiary';
}

export interface SkillItem {
  id: string;
  name: string;
  level: string;
  tag: string;
  type: 'core' | 'practical' | 'growth';
  icon: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'tertiary';
  tools?: string[];
}

export interface AcademicItem {
  period: string;
  current?: boolean;
  degree: string;
  institution: string;
}

export interface MilestoneItem {
  number: string;
  title: string;
  color: 'primary' | 'secondary' | 'tertiary';
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
