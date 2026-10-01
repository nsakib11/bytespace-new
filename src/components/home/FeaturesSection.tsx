import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { STATS } from "@/data/coursesData";

export default function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E5E7EB] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#242528] tracking-tight leading-[1.2]">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="text-[16px] text-[#71767B] font-normal leading-relaxed">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* 3 Metric Counters */}
            <div className="pt-4 grid grid-cols-3 gap-6 border-t border-[#E5E7EB]">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-bold text-[#242528] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-[#71767B] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Stage with Student Image, Floating Course Card, and Progress Badge */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Background Rounded Container */}
            <div className="relative w-full max-w-[500px] h-[480px] sm:h-[540px] rounded-[32px] bg-[#E7F6FF] overflow-hidden flex items-end justify-center shadow-inner">
              <Image
                src="/assets/29a52a24e51266edcd7d57d73392ee5fc4833220.png"
                alt="Professional Student"
                width={500}
                height={520}
                className="object-contain object-bottom h-[90%] w-auto drop-shadow-md"
              />
            </div>

            {/* Floating Mini Course Card (Left Bottom) */}
            <div className="absolute -left-4 sm:left-2 bottom-6 sm:bottom-10 z-20 w-[240px] sm:w-[270px] bg-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-gray-100">
              <div className="relative aspect-[341/195] w-full rounded-xl overflow-hidden mb-2.5">
                <Image
                  src="/assets/93ad9f9e6bdb3c7f3c478820624ee19ad7320072.png"
                  alt="Learn Figma from Basic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-1 text-[10px] text-[#71767B] font-medium mb-1">
                <span>17 Lessons</span>
                <span>•</span>
                <span>2h 16m</span>
              </div>
              <h4 className="font-semibold text-xs sm:text-sm text-[#242528] line-clamp-1 mb-1">
                Learn Figma from Basic
              </h4>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-xs font-bold text-[#242528]">$25/lifetime</span>
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#242528]">
                  <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  <span>4.5</span>
                </div>
              </div>
            </div>

            {/* Floating Learning Progress Badge (Right Top) */}
            <div className="absolute -right-2 sm:right-4 top-8 sm:top-12 z-20 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 text-left">
              <h5 className="text-xs font-semibold text-[#242528]">Learning Progress</h5>
              <div className="flex items-center gap-3 mt-2">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
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
                  <span className="absolute text-[11px] font-bold text-[#242528]">55%</span>
                </div>
                <div className="text-[11px] text-[#71767B]">
                  <p className="font-semibold text-[#242528]">On Track</p>
                  <p>In Progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
