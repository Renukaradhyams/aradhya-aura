import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Globe, Cpu, Cloud, BarChart3, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/config/contactInfo";

const rotatingTexts = [
  "Web Development",
  "AI Solutions",
  "Cloud Platforms",
  "Digital Transformation",
];

const floatingCards = [
  { icon: Globe, title: "Web Development", desc: "Modern React & Next.js applications", pos: "top-4 left-4", w: "w-56", anim: { y: [0, -30, 0], rotate: [-2, 2, -2] }, dur: 5 },
  { icon: Cpu, title: "AI Automation", desc: "Smart business workflows", pos: "top-2 right-2", w: "w-52", anim: { y: [0, 35, 0], rotate: [2, -3, 2] }, dur: 5.5, delay: 0.5 },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure", pos: "bottom-24 left-12", w: "w-52", anim: { y: [0, -25, 0], x: [0, 25, 0], rotate: [-2, 1.5, -2] }, dur: 5, delay: 1 },
  { icon: BarChart3, title: "Growth Analytics", desc: "Data-driven decisions", pos: "bottom-8 right-8", w: "w-48", anim: { y: [0, -40, 0], rotate: [2, -2, 2] }, dur: 6, delay: 0.3 },
];

export const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-white to-primary/5" />
      <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_60%)] -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.06),transparent_60%)] translate-x-1/4 translate-y-1/4" />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground)/0.03)_1px,transparent_0)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_50%,transparent_100%)]" />

      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src="/logo.png" alt="" className="w-[600px] h-[600px] object-contain opacity-[0.02]" draggable={false} />
      </div>

      {/* Floating blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/6 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-[15%] w-56 h-56 bg-accent/5 rounded-full blur-[80px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-sm text-primary font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Next-Gen Digital Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-3 leading-[1.1] text-foreground"
            >
              Transforming Ideas Into{" "}
              <span className="gradient-text">Scalable Digital Platforms</span>
            </motion.h1>

            {/* Rotating Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-8 flex items-center mb-6"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="text-base sm:text-lg font-heading font-semibold text-primary"
                >
                  {rotatingTexts[currentTextIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              We design and build high-performance websites, AI automation systems, and scalable cloud platforms that help businesses grow faster online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <Button
                size="lg"
                asChild
                className="group px-7 h-12 text-base font-semibold bg-primary text-primary-foreground shadow-[0_0_0_0_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] hover:scale-[1.02] transition-all duration-500"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group h-12 text-base border-border text-foreground hover:border-primary/40 hover:bg-primary/5 hover:scale-[1.02] transition-all duration-300"
              >
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </Button>
            </motion.div>

            {/* Credibility bullets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-2"
            >
              {[
                "50+ Websites Delivered",
                "MSME & UDYAM Certified",
                "React & AI Specialists",
              ].map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <Check className="w-3.5 h-3.5 text-primary" />
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right - Floating glass cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block relative h-[520px]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-primary/8 rounded-full blur-[80px]" />

            {floatingCards.map((card) => (
              <motion.div
                key={card.title}
                animate={card.anim}
                transition={{ duration: card.dur, repeat: Infinity, ease: "easeInOut", delay: card.delay || 0 }}
                whileHover={{ y: -12, scale: 1.06, rotate: 0, boxShadow: "0 24px 48px -12px rgba(0,0,0,0.18)" }}
                className={`absolute ${card.pos} glass-card p-5 ${card.w} cursor-default`}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-sm mb-1 text-foreground">{card.title}</h4>
                <p className="text-xs text-muted-foreground">{card.desc}</p>
              </motion.div>
            ))}

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/30 animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};
