import React from "react";
import { notFound } from "next/navigation";
import { COURSES } from "@/data/coursesData";
import CourseDetailClient from "@/components/courses/CourseDetailClient";

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    id: course.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = COURSES.find((c) => c.id === id);

  if (!course) {
    return {
      title: "Course Not Found - ByteSpace",
    };
  }

  return {
    title: `${course.title} - ByteSpace`,
    description: course.shortDescription,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = COURSES.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return <CourseDetailClient course={course} />;
}
