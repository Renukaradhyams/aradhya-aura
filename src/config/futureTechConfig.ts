import { Brain, Cloud, Cpu, Bot, Smartphone, Database, Shield, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FutureTech {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  status: "available" | "coming-soon" | "in-development";
  eta?: string;
  features: string[];
}

export const futureTechConfig: FutureTech[] = [
  {
    id: "ai-solutions",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent systems that learn and adapt to enhance your business processes.",
    status: "available",
    features: ["Smart Analytics", "Predictive Models", "Natural Language Processing"],
  },
  {
    id: "cloud-computing",
    icon: Cloud,
    title: "Cloud Computing",
    description: "Scalable cloud infrastructure for reliable and fast application delivery.",
    status: "available",
    features: ["AWS/GCP/Azure", "Auto Scaling", "Global CDN"],
  },
  {
    id: "automation",
    icon: Cpu,
    title: "Process Automation",
    description: "Streamline workflows and reduce manual tasks with intelligent automation.",
    status: "available",
    features: ["Workflow Automation", "Integration APIs", "Scheduled Tasks"],
  },
  {
    id: "chatbots",
    icon: Bot,
    title: "AI Chatbots",
    description: "24/7 customer support with intelligent conversational AI assistants.",
    status: "coming-soon",
    eta: "Q2 2025",
    features: ["Multi-language", "Context Aware", "Lead Capture"],
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile & PWA",
    description: "Cross-platform mobile applications and progressive web apps.",
    status: "available",
    features: ["React Native", "PWA", "Offline Support"],
  },
  {
    id: "erp-solutions",
    icon: Database,
    title: "ERP Solutions",
    description: "Complete enterprise resource planning for business management.",
    status: "coming-soon",
    eta: "Q3 2025",
    features: ["Inventory", "Accounting", "HR Management"],
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with enterprise-grade security solutions.",
    status: "in-development",
    eta: "Q4 2025",
    features: ["Threat Detection", "Encryption", "Compliance"],
  },
  {
    id: "iot-integration",
    icon: Zap,
    title: "IoT Integration",
    description: "Connect and manage smart devices for automated business operations.",
    status: "in-development",
    eta: "2026",
    features: ["Device Management", "Real-time Data", "Smart Alerts"],
  },
];

export const getAvailableTech = () => futureTechConfig.filter(t => t.status === "available");
export const getUpcomingTech = () => futureTechConfig.filter(t => t.status !== "available");
