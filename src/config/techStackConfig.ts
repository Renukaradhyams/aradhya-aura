export interface TechItem {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "cloud";
  logo?: string;
  color?: string;
  isCore: boolean;
}

export const techStackConfig: TechItem[] = [
  // Frontend
  { id: "react", name: "React", category: "frontend", color: "#61DAFB", isCore: true },
  { id: "typescript", name: "TypeScript", category: "frontend", color: "#3178C6", isCore: true },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", color: "#06B6D4", isCore: true },
  { id: "nextjs", name: "Next.js", category: "frontend", color: "#000000", isCore: false },
  { id: "framer", name: "Framer Motion", category: "frontend", color: "#0055FF", isCore: true },
  { id: "vite", name: "Vite", category: "frontend", color: "#646CFF", isCore: true },
  
  // Backend
  { id: "nodejs", name: "Node.js", category: "backend", color: "#339933", isCore: true },
  { id: "python", name: "Python", category: "backend", color: "#3776AB", isCore: false },
  { id: "express", name: "Express", category: "backend", color: "#000000", isCore: false },
  
  // Database
  { id: "mongodb", name: "MongoDB", category: "database", color: "#47A248", isCore: false },
  { id: "postgresql", name: "PostgreSQL", category: "database", color: "#4169E1", isCore: true },
  { id: "supabase", name: "Supabase", category: "database", color: "#3FCF8E", isCore: true },
  
  // Cloud
  { id: "aws", name: "AWS", category: "cloud", color: "#FF9900", isCore: false },
  { id: "vercel", name: "Vercel", category: "cloud", color: "#000000", isCore: true },
  { id: "netlify", name: "Netlify", category: "cloud", color: "#00C7B7", isCore: true },
  
  // Tools
  { id: "git", name: "Git", category: "tools", color: "#F05032", isCore: true },
  { id: "figma", name: "Figma", category: "tools", color: "#F24E1E", isCore: true },
  { id: "github", name: "GitHub", category: "tools", color: "#181717", isCore: true },
];

export const getCoreTech = () => techStackConfig.filter(t => t.isCore);
export const getTechByCategory = (category: TechItem["category"]) => 
  techStackConfig.filter(t => t.category === category);
