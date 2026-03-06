// Solutions Configuration - Edit this file to update services/solutions

import { 
  Globe, 
  Brain, 
  Wrench, 
  Cloud, 
  Code,
  Rocket,
  ShoppingCart,
  RefreshCw,
  LucideIcon
} from "lucide-react";

export interface Solution {
  icon: LucideIcon;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  benefits: string[];
  idealFor: string;
  priceRange?: string;
}

export const solutions: Solution[] = [
  {
    icon: Rocket,
    title: "Startup Website & MVP Development",
    problem: "You have a great idea but no online presence to validate or launch it.",
    solution: "We build fast, scalable MVPs and startup websites using React that help you go to market quickly.",
    impact: "Launch 3x faster with a professional product that attracts investors and early users.",
    benefits: [
      "Rapid development cycle",
      "Investor-ready design",
      "Scalable architecture",
    ],
    idealFor: "Startups, entrepreneurs, new ventures",
    priceRange: "₹15,000 - ₹50,000",
  },
  {
    icon: Brain,
    title: "AI & Automation Solutions",
    problem: "Manual processes are slowing down your business and increasing costs.",
    solution: "We implement AI-powered chatbots, automation workflows, and smart business tools.",
    impact: "Reduce operational costs by 40% and serve customers 24/7.",
    benefits: [
      "AI chatbot integration",
      "Workflow automation",
      "Smart recommendations",
    ],
    idealFor: "Businesses seeking efficiency",
    priceRange: "₹25,000 - ₹1,00,000",
  },
  {
    icon: Wrench,
    title: "Smart Business Tools",
    problem: "Generic software doesn't fit your unique business processes.",
    solution: "Custom dashboards, CRMs, inventory systems, and business management tools.",
    impact: "Increase team productivity by 50% with tools built for your workflow.",
    benefits: [
      "Custom dashboards",
      "Real-time analytics",
      "Team collaboration",
    ],
    idealFor: "SMBs, agencies, service providers",
    priceRange: "₹30,000 - ₹1,50,000",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment & Hosting",
    problem: "Your website is slow, unreliable, or hard to maintain.",
    solution: "Modern cloud deployment with auto-scaling, CDN, and 99.9% uptime guarantee.",
    impact: "3x faster load times and zero downtime for your business.",
    benefits: [
      "Auto-scaling infrastructure",
      "Global CDN",
      "24/7 monitoring",
    ],
    idealFor: "Growing businesses, high-traffic sites",
    priceRange: "₹5,000/month onwards",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    problem: "Off-the-shelf solutions don't meet your specific requirements.",
    solution: "End-to-end custom software development tailored to your business needs.",
    impact: "Own a solution that perfectly fits your business and scales with you.",
    benefits: [
      "Full ownership",
      "Tailored features",
      "Long-term support",
    ],
    idealFor: "Enterprises, unique business models",
    priceRange: "₹50,000 - ₹5,00,000+",
  },
  {
    icon: Globe,
    title: "Business & Corporate Websites",
    problem: "Your outdated website isn't generating leads or building trust.",
    solution: "Modern, conversion-focused websites that establish credibility and capture leads.",
    impact: "2x more leads with a professional online presence.",
    benefits: [
      "Lead generation optimized",
      "Mobile responsive",
      "SEO-ready structure",
    ],
    idealFor: "SMBs, consultants, agencies",
    priceRange: "₹10,000 - ₹35,000",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    problem: "You want to sell online but don't know where to start.",
    solution: "Complete e-commerce setup with product catalog, payments, and order management.",
    impact: "Start selling online within 2 weeks with a fully functional store.",
    benefits: [
      "Product management",
      "Secure payments",
      "Order tracking",
    ],
    idealFor: "Retailers, D2C brands",
    priceRange: "₹25,000 - ₹75,000",
  },
  {
    icon: RefreshCw,
    title: "Website Modernization",
    problem: "Your legacy website is outdated, slow, and not mobile-friendly.",
    solution: "Complete redesign and rebuild using modern React technology.",
    impact: "Reduce bounce rate by 60% with a fast, modern user experience.",
    benefits: [
      "Modern design refresh",
      "Performance boost",
      "Mobile optimization",
    ],
    idealFor: "Businesses with legacy sites",
    priceRange: "₹15,000 - ₹40,000",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "₹8,000",
    priceRange: "₹8,000 – ₹15,000",
    description: "Perfect for personal brands and simple websites",
    features: [
      "Single page React website",
      "Mobile responsive design",
      "Contact form integration",
      "WhatsApp integration",
      "Basic SEO setup",
      "1 month support",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "₹20,000",
    priceRange: "₹20,000 – ₹40,000",
    description: "Ideal for growing businesses and startups",
    features: [
      "Multi-page React website",
      "Custom design & branding",
      "Advanced animations",
      "Lead capture system",
      "Performance optimization",
      "3 months support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹50,000+",
    priceRange: "₹50,000+",
    description: "For enterprises and complex requirements",
    features: [
      "Full-stack web application",
      "Custom features & integrations",
      "Admin dashboard",
      "Database integration",
      "Priority support",
      "6 months support",
    ],
    popular: false,
  },
];
