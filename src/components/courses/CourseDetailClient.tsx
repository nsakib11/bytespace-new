"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Course } from "@/data/coursesData";
import {
  Star,
  Clock,
  BookOpen,
  Users,
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
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Course Header Banner */}
      <section className="bg-[#0445FF] text-white py-14 lg:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#CBFC01] text-[#242528]">
                  {course.category}
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                  {course.level}
                </span>
                {course.badge && (
                  <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                    {course.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F5F6] leading-[1.2]">
                {course.title}
              </h1>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                {course.shortDescription}
              </p>

              {/* Course Meta Info */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-white/90">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  <span className="font-bold text-white">{course.rating.toFixed(1)}</span>
                  <span>({course.commentsCount || 59} comments)</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-white/80" />
                  <span>{course.studentsCount.toLocaleString()} students</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-white/80" />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Instructor mini bar */}
              <div className="flex items-center gap-3 pt-3">
                <div className="w-10 h-10 rounded-full overflow-hidden relative ring-2 ring-white/30">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="text-xs">
                  <div className="text-white/80">Created by</div>
                  <div className="font-semibold text-white text-sm">{course.instructor.name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="flex-1 max-w-[1240px] mx-auto px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Video Preview, Tabs & Curriculum */}
          <div className="lg:col-span-8 space-y-8">
            {/* Video Player Card */}
            <div className="relative aspect-[16/9] w-full rounded-[24px] overflow-hidden bg-black shadow-xl border border-[#E5E7EB]">
              {!isPlayingVideo ? (
                <>
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-6">
                    <span className="self-start px-3 py-1 rounded-full text-xs font-bold bg-[#CBFC01] text-[#242528]">
                      Free Preview
                    </span>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-white/80">Trailer</div>
                        <div className="text-base font-bold text-white">Course Overview & Setup</div>
                      </div>

                      <button
                        onClick={() => setIsPlayingVideo(true)}
                        className="w-14 h-14 rounded-full bg-[#CBFC01] hover:bg-[#b8e800] text-[#242528] flex items-center justify-center transition-transform hover:scale-110 shadow-lg"
                        aria-label="Play Video Preview"
                      >
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-white p-6 text-center">
                  <p className="text-lg font-bold mb-2">Interactive Video Stream Loaded</p>
                  <p className="text-xs text-gray-400 mb-4 max-w-sm">
                    In the full version, students get live scrubbing, bookmarking, and code sandbox syncing.
                  </p>
                  <button
                    onClick={() => setIsPlayingVideo(false)}
                    className="px-5 py-2 rounded-full text-xs font-bold bg-white/20 hover:bg-white/30 text-white"
                  >
                    Close Preview
                  </button>
                </div>
              )}
            </div>

            {/* Content Tabs */}
            <div className="border-b border-[#E5E7EB] flex items-center gap-8">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`py-4 text-base font-semibold border-b-2 transition-all ${
                  activeTab === "curriculum"
                    ? "border-[#0445FF] text-[#0445FF]"
                    : "border-transparent text-[#71767B] hover:text-[#242528]"
                }`}
              >
                Curriculum ({course.lessonsCount} Lessons)
              </button>
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-4 text-base font-semibold border-b-2 transition-all ${
                  activeTab === "overview"
                    ? "border-[#0445FF] text-[#0445FF]"
                    : "border-transparent text-[#71767B] hover:text-[#242528]"
                }`}
              >
                Course Overview
              </button>
              <button
                onClick={() => setActiveTab("instructor")}
                className={`py-4 text-base font-semibold border-b-2 transition-all ${
                  activeTab === "instructor"
                    ? "border-[#0445FF] text-[#0445FF]"
                    : "border-transparent text-[#71767B] hover:text-[#242528]"
                }`}
              >
                Instructor
              </button>
            </div>

            {/* Tab: Curriculum */}
            {activeTab === "curriculum" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-[#71767B] mb-2 font-medium">
                  <span>
                    {course.modules.length} Modules • {course.lessonsCount} Lessons
                  </span>
                  <span>{course.duration} Total Length</span>
                </div>

                {course.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="rounded-[20px] border border-[#E5E7EB] overflow-hidden bg-white shadow-xs"
                  >
                    <button
                      onClick={() => toggleModule(idx)}
                      className="w-full px-6 py-4 flex items-center justify-between bg-[#F5F5F6] hover:bg-gray-100 transition-colors text-left"
                    >
                      <div>
                        <h4 className="font-semibold text-base text-[#242528]">{mod.title}</h4>
                        <div className="text-xs text-[#71767B] mt-0.5">
                          {mod.lessonsCount} lessons • {mod.totalDuration}
                        </div>
                      </div>
                      {openModules[idx] ? (
                        <ChevronUp className="w-5 h-5 text-[#71767B]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#71767B]" />
                      )}
                    </button>

                    {openModules[idx] && (
                      <div className="divide-y divide-gray-100 px-6 py-2">
                        {mod.lessons.map((lesson, lIdx) => (
                          <div
                            key={lIdx}
                            className="py-3 flex items-center justify-between text-sm"
                          >
                            <div className="flex items-center gap-3">
                              <Play className="w-4 h-4 text-[#0445FF]" />
                              <span className="text-[#242528] font-medium">{lesson.title}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              {lesson.isPreview && (
                                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#CBFC01] text-[#242528]">
                                  Preview
                                </span>
                              )}
                              <span className="text-xs text-[#71767B]">{lesson.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Tab: Overview */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#242528] mb-3">About this course</h3>
                  <p className="text-[#71767B] leading-relaxed text-[16px]">{course.overview}</p>
                </div>

                <div className="p-6 rounded-[20px] bg-[#F5F5F6] border border-[#E5E7EB]">
                  <h4 className="font-semibold text-base text-[#242528] mb-4">
                    What you will learn
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.whatYouWillLearn.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0445FF] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#242528] font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Instructor */}
            {activeTab === "instructor" && (
              <div className="p-6 rounded-[20px] border border-[#E5E7EB] bg-white flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-20 h-20 rounded-full overflow-hidden relative ring-2 ring-[#CBFC01] shrink-0">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#242528]">{course.instructor.name}</h3>
                  <p className="text-xs font-semibold text-[#0445FF]">{course.instructor.role}</p>
                  <p className="text-sm text-[#71767B] leading-relaxed">{course.instructor.bio}</p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Checkout / Purchase Card */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-white rounded-[24px] border border-[#E5E7EB] p-6 shadow-xl space-y-6">
              {/* Pricing */}
              <div>
                <div className="text-xs font-semibold text-[#71767B] uppercase tracking-wider mb-1">
                  Lifetime Membership
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#242528] tracking-tight">
                    ${course.price}
                  </span>
                  <span className="text-sm text-[#71767B] font-medium">{course.period}</span>
                </div>
              </div>

              {/* Purchase Button */}
              <Link
                href="/signup"
                className="w-full py-4 rounded-full bg-[#CBFC01] hover:bg-[#b8e800] text-[#242528] font-bold text-center text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Enroll in Course</span>
                <ArrowRight className="w-4 h-4 text-[#242528]" />
              </Link>

              {/* Course Includes */}
              <div className="space-y-3 pt-4 border-t border-[#E5E7EB]">
                <h5 className="text-xs font-bold text-[#242528] uppercase tracking-wider">
                  This course includes:
                </h5>
                <ul className="space-y-2.5 text-xs text-[#71767B]">
                  <li className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#0445FF]" />
                    <span>{course.lessonsCount} on-demand video lessons</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0445FF]" />
                    <span>{course.duration} total duration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-[#0445FF]" />
                    <span>Full Figma source files & assets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0445FF]" />
                    <span>Certificate of completion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
