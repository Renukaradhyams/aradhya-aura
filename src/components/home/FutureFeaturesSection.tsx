import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { futureTechConfig } from "@/config/futureTechConfig";

const statusColors: Record<string, string> = {
  "available": "bg-primary/10 text-primary border-primary/20",
  "coming-soon": "bg-amber-100 text-amber-700 border-amber-200",
  "in-development": "bg-blue-100 text-blue-700 border-blue-200",
};

const statusLabels: Record<string, string> = {
  "available": "● Available",
  "coming-soon": "◐ Coming Soon",
  "in-development": "○ In Development",
};

const statusDot: Record<string, string> = {
  "available": "bg-primary animate-pulse-glow",
  "coming-soon": "bg-amber-500",
  "in-development": "bg-blue-500",
};

export const FutureFeaturesSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_70%)] rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-6">
            <Sparkles className="w-4 h-4 text-primary" /><span className="text-sm text-primary font-medium">Innovation Roadmap</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Technology Innovation <span className="gradient-text">Roadmap</span></h2>
          <p className="text-muted-foreground text-lg">Explore our technology roadmap and upcoming innovations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {futureTechConfig.map((tech, index) => (
            <motion.div key={tech.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8 }} className="group">
              <div className="relative bg-white/80 backdrop-blur-sm p-6 h-full flex flex-col rounded-2xl border border-border group-hover:border-primary/30 shadow-sm group-hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden">
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300"
                    >
                      <tech.icon className="w-5 h-5 text-primary group-hover:drop-shadow-[0_0_6px_hsl(var(--primary)/0.4)] transition-all duration-300" />
                    </motion.div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${statusDot[tech.status]}`} />
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border ${statusColors[tech.status]}`}>
                        {statusLabels[tech.status]}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{tech.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">{tech.description}</p>
                  <div className="space-y-1 mb-4">
                    {tech.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary" />{feature}
                      </div>
                    ))}
                  </div>
                  {/* Progress indicator */}
                  {tech.status === "available" && (
                    <div className="mb-3">
                      <div className="h-1 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </div>
                  )}
                  {tech.eta && (
                    <div className="pt-3 border-t border-border">
                      <span className="text-xs text-muted-foreground">Expected: </span>
                      <span className="text-xs text-primary font-semibold">{tech.eta}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
