import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import PopularCoursesSection from "@/components/home/PopularCoursesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TutorSection from "@/components/home/TutorSection";
import PromoBannerSection from "@/components/home/PromoBannerSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata = {
  title: "ByteSpace - Master In-Demand Tech & Design Skills",
  description: "Get access to unlimited courses, industry-verified certificates, and 1-on-1 mentorship with senior engineering and design leaders.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <PartnersSection />
        <PopularCoursesSection />
        <FeaturesSection />
        <TutorSection />
        <PromoBannerSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
