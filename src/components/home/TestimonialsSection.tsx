import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/coursesData";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Two-column Section Header from Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#242528] tracking-tight leading-[1.2]">
              Discover What Our Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[16px] text-[#71767B] font-normal leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-[24px] border border-[#E5E7EB] p-8 bg-white flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#242528] transition-all duration-300"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-6 text-[#F59E0B]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#242528] text-[15px] sm:text-[16px] font-normal leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-[#E5E7EB]">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border border-[#E5E7EB] shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-base text-[#242528]">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-[#71767B] font-medium mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
