export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  images?: string[];
  details?: string;
}

export interface Skill {
  name: string;
  icon: string;
}
