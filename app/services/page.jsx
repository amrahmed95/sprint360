"use client";
import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import CrossCuttingSection from "./components/CrossCuttingSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import CostEstimateSection from "./components/CostEstimateSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import CalendlyModal from "./components/CalendlyModal";

export default function servicesPage() {
  const [openCalendly, setOpenCalendly] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[--color-background] text-[--color-foreground]">
      <HeroSection onGetStarted={() => setOpenCalendly(true)} />
      <ServicesGrid />

      <CrossCuttingSection />
      <CaseStudiesSection />
      <CostEstimateSection />
      <FAQSection />

      {/* FINAL CTA SECTION */}
      <CTASection onGetStarted={() => setOpenCalendly(true)} />

      {/* Calendly Modal */}
      <CalendlyModal
        open={openCalendly}
        onClose={() => setOpenCalendly(false)}
      />
    </div>
  );
}
