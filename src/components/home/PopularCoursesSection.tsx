"use client";

import React, { useState } from "react";
import { COURSES, FILTER_PILLS } from "@/data/coursesData";
import CourseCard from "@/components/courses/CourseCard";

export default function PopularCoursesSection() {
  const [selectedTag, setSelectedTag] = useState<string>("Featured");

  // Filter courses based on tag (or show all 6 when Featured / + More is selected)
  const filteredCourses = React.useMemo(() => {
    if (selectedTag === "Featured" || selectedTag === "+ More") {
      return COURSES;
    }
    const matched = COURSES.filter(
      (c) =>
        c.category.toLowerCase().includes(selectedTag.toLowerCase()) ||
        c.title.toLowerCase().includes(selectedTag.toLowerCase())
    );
    return matched.length > 0 ? matched : COURSES;
  }, [selectedTag]);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#242528] tracking-tight leading-[1.2]">
            Discover Your Passion, <br />
            Build Your Skills
          </h2>
          <p className="mt-4 text-[16px] text-[#71767B] font-normal leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* 3 Rows of Filter Pills from Figma */}
        <div className="flex flex-col items-center gap-3.5 mb-14 overflow-x-auto pb-2 scrollbar-none">
          {FILTER_PILLS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex items-center justify-center gap-2.5 flex-wrap"
            >
              {row.map((tag) => {
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap active:scale-95 ${
                      isActive
                        ? "bg-[#CBFC01] text-[#242528] font-semibold shadow-sm"
                        : "bg-white text-[#242528] border border-[#E5E7EB] hover:border-[#242528] hover:bg-[#F5F5F6]"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* 6 Course Cards in a 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
