import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, FileText, CheckCircle, Sparkles, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { emailConfig } from "@/config/emailConfig";
import { getWhatsAppUrl } from "@/config/contactInfo";
import { useToast } from "@/hooks/use-toast";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal = ({ isOpen, onClose }: EnquiryModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.requirements) return;
    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.requirements,
          to_email: emailConfig.RECEIVER_EMAIL,
        },
        emailConfig.PUBLIC_KEY
      );
      setIsSuccess(true);
      toast({ title: "Enquiry Sent! 🎉", description: "We'll get back to you within 24 hours." });
    } catch {
      // Fallback to WhatsApp
      const msg = `Hello Aradhya NextGen,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRequirements: ${formData.requirements}`;
      window.open(getWhatsAppUrl(msg), "_blank");
      toast({ title: "Redirected to WhatsApp", description: "Please send the pre-filled message." });
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({ name: "", email: "", phone: "", requirements: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-background rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-5"
          >
            {/* Left - Visual */}
            <div className="hidden md:flex md:col-span-2 bg-gradient-to-br from-primary via-primary/80 to-emerald-600 p-8 flex-col justify-between text-primary-foreground relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-20 h-20 rounded-full bg-white/20"
                    style={{ top: `${15 + i * 15}%`, left: `${10 + (i % 3) * 25}%` }}
                    animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
              </div>
              <div className="relative z-10">
                <h2 className="font-heading text-2xl font-bold mb-2">Submit Your Query</h2>
                <p className="text-sm opacity-90">Don't leave confused. Just seek a free consultation.</p>
              </div>
              <div className="relative z-10 space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Quick Response Within 24hrs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>No Commitment Required</span>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="md:col-span-3 p-6 md:p-8 relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2">Enquiry Sent!</h3>
                    <p className="text-muted-foreground text-sm mb-6">We'll get back to you within 24 hours.</p>
                    <Button onClick={handleClose} variant="outline" size="sm">Close</Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="md:hidden mb-4">
                      <h2 className="font-heading text-xl font-bold">Submit Your Query</h2>
                      <p className="text-sm text-muted-foreground">Get a free consultation</p>
                    </div>

                    <div>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Name *"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Email *"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Phone Number *"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Textarea
                          required
                          value={formData.requirements}
                          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                          placeholder="Project Requirements *"
                          className="pl-10 min-h-[100px] resize-none"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300"
                    >
                      {isSubmitting ? "Sending..." : "Start My Project"}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
