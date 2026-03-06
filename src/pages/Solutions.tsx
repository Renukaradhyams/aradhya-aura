import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { CheckCircle, ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { solutions } from "@/config/solutionsConfig";
import { PricingSection } from "@/components/home/PricingSection";
import { buildCanonicalUrl, seoConfig, siteConfig } from "@/config/siteConfig";

const Solutions = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Layout>
      <Helmet>
        <title>{seoConfig.solutions.title}</title>
        <meta name="description" content={seoConfig.solutions.description} />
        <meta name="keywords" content={seoConfig.solutions.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={buildCanonicalUrl(seoConfig.solutions.path)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={buildCanonicalUrl(seoConfig.solutions.path)} />
        <meta property="og:title" content={seoConfig.solutions.title} />
        <meta property="og:description" content={seoConfig.solutions.description} />
        <meta property="og:image" content={siteConfig.defaultOgImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoConfig.solutions.title} />
        <meta name="twitter:description" content={seoConfig.solutions.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground)/0.03)_1px,transparent_0)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_40%,transparent_100%)]" />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-sm text-primary font-medium mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              What We Build
            </motion.span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
              Our <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We solve real business problems with modern technology. Each solution is designed to deliver measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Cards Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
            {solutions.map((solution, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  layout
                  className={`group ${isExpanded ? "md:col-span-2 lg:col-span-2" : ""}`}
                >
                  <motion.div
                    layout
                    whileHover={!isExpanded ? { y: -12, scale: 1.02 } : {}}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className={`glass-card p-7 h-full flex flex-col transition-shadow duration-350 ${
                      isExpanded
                        ? "border-primary/40 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.2)]"
                        : "hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.12)]"
                    }`}
                  >
                    {/* Icon with glow */}
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-5 relative"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <solution.icon className="w-7 h-7 text-primary relative z-10" />
                    </motion.div>

                    <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                      {solution.solution}
                    </p>

                    {/* Benefits preview */}
                    <div className="space-y-2 mb-5 flex-grow">
                      {solution.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expandable details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5 border-t border-border space-y-4">
                            <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/15">
                              <span className="text-[11px] font-bold text-destructive uppercase tracking-wider">Problem</span>
                              <p className="text-sm text-foreground mt-1.5 leading-relaxed">{solution.problem}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-primary/5 border border-primary/15">
                              <span className="text-[11px] font-bold text-primary uppercase tracking-wider">Our Solution</span>
                              <p className="text-sm text-foreground mt-1.5 leading-relaxed">{solution.solution}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-accent/5 border border-accent/15">
                              <span className="text-[11px] font-bold text-accent uppercase tracking-wider">Business Impact</span>
                              <p className="text-sm font-medium text-foreground mt-1.5">{solution.impact}</p>
                            </div>
                            <div className="flex items-center justify-between pt-3">
                              <div>
                                <span className="text-xs text-muted-foreground">Ideal for:</span>
                                <p className="text-sm text-primary font-medium">{solution.idealFor}</p>
                              </div>
                              {solution.priceRange && (
                                <span className="text-sm font-bold text-foreground bg-muted/50 px-3 py-1 rounded-lg">{solution.priceRange}</span>
                              )}
                            </div>
                            <Button asChild className="w-full mt-2 group/cta">
                              <Link to="/contact">
                                Get a Proposal
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                              </Link>
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Toggle button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleExpand(index)}
                      className="w-full mt-4 border-primary/20 hover:border-primary hover:bg-primary/5 text-foreground hover:text-primary group/btn transition-all duration-300"
                    >
                      {isExpanded ? "Close" : "View Solution"}
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-2"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 max-w-2xl mx-auto"
          >
            <div className="glass-card p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.06),transparent_70%)]" />
              <div className="relative z-10">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  Not sure which solution fits?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let us analyze your needs and recommend the perfect solution for your business.
                </p>
                <Button asChild size="lg" className="group animate-pulse-glow">
                  <Link to="/contact">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PricingSection />
    </Layout>
  );
};

export default Solutions;
