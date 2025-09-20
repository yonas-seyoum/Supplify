import React from "react";
import HeroSection from "./components/Landing/HeroSection";
import FeaturesSection from "./components/Landing/FeaturesSection";
import WhyChooseSection from "./components/Landing/WhyChooseSection";
import Footer from "./components/Landing/FooterSection";
export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <HeroSection />
      <FeaturesSection />
      <WhyChooseSection />
      <Footer />
    </div>
  );
}
