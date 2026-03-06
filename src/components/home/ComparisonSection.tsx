import { motion } from "framer-motion";
import { Check, X, Monitor, Code2 } from "lucide-react";

const comparisons = [
  { feature: "Page Load Speed", traditional: "3-5 seconds", react: "Under 1 second" },
  { feature: "User Experience", traditional: "Static & jarring", react: "Smooth & dynamic" },
  { feature: "Scalability", traditional: "Limited growth", react: "Infinitely scalable" },
  { feature: "Code Quality", traditional: "Monolithic", react: "Component-based" },
  { feature: "Future Upgrades", traditional: "Costly & slow", react: "Fast & efficient" },
  { feature: "SEO Performance", traditional: "Basic support", react: "Fully optimized" },
];

export const ComparisonSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium mb-4">Why React</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Why <span className="gradient-text">React Websites</span>?</h2>
          <p className="text-muted-foreground text-lg">Modern React websites outperform traditional websites in performance, scalability, and user experience. Deliver lightning-fast load speeds, better SEO performance, and a dynamic user experience.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Browser mockup */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-lg bg-white border border-border text-xs text-muted-foreground">
                  <Code2 className="w-3 h-3" /> aradhyanextgen.com
                </div>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Monitor className="w-4 h-4 text-primary" />
                </div>
                <div className="font-heading font-bold text-foreground">React Performance</div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Load Time", value: "0.8s", width: "95%" },
                  { label: "SEO Score", value: "98/100", width: "98%" },
                  { label: "Conversion Rate", value: "3.2x", width: "88%" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm"><span className="text-muted-foreground">{item.label}</span><span className="font-semibold text-primary">{item.value}</span></div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: item.width }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-gradient-to-r from-primary to-accent rounded-full" /></div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Comparison list */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-3">
            {comparisons.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}
                whileHover={{ x: 4 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-border shadow-sm hover:border-primary/20 hover:shadow-md transition-all duration-300">
                <div className="font-heading font-semibold text-sm mb-2 text-foreground">{item.feature}</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs">
                    <X className="w-3.5 h-3.5 text-destructive shrink-0" />
                    <span className="text-muted-foreground">{item.traditional}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">{item.react}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
