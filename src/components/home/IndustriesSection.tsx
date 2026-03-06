import { motion } from "framer-motion";
import {
  MessageCircle, Dumbbell, Heart, Briefcase,
  BookOpen, Store, ShoppingCart, Car,
  Plane, Building2, UtensilsCrossed, Package
} from "lucide-react";

const industries = [
  { icon: MessageCircle, name: "Chat Applications", gradient: "from-blue-500/20 to-cyan-500/20", glow: "group-hover:shadow-blue-500/20" },
  { icon: Dumbbell, name: "Fitness Platforms", gradient: "from-orange-500/20 to-amber-500/20", glow: "group-hover:shadow-orange-500/20" },
  { icon: Heart, name: "Dating Platforms", gradient: "from-pink-500/20 to-rose-500/20", glow: "group-hover:shadow-pink-500/20" },
  { icon: Briefcase, name: "Job Portals", gradient: "from-indigo-500/20 to-violet-500/20", glow: "group-hover:shadow-indigo-500/20" },
  { icon: BookOpen, name: "E-learning Platforms", gradient: "from-purple-500/20 to-fuchsia-500/20", glow: "group-hover:shadow-purple-500/20" },
  { icon: Store, name: "Multi Vendor Marketplaces", gradient: "from-emerald-500/20 to-green-500/20", glow: "group-hover:shadow-emerald-500/20" },
  { icon: ShoppingCart, name: "Online Grocery", gradient: "from-green-500/20 to-lime-500/20", glow: "group-hover:shadow-green-500/20" },
  { icon: Car, name: "Cab Booking Systems", gradient: "from-yellow-500/20 to-amber-500/20", glow: "group-hover:shadow-yellow-500/20" },
  { icon: Plane, name: "Travel & Tourism", gradient: "from-sky-500/20 to-blue-500/20", glow: "group-hover:shadow-sky-500/20" },
  { icon: Building2, name: "Real Estate Platforms", gradient: "from-slate-500/20 to-gray-500/20", glow: "group-hover:shadow-slate-500/20" },
  { icon: UtensilsCrossed, name: "Food Delivery Apps", gradient: "from-red-500/20 to-orange-500/20", glow: "group-hover:shadow-red-500/20" },
  { icon: Package, name: "Product Management", gradient: "from-teal-500/20 to-cyan-500/20", glow: "group-hover:shadow-teal-500/20" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export const IndustriesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.06),transparent_70%)] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.05),transparent_70%)] rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium mb-4">
            Industries
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Industries We Build <span className="gradient-text">Solutions For</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From startups to enterprises, we build scalable digital platforms across multiple industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.04 }}
              className="group cursor-default"
            >
              <div className={`relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-primary/40 transition-all duration-500 overflow-hidden ${industry.glow} hover:shadow-[0_20px_40px_-12px]`}>
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300"
                  >
                    <industry.icon className="w-7 h-7 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                  </motion.div>
                  <h3 className="font-heading font-medium text-sm text-foreground">{industry.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
