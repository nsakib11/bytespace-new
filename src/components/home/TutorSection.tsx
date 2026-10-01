import React from "react";
import Image from "next/image";
import { Check, Star, TrendingUp } from "lucide-react";

const CHECKLIST = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function TutorSection() {
  return (
    <section id="creators" className="py-20 lg:py-28 bg-[#F5F5F6]/60 border-b border-[#E5E7EB] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Instructor Photo & Telemetry Badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center order-2 lg:order-1">
            {/* Background container */}
            <div className="relative w-full max-w-[480px] h-[500px] sm:h-[560px] rounded-[32px] bg-white border border-[#E5E7EB] overflow-hidden flex items-end justify-center shadow-lg">
              <Image
                src="/assets/0d6596fb1df66aaf843ee85722f439fada233946.png"
                alt="ByteSpace Creator"
                width={435}
                height={596}
                className="object-contain object-bottom h-[94%] w-auto"
              />
            </div>

            {/* Floating Revenue Card 1 (Left Top) */}
            <div className="absolute -left-3 sm:left-2 top-8 sm:top-14 z-20 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 text-left min-w-[180px]">
              <div className="flex items-center justify-between text-xs text-[#71767B] font-medium mb-1">
                <span>Total Revenue</span>
                <span className="text-[11px]">July 1-28</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xl font-bold text-[#242528]">$120.29</span>
                <span className="inline-flex items-center text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  +12$
                </span>
              </div>
            </div>

            {/* Floating Revenue Card 2 (Right Center) */}
            <div className="absolute -right-3 sm:right-2 top-48 sm:top-56 z-20 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 text-left min-w-[190px]">
              <div className="flex items-center justify-between text-xs text-[#71767B] font-medium mb-1">
                <span>Year to Date</span>
                <span className="text-[11px]">2023</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xl font-bold text-[#242528]">$1,200.38</span>
                <span className="inline-flex items-center text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  +12$
                </span>
              </div>
            </div>

            {/* Floating Happy Students Badge (Bottom Left) */}
            <div className="absolute -left-2 sm:left-6 bottom-6 sm:bottom-10 z-20 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 text-left">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h5 className="text-xs font-semibold text-[#242528]">Happy Students</h5>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    <span className="text-xs font-bold text-[#242528]">4.5</span>
                    <span className="text-xs text-[#71767B]">(240)</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-2.5 -space-x-2">
                <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative">
                  <Image
                    src="/assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png"
                    alt="Student"
                    width={28}
                    height={28}
                    className="object-cover"
                  />
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative">
                  <Image
                    src="/assets/83fb3e04056cc892636460bee5791aa3f243854c.png"
                    alt="Student"
                    width={28}
                    height={28}
                    className="object-cover"
                  />
                </div>
                <span className="w-7 h-7 rounded-full border-2 border-white bg-[#CBFC01] text-[#242528] text-[10px] font-bold flex items-center justify-center">
                  2K+
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#242528] tracking-tight leading-[1.2]">
              Create & Manage Courses Easily.
            </h2>

            <p className="text-[16px] text-[#71767B] font-normal leading-relaxed">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <div className="space-y-4 pt-4">
              {CHECKLIST.map((item) => (
                <div key={item} className="flex items-center gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#0445FF] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[17px] font-medium text-[#242528]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
