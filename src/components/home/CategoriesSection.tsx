import React from "react";
import Link from "next/link";
import {
  Palette,
  Code2,
  Cpu,
  Briefcase,
  Megaphone,
  Camera,
} from "lucide-react";

const CATEGORIES = [
  {
    name: "Design",
    icon: Palette,
    href: "/courses?category=Design",
  },
  {
    name: "Development",
    icon: Code2,
    href: "/courses?category=Development",
  },
  {
    name: "IT & Software",
    icon: Cpu,
    href: "/courses?category=IT+%26+Software",
  },
  {
    name: "Business",
    icon: Briefcase,
    href: "/courses?category=Business",
  },
  {
    name: "Marketing",
    icon: Megaphone,
    href: "/courses?category=Marketing",
  },
  {
    name: "Photography",
    icon: Camera,
    href: "/courses?category=Photography",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#242528] tracking-tight leading-[1.2]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-[16px] text-[#71767B] font-normal leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 justify-center items-center">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                href={cat.href}
                className="group flex flex-col items-center justify-center aspect-square rounded-[24px] border border-[#E5E7EB] bg-white p-5 transition-all duration-300 hover:border-[#242528] hover:shadow-lg hover:-translate-y-1"
              >
                {/* Lime Circular Icon Container */}
                <div className="w-[60px] h-[60px] rounded-full bg-[#CBFC01] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Icon className="w-7 h-7 text-[#242528]" strokeWidth={2} />
                </div>

                {/* Category Name */}
                <span className="text-[17px] sm:text-[18px] font-semibold text-[#242528] text-center tracking-tight leading-snug">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
