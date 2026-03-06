import { motion } from "framer-motion";
import { Linkedin, Github, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutConfig } from "@/config/aboutConfig";

export const FounderSection = () => {
  const { founder } = aboutConfig;

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/[0.02] to-background" />
      {/* Floating background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.06),transparent_70%)] rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.05),transparent_70%)] rounded-full blur-3xl" style={{ animation: "float 8s ease-in-out infinite reverse" }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium mb-4">Leadership</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Founder & <span className="gradient-text">Technology Lead</span></h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="group relative">
            {/* Card glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
            
            <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 rounded-2xl border border-border group-hover:border-primary/20 shadow-lg group-hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
              <motion.div className="relative shrink-0" whileHover={{ scale: 1.05 }}>
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-muted border border-border overflow-hidden shadow-md group-hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.15)] transition-shadow duration-500">
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" draggable={false} loading="lazy" />
                </div>
              </motion.div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading text-2xl font-bold mb-1 text-foreground">{founder.name}</h3>
                <p className="text-primary font-semibold mb-4">Founder & Technology Lead</p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="relative mb-6"
                >
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                  <p className="text-muted-foreground italic pl-6">"Our mission is simple — build powerful digital platforms that help businesses grow faster in the digital world. At Aradhya NextGen, we combine modern technologies with creative design to deliver solutions that perform, scale, and create real business impact."</p>
                </motion.div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Button variant="outline" size="sm" asChild className="border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                    <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Linkedin className="w-4 h-4" />LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                    <a href={founder.social.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Github className="w-4 h-4" />GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
