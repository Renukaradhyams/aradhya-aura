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

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>{seoConfig.about.title}</title>
        <meta name="description" content={seoConfig.about.description} />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-white to-primary/5" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.06),transparent_70%)] translate-x-1/3 -translate-y-1/3" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="gradient-text">{aboutConfig.companyName}</span>
            </h1>
            <p className="text-muted-foreground text-lg">{aboutConfig.tagline} — we're your trusted partner in building the digital future.</p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary)/0.15)_1px,transparent_0)] bg-[size:30px_30px]" />
                <div className="w-32 h-32 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <img src="/logo.png" alt="Aradhya NextGen Technologies logo" className="w-24 h-24 object-contain" loading="lazy" />
                </div>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 glass-card p-4">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-foreground">{aboutConfig.whoWeAre.title}</h2>
              {aboutConfig.whoWeAre.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4">{p}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutConfig.stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-muted-foreground text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline — premium vertical alternating */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Our <span className="gradient-text">Journey</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Key milestones that shaped who we are today.</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
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
                  {/* Desktop layout */}
                  <div className="hidden md:grid grid-cols-[1fr_60px_1fr] items-center gap-0">
                    {/* Left content */}
                    <div className={isLeft ? "" : "col-start-1"}>
                      {isLeft && (
                        <motion.div
                          whileHover={{ y: -4 }}
                          className="glass-card p-6 mr-4 text-right"
                        >
                          <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                      )}
                    </div>

                    {/* Center node */}
                    <div className="flex flex-col items-center col-start-2">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_20px_-4px_hsl(var(--primary)/0.4)] z-10 relative">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="absolute -inset-1 rounded-full bg-primary/15 animate-pulse-glow" />
                      </div>
                      <span className="mt-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold shadow-sm">
                        {item.year}
                      </span>
                    </div>

                    {/* Right content */}
                    <div className={!isLeft ? "" : "col-start-3"}>
                      {!isLeft && (
                        <motion.div
                          whileHover={{ y: -4 }}
                          className="glass-card p-6 ml-4"
                        >
                          <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Mobile layout */}
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

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="glass-card p-8" >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">{aboutConfig.mission.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{aboutConfig.mission.description}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="glass-card p-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">{aboutConfig.vision.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{aboutConfig.vision.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">Our <span className="gradient-text">Values</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide everything we do.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutConfig.values.map((value, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }} className="glass-card p-6 text-center group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
