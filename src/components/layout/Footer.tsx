import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Github, Twitter } from "lucide-react";
import { contactInfo } from "@/config/contactInfo";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  solutions: [
    { label: "Startup & MVP", href: "/solutions" },
    { label: "AI & Automation", href: "/solutions" },
    { label: "Business Websites", href: "/solutions" },
    { label: "E-commerce", href: "/solutions" },
  ],
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/renukaradhya-m-s", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/renukaradhya", icon: Github },
    { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.03),transparent_70%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div variants={itemVariants} className="space-y-4">
            <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
              <motion.img
                src="/logo.png"
                alt="Aradhya NextGen Technologies"
                className="w-14 h-14 object-contain"
                whileHover={{ scale: 1.05 }}
              />
              <div>
                <span className="font-heading font-bold text-xl text-foreground leading-tight block">Aradhya NextGen</span>
                <span className="text-[11px] text-muted-foreground font-medium tracking-wider uppercase">Technologies</span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              From Idea to Digital Success. Building modern websites and intelligent digital platforms for ambitious businesses.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-1 group">
                    {link.label}<ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-1 group">
                    {link.label}<ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Contact</h4>
            <ul className="space-y-3">
              <li><a href={`mailto:${contactInfo.email}`} className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2"><Mail className="w-4 h-4" />{contactInfo.email}</a></li>
              <li><a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2"><Phone className="w-4 h-4" />{contactInfo.phone}</a></li>
              <li className="text-foreground/70 text-sm flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>{contactInfo.location}</span></li>
            </ul>
            <div className="mt-6">
              <p className="text-sm font-medium mb-3 text-muted-foreground">Follow Us</p>
              <div className="flex gap-2">
                {footerLinks.social.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-background border border-border hover:border-primary/50 hover:bg-primary/5 flex items-center justify-center transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4 text-foreground/70" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Aradhya NextGen Technologies. All rights reserved.</p>
          <p className="text-muted-foreground text-sm">Built with <span className="text-primary font-medium">React</span> & <span className="text-primary font-medium">Tailwind CSS</span></p>
        </motion.div>
      </motion.div>
    </footer>
  );
};
