import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { question: "How much does a website cost?", answer: "Website costs vary based on complexity. Starter websites begin at ₹15,000, business websites range from ₹25,000-50,000, and custom projects are quoted based on requirements." },
  { question: "How long will it take to build my website?", answer: "A simple landing page takes 3-5 days, business websites take 1-2 weeks, and complex web applications can take 3-6 weeks." },
  { question: "Will my website work on mobile devices?", answer: "Absolutely! All our websites are built mobile-first, ensuring they look and work perfectly on smartphones, tablets, and desktops." },
  { question: "Can I update the website myself?", answer: "Yes! We can integrate a simple content management system for basic updates. For React-based websites, we also provide training." },
  { question: "Do you provide ongoing support?", answer: "Yes, we offer maintenance packages that include updates, backups, security monitoring, and technical support." },
  { question: "What makes React websites better?", answer: "React websites load faster, provide smoother user experiences, are easier to scale, and perform better in search rankings." },
];

export const FAQSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium mb-4">FAQ</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="text-muted-foreground text-lg">Got questions? We've got answers.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-border shadow-sm data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-heading font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
