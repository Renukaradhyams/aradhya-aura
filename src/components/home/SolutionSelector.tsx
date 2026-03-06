import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Sparkles, User, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const steps = [
  {
    id: "business", title: "Business Type", question: "What is your business type?",
    options: [
      { value: "startup", label: "Startup", icon: "🚀" },
      { value: "small", label: "Small Business", icon: "🏢" },
      { value: "enterprise", label: "Enterprise", icon: "🏛️" },
      { value: "freelancer", label: "Freelancer", icon: "👤" },
    ],
  },
  {
    id: "website", title: "Website Type", question: "What type of website do you need?",
    options: [
      { value: "business", label: "Business Website", icon: "🌐" },
      { value: "ecommerce", label: "E-commerce Website", icon: "🛒" },
      { value: "portfolio", label: "Portfolio Website", icon: "🎨" },
      { value: "landing", label: "Landing Page", icon: "📄" },
      { value: "webapp", label: "Custom Web App", icon: "⚙️" },
    ],
  },
  {
    id: "features", title: "Features Needed", question: "What features do you need?",
    options: [
      { value: "seo", label: "SEO Optimization", icon: "🔍" },
      { value: "leads", label: "Lead Generation", icon: "📈" },
      { value: "whatsapp", label: "WhatsApp Integration", icon: "💬" },
      { value: "dashboard", label: "Admin Dashboard", icon: "📊" },
      { value: "ai", label: "AI Automation", icon: "🤖" },
    ],
  },
  {
    id: "budget", title: "Budget Range", question: "What's your budget range?",
    options: [
      { value: "15k-25k", label: "₹15,000 – ₹25,000", icon: "💰" },
      { value: "25k-50k", label: "₹25,000 – ₹50,000", icon: "💰💰" },
      { value: "50k-1l", label: "₹50,000 – ₹1,00,000", icon: "💰💰💰" },
      { value: "custom", label: "Custom Project", icon: "💎" },
    ],
  },
];

const labelMap: Record<string, Record<string, string>> = {
  business: { startup: "Startup", small: "Small Business", enterprise: "Enterprise", freelancer: "Freelancer" },
  website: { business: "Business Website", ecommerce: "E-commerce Website", portfolio: "Portfolio Website", landing: "Landing Page", webapp: "Custom Web App" },
  features: { seo: "SEO Optimization", leads: "Lead Generation", whatsapp: "WhatsApp Integration", dashboard: "Admin Dashboard", ai: "AI Automation" },
  budget: { "15k-25k": "₹15,000 – ₹25,000", "25k-50k": "₹25,000 – ₹50,000", "50k-1l": "₹50,000 – ₹1,00,000", custom: "Custom Project" },
};

const recommendations: Record<string, { solution: string; budget: string; tech: string[] }> = {
  "business": { solution: "Business Website with Lead Generation", budget: "₹25,000 – ₹45,000", tech: ["React", "Next.js", "SEO Optimization"] },
  "ecommerce": { solution: "E-commerce Platform with Payment Gateway", budget: "₹40,000 – ₹80,000", tech: ["React", "Node.js", "Payment Integration"] },
  "portfolio": { solution: "Modern Portfolio with Animations", budget: "₹15,000 – ₹25,000", tech: ["React", "Framer Motion", "Tailwind CSS"] },
  "landing": { solution: "High-Converting Landing Page", budget: "₹10,000 – ₹20,000", tech: ["React", "Tailwind CSS", "Analytics"] },
  "webapp": { solution: "Custom Web Application", budget: "₹50,000 – ₹1,50,000", tech: ["React", "TypeScript", "Database", "API"] },
};

