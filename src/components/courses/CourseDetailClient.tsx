"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Course } from "@/data/coursesData";
import {
  Star,
  Clock,
  BookOpen,
  Users,
  Award,
  Play,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  FileCode,
  ArrowRight,
} from "lucide-react";

interface CourseDetailClientProps {
  course: Course;
}

export default function CourseDetailClient({ course }: CourseDetailClientProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "curriculum" | "instructor">("curriculum");
  const [openModules, setOpenModules] = useState<Record<number, boolean>>({ 0: true, 1: true });
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const toggleModule = (index: number) => {
    setOpenModules((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Course Header Banner */}
      <section className="bg-[#0D50E8] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#CEFF00] text-[#0B0F19]">
                  {course.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-sm">
                  {course.level}
                </span>
                {course.badge && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white">
                    {course.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
                {course.shortDescription}
              </p>

              {/* Course Meta Info */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-blue-100">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-300">
                    <Star className="w-4 h-4 fill-amber-300 stroke-amber-300" />
                  </div>
                  <span className="font-bold text-white">{course.rating.toFixed(1)}</span>
                  <span>({course.reviewsCount} ratings)</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-blue-200" />
                  <span>{course.studentsCount.toLocaleString()} students enrolled</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-200" />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Instructor mini bar */}
              <div className="flex items-center gap-3 pt-3">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white/30"
                />
                <div className="text-xs">
                  <div className="text-blue-200">Created by</div>
                  <div className="font-bold text-white text-sm">{course.instructor.name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Video player, Tabs, and Curriculum */}
          <div className="lg:col-span-8 space-y-8">
            {/* Interactive Video Player Mock */}
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-200">
              {isPlayingVideo ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0D50E8] flex items-center justify-center mb-4 animate-pulse">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Interactive Lesson Preview Playing</h3>
                  <p className="text-xs text-slate-400 max-w-sm mb-4">
                    Sample curriculum video is active. Full high-definition interactive player with bookmarks and transcript is unlocked upon enrollment.
                  </p>
                  <button
                    onClick={() => setIsPlayingVideo(false)}
                    className="px-4 py-1.5 rounded-lg bg-white/20 text-xs font-semibold hover:bg-white/30"
                  >
                    Close Preview
                  </button>
                </div>
              ) : (
                <>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex flex-col items-center justify-center p-4">
                    <button
                      onClick={() => setIsPlayingVideo(true)}
                      className="w-20 h-20 rounded-full bg-[#CEFF00] hover:bg-[#bcec00] text-[#0B0F19] flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 group"
                    >
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </button>
                    <span className="mt-3 text-xs sm:text-sm font-bold text-white uppercase tracking-wider bg-black/60 px-3.5 py-1 rounded-full">
                      Preview Course Trailer
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-slate-200 gap-8 text-sm font-bold">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`pb-4 border-b-2 transition-colors ${
                  activeTab === "curriculum"
                    ? "border-[#0D50E8] text-[#0D50E8]"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                Curriculum Syllabus
              </button>
              <button
                onClick={() => setActiveTab("overview")}
                className={`pb-4 border-b-2 transition-colors ${
                  activeTab === "overview"
                    ? "border-[#0D50E8] text-[#0D50E8]"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                Course Overview
              </button>
              <button
                onClick={() => setActiveTab("instructor")}
                className={`pb-4 border-b-2 transition-colors ${
                  activeTab === "instructor"
                    ? "border-[#0D50E8] text-[#0D50E8]"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                Instructor
              </button>
            </div>

            {/* Tab: Curriculum Syllabus */}
            {activeTab === "curriculum" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">
                    Course Content ({course.lessonsCount} lessons)
                  </h3>
                  <button
                    onClick={() => {
                      const allOpen = Object.keys(openModules).length === course.modules.length;
                      if (allOpen) {
                        setOpenModules({});
                      } else {
                        const newOpen: Record<number, boolean> = {};
                        course.modules.forEach((_, i) => (newOpen[i] = true));
                        setOpenModules(newOpen);
                      }
                    }}
                    className="text-xs font-bold text-[#0D50E8] hover:underline"
                  >
                    Toggle all sections
                  </button>
                </div>

                {course.modules.length > 0 ? (
                  course.modules.map((module, mIdx) => {
                    const isOpen = !!openModules[mIdx];
                    return (
                      <div
                        key={mIdx}
                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
                      >
                        <button
                          onClick={() => toggleModule(mIdx)}
                          className="w-full px-6 py-4 flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/80 transition-colors text-left"
                        >
                          <div>
                            <span className="font-bold text-sm text-slate-900 block">
                              {module.title}
                            </span>
                            <span className="text-xs text-slate-500">
                              {module.lessonsCount} lessons • {module.totalDuration}
                            </span>
                          </div>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="divide-y divide-slate-100 px-6 py-2">
                            {module.lessons.map((lesson, lIdx) => (
                              <div
                                key={lIdx}
                                className="py-3 flex items-center justify-between text-xs sm:text-sm text-slate-700"
                              >
                                <div className="flex items-center gap-3">
                                  <Play className="w-4 h-4 text-slate-400 shrink-0" />
                                  <span className="font-medium text-slate-800">{lesson.title}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  {lesson.isPreview && (
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#CEFF00] text-[#0B0F19]">
                                      Preview
                                    </span>
                                  )}
                                  <span className="text-xs text-slate-400 font-mono">
                                    {lesson.duration}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center text-sm text-slate-500">
                    Comprehensive modules and video lectures are included with full syllabus documentation.
                  </div>
                )}
              </div>
            )}

            {/* Tab: Overview */}
            {activeTab === "overview" && (
              <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">About this Course</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{course.overview}</p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-4">What You Will Learn</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.whatYouWillLearn.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Instructor */}
            {activeTab === "instructor" && (
              <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-6">
                <div className="flex items-center gap-5">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-16 h-16 rounded-2xl object-cover ring-2 ring-slate-100"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{course.instructor.name}</h3>
                    <p className="text-sm text-[#0D50E8] font-semibold">{course.instructor.role}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mt-2 font-medium">
                      <span>★ {course.instructor.rating} Instructor Rating</span>
                      <span>• {course.instructor.studentsCount.toLocaleString()} Students</span>
                      <span>• {course.instructor.coursesCount} Courses</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{course.instructor.bio}</p>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Purchase Card */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xl space-y-6">
              {/* Pricing */}
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-slate-900">
                    ${course.price.toFixed(2)}
                  </span>
                  <span className="text-base text-slate-400 line-through">
                    ${course.originalPrice.toFixed(2)}
                  </span>
                  <span className="px-2 py-0.5 rounded text-xs font-extrabold bg-[#CEFF00] text-[#0B0F19]">
                    50% OFF
                  </span>
                </div>
                <p className="text-xs text-rose-600 font-semibold mt-1">
                  ⚡ Special launch discount ending soon
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => alert(`Enrolled in ${course.title}! Welcome to ByteSpace.`)}
                  className="w-full py-4 rounded-2xl bg-[#0D50E8] hover:bg-[#0B43C3] text-white font-extrabold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <span>Enroll in Course</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/signup"
                  className="w-full py-3 rounded-2xl bg-[#CEFF00] hover:bg-[#bcec00] text-[#0B0F19] font-bold text-xs flex items-center justify-center transition-colors"
                >
                  Start with Free Trial
                </Link>
              </div>

              <div className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                14-day 100% money-back guarantee
              </div>

              {/* Includes checklist */}
              <div className="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-700">
                <div className="font-bold text-slate-900 text-sm">This course includes:</div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{course.duration} on-demand video</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FileCode className="w-4 h-4 text-slate-400" />
                  <span>Downloadable source files & Figma tokens</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-slate-400" />
                  <span>Verifiable Certificate of Completion</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-slate-400" />
                  <span>Access to private Discord mentor channels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
