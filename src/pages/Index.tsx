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
import { buildCanonicalUrl, seoConfig, siteConfig } from "@/config/siteConfig";

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
        <meta name="keywords" content={seoConfig.home.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={buildCanonicalUrl(seoConfig.home.path)} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={buildCanonicalUrl(seoConfig.home.path)} />
        <meta property="og:title" content={seoConfig.home.title} />
        <meta property="og:description" content={seoConfig.home.description} />
        <meta property="og:image" content={siteConfig.defaultOgImage} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:locale" content={siteConfig.locale} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoConfig.home.title} />
        <meta name="twitter:description" content={seoConfig.home.description} />
        <meta name="twitter:image" content={siteConfig.defaultOgImage} />
        <meta name="twitter:site" content={siteConfig.twitterHandle} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            logo: siteConfig.defaultOgImage,
            description: siteConfig.description,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bangalore",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: siteConfig.phone,
              contactType: "sales",
              email: siteConfig.email,
            },
          })}
        </script>
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
