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

  const studentAvatars = [
    "/assets/9ef8cb329b949267cc8214b6727067c4a13af4b4.png",
    "/assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png",
    "/assets/83fb3e04056cc892636460bee5791aa3f243854c.png",
    "/assets/f3cf29a8fed39589ceb38423e65b26b8d6c93123.png",
    "/assets/5824acacb3b76175bc84084ec18597109498f96d.png",
    "/assets/7fdccc783264eedc4fb989984eecbc4058a219f2.png",
  ];

  return (
    <section className="relative overflow-hidden bg-[#0445FF] text-white pt-10 pb-0 lg:pt-14">
      {/* Background 120px Grid Pattern matching Figma Group 4 */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
          backgroundPosition: "center top",
        }}
      />

      {/* ================= 3D FLOATING ORNAMENTS ================= */}

      {/* 1. Left Top: Neon Lime Helix Spring (1:672) */}
      <div className="absolute top-[260px] -left-10 lg:left-6 xl:left-12 w-44 lg:w-60 h-44 lg:h-60 pointer-events-none select-none z-10 hidden sm:block">
        <Image
          src="/assets/24321b8894c48b04befaa9e71f204daacc40bbc4.png"
          alt="Lime 3D Helix Spring"
          width={240}
          height={240}
          className="object-contain"
        />
      </div>

      {/* 2. Left Middle: White Squiggly Ribbon (4:35) */}
      <div className="absolute top-[480px] left-14 sm:left-24 lg:left-36 w-24 lg:w-36 h-24 lg:h-36 pointer-events-none select-none z-10 hidden md:block">
        <Image
          src="/assets/d5e9c4dc379dbf3d1f6679a4423483f6766a7931.png"
          alt="White Squiggly Ribbon"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      {/* 3. Left Bottom: Large White Tilted Torus / Donut (4:30) */}
      <div className="absolute bottom-10 -left-6 sm:left-4 lg:left-12 w-48 sm:w-60 lg:w-68 h-48 sm:h-60 lg:h-68 pointer-events-none select-none z-20">
        <Image
          src="/assets/6be36b89bfec399afb445a39d9bf4cb181332d48.png"
          alt="White 3D Torus"
          width={270}
          height={270}
          className="object-contain"
        />
      </div>

      {/* 4. Right Top: Neon Lime Cylinder (1:674) */}
      <div className="absolute top-[240px] -right-8 sm:right-0 lg:right-6 xl:right-12 w-44 lg:w-60 h-44 lg:h-60 pointer-events-none select-none z-10 hidden sm:block">
        <Image
          src="/assets/f1057d714a93edf29b02a9dbdb4fc552fd7ab847.png"
          alt="Lime 3D Cylinder"
          width={240}
          height={240}
          className="object-contain"
        />
      </div>

      {/* 5. Right Middle: White 3D Pyramid / Tetrahedron (46:81) */}
      <div className="absolute top-[460px] right-16 sm:right-28 lg:right-40 w-28 lg:w-40 h-28 lg:h-40 pointer-events-none select-none z-10 hidden md:block">
        <Image
          src="/assets/f9c0e0fd05db48405aa72287b20d04b9a01feb51.png"
          alt="White 3D Pyramid"
          width={160}
          height={160}
          className="object-contain"
        />
      </div>

      {/* 6. Right Bottom: White Vertical Wavy Spring Noodle (46:86) */}
      <div className="absolute bottom-8 -right-8 sm:right-4 lg:right-12 w-40 sm:w-52 lg:w-64 h-52 sm:h-68 lg:h-76 pointer-events-none select-none z-20">
        <Image
          src="/assets/cda676feaf7fba8b0f81b47c5ea2707d7acb5217.png"
          alt="White Wavy Spring"
          width={260}
          height={300}
          className="object-contain"
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-20 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-white leading-[1.12] max-w-4xl mx-auto">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar - White input pill + Lime Search button pill */}
        <div className="mt-8 flex justify-center items-center">
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-3 sm:gap-4 max-w-[580px] w-full"
          >
            <div className="flex-1 flex items-center bg-white rounded-full px-5 py-3 shadow-lg transition-all focus-within:ring-2 focus-within:ring-[#CBFC01]">
              <Search className="w-5 h-5 text-[#71767B] mr-3 shrink-0" strokeWidth={2} />
              <input
                type="text"
                placeholder="Course, topic, creator"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-[#242528] placeholder-[#71767B] text-[16px] outline-none font-normal"
              />
            </div>
            <button
              type="submit"
              className="bg-[#CBFC01] hover:bg-[#b8e800] text-[#242528] font-medium text-[16px] px-7 py-3 rounded-full transition-transform active:scale-95 shadow-md shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* ================= HERO STAGE ================= */}
        <div className="relative mt-8 sm:mt-12 max-w-[920px] mx-auto flex justify-center items-end min-h-[460px] sm:min-h-[520px]">
          {/* Neon Lime Circular Ring (Ellipse 7) behind student */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[680px] sm:w-[860px] md:w-[1020px] aspect-square pointer-events-none select-none z-0 translate-y-[32%]"
            aria-hidden="true"
          >
            <Image
              src="/assets/ellipse_7.svg"
              alt=""
              width={1149}
              height={1149}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Centered Student Photo */}
          <div className="relative w-[340px] sm:w-[480px] md:w-[560px] h-[340px] sm:h-[480px] md:h-[530px] z-10 flex items-end justify-center">
            <Image
              src="/assets/29a52a24e51266edcd7d57d73392ee5fc4833220.png"
              alt="ByteSpace Student with headphones and laptop"
              width={578}
              height={541}
              priority
              className="object-contain object-bottom drop-shadow-2xl h-full w-auto"
            />
          </div>

          {/* FLOATING CARD 1: UI/UX Design (Left Top of Student) */}
          <div className="absolute left-1 sm:left-4 md:-left-6 top-16 sm:top-24 z-20 bg-white text-[#242528] rounded-[20px] px-5 py-4 shadow-2xl border border-gray-100 text-left min-w-[190px] sm:min-w-[210px] animate-in fade-in duration-300">
            <h4 className="text-[16px] font-bold text-[#242528] leading-tight">
              UI/UX Design
            </h4>
            <div className="flex items-center gap-1.5 text-xs text-[#71767B] mt-1 font-normal">
              <span>200 Courses</span>
              <span className="text-[#71767B]">•</span>
              <span>1000+ Students</span>
            </div>
          </div>

          {/* FLOATING CARD 2: Learning Progress with Horizontal Bar (Right of Student) */}
          <div className="absolute right-1 sm:right-4 md:-right-6 top-28 sm:top-36 z-20 bg-white text-[#242528] rounded-[20px] p-5 sm:p-6 shadow-2xl border border-gray-100 text-left w-[200px] sm:w-[230px]">
            <h5 className="text-xs text-[#71767B] font-medium">Learning Progress</h5>
            <div className="text-3xl sm:text-[36px] font-bold text-[#242528] tracking-tight mt-1 leading-none">
              55%
            </div>
            {/* Horizontal progress bar */}
            <div className="w-full bg-[#F0F0F2] h-2 rounded-full mt-3 overflow-hidden">
              <div className="bg-[#CBFC01] h-full rounded-full w-[55%]" />
            </div>
          </div>

          {/* FLOATING CARD 3: Happy Students (Left Bottom near laptop) */}
          <div className="absolute left-0 sm:left-2 md:-left-10 bottom-6 sm:bottom-12 z-20 bg-white text-[#242528] rounded-[20px] p-4 sm:p-5 shadow-2xl border border-gray-100 text-left min-w-[230px] sm:min-w-[260px]">
            <div className="space-y-1">
              <h5 className="text-[14px] font-semibold text-[#242528]">Happy Students</h5>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-[#242528]">4.5</span>
                <span className="text-xs text-[#71767B] font-medium">(240)</span>
                <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B] ml-0.5" />
              </div>
            </div>

            {/* Overlapping Avatars Row */}
            <div className="flex items-center mt-3 -space-x-2">
              {studentAvatars.map((avatar, idx) => (
                <div
                  key={idx}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden relative shadow-xs shrink-0"
                >
                  <Image
                    src={avatar}
                    alt="Student"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-[#CBFC01] text-[#242528] text-[10px] sm:text-[11px] font-bold flex items-center justify-center shrink-0">
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
