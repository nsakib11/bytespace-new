"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, Star } from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#0445FF] text-white pt-10 pb-0 lg:pt-14">
      {/* Background Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating 3D Ornaments */}
      {/* Left 3D Torus */}
      <div className="absolute top-[220px] -left-12 lg:left-8 w-44 lg:w-64 h-44 lg:h-64 pointer-events-none select-none z-10 hidden sm:block animate-float">
        <Image
          src="/assets/e3b55902d605bfc37a0809e6dc6dfe61b6701897.png"
          alt="3D Torus Ornament"
          width={280}
          height={280}
          className="object-contain"
        />
      </div>

      {/* Left 3D Cone */}
      <div className="absolute bottom-28 left-4 lg:left-24 w-32 lg:w-48 h-32 lg:h-48 pointer-events-none select-none z-10 hidden md:block">
        <Image
          src="/assets/8670b841eac7883ecb790f84eb349c6c01db588b.png"
          alt="3D Cone Ornament"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Right 3D Torus */}
      <div className="absolute top-[240px] -right-10 lg:right-6 w-48 lg:w-64 h-48 lg:h-64 pointer-events-none select-none z-10 hidden sm:block">
        <Image
          src="/assets/cda676feaf7fba8b0f81b47c5ea2707d7acb5217.png"
          alt="3D Torus Ornament"
          width={280}
          height={280}
          className="object-contain"
        />
      </div>

      {/* Right 3D Cone */}
      <div className="absolute bottom-32 right-6 lg:right-24 w-36 lg:w-52 h-36 lg:h-52 pointer-events-none select-none z-10 hidden md:block">
        <Image
          src="/assets/92fc70a39c36138c0e55699b18b3e88bd1f86a59.png"
          alt="3D Cone Ornament"
          width={220}
          height={220}
          className="object-contain"
        />
      </div>

      {/* Container */}
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-20 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-[#F5F5F6] leading-[1.15] max-w-4xl mx-auto">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-[#F5F5F6]/90 max-w-2xl mx-auto font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-[560px] mx-auto">
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white rounded-full p-2 pl-6 shadow-2xl transition-all focus-within:ring-2 focus-within:ring-[#CBFC01]"
          >
            <input
              type="text"
              placeholder="Course, topic, creator"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-[#242528] placeholder-[#71767B] text-[16px] outline-none font-normal"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#CBFC01] hover:bg-[#b5e200] text-[#242528] font-semibold text-[15px] px-7 py-3 rounded-full transition-transform active:scale-95 shadow-sm"
            >
              <Search className="w-4 h-4 text-[#242528]" />
              <span>Search </span>
            </button>
          </form>
        </div>

        {/* Hero Visual Stage with Centered Student Photo & Floating Badges */}
        <div className="relative mt-12 sm:mt-16 max-w-[820px] mx-auto flex justify-center items-end">
          {/* Main Student Portrait */}
          <div className="relative w-[340px] sm:w-[480px] md:w-[540px] h-[340px] sm:h-[480px] md:h-[530px] z-10 flex items-end justify-center">
            <Image
              src="/assets/29a52a24e51266edcd7d57d73392ee5fc4833220.png"
              alt="ByteSpace Student"
              width={578}
              height={541}
              priority
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </div>

          {/* Floating Badge 1: UI/UX Design (Left Top) */}
          <div className="absolute left-0 sm:left-4 md:-left-10 top-16 sm:top-24 z-20 bg-white text-[#242528] rounded-2xl p-4 sm:p-5 shadow-2xl border border-gray-100/80 text-left animate-in fade-in slide-in-from-left duration-500">
            <h4 className="text-base sm:text-lg font-bold text-[#242528]">UI/UX Design</h4>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#71767B] mt-1 font-medium">
              <span>200 Courses</span>
              <span className="text-[#CBFC01] font-black">•</span>
              <span>1000+ Students</span>
            </div>
          </div>

          {/* Floating Badge 2: Happy Students (Left Bottom) */}
          <div className="absolute left-0 sm:left-2 md:-left-12 bottom-12 sm:bottom-16 z-20 bg-white text-[#242528] rounded-2xl p-4 sm:p-5 shadow-2xl border border-gray-100/80 text-left">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h5 className="text-xs sm:text-sm font-semibold text-[#242528]">Happy Students</h5>
                <div className="flex items-center gap-1.5 mt-1">
                  <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  <span className="text-xs sm:text-sm font-bold text-[#242528]">4.5</span>
                  <span className="text-xs text-[#71767B]">(240)</span>
                </div>
              </div>
            </div>
            {/* Avatar stack */}
            <div className="flex items-center mt-3 -space-x-2">
              <Image
                src="/assets/9ef8cb329b949267cc8214b6727067c4a13af4b4.png"
                alt="Student avatar"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png"
                alt="Student avatar"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/assets/83fb3e04056cc892636460bee5791aa3f243854c.png"
                alt="Student avatar"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-[#CBFC01] text-[#242528] text-[11px] font-bold flex items-center justify-center">
                2K+
              </div>
            </div>
          </div>

          {/* Floating Badge 3: Learning Progress (Right Center) */}
          <div className="absolute right-0 sm:right-4 md:-right-8 top-32 sm:top-40 z-20 bg-white text-[#242528] rounded-2xl p-4 sm:p-5 shadow-2xl border border-gray-100/80 text-left">
            <h5 className="text-xs sm:text-sm font-semibold text-[#242528]">Learning Progress</h5>
            <div className="flex items-center gap-3 mt-3">
              {/* Circular Gauge */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-100"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-[#0445FF]"
                    strokeDasharray="55, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-xs font-bold text-[#242528]">55%</span>
              </div>
              <div className="text-xs text-[#71767B]">
                <p className="font-medium text-[#242528]">In Progress</p>
                <p>3 of 6 completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
