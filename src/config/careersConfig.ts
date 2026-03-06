import { GraduationCap, Users, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface JobRole {
  id: string;
  title: string;
  skills: string[];
  experience: string;
  type: "internship" | "freelance" | "full-time";
  isOpen: boolean;
  description?: string;
}

export interface OpportunityCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  type: string;
  description: string;
  roles: JobRole[];
  duration: string;
  compensation: string;
}

export interface Perk {
  id: string;
  label: string;
  isActive: boolean;
}

export const careersConfig = {
  // Page hero
  hero: {
    badge: "We're Hiring!",
    title: "Build the Future",
    titleHighlight: "With Us",
    description: "Join a team of passionate developers and designers building next-generation web solutions. We offer internships, freelance opportunities, and full-time positions.",
  },

  // Opportunity categories
  opportunities: [
    {
      id: "internship",
      icon: GraduationCap,
      title: "Internship Program",
      type: "Internship",
      description: "Learn and grow with hands-on experience in real projects. Perfect for students and fresh graduates.",
      roles: [
        {
          id: "react-intern",
          title: "React Developer Intern",
          skills: ["React", "JavaScript", "CSS"],
          experience: "0-1 years",
          type: "internship",
          isOpen: true,
        },
        {
          id: "uiux-intern",
          title: "UI/UX Design Intern",
          skills: ["Figma", "UI Design", "Prototyping"],
          experience: "0-1 years",
          type: "internship",
          isOpen: true,
        },
        {
          id: "marketing-intern",
          title: "Digital Marketing Intern",
          skills: ["SEO", "Social Media", "Content"],
          experience: "0-1 years",
          type: "internship",
          isOpen: true,
        },
      ],
      duration: "3-6 months",
      compensation: "Performance-based",
    },
    {
      id: "freelance",
      icon: Users,
      title: "Freelance Collaboration",
      type: "Collaboration",
      description: "Partner with us on exciting projects. We're always looking for skilled developers and designers.",
      roles: [
        {
          id: "frontend-freelance",
          title: "Frontend Developer",
          skills: ["React", "TypeScript", "Tailwind"],
          experience: "2+ years",
          type: "freelance",
          isOpen: true,
        },
        {
          id: "backend-freelance",
          title: "Backend Developer",
          skills: ["Node.js", "Python", "Database"],
          experience: "2+ years",
          type: "freelance",
          isOpen: true,
        },
        {
          id: "designer-freelance",
          title: "UI/UX Designer",
          skills: ["Figma", "Design Systems", "Prototyping"],
          experience: "2+ years",
          type: "freelance",
          isOpen: true,
        },
      ],
      duration: "Project-based",
      compensation: "Competitive rates",
    },
    {
      id: "fulltime",
      icon: Briefcase,
      title: "Full-time Positions",
      type: "Full-time",
      description: "Join our core team and help build the future of web development.",
      roles: [
        {
          id: "senior-react",
          title: "Senior React Developer",
          skills: ["React", "TypeScript", "System Design"],
          experience: "4+ years",
          type: "full-time",
          isOpen: false,
        },
        {
          id: "fullstack",
          title: "Full-Stack Developer",
          skills: ["React", "Node.js", "Cloud"],
          experience: "3+ years",
          type: "full-time",
          isOpen: false,
        },
        {
          id: "pm",
          title: "Project Manager",
          skills: ["Agile", "Communication", "Leadership"],
          experience: "3+ years",
          type: "full-time",
          isOpen: false,
        },
      ],
      duration: "Permanent",
      compensation: "Industry standard",
    },
  ] as OpportunityCategory[],

  // Perks
  perks: [
    { id: "remote", label: "Remote-first culture", isActive: true },
    { id: "flexible", label: "Flexible working hours", isActive: true },
    { id: "learning", label: "Learning & development budget", isActive: true },
    { id: "tech", label: "Work on cutting-edge technologies", isActive: true },
    { id: "team", label: "Collaborative team environment", isActive: true },
    { id: "growth", label: "Growth opportunities", isActive: true },
  ] as Perk[],

  // Why Work With Us
  whyJoinUs: [
    "Work with modern tech stack (React, TypeScript, Tailwind)",
    "Direct mentorship from senior developers",
    "Flexible remote work environment",
    "Real-world project experience",
    "Certificate of completion for interns",
    "Potential for full-time conversion",
  ],
};

export const getOpenRoles = () => {
  const allRoles: JobRole[] = [];
  careersConfig.opportunities.forEach(category => {
    category.roles.filter(role => role.isOpen).forEach(role => allRoles.push(role));
  });
  return allRoles;
};
