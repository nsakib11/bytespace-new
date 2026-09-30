import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SparkleStar, GeometricAsterisk } from "@/components/ui/DecorativeElements";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0D50E8] text-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center relative overflow-hidden py-20 px-4">
        {/* Decorative background shapes matching Figma */}
        <div className="absolute top-12 left-10 opacity-20 pointer-events-none">
          <SparkleStar className="w-20 h-20 text-[#CEFF00]" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-25 pointer-events-none">
          <GeometricAsterisk className="w-28 h-28 text-[#CEFF00]" />
        </div>

        <div className="relative z-10 text-center max-w-xl mx-auto space-y-6">
          <div className="text-8xl sm:text-9xl font-black tracking-tighter text-[#CEFF00] drop-shadow-lg">
            404
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            The page you are looking for doesn&apos;t exist
          </h1>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            The link you clicked may be broken, or the page may have been removed. Let&apos;s get you back on track with your learning.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3.5 rounded-full font-bold text-sm bg-[#CEFF00] hover:bg-[#bcec00] text-[#0B0F19] transition-transform hover:scale-105 shadow-xl flex items-center gap-2 active:scale-95"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              href="/courses"
              className="px-7 py-3.5 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-colors"
            >
              Browse All Courses
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
