"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import { COURSES } from "@/data/coursesData";
import { Search } from "lucide-react";

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState<string>(initialCategory);
  const [level, setLevel] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("popular");

  const categories = [
    "All",
    "Design",
    "Development",
    "IT & Software",
    "Business",
    "Marketing",
    "Photography",
  ];

  const filteredCourses = useMemo(() => {
    return COURSES.filter((c) => {
      const matchSearch =
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        c.instructor.name.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        category === "All" ||
        c.category.toLowerCase().includes(category.toLowerCase());
      const matchLevel = level === "All" || c.level === level;

      return matchSearch && matchCategory && matchLevel;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return b.studentsCount - a.studentsCount;
    });
  }, [search, category, level, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-[#0445FF] text-white py-14 lg:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F6]">
            Explore Courses
          </h1>
          <p className="mt-4 text-[16px] text-[#F5F5F6]/90 font-normal leading-relaxed">
            Discover your passion and build your skills with ByteSpace courses across technology, design, and business.
          </p>
        </div>
      </section>

      {/* Filter and Course Grid Container */}
      <main className="flex-1 max-w-[1240px] mx-auto px-6 lg:px-8 py-12 w-full">
        {/* Search & Filter Toolbar */}
        <div className="bg-[#F5F5F6] p-5 rounded-[24px] border border-[#E5E7EB] mb-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#71767B] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses, instructors, or topics..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full border border-[#E5E7EB] text-sm text-[#242528] placeholder-[#71767B] focus:outline-none focus:border-[#242528] bg-white transition-colors"
              />
            </div>

            {/* Level Select */}
            <div className="md:col-span-3">
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full px-4 py-2.5 rounded-full border border-[#E5E7EB] text-sm text-[#242528] bg-white focus:outline-none focus:border-[#242528]"
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
                className="w-full px-4 py-2.5 rounded-full border border-[#E5E7EB] text-sm text-[#242528] bg-white focus:outline-none focus:border-[#242528]"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-[#CBFC01] text-[#242528] shadow-xs"
                      : "bg-white text-[#242528] border border-[#E5E7EB] hover:border-[#242528]"
                  }`}
                >
                  {cat === "All" ? "All Categories" : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm font-semibold text-[#71767B]">
            Showing <span className="text-[#242528] font-bold">{filteredCourses.length}</span>{" "}
            {filteredCourses.length === 1 ? "course" : "courses"}
          </p>

          {(search || category !== "All" || level !== "All") && (
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
                setLevel("All");
              }}
              className="text-xs font-semibold text-[#0445FF] hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#F5F5F6] rounded-[24px] border border-dashed border-[#E5E7EB] p-8">
            <h3 className="text-lg font-semibold text-[#242528]">No courses found</h3>
            <p className="text-sm text-[#71767B] mt-1">
              Try adjusting your search criteria or category filter.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
                setLevel("All");
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#0445FF] text-white text-xs font-bold hover:bg-[#0336CC] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white text-[#242528]">
          <div className="w-8 h-8 rounded-full border-2 border-[#0445FF] border-t-transparent animate-spin" />
        </div>
      }
    >
      <CoursesContent />
    </Suspense>
  );
}
