import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Rocket, Lightbulb, Users2, Award } from "lucide-react";
import { aboutConfig } from "@/config/aboutConfig";
import { seoConfig } from "@/config/siteConfig";
import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";

const AnimatedCounter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = parseInt(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = numericValue / (2000 / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= numericValue) { setCount(numericValue); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue]);

  return <div ref={ref} className="text-3xl md:text-4xl font-bold text-primary">{count}{suffix}</div>;
};

const timelineIcons = [Rocket, Lightbulb, Users2, Award];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 } as const,
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } as const,
};

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>{seoConfig.about.title}</title>
        <meta name="description" content={seoConfig.about.description} />
      </Helmet>

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--primary)/0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground)/0.03)_1px,transparent_0)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_50%,transparent_100%)]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)] translate-x-1/3 -translate-y-1/3" />

        {/* Floating blobs */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/6 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-[80px]"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-sm text-primary font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              About Us
            </motion.span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-[1.1]">
              About{" "}
              <span className="gradient-text">{aboutConfig.companyName}</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {aboutConfig.tagline} — we're your trusted partner in building the digital future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ WHO WE ARE ═══ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual block */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border overflow-hidden relative">
                {/* Animated grid */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary)/0.12)_1px,transparent_0)] bg-[size:28px_28px]" />
                {/* Radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_60%)]" />
                {/* Floating logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="w-36 h-36 rounded-3xl bg-background/80 backdrop-blur-xl border border-primary/20 flex items-center justify-center shadow-[0_0_40px_-8px_hsl(var(--primary)/0.3)]">
                      <img src="/logo.png" alt="Aradhya NextGen Technologies logo" className="w-28 h-28 object-contain" loading="lazy" />
                    </div>
                    {/* Glow ring */}
                    <div className="absolute -inset-3 rounded-3xl bg-primary/10 blur-xl -z-10 animate-pulse-glow" />
                  </motion.div>
                </div>
                {/* Decorative floating elements */}
                <motion.div
                  animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-primary/8 border border-primary/15 backdrop-blur-sm"
                />
                <motion.div
                  animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-12 left-8 w-12 h-12 rounded-xl bg-accent/8 border border-accent/15 backdrop-blur-sm"
                />
              </div>
              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 glass-card p-5 shadow-glow"
              >
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </motion.div>
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-foreground">
                {aboutConfig.whoWeAre.title}
              </h2>
              {aboutConfig.whoWeAre.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="text-muted-foreground text-lg leading-relaxed mb-4"
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {aboutConfig.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="glass-card p-6 text-center group"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-muted-foreground text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ JOURNEY TIMELINE ═══ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Key milestones that shaped who we are today.</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center line (desktop) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />
            {/* Mobile left line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:hidden" />

            {aboutConfig.timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = timelineIcons[index % timelineIcons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Desktop */}
                  <div className="hidden md:grid grid-cols-[1fr_60px_1fr] items-center gap-0">
                    <div className={isLeft ? "" : "col-start-1"}>
                      {isLeft && (
                        <motion.div whileHover={{ y: -6, scale: 1.02 }} className="glass-card p-6 mr-4 text-right">
                          <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                      )}
                    </div>
                    <div className="flex flex-col items-center col-start-2">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_25px_-4px_hsl(var(--primary)/0.4)] z-10 relative">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="absolute -inset-2 rounded-full bg-primary/10 animate-pulse-glow" />
                      </div>
                      <span className="mt-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold shadow-sm">
                        {item.year}
                      </span>
                    </div>
                    <div className={!isLeft ? "" : "col-start-3"}>
                      {!isLeft && (
                        <motion.div whileHover={{ y: -6, scale: 1.02 }} className="glass-card p-6 ml-4">
                          <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="md:hidden flex gap-4 pl-2">
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg z-10 relative">
                          <Icon className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>
                      <span className="mt-1 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                        {item.year}
                      </span>
                    </div>
                    <motion.div whileHover={{ y: -3 }} className="glass-card p-5 flex-1">
                      <h3 className="font-heading font-semibold text-base mb-1 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ MISSION & VISION ═══ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[aboutConfig.mission, aboutConfig.vision].map((block, i) => {
              const IconComp = i === 0 ? Target : Eye;
              return (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="glass-card p-8 group cursor-default transition-shadow duration-300 hover:shadow-[0_10px_40px_-8px_hsl(var(--primary)/0.2)]"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-[0_0_25px_-4px_hsl(var(--primary)/0.3)]"
                  >
                    <IconComp className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">{block.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{block.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide everything we do.</p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {aboutConfig.values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="glass-card p-6 text-center group cursor-default transition-shadow duration-300 hover:shadow-[0_12px_40px_-8px_hsl(var(--primary)/0.15)]"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_-4px_hsl(var(--primary)/0.25)]"
                >
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
