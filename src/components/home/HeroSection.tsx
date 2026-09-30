"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Search, Play, Star, Users, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { SparkleStar, GeometricAsterisk } from "@/components/ui/DecorativeElements";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/courses");
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0D50E8] text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Decorative Graphic Shapes */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
        <SparkleStar className="w-16 h-16 text-[#CEFF00]" />
      </div>
      <div className="absolute bottom-12 left-1/3 opacity-20 pointer-events-none">
        <GeometricAsterisk className="w-20 h-20 text-[#CEFF00]" />
      </div>
      <div className="absolute top-16 right-8 opacity-25 pointer-events-none">
        <div className="w-48 h-48 rounded-full border-4 border-dashed border-[#CEFF00]" />
      </div>
      <div className="absolute -bottom-10 right-1/4 opacity-15 pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-[#CEFF00] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Search */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-semibold shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-[#CEFF00] animate-ping" />
              <span className="text-[#CEFF00] font-bold">New Check:</span>
              <span>Over 2,000+ Online Courses Available</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Get Access to <br className="hidden sm:inline" />
              <span className="relative inline-block text-white">
                Unlimited Courses
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#CEFF00] fill-none stroke-current"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path d="M2 9C50 2 150 2 198 9" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{" "}
              Available
            </h1>

            {/* Subheadline */}
            <p className="text-blue-100 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Learn practical, career-defining skills from senior tech leaders. Build production-grade projects and accelerate your journey in tech and design.
            </p>

            {/* Interactive Search Bar */}
            <form
              onSubmit={handleSearch}
              className="bg-white p-2 rounded-2xl sm:rounded-full shadow-2xl max-w-xl mx-auto lg:mx-0 flex flex-col sm:flex-row items-center gap-2"
            >
              <div className="flex items-center gap-3 px-4 w-full text-slate-800">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="What skill do you want to learn today?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2.5 bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-xl sm:rounded-full bg-[#CEFF00] hover:bg-[#bcec00] text-[#0B0F19] text-sm font-bold tracking-tight transition-transform hover:scale-[1.02] active:scale-95 shadow-md flex items-center justify-center gap-1.5 shrink-0"
              >
                Search
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Social Proof / Stats */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Student"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="Student"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                    alt="Student"
                  />
                  <div className="flex items-center justify-center h-9 w-9 rounded-full bg-[#CEFF00] text-[#0B0F19] ring-2 ring-white font-extrabold text-xs">
                    +50k
                  </div>
                </div>
                <div>
                  <div className="font-bold text-white leading-tight">50,000+ Enrolled</div>
                  <div className="text-xs text-blue-200">Across 120 countries</div>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-white/20 hidden sm:block" />

              <div className="flex items-center gap-2">
                <div className="flex text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-300 stroke-amber-300" />
                  ))}
                </div>
                <div className="text-xs text-blue-100">
                  <span className="font-bold text-white">4.9/5</span> (4.8k reviews)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic with Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Main Visual Card Container */}
            <div className="relative w-full max-w-md">
              {/* Decorative Lime Circle behind student */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] rounded-full bg-[#CEFF00] -z-0 transform rotate-6" />

              {/* Student Photo */}
              <div className="relative z-10 mx-auto w-72 sm:w-80 h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="ByteSpace student learning online"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Badge 1: Top Right - Active Students */}
              <div className="absolute -top-4 right-0 z-20 bg-white/95 backdrop-blur-md text-slate-900 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:3s]">
                <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] text-[#0D50E8] flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500">Live Mentorship</div>
                  <div className="text-sm font-extrabold text-slate-900">450+ Active Tutors</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left - Top Rated Course Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 z-20 bg-white/95 backdrop-blur-md text-slate-900 p-3.5 rounded-2xl shadow-2xl border border-slate-100 max-w-[240px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#CEFF00] text-[#0B0F19]">
                    Top Rated
                  </span>
                  <div className="flex items-center text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="ml-1">4.95</span>
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-900 line-clamp-1">
                  UI/UX Design Systems
                </div>
                <div className="mt-1 flex items-center justify-between text-[11px] text-slate-500">
                  <span>42 Lessons</span>
                  <span className="text-[#0D50E8] font-bold">$49.99</span>
                </div>
              </div>

              {/* Floating Badge 3: Verified Certificate */}
              <div className="absolute bottom-20 -right-4 z-20 bg-[#0B0F19] text-white px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2 border border-slate-800">
                <Award className="w-4 h-4 text-[#CEFF00]" />
                <span className="text-xs font-bold tracking-tight">Verified Certificate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
