"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { COURSES } from "@/data/coursesData";
import CourseCard from "@/components/courses/CourseCard";
import { SparkleStar } from "@/components/ui/DecorativeElements";

const CATEGORIES = ["All", "Design", "Development", "Marketing", "Business", "Data Science"] as const;

export default function PopularCoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredCourses =
    selectedCategory === "All"
      ? COURSES
      : COURSES.filter((c) => c.category === selectedCategory);

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0D50E8] bg-[#EEF4FF] px-3 py-1 rounded-full">
              <SparkleStar className="w-3.5 h-3.5 text-[#0D50E8]" />
              Popular Programs
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Our Popular Courses
            </h2>
            <p className="text-slate-600 text-base max-w-xl">
              Curated masterclasses taught by senior professionals with interactive assignments and peer reviews.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0D50E8] hover:text-[#0B43C3] group self-start md:self-auto"
          >
            <span>See All 2,000+ Courses</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#0D50E8] text-white shadow-md shadow-blue-500/20"
                    : "bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200"
                }`}
              >
                {category === "All" ? "All Courses" : category}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white border border-slate-300 text-slate-900 hover:border-[#0D50E8] hover:text-[#0D50E8] shadow-sm hover:shadow transition-all"
          >
            Browse Full Course Catalog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
