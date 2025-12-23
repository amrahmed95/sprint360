import React from "react";
import HeroSection from "./home/HeroSection";
import ServicesSection from "./home/ServicesSection";
import FeaturesSection from "./home/FeaturesSection";
import PartnersSection from "./home/PartnersSection";
import CTASection from "./home/CTASection";

export default function HomePage() {
  return (
    <main className="flex-1 min-h-screen flex flex-col">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <PartnersSection />
      <CTASection />
    </main>
  );
}
