import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  { name: "Rahul Sharma", role: "Founder", company: "TechStart", content: "Professional team with a modern approach. They delivered exactly what we envisioned for our startup. The React-based website loads incredibly fast!", rating: 5 },
  { name: "Priya Patel", role: "Owner", company: "Style Boutique", content: "Fast delivery and great design! Our new website has significantly increased customer inquiries. The WhatsApp integration was a game-changer.", rating: 5 },
  { name: "Amit Kumar", role: "CEO", company: "Digital Agency", content: "The perfect website for our business. Clean code, beautiful design, and excellent support. They truly understand modern web development.", rating: 5 },
  { name: "GalaxyPower Solar", role: "Management", company: "GalaxyPower Solar", content: "Aradhya NextGen delivered a fast, modern website that perfectly represents our solar solutions online.", rating: 5 },
  { name: "Karunadu LED", role: "Management", company: "Karunadu LED", content: "The team built a clean, professional website that showcases our lighting products beautifully.", rating: 5 },
  { name: "Vikram Singh", role: "Director", company: "Singh Enterprises", content: "Aradhya NextGen transformed our outdated website into a modern, fast-loading platform. Our online leads increased by 200% within months!", rating: 5 },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!autoPlay) return;
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [autoPlay]);

  const next = () => { setAutoPlay(false); setDirection(1); setCurrent((prev) => (prev + 1) % testimonials.length); };
  const prev = () => { setAutoPlay(false); setDirection(-1); setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length); };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium mb-4">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="text-muted-foreground text-lg">Don't just take our word for it — hear from businesses we've helped.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border shadow-lg">
                <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />
                <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed font-medium text-center">
                  "{testimonials[current].content}"
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}>
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    </motion.div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="font-heading font-semibold text-foreground">{testimonials[current].name}</h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[current].role}{testimonials[current].company && `, ${testimonials[current].company}`}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full border-border hover:border-primary hover:bg-primary/5 hover:scale-110 transition-all duration-300">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => { setAutoPlay(false); setDirection(index > current ? 1 : -1); setCurrent(index); }}
                  className={`h-2 rounded-full transition-all duration-500 ${index === current ? "bg-primary w-8" : "bg-muted w-2 hover:bg-primary/30"}`} />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full border-border hover:border-primary hover:bg-primary/5 hover:scale-110 transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
