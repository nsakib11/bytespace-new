import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import PopularCoursesSection from "@/components/home/PopularCoursesSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TutorSection from "@/components/home/TutorSection";
import PromoBannerSection from "@/components/home/PromoBannerSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata = {
  title: "ByteSpace - Get Access to Hundreds Courses Available",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses on ByteSpace.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <PartnersSection />
        <PopularCoursesSection />
        <CategoriesSection />
        <FeaturesSection />
        <TutorSection />
        <PromoBannerSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
