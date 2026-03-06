import { Zap, Heart, Users, Trophy, Target, Eye } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AboutValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface AboutStats {
  value: string;
  label: string;
  suffix?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const aboutConfig = {
  // Company info
  companyName: "Aradhya NextGen",
  tagline: "From Idea to Online Presence",
  
  // Who We Are section
  whoWeAre: {
    title: "Who We Are",
    paragraphs: [
      "Aradhya NextGen is a modern web solutions company focused on helping businesses build a strong online presence using next-generation technologies. We specialize in React-based development, creating fast, scalable, and conversion-focused websites that drive real business results.",
      "Our team combines technical expertise with creative thinking to deliver websites that not only look stunning but also perform exceptionally. We believe in building long-term partnerships with our clients, understanding their unique needs, and delivering solutions that exceed expectations.",
    ],
  },

  // Mission & Vision
  mission: {
    icon: Target,
    title: "Our Mission",
    description: "To empower businesses with fast, scalable, and future-ready web solutions that establish strong digital presence and drive sustainable growth.",
  },
  
  vision: {
    icon: Eye,
    title: "Our Vision",
    description: "To become a trusted next-gen web partner for growing businesses worldwide, known for innovation, quality, and exceptional client success.",
  },

  // Core Values
  values: [
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead with the latest technologies and trends.",
    },
    {
      icon: Heart,
      title: "Quality",
      description: "Every pixel and line of code is crafted with care.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work as an extension of your team.",
    },
    {
      icon: Trophy,
      title: "Results",
      description: "We measure success by your business growth.",
    },
  ] as AboutValue[],

  // Stats
  stats: [
    { value: "5", label: "Years Experience", suffix: "+" },
    { value: "50", label: "Projects Completed", suffix: "+" },
    { value: "30", label: "Happy Clients", suffix: "+" },
    { value: "99", label: "Client Satisfaction", suffix: "%" },
  ] as AboutStats[],

  // Company Timeline
  timeline: [
    {
      year: "2019",
      title: "Founded",
      description: "Aradhya NextGen was born with a vision to modernize web development.",
    },
    {
      year: "2020",
      title: "First Major Project",
      description: "Delivered our first enterprise-level React application.",
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Started incorporating AI and automation into our solutions.",
    },
    {
      year: "2024",
      title: "Expansion",
      description: "Expanded services to include cloud deployment and ERP solutions.",
    },
  ] as TimelineItem[],

  // Founder info
  founder: {
    name: "Renukaradhya M S",
    role: "Founder & Tech Lead",
    image: "/founder.jpg",
    vision: "Building technology that empowers businesses to thrive in the digital age. Our goal is to make next-gen web solutions accessible to startups and growing businesses.",
    social: {
      linkedin: "https://www.linkedin.com/in/renukaradhya-m-s",
      github: "https://github.com/renukaradhya",
    },
  },
};
