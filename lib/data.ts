import type { Project, Skill } from './types';

export const projects: Project[] = [
  {
    title: 'Ukrainian Food',
    description: 'A Next.js application for discovering and sharing traditional Ukrainian recipes.',
    tags: ['Next.js', 'TypeScript', 'React', 'TanStack Query', 'React Hook Form', 'MongoDB', 'AWS S3'],
    href: 'https://next-js-ukr-food-app-tvhq.vercel.app/',
    repo: 'https://github.com/NatalijaIT/NextJS-Ukr-food-app',
    images: ['/images/project-1-1.png', '/images/project-1-2.png', '/images/project-1-3.png'],
    details: 'Users can register and log in, browse a public gallery of Ukrainian recipes, view detailed cooking instructions with images, and share their own recipes with image uploads. Authenticated users can also edit or delete the recipes they created, while the application ensures secure access and ownership protection.',
  },
];

export const skills: Skill[] = [
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "TypeScript", icon: "/icons/typescript.png" },
  { name: "HTML", icon: "/icons/html5.png" },
  { name: "CSS", icon: "/icons/css3.png" },
  { name: "SASS", icon: "/icons/sass.png" },
  { name: "Material UI", icon: "/icons/materialui.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Redux", icon: "/icons/redux.png" },
  { name: "Next.js", icon: "/icons/next.png" },
  { name: "AWS S3", icon: "/icons/s3.png" },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "Git", icon: "/icons/git.png" },
];