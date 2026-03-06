import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { CheckCircle, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { solutions } from "@/config/solutionsConfig";
import { PricingSection } from "@/components/home/PricingSection";

const Solutions = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Layout>
      <Helmet>
        <title>Solutions | Aradhya NextGen Technologies - Web & Digital Solutions</title>
        <meta name="description" content="Explore our web development solutions: Startup MVPs, AI & Automation, E-commerce, Custom Software, and more." />
      </Helmet>

      {/* Hero - no background image */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-white to-primary/5" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.06),transparent_70%)] -translate-x-1/3 -translate-y-1/3" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              We solve real business problems with modern technology. Each solution is designed to deliver measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Cards Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm p-7 rounded-2xl border border-border group-hover:border-primary/30 shadow-sm group-hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{solution.solution}</p>
                  <div className="space-y-2 mb-5 flex-grow">
                    {solution.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setExpandedIndex(index)}
                    className="w-full border-primary/30 hover:border-primary hover:bg-primary/5 text-foreground hover:text-primary group/btn">
                    View Solution<ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Not sure which solution fits your needs?</p>
            <Button asChild>
              <Link to="/contact">Get a Free Consultation<ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Solution Detail Modal */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setExpandedIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
                  {(() => { const Icon = solutions[expandedIndex].icon; return <Icon className="w-7 h-7 text-primary" />; })()}
                </div>
                <button onClick={() => setExpandedIndex(null)} className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">{solutions[expandedIndex].title}</h3>
              
              <div className="mb-4 p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                <span className="text-xs font-semibold text-destructive uppercase tracking-wider">Problem</span>
                <p className="text-sm text-foreground mt-1">{solutions[expandedIndex].problem}</p>
              </div>
              <div className="mb-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Solution</span>
                <p className="text-sm text-foreground mt-1">{solutions[expandedIndex].solution}</p>
              </div>
              <div className="mb-4 p-4 rounded-xl bg-accent/5 border border-accent/20">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Business Impact</span>
                <p className="text-sm font-medium text-foreground mt-1">{solutions[expandedIndex].impact}</p>
              </div>

              <div className="space-y-2 mb-5">
                {solutions[expandedIndex].benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary shrink-0" /><span>{b}</span></div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border mb-6">
                <div><span className="text-xs text-muted-foreground">Ideal for:</span><p className="text-sm text-primary font-medium">{solutions[expandedIndex].idealFor}</p></div>
                {solutions[expandedIndex].priceRange && <span className="text-sm font-semibold text-foreground">{solutions[expandedIndex].priceRange}</span>}
              </div>

              <Button asChild className="w-full">
                <Link to="/contact">Get a Proposal<ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <PricingSection />
    </Layout>
  );
};

export default Solutions;
