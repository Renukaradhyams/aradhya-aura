export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image?: string;
  isActive: boolean;
}

export const testimonialsConfig: Testimonial[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    role: "Founder",
    company: "TechStart",
    content: "Professional team with a modern approach. They delivered exactly what we envisioned for our startup. The React-based website loads incredibly fast!",
    rating: 5,
    isActive: true,
  },
  {
    id: "2",
    name: "Priya Patel",
    role: "Owner",
    company: "Style Boutique",
    content: "Fast delivery and great design! Our new website has significantly increased customer inquiries. The WhatsApp integration was a game-changer.",
    rating: 5,
    isActive: true,
  },
  {
    id: "3",
    name: "Amit Kumar",
    role: "CEO",
    company: "Digital Agency",
    content: "The perfect website for our business. Clean code, beautiful design, and excellent support. They truly understand modern web development.",
    rating: 5,
    isActive: true,
  },
  {
    id: "4",
    name: "Sneha Reddy",
    role: "Freelance Designer",
    content: "My portfolio looks absolutely stunning! They understood my vision and brought it to life perfectly. Highly recommend for creative professionals.",
    rating: 5,
    isActive: true,
  },
  {
    id: "5",
    name: "Vikram Singh",
    role: "Director",
    company: "Singh Enterprises",
    content: "Aradhya NextGen transformed our outdated website into a modern, fast-loading platform. Our online leads increased by 200% within months!",
    rating: 5,
    isActive: true,
  },
];

export const getActiveTestimonials = () => testimonialsConfig.filter(t => t.isActive);

// Auto-slide settings
export const testimonialSettings = {
  autoSlideInterval: 5000, // 5 seconds
  transitionDuration: 500, // 0.5 seconds
};
