import { Globe, Briefcase, User, Rocket, RefreshCw, MessageSquare, Bot, Cloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  isActive: boolean;
}

export const servicesConfig: ServiceItem[] = [
  {
    id: "react-websites",
    icon: Globe,
    title: "React-Based Websites",
    description: "Custom web applications built with React for maximum performance and scalability.",
    features: ["Single Page Applications", "Progressive Web Apps", "Real-time Features"],
    isActive: true,
  },
  {
    id: "business-websites",
    icon: Briefcase,
    title: "Business Websites",
    description: "Professional sites that establish credibility and drive sustainable growth.",
    features: ["SEO Optimized", "Lead Generation", "Analytics Integration"],
    isActive: true,
  },
  {
    id: "portfolios",
    icon: User,
    title: "Portfolio Websites",
    description: "Stunning portfolios that showcase your work beautifully and professionally.",
    features: ["Gallery Systems", "Case Studies", "Contact Forms"],
    isActive: true,
  },
  {
    id: "landing-pages",
    icon: Rocket,
    title: "Landing Pages",
    description: "High-converting pages designed to capture leads and boost conversions.",
    features: ["A/B Testing Ready", "Fast Loading", "Mobile First"],
    isActive: true,
  },
  {
    id: "website-redesign",
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Modernize your existing site with fresh design and cutting-edge technology.",
    features: ["Performance Audit", "UX Improvements", "Modern Stack"],
    isActive: true,
  },
  {
    id: "whatsapp-integration",
    icon: MessageSquare,
    title: "WhatsApp Integration",
    description: "Seamless chat integration for instant customer connection and support.",
    features: ["Auto Responses", "Lead Capture", "24/7 Availability"],
    isActive: true,
  },
  {
    id: "ai-solutions",
    icon: Bot,
    title: "AI & Automation",
    description: "Intelligent solutions that automate workflows and enhance user experience.",
    features: ["Chatbots", "Process Automation", "Smart Analytics"],
    isActive: true,
  },
  {
    id: "cloud-deployment",
    icon: Cloud,
    title: "Cloud Deployment",
    description: "Scalable cloud infrastructure for reliable and fast application delivery.",
    features: ["AWS/GCP/Azure", "CI/CD Pipelines", "Auto Scaling"],
    isActive: true,
  },
];

export const getActiveServices = () => servicesConfig.filter(service => service.isActive);
