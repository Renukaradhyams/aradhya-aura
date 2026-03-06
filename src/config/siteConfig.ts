export const siteConfig = {
  name: "Aradhya NextGen Technologies",
  shortName: "Aradhya NextGen",
  description:
    "Modern web development, AI automation, and scalable digital solutions.",
  url: "https://aradhyanextgen.lovable.app",
  defaultOgImage: "https://aradhyanextgen.lovable.app/logo.png",
  email: "aradhyanextgen@gmail.com",
  phone: "+91 6360076463",
  location: "Bangalore, India",
  locale: "en_IN",
  twitterHandle: "@aradhyanextgen",
};

export const navigationConfig = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export const defaultSeoKeywords =
  "web development, react development, AI automation, cloud solutions, software company Bangalore, digital transformation India";

export const seoConfig = {
  home: {
    path: "/",
    title: "Aradhya NextGen Technologies | Web Development & AI Automation",
    description:
      "Aradhya NextGen builds high-performance websites, AI automation systems, and scalable digital platforms for modern businesses.",
    keywords: defaultSeoKeywords,
  },
  about: {
    path: "/about",
    title: "About Us | Aradhya NextGen Technologies",
    description:
      "Learn about Aradhya NextGen Technologies — a modern web solutions company focused on React-based development, AI solutions, and digital transformation.",
    keywords:
      "about aradhya nextgen, technology company Bangalore, web and AI team, software development partner",
  },
  solutions: {
    path: "/solutions",
    title: "Solutions | Aradhya NextGen Technologies",
    description:
      "Explore our web development, AI automation, and cloud solutions designed for startups and enterprises.",
    keywords:
      "startup MVP development, AI automation services, ecommerce development, custom software solutions",
  },
  contact: {
    path: "/contact",
    title: "Contact Us | Aradhya NextGen Technologies",
    description:
      "Get in touch with Aradhya NextGen Technologies for web development, AI automation, and digital transformation services.",
    keywords:
      "contact aradhya nextgen, web development proposal, AI project consultation",
  },
  careers: {
    path: "/careers",
    title: "Careers | Aradhya NextGen Technologies",
    description:
      "Join the Aradhya NextGen team. Explore career opportunities in web development, AI, and cloud technologies.",
    keywords:
      "software jobs Bangalore, react developer careers, AI engineer internship",
  },
  enquiry: {
    path: "/enquiry",
    title: "Get a Consultation | Aradhya NextGen Technologies",
    description:
      "Start your project with Aradhya NextGen Technologies. Get a free consultation for web development, AI, and cloud solutions.",
    keywords:
      "free project consultation, web development enquiry, AI solution planning",
  },
} as const;

export const buildCanonicalUrl = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
};
