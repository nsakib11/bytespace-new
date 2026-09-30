import React from "react";
import { PARTNERS } from "@/data/coursesData";

export default function PartnersSection() {
  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
          Trusted by 500+ forward-thinking tech companies & universities
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors cursor-default select-none"
            >
              <span className="text-xl sm:text-2xl font-black tracking-wider">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
