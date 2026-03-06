import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "GalaxyPower Solar",
    url: "https://galaxypowersolar.in",
    description: "High-performance solar energy website designed to generate leads and showcase renewable solutions.",
    tech: ["React", "Tailwind CSS", "SEO", "Lead Gen"],
    gradient: "from-emerald-50 to-teal-50",
    accentColor: "emerald",
  },
  {
    title: "Karunadu LED",
    url: "https://karunaduled.in",
    description: "Product-focused website built to highlight lighting solutions and strengthen B2B engagement.",
    tech: ["React", "Framer Motion", "Responsive", "B2B"],
    gradient: "from-blue-50 to-indigo-50",
    accentColor: "blue",
  },
  {
    title: "Unnathi CNC",
    url: "https://unnathicnc.com",
    description: "Industrial manufacturing website optimized for strong branding and SEO visibility.",
    tech: ["React", "TypeScript", "SEO", "Industrial"],
    gradient: "from-amber-50 to-orange-50",
    accentColor: "amber",
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_70%)] translate-x-1/4" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.03),transparent_70%)] -translate-x-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium mb-4">Our Work</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-muted-foreground text-lg">Real businesses powered by Aradhya NextGen Technologies. Built for performance, scalability, and growth.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <motion.div key={project.title}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <div className="relative bg-white/80 backdrop-blur-sm overflow-hidden h-full rounded-2xl border border-border group-hover:border-primary/30 shadow-sm group-hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] transition-all duration-500">
                {/* Image area with zoom effect */}
                <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground)/0.04)_1px,transparent_0)] bg-[size:20px_20px] transition-transform duration-700 group-hover:scale-110" />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ArrowUpRight className="w-8 h-8 text-foreground/60" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 left-6">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-primary text-xs font-semibold border border-primary/20 shadow-sm backdrop-blur-sm">
                      ● Live Project
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 bg-gradient-to-r from-primary/8 to-accent/8 text-primary rounded-full font-medium border border-primary/10">{t}</span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full group/btn border-primary/30 hover:border-primary hover:bg-primary/5 text-foreground hover:text-primary transition-all duration-300">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      View Case Study<ExternalLink className="ml-2 w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
