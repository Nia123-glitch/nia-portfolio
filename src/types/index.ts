export interface Project {
  id: number;
  title: string;
  tagline: string;
  tags: string[];
  description: string;
  role: string;
  challenges?: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  isFeatured: boolean;
  imageUrl?: string;
  images: string[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}