export const SolutionSelector = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showContact, setShowContact] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });

  const totalSteps = steps.length + 1;
  const progress = ((currentStep + (showContact ? 1 : 0) + (showResult ? 1 : 0)) / totalSteps) * 100;

  const handleSelect = (value: string) => {
    const newAnswers = { ...answers, [steps[currentStep].id]: value };
    setAnswers(newAnswers);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowContact(true);
    }
  };

  const handleContactSubmit = () => {
    setShowContact(false);
    setShowResult(true);
  };

  const getRecommendation = () => {
    return recommendations[answers.website] || recommendations["business"];
  };

  const handleWhatsAppRedirect = () => {
    const rec = getRecommendation();
    const msg = `Hello Aradhya NextGen Team 👋\n\nSmart Solution Finder Results:\n\nBusiness Type: ${labelMap.business[answers.business] || answers.business}\nWebsite Type: ${labelMap.website[answers.website] || answers.website}\nFeatures: ${labelMap.features[answers.features] || answers.features}\nBudget: ${labelMap.budget[answers.budget] || answers.budget}\n\nRecommended: ${rec.solution}\nEstimated Budget: ${rec.budget}\n\nName: ${contact.name || "Not provided"}\nEmail: ${contact.email || "Not provided"}\nPhone: ${contact.phone || "Not provided"}\n\nI would like to discuss this project.`;
    window.open(`https://wa.me/916360076463?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowContact(false);
    setShowResult(false);
    setContact({ name: "", email: "", phone: "" });
  };

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_70%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-6">
            <Sparkles className="w-4 h-4 text-primary" /><span className="text-sm text-primary font-medium">Smart Solution Finder</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Find Your Perfect <span className="gradient-text">Solution</span></h2>
          <p className="text-muted-foreground">Answer a few questions and get a personalized recommendation with estimated budget.</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Progress indicators */}
          <div className="flex items-center justify-between mb-8 max-w-lg mx-auto">
            {[...steps, { id: "contact", title: "Contact" }].map((step, i) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  (i < currentStep) || (i === steps.length && showResult) || (showContact && i < steps.length) || showResult
                    ? "bg-primary text-primary-foreground"
                    : (i === currentStep && !showContact && !showResult) || (i === steps.length && showContact)
                    ? "bg-primary/20 text-primary border-2 border-primary"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {((i < currentStep) || (showContact && i < steps.length) || showResult) ? <CheckCircle className="w-4 h-4" /> : i + 1}
                </div>
                {i < steps.length && (
                  <div className={`w-6 sm:w-12 h-0.5 mx-1 transition-colors duration-300 ${
                    (i < currentStep) || (showContact && i < steps.length) || showResult ? "bg-primary" : "bg-muted"
                  }`} />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {!showContact && !showResult ? (
              <motion.div key={`step-${currentStep}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="glass-card p-8">
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Step {currentStep + 1} of {totalSteps}</span>
                    <span className="font-medium">{steps[currentStep].title}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
                  </div>
                </div>
                <div className="text-center mb-8">
                  <h3 className="font-heading text-xl font-bold text-foreground">{steps[currentStep].question}</h3>
                </div>
                <div className={`grid gap-3 mb-6 ${steps[currentStep].options.length > 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
                  {steps[currentStep].options.map((option) => (
                    <motion.button key={option.value} onClick={() => handleSelect(option.value)}
                      whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-xl border transition-all text-left group shadow-sm hover:shadow-md ${
                        answers[steps[currentStep].id] === option.value
                          ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 bg-card hover:bg-primary/5"
                      }`}>
                      <span className="text-2xl mb-2 block">{option.icon}</span>
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{option.label}</span>
                    </motion.button>
                  ))}
                </div>
                {currentStep > 0 && (
                  <Button variant="ghost" onClick={() => setCurrentStep(currentStep - 1)} className="w-full text-muted-foreground">
                    <ArrowLeft className="w-4 h-4 mr-2" />Back
                  </Button>
                )}
              </motion.div>
            ) : showContact ? (
              <motion.div key="contact" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="glass-card p-8">
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Step {totalSteps} of {totalSteps}</span>
                    <span className="font-medium">Contact Details</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" animate={{ width: "90%" }} transition={{ duration: 0.3 }} />
                  </div>
                </div>
                <div className="text-center mb-6">
                  <h3 className="font-heading text-xl font-bold text-foreground">How can we reach you?</h3>
                  <p className="text-sm text-muted-foreground mt-1">Optional — you can skip this step</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Name" value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })} className="pl-10" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input type="email" placeholder="Email" value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} className="pl-10" />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input type="tel" placeholder="Phone" value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })} className="pl-10" />
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="ghost" onClick={() => { setShowContact(false); setCurrentStep(steps.length - 1); }} className="text-muted-foreground">
                    <ArrowLeft className="w-4 h-4 mr-2" />Back
                  </Button>
                  <Button onClick={handleContactSubmit} className="flex-1">
                    See My Recommendation <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2 text-foreground">Your Recommendation</h3>
                
                {/* Recommendation card */}
                <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 mb-6 text-left">
                  <div className="mb-3">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Recommended Solution</span>
                    <p className="text-lg font-bold font-heading text-foreground mt-1">{getRecommendation().solution}</p>
                  </div>
                  <div className="mb-3">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Estimated Budget</span>
                    <p className="text-xl font-bold font-heading gradient-text mt-1">{getRecommendation().budget}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Suggested Technologies</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {getRecommendation().tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="text-left space-y-2 p-4 rounded-xl bg-muted/50 border border-border mb-6">
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Business Type:</span><span className="font-medium">{labelMap.business[answers.business]}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Website Type:</span><span className="font-medium">{labelMap.website[answers.website]}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Features:</span><span className="font-medium">{labelMap.features[answers.features]}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-muted-foreground">Budget:</span><span className="font-medium">{labelMap.budget[answers.budget]}</span></div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleWhatsAppRedirect} className="flex-1 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]">
                    Discuss on WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" onClick={handleReset}>Start Over</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
