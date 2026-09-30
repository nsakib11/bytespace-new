import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SparkleStar, GeometricAsterisk, WavyShape } from "@/components/ui/DecorativeElements";

export default function PromoBannerSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#0D50E8] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl">
          {/* Abstract Geometric Elements */}
          <div className="absolute top-4 left-6 opacity-20 pointer-events-none">
            <SparkleStar className="w-14 h-14 text-[#CEFF00]" />
          </div>
          <div className="absolute -bottom-8 -right-8 opacity-25 pointer-events-none">
            <GeometricAsterisk className="w-36 h-36 text-[#CEFF00]" />
          </div>
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 opacity-15 pointer-events-none hidden md:block">
            <div className="w-64 h-64 rounded-full border-8 border-dashed border-[#CEFF00]" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold text-white uppercase tracking-wider">
              <SparkleStar className="w-3.5 h-3.5 text-[#CEFF00]" />
              Start Your Journey Today
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Shape Your Future with World-Class Online Learning
            </h2>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed font-normal">
              Join over 50,000+ ambitious learners leveling up in Next.js, AI, and UI/UX Design. Get unlimited course access and 1-on-1 mentorship.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-extrabold text-sm bg-[#CEFF00] hover:bg-[#bcec00] text-[#0B0F19] transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/courses"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-colors flex items-center justify-center"
              >
                Explore All Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
