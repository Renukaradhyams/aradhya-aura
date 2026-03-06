import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Briefcase, 
  User, 
  Rocket, 
  ShoppingCart, 
  RefreshCw,
  ArrowRight,
  MessageCircle,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/config/contactInfo";

const websiteTypes = [
  {
    id: "business",
    icon: Briefcase,
    title: "Business Website",
    description: "Professional site for your company",
    price: "₹25,000 - ₹50,000",
  },
  {
    id: "portfolio",
    icon: User,
    title: "Portfolio Website",
    description: "Showcase your work beautifully",
    price: "₹15,000 - ₹30,000",
  },
  {
    id: "landing",
    icon: Rocket,
    title: "Landing Page",
    description: "High-converting single page",
    price: "₹10,000 - ₹20,000",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Online store with payments",
    price: "₹40,000 - ₹80,000",
  },
  {
    id: "webapp",
    icon: Globe,
    title: "Web Application",
    description: "Custom React application",
    price: "Custom Quote",
  },
  {
    id: "redesign",
    icon: RefreshCw,
    title: "Redesign / Upgrade",
    description: "Modernize existing site",
    price: "₹20,000+",
  },
];

export const WebsiteTypeSelector = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSelect = (id: string) => {
    setSelected(id);
    setShowSuccess(false);
  };

  const handleWhatsAppClick = () => {
    const selectedType = websiteTypes.find((t) => t.id === selected);
    if (selectedType) {
      const message = `Hello Aradhya NextGen Team 👋\n\nI am interested in building a ${selectedType.title}.\n\nBudget Range: ${selectedType.price}\n\nPlease share more details.`;
      window.open(getWhatsAppUrl(message), "_blank");
      setShowSuccess(true);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            What Type of <span className="gradient-text">Website</span> Do You Need?
          </h2>
          <p className="text-muted-foreground">
            Select your website type and get an instant quote via WhatsApp.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
          >
            {websiteTypes.map((type) => (
              <motion.button
                key={type.id}
                onClick={() => handleSelect(type.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-5 rounded-xl text-left transition-all duration-300 ${
                  selected === type.id
                    ? "bg-primary/20 border-2 border-primary shadow-glow"
                    : "glass-card hover:border-primary/50"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl mb-3 flex items-center justify-center ${
                  selected === type.id ? "bg-primary" : "bg-primary/10"
                }`}>
                  <type.icon className={`w-6 h-6 ${
                    selected === type.id ? "text-primary-foreground" : "text-primary"
                  }`} />
                </div>
                <h3 className="font-heading font-semibold mb-1">{type.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{type.description}</p>
                <p className={`text-sm font-medium ${
                  selected === type.id ? "text-primary" : "text-muted-foreground"
                }`}>
                  {type.price}
                </p>
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                {showSuccess ? (
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2 text-primary"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Opening WhatsApp...</span>
                  </motion.div>
                ) : (
                  <>
                    <Button
                      size="lg"
                      onClick={handleWhatsAppClick}
                      className="group bg-[#25D366] hover:bg-[#20BD5A] text-white"
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Get Quote on WhatsApp
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <p className="text-muted-foreground text-sm">
                      or call us at <a href="tel:+916360076463" className="text-primary hover:underline">+91 63600 76463</a>
                    </p>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
