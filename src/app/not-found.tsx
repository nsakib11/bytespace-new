import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0445FF] text-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center relative overflow-hidden py-24 px-6 text-center">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-xl mx-auto space-y-6">
          <div className="text-8xl sm:text-9xl font-bold tracking-tight text-[#CBFC01]">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F6]">
            Page Not Found
          </h1>

          <p className="text-[16px] text-white/90 font-normal leading-relaxed max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist or has been moved. Explore our catalog of courses or return home.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3.5 rounded-full font-bold text-sm bg-[#CBFC01] hover:bg-[#b8e800] text-[#242528] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg flex items-center gap-2"
            >
              <Home className="w-4 h-4 text-[#242528]" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              href="/courses"
              className="px-7 py-3.5 rounded-full font-medium text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
