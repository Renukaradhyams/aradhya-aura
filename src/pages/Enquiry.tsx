import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, FileText, CheckCircle, ArrowRight, Sparkles, Shield, Clock, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { emailConfig } from "@/config/emailConfig";
import { getWhatsAppUrl } from "@/config/contactInfo";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Website Development", "Mobile App", "SaaS Platform", "AI Solution",
  "UI/UX Design", "E-Commerce", "Custom Software", "Other"
];

const budgets = ["$500 – $2,000", "$2,000 – $5,000", "$5,000 – $10,000", "$10,000+"];
const timelines = ["ASAP", "1 Month", "3 Months", "Flexible"];

const Enquiry = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", budget: "", timeline: "", description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.service) return;
    setIsSubmitting(true);

    try {
      await emailjs.send(emailConfig.SERVICE_ID, emailConfig.TEMPLATE_ID, {
        from_name: form.name, from_email: form.email, phone: form.phone,
        message: `Service: ${form.service}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\n\n${form.description}`,
        to_email: emailConfig.RECEIVER_EMAIL,
      }, emailConfig.PUBLIC_KEY);
      setIsSuccess(true);
      toast({ title: "Enquiry Sent! 🎉", description: "We'll get back to you within 24 hours." });
    } catch {
      const msg = `Hello Aradhya NextGen,\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\nDetails: ${form.description}`;
      window.open(getWhatsAppUrl(msg), "_blank");
      toast({ title: "Redirected to WhatsApp", description: "Please send the pre-filled message." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Get a Consultation | Aradhya NextGen Technologies</title>
        <meta name="description" content="Start your project with Aradhya NextGen Technologies. Get a free consultation for web development, AI, and cloud solutions." />
      </Helmet>

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.06),transparent_70%)] rounded-full" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left - Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Free Consultation</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Let's Build Something <span className="gradient-text">Extraordinary</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-10 max-w-lg">
                Tell us about your project and we'll craft a tailored solution that drives real business results.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Sparkles, title: "Free Consultation", desc: "No hidden fees, no obligations" },
                  { icon: Clock, title: "Quick Response", desc: "We respond within 24 hours" },
                  { icon: Shield, title: "No Commitment", desc: "Explore options before you decide" },
                ].map((item) => (
                  <motion.div key={item.title} whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border hover:border-primary/30 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {isSuccess ? (
                <div className="bg-white rounded-2xl border border-border shadow-xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold mb-3">Enquiry Sent Successfully!</h2>
                  <p className="text-muted-foreground mb-6">We'll get back to you within 24 hours with a detailed proposal.</p>
                  <Button onClick={() => { setIsSuccess(false); setForm({ name: "", email: "", phone: "", service: "", budget: "", timeline: "", description: "" }); }}>
                    Submit Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border shadow-xl p-8 space-y-5">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-1">Start Your Project</h2>
                  <p className="text-sm text-muted-foreground mb-4">Fill in the details and we'll get back to you.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs text-muted-foreground mb-1.5 block">Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="pl-10" />
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground mb-1.5 block">Email *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="pl-10" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs text-muted-foreground mb-1.5 block">Phone *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className="pl-10" />
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs text-muted-foreground mb-2 block">Service Needed *</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {services.map(s => (
                        <button key={s} type="button" onClick={() => setForm({ ...form, service: s })}
                          className={`px-3 py-2 rounded-lg border text-xs font-medium transition-all ${form.service === s ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs text-muted-foreground mb-2 block">Budget Range</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {budgets.map(b => (
                          <button key={b} type="button" onClick={() => setForm({ ...form, budget: b })}
                            className={`px-3 py-2 rounded-lg border text-xs font-medium transition-all ${form.budget === b ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}>
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground mb-2 block">Timeline</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {timelines.map(t => (
                          <button key={t} type="button" onClick={() => setForm({ ...form, timeline: t })}
                            className={`px-3 py-2 rounded-lg border text-xs font-medium transition-all ${form.timeline === t ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs text-muted-foreground mb-1.5 block">Project Description</Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}
                        placeholder="Tell us about your project..." className="pl-10 min-h-[100px] resize-none" />
                    </div>
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300">
                    {isSubmitting ? "Sending..." : <><Send className="w-4 h-4 mr-2" />Start My Project</>}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Enquiry;
