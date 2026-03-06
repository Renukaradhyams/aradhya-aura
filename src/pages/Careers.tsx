import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Send, Rocket, ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";
import { careersConfig } from "@/config/careersConfig";
import { getWhatsAppUrl } from "@/config/contactInfo";

const roleOptions = [
  "Frontend Developer",
  "React Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "AI Engineer",
  "Web Development Intern",
  "AI Automation Intern",
  "Marketing Intern",
  "Other",
];

const experienceOptions = [
  "Fresher (0 years)",
  "0-1 years",
  "1-2 years",
  "2-4 years",
  "4+ years",
];

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", role: "", experience: "", skills: "", portfolio: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role) {
      toast({ title: "Please fill required fields", description: "Name, Email, and Position are required.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xwpkgpod", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          position: formData.role,
          experience: formData.experience,
          skills: formData.skills,
          portfolio: formData.portfolio,
          message: formData.message,
          _subject: `Career Application: ${formData.role}`,
        }),
      });
      if (response.ok) {
        setIsSuccess(true);
        toast({ title: "Application Submitted! 🎉", description: "Thank you! Our team will review your application and contact you shortly." });
        setFormData({ name: "", email: "", phone: "", role: "", experience: "", skills: "", portfolio: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast({ title: "Submission Failed", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally { setIsSubmitting(false); }
  };

  const handleWhatsAppSubmit = () => {
    const msg = `Hello Aradhya NextGen,\n\nName: ${formData.name}\nPosition: ${formData.role}\nExperience: ${formData.experience}\nSkills: ${formData.skills}\nResume: ${formData.portfolio}\n\nI would like to apply for the role.`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <Layout>
      <Helmet>
        <title>Careers | Aradhya NextGen Technologies - Join Our Team</title>
        <meta name="description" content="Join Aradhya NextGen Technologies! We're looking for talented developers, designers, and interns." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-6">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{careersConfig.hero.badge}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {careersConfig.hero.title} <span className="gradient-text">{careersConfig.hero.titleHighlight}</span>
            </h1>
            <p className="text-muted-foreground text-lg">{careersConfig.hero.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {careersConfig.opportunities.map((opp, index) => (
              <motion.div key={opp.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card overflow-hidden group">
                <div className="p-8">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 relative"
                  >
                    <div className="absolute inset-0 rounded-xl bg-primary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <opp.icon className="w-7 h-7 text-primary relative z-10" />
                  </motion.div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">{opp.type}</span>
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{opp.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{opp.description}</p>
                  <button onClick={() => setExpandedCard(expandedCard === opp.id ? null : opp.id)} className="flex items-center gap-2 text-sm font-medium text-primary mb-4 hover:underline">
                    View Open Roles {expandedCard === opp.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <motion.div initial={false} animate={{ height: expandedCard === opp.id ? "auto" : 0 }} className="overflow-hidden">
                    <div className="space-y-2 mb-4 pb-4 border-b border-border">
                      {opp.roles.map((role) => (
                        <div key={role.id} className={`flex items-center justify-between p-3 rounded-lg ${role.isOpen ? "bg-primary/5" : "bg-muted/50"}`}>
                          <div className="flex items-center gap-2"><CheckCircle className={`w-4 h-4 ${role.isOpen ? "text-primary" : "text-muted-foreground"}`} /><span className="text-sm">{role.title}</span></div>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${role.isOpen ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>{role.isOpen ? "Open" : "Closed"}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  <div className="pt-4 border-t border-border text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Duration:</span><span>{opp.duration}</span></div>
                    <div className="flex justify-between mt-1"><span className="text-muted-foreground">Compensation:</span><span className="text-primary">{opp.compensation}</span></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">Why Work With <span className="gradient-text">Us?</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {careersConfig.perks.filter(p => p.isActive).map((perk, index) => (
              <motion.div key={perk.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }} className="glass-card p-4 text-center">
                <CheckCircle className="w-5 h-5 text-primary mx-auto mb-2" />
                <span className="text-sm">{perk.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">Apply <span className="gradient-text">Now</span></h2>
              <p className="text-muted-foreground">Ready to join us? Fill out the form below.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {isSuccess ? (
                <div className="glass-card p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2">Application Submitted!</h3>
                  <p className="text-muted-foreground mb-6">Thank you! Your message has been sent successfully. Our team will contact you shortly.</p>
                  <Button variant="outline" onClick={() => setIsSuccess(false)}>Submit Another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name <span className="text-destructive">*</span></label>
                      <Input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Your full name" className="focus:ring-2 focus:ring-primary/20" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email <span className="text-destructive">*</span></label>
                      <Input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="your@email.com" className="focus:ring-2 focus:ring-primary/20" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone Number</label>
                      <Input value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+91 XXXXX XXXXX" className="focus:ring-2 focus:ring-primary/20" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Position Applying For <span className="text-destructive">*</span></label>
                      <select
                        required
                        value={formData.role}
                        onChange={e => setFormData({...formData, role: e.target.value})}
                        className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="">Select a role</option>
                        {roleOptions.map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Experience Level</label>
                      <select
                        value={formData.experience}
                        onChange={e => setFormData({...formData, experience: e.target.value})}
                        className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="">Select experience</option>
                        {experienceOptions.map(e => <option key={e} value={e}>{e}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Skills</label>
                      <Input value={formData.skills} onChange={e => setFormData({...formData, skills: e.target.value})} placeholder="React, TypeScript, Node.js..." className="focus:ring-2 focus:ring-primary/20" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Resume / Portfolio Link</label>
                    <Input value={formData.portfolio} onChange={e => setFormData({...formData, portfolio: e.target.value})} placeholder="Google Drive, GitHub, LinkedIn, Portfolio URL..." className="focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Cover Message</label>
                    <Textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Tell us why you want to join and what excites you..." rows={4} className="focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button type="submit" className="flex-1 group" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : <><span>Submit Application</span><Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" /></>}
                    </Button>
                    <Button type="button" variant="outline" onClick={handleWhatsAppSubmit} className="group" disabled={!formData.name || !formData.role}>
                      <MessageCircle className="mr-2 w-4 h-4" />
                      Send via WhatsApp
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
