import React from "react";
import Link from "next/link";
import { CheckCircle2, Star, Calendar, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { SparkleStar, GeometricAsterisk } from "@/components/ui/DecorativeElements";

export default function TutorSection() {
  const perks = [
    "Personalized 1-on-1 live code & design reviews with industry leads",
    "Tailored career roadmaps, resume feedback, and mock technical interviews",
    "Direct messaging channel access for real-time debugging help",
    "Lifetime networking opportunities with our global alumni network",
  ];

  return (
    <section id="mentors" className="py-20 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Mentor Visual & Graphic Cards */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Lime Backdrop Shape */}
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl bg-[#CEFF00] -z-0 rotate-12 opacity-80" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-[#0D50E8]/10 -z-0" />

              {/* Main Image */}
              <div className="relative z-10 w-full h-[440px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                  alt="Senior mentor explaining code"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge 1: 1-on-1 Sessions */}
              <div className="absolute top-8 -left-4 sm:-left-8 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#CEFF00] text-[#0B0F19] flex items-center justify-center font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Weekly AMAs</div>
                  <div className="text-sm font-extrabold text-slate-900">1-on-1 Office Hours</div>
                </div>
              </div>

              {/* Floating Badge 2: Mentor Satisfaction */}
              <div className="absolute bottom-8 -right-4 sm:-right-8 z-20 bg-[#0B0F19] text-white p-4 rounded-2xl shadow-2xl border border-slate-800 flex items-center gap-3 max-w-[220px]">
                <div className="w-10 h-10 rounded-xl bg-[#0D50E8] text-white flex items-center justify-center font-bold shrink-0">
                  <Star className="w-5 h-5 fill-[#CEFF00] text-[#CEFF00]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">4.98 / 5.0 Rating</div>
                  <div className="text-[11px] text-slate-400">Over 15k hours mentored</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#0D50E8]">
              <SparkleStar className="w-3.5 h-3.5 text-[#0D50E8]" />
              Mentorship Network
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Find the Best Tutor for Your Learning Journey
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Accelerate past tutorials by pairing with experienced staff engineers and design leaders. Get honest critique on your code, sharpen your systems thinking, and break into top companies.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 pt-2">
              {perks.map((perk, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#CEFF00] text-[#0B0F19] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 leading-snug">
                    {perk}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/courses"
                className="px-7 py-3.5 rounded-full font-bold text-sm bg-[#0D50E8] hover:bg-[#0B43C3] text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Find Your Mentor</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/signup"
                className="px-7 py-3.5 rounded-full font-bold text-sm bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 transition-colors"
              >
                Join Mentorship Tier
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
