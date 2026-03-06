import { motion } from "framer-motion";

const categories = [
  {
    label: "Frontend",
    techs: [
      { name: "React", abbr: "Re", color: "#61DAFB" },
      { name: "Next.js", abbr: "Nx", color: "#000000" },
      { name: "TypeScript", abbr: "TS", color: "#3178C6" },
      { name: "Tailwind CSS", abbr: "Tw", color: "#06B6D4" },
      { name: "Framer Motion", abbr: "FM", color: "#0055FF" },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js", abbr: "No", color: "#339933" },
      { name: "Python", abbr: "Py", color: "#3776AB" },
      { name: "Express", abbr: "Ex", color: "#444444" },
    ],
  },
  {
    label: "Cloud & Data",
    techs: [
      { name: "MongoDB", abbr: "Mg", color: "#47A248" },
      { name: "PostgreSQL", abbr: "Pg", color: "#4169E1" },
      { name: "Supabase", abbr: "Sb", color: "#3FCF8E" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

export const TechStackSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium mb-4">Tech Stack</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Technology <span className="gradient-text">Stack</span></h2>
          <p className="text-muted-foreground text-lg">Modern technologies powering scalable and high-performance digital platforms.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {categories.map((category) => (
            <div key={category.label}>
              <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 text-center">{category.label}</motion.h3>
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4">
                {category.techs.map((tech) => (
                  <motion.div key={tech.name} variants={itemVariants} whileHover={{ y: -6, scale: 1.05 }}
                    className="group cursor-default">
                    <div className="bg-white p-5 rounded-2xl text-center border border-border group-hover:border-primary/30 shadow-sm group-hover:shadow-lg transition-all duration-300 w-28">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center text-base font-bold transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${tech.color}12`, color: tech.color }}>
                        {tech.abbr}
                      </div>
                      <h4 className="font-heading font-medium text-sm text-foreground">{tech.name}</h4>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
