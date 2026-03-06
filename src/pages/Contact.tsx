import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  ArrowRight,
  ArrowLeft,
  User,
  Briefcase,
  MessageSquare
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { emailConfig } from "@/config/emailConfig";
import { contactInfo, getWhatsAppUrl, getPhoneUrl, getEmailUrl } from "@/config/contactInfo";
import { useToast } from "@/hooks/use-toast";

const formSteps = [
  {
    id: "personal",
    title: "Your Details",
    icon: User,
  },
  {
    id: "project",
    title: "Project Info",
    icon: Briefcase,
  },
  {
    id: "message",
    title: "Your Message",
    icon: MessageSquare,
  },
];

const serviceOptions = [
  "Startup Website & MVP",
  "Business Website",
  "E-commerce Solution",
  "AI & Automation",
  "Custom Software",
  "Website Redesign",
  "Other",
];

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const { toast } = useToast();

  const progress = ((currentStep + 1) / formSteps.length) * 100;

  const handleNext = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (emailConfig.SERVICE_ID !== "your_service_id") {
        await emailjs.send(
          emailConfig.SERVICE_ID,
          emailConfig.TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            company: formData.company,
            service: formData.service,
            budget: formData.budget,
            timeline: formData.timeline,
            message: formData.message,
            to_email: emailConfig.RECEIVER_EMAIL,
          },
          emailConfig.PUBLIC_KEY
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setIsSuccess(true);
      toast({
        title: "Message Sent! 🎉",
        description: "We'll get back to you within 24 hours.",
      });
    } catch {
      toast({
        title: "Failed to send",
        description: "Please try again or contact us via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
    });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.name && formData.email;
      case 1:
        return formData.service;
      case 2:
        return formData.message;
      default:
        return false;
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Aradhya NextGen - Get a Proposal</title>
        <meta name="description" content="Get in touch with Aradhya NextGen for your web development project. We respond within 24 hours. Contact via form, WhatsApp, or email." />
      </Helmet>

      <section className="pt-32 pb-24 relative">
        <div className="absolute inset-0 bg-hero-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Let's Build <span className="gradient-text">Together</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Tell us about your project and we'll get back to you within 24 hours 
              with a custom proposal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="glass-card p-6">
                <h3 className="font-heading font-semibold text-lg mb-4">Quick Contact</h3>
                
                <div className="space-y-4">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary bg-card/50 hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">Chat with us instantly</p>
                    </div>
                  </a>

                  <a
                    href={getPhoneUrl()}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary bg-card/50 hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">Call Us</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.phone}</p>
                    </div>
                  </a>

                  <a
                    href={getEmailUrl()}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary bg-card/50 hover:bg-primary/5 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">Email</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-heading font-semibold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Weekdays</span>
                    <span>{contactInfo.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Weekends</span>
                    <span>{contactInfo.hours.weekends}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Multi-step Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-8">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <Button onClick={handleReset} variant="outline">
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      {/* Progress */}
                      <div className="mb-8">
                        <div className="flex justify-between mb-4">
                          {formSteps.map((step, index) => (
                            <div
                              key={step.id}
                              className={`flex items-center gap-2 ${
                                index <= currentStep ? "text-primary" : "text-muted-foreground"
                              }`}
                            >
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                                  index <= currentStep
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted"
                                }`}
                              >
                                {index < currentStep ? (
                                  <CheckCircle className="w-4 h-4" />
                                ) : (
                                  index + 1
                                )}
                              </div>
                              <span className="hidden sm:block text-sm">{step.title}</span>
                            </div>
                          ))}
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-primary"
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>

                      {/* Step Content */}
                      <AnimatePresence mode="wait">
                        {currentStep === 0 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                          >
                            <h3 className="font-heading text-xl font-semibold mb-4">
                              Tell us about yourself
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium mb-2 block">
                                  Full Name <span className="text-destructive">*</span>
                                </label>
                                <Input
                                  required
                                  value={formData.name}
                                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                  placeholder="John Doe"
                                />
                              </div>
                              <div>
                                <label className="text-sm font-medium mb-2 block">
                                  Email <span className="text-destructive">*</span>
                                </label>
                                <Input
                                  type="email"
                                  required
                                  value={formData.email}
                                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                  placeholder="john@example.com"
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium mb-2 block">Phone</label>
                                <Input
                                  value={formData.phone}
                                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                  placeholder="+91 XXXXX XXXXX"
                                />
                              </div>
                              <div>
                                <label className="text-sm font-medium mb-2 block">Company Name</label>
                                <Input
                                  value={formData.company}
                                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                  placeholder="Your Company"
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {currentStep === 1 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                          >
                            <h3 className="font-heading text-xl font-semibold mb-4">
                              About your project
                            </h3>
                            <div>
                              <label className="text-sm font-medium mb-2 block">
                                Service Interested In <span className="text-destructive">*</span>
                              </label>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {serviceOptions.map((service) => (
                                  <button
                                    key={service}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, service })}
                                    className={`p-3 rounded-lg border text-sm transition-all ${
                                      formData.service === service
                                        ? "border-primary bg-primary/10 text-primary"
                                        : "border-border hover:border-primary/50"
                                    }`}
                                  >
                                    {service}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium mb-2 block">Budget Range</label>
                                <select
                                  value={formData.budget}
                                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:border-primary focus:outline-none"
                                >
                                  <option value="">Select budget</option>
                                  <option value="10k-25k">₹10,000 - ₹25,000</option>
                                  <option value="25k-50k">₹25,000 - ₹50,000</option>
                                  <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                                  <option value="1l+">₹1,00,000+</option>
                                </select>
                              </div>
                              <div>
                                <label className="text-sm font-medium mb-2 block">Timeline</label>
                                <select
                                  value={formData.timeline}
                                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:border-primary focus:outline-none"
                                >
                                  <option value="">Select timeline</option>
                                  <option value="asap">ASAP (1-2 weeks)</option>
                                  <option value="month">This Month</option>
                                  <option value="1-2months">1-2 Months</option>
                                  <option value="flexible">Flexible</option>
                                </select>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {currentStep === 2 && (
                          <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                          >
                            <h3 className="font-heading text-xl font-semibold mb-4">
                              Tell us more
                            </h3>
                            <div>
                              <label className="text-sm font-medium mb-2 block">
                                Project Details <span className="text-destructive">*</span>
                              </label>
                              <Textarea
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Describe your project, goals, and any specific requirements..."
                                rows={6}
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Navigation */}
                      <div className="flex justify-between mt-8 pt-6 border-t border-border">
                        {currentStep > 0 ? (
                          <Button type="button" variant="outline" onClick={handleBack}>
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                          </Button>
                        ) : (
                          <div />
                        )}

                        {currentStep < formSteps.length - 1 ? (
                          <Button
                            type="button"
                            onClick={handleNext}
                            disabled={!canProceed()}
                          >
                            Next
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        ) : (
                          <Button type="submit" disabled={isSubmitting || !canProceed()}>
                            {isSubmitting ? (
                              "Sending..."
                            ) : (
                              <>
                                Submit
                                <Send className="w-4 h-4 ml-2" />
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
