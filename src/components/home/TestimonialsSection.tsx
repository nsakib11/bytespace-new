import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/coursesData";
import { SparkleStar } from "@/components/ui/DecorativeElements";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EEF4FF] text-[#0D50E8]">
            <SparkleStar className="w-3.5 h-3.5 text-[#0D50E8]" />
            Student Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Student&apos;s Feedback & Success Stories
          </h2>
          <p className="text-slate-600 text-base">
            Discover how ByteSpace helped professionals pivot careers, land high-paying tech jobs, and master complex engineering concepts.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div>
                {/* Top Row: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#EEF4FF] text-[#0D50E8] flex items-center justify-center">
                    <Quote className="w-4 h-4 fill-current" />
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100"
                />
                <div>
                  <div className="font-bold text-slate-900 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-slate-500 font-medium">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
