"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import { COURSES } from "@/data/coursesData";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { SparkleStar } from "@/components/ui/DecorativeElements";

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState<string>(initialCategory);
  const [level, setLevel] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("popular");

  const categories = ["All", "Design", "Development", "Data Science", "Marketing", "Business"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced", "All Levels"];

  const filteredCourses = useMemo(() => {
    return COURSES.filter((c) => {
      const matchSearch =
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        c.instructor.name.toLowerCase().includes(search.toLowerCase());

      const matchCategory = category === "All" || c.category === category;
      const matchLevel = level === "All" || c.level === level;

      return matchSearch && matchCategory && matchLevel;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return b.studentsCount - a.studentsCount; // default popular
    });
  }, [search, category, level, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-[#0D50E8] text-white py-14 border-b border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 backdrop-blur-md text-white border border-white/20">
              <SparkleStar className="w-3.5 h-3.5 text-[#CEFF00]" />
              Explore All Courses
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Master New Skills with Industry Mentors
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Explore 2,000+ interactive masterclasses in UI/UX Design, Full-Stack Engineering, AI Systems, and Growth Marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Course Grid Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Search & Filter Toolbar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses, instructors, or topics..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D50E8] focus:ring-1 focus:ring-[#0D50E8]"
              />
            </div>

            {/* Level Select */}
            <div className="md:col-span-3">
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 bg-white focus:outline-none focus:border-[#0D50E8]"
              >
                <option value="All">All Skill Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Sort Select */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 bg-white focus:outline-none focus:border-[#0D50E8]"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-slate-100 scrollbar-none">
            {categories.map((cat) => {
              const active = category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                    active
                      ? "bg-[#0D50E8] text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  {cat === "All" ? "All Categories" : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            Showing <span className="font-extrabold text-slate-900">{filteredCourses.length}</span> courses
          </p>
          {(category !== "All" || level !== "All" || search) && (
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
                setLevel("All");
              }}
              className="text-xs font-bold text-[#0D50E8] hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">No courses match your filter</h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto">
              Try adjusting your search keywords or switching category filters to see more results.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading courses catalog...</div>}>
      <CoursesContent />
    </Suspense>
  );
}
