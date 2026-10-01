import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Course } from "@/data/coursesData";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group bg-white rounded-[20px] border border-[#E5E7EB] p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
      {/* Thumbnail Banner */}
      <Link href={`/courses/${course.id}`} className="relative aspect-[341/195] w-full overflow-hidden rounded-[14px] bg-[#F5F5F6] block">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Content Container */}
      <div className="pt-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Row: Lessons • Duration • Comments */}
          <div className="flex items-center gap-1.5 text-xs text-[#71767B] font-medium mb-2">
            <span>{course.lessonsCount} Lessons</span>
            <span>•</span>
            <span>{course.duration}</span>
            <span>•</span>
            <span>{course.commentsCount || 59} Comments</span>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-[18px] text-[#242528] group-hover:text-[#0445FF] transition-colors line-clamp-1 leading-snug mb-1">
            <Link href={`/courses/${course.id}`}>
              {course.title}
            </Link>
          </h3>

          {/* Instructor Subtitle */}
          <p className="text-xs text-[#71767B] font-normal mb-3">
            by {course.instructor.name}
          </p>

          {/* Level and Students Avatars Stack */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F5F5F6] text-[#242528] text-xs font-medium">
              {course.level}
            </span>

            {/* Avatars Stack + Count */}
            <div className="flex items-center -space-x-2">
              <div className="w-6 h-6 rounded-full border border-white overflow-hidden relative">
                <Image
                  src="/assets/3fe559181733e0fb69226caee836e40092facb44.png"
                  alt="Student"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
              <div className="w-6 h-6 rounded-full border border-white overflow-hidden relative">
                <Image
                  src="/assets/0577f0e9b7fca2f32639871454da0de95f951709.png"
                  alt="Student"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
              <div className="w-6 h-6 rounded-full border border-white overflow-hidden relative">
                <Image
                  src="/assets/d0cd3adb501c64c1b4cf766de6abb9fe8925fb5f.png"
                  alt="Student"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
              <span className="w-6 h-6 rounded-full border border-white bg-[#CBFC01] text-[#242528] text-[10px] font-bold flex items-center justify-center">
                {course.studentsBadge || "26+"}
              </span>
            </div>
          </div>
        </div>

        {/* Pricing & Rating Row */}
        <div className="flex items-center justify-between pt-3 border-t border-[#E5E7EB]">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-[#242528] tracking-tight">
              ${course.price}
            </span>
            <span className="text-xs text-[#71767B] font-medium">
              {course.period || "/lifetime"}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
            <span className="text-sm font-bold text-[#242528]">{course.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
