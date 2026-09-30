import React from "react";
import Link from "next/link";
import { Star, Clock, BookOpen, ArrowUpRight } from "lucide-react";
import { Course } from "@/data/coursesData";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
      {/* Thumbnail Banner */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category Pill */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-white/95 text-slate-900 shadow-sm backdrop-blur-sm">
            {course.category}
          </span>
          {course.badge && (
            <span className="px-2.5 py-1 text-xs font-extrabold rounded-lg bg-[#CEFF00] text-[#0B0F19] shadow-sm">
              {course.badge}
            </span>
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Row: Level & Duration */}
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5 font-medium">
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              {course.lessonsCount} Lessons
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {course.duration}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#0D50E8] transition-colors line-clamp-2 leading-snug mb-3">
            <Link href={`/courses/${course.id}`}>
              {course.title}
            </Link>
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center text-amber-500">
              <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
              <span className="ml-1 text-xs font-bold text-slate-900">{course.rating.toFixed(1)}</span>
            </div>
            <span className="text-xs text-slate-400">({course.reviewsCount} reviews)</span>
          </div>

          {/* Instructor Row */}
          <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100 mb-4">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-200"
            />
            <div className="text-xs">
              <div className="font-semibold text-slate-800">{course.instructor.name}</div>
              <div className="text-[11px] text-slate-400 line-clamp-1">{course.instructor.role}</div>
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <div className="text-xs text-slate-400 line-through font-medium">
              ${course.originalPrice.toFixed(2)}
            </div>
            <div className="text-xl font-black text-slate-900 tracking-tight">
              ${course.price.toFixed(2)}
            </div>
          </div>

          <Link
            href={`/courses/${course.id}`}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold bg-[#EEF4FF] text-[#0D50E8] hover:bg-[#0D50E8] hover:text-white transition-all shadow-sm group/btn"
          >
            Enroll Now
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
