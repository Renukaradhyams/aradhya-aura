import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { SolutionSelector } from "@/components/home/SolutionSelector";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TechExpertiseSection } from "@/components/home/TechExpertiseSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { FounderSection } from "@/components/home/FounderSection";
import { PricingSection } from "@/components/home/PricingSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { FutureFeaturesSection } from "@/components/home/FutureFeaturesSection";
import { EnquiryModal } from "@/components/home/EnquiryModal";
import { Helmet } from "react-helmet-async";
import { seoConfig } from "@/config/siteConfig";

const Index = () => {
  const [showAutoEnquiry, setShowAutoEnquiry] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("enquiry_shown");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowAutoEnquiry(true);
        sessionStorage.setItem("enquiry_shown", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>{seoConfig.home.title}</title>
        <meta name="description" content={seoConfig.home.description} />
        <meta name="keywords" content="web development, React websites, AI automation, cloud platforms, digital transformation, Bangalore, India" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aradhyanextgen.lovable.app/" />
        <meta property="og:title" content="Aradhya NextGen Technologies | Web, AI & Cloud Solutions" />
        <meta property="og:description" content="We build scalable web platforms, AI automation systems, and cloud solutions for startups and enterprises." />
        <meta property="og:site_name" content="Aradhya NextGen Technologies" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aradhya NextGen Technologies | Web, AI & Cloud Solutions" />
        <meta name="twitter:description" content="We build scalable web platforms, AI automation systems, and cloud solutions." />
        <link rel="canonical" href="https://aradhyanextgen.lovable.app/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Aradhya NextGen Technologies",
          "url": "https://aradhyanextgen.lovable.app",
          "logo": "https://aradhyanextgen.lovable.app/logo.png",
          "description": "Web development, AI automation, and cloud solutions company based in Bangalore, India.",
          "address": { "@type": "PostalAddress", "addressLocality": "Bangalore", "addressCountry": "IN" },
          "contactPoint": { "@type": "ContactPoint", "telephone": "+91-6360076463", "contactType": "sales" }
        })}</script>
      </Helmet>
      
      <HeroSection />
      <StatsSection />
      <WhyUsSection />
      <SolutionSelector />
      <ServicesPreview />
      <ComparisonSection />
      <ProcessSection />
      <IndustriesSection />
      <TechExpertiseSection />
      <CaseStudiesSection />
      <FounderSection />
      <FutureFeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <EnquiryModal isOpen={showAutoEnquiry} onClose={() => setShowAutoEnquiry(false)} />
    </Layout>
  );
};

export default Index;
