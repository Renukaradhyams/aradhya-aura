import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Users, Cpu, Headphones } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "Successful Projects Delivered", icon: Rocket },
  { value: 100, suffix: "%", label: "Client Satisfaction Rate", icon: Users },
  { value: 10, suffix: "+", label: "Modern Technologies Used", icon: Cpu },
  { value: 24, suffix: "/7", label: "Technical Support", icon: Headphones },
];

const CountUp = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = value / 60;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [value, inView]);
  return <span className="gradient-text">{count}{suffix}</span>;
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_70%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass-card p-7 text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-4 relative"
              >
                <div className="absolute inset-0 rounded-xl bg-primary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <stat.icon className="w-6 h-6 text-primary relative z-10" />
              </motion.div>
              <div className="text-3xl md:text-4xl font-bold font-heading mb-2">
                <CountUp value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
