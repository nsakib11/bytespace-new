import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function PromoBannerSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Blue Curved Container */}
        <div className="relative rounded-[32px] bg-[#0445FF] overflow-hidden px-8 py-16 sm:px-12 sm:py-20 text-center text-white shadow-2xl">
          {/* Subtle Grid Pattern Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-15"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Left Floating 3D Cone */}
          <div className="absolute -top-10 -left-10 w-44 lg:w-60 h-44 lg:h-60 pointer-events-none select-none z-10 hidden sm:block opacity-90">
            <Image
              src="/assets/5b3686bc5eadc510e3e04da588f9299d8bd3194c.png"
              alt="3D Cone"
              width={240}
              height={240}
              className="object-contain"
            />
          </div>

          {/* Right Floating 3D Cone/Torus */}
          <div className="absolute -bottom-10 -right-10 w-48 lg:w-64 h-48 lg:h-64 pointer-events-none select-none z-10 hidden sm:block opacity-90">
            <Image
              src="/assets/92fc70a39c36138c0e55699b18b3e88bd1f86a59.png"
              alt="3D Ornament"
              width={260}
              height={260}
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="relative z-20 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#F5F5F6] tracking-tight leading-[1.2]">
              Unlock Your Potential as a Creator with ByteSpace
            </h2>

            <p className="text-[16px] text-[#F5F5F6]/90 font-normal leading-relaxed">
              Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
            </p>

            <div className="pt-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 bg-[#CBFC01] hover:bg-[#b8e800] text-[#242528] font-bold text-[16px] px-8 py-4 rounded-full transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#CBFC01]/20"
              >
                <span>Join as Creator</span>
                <ArrowUpRight className="w-5 h-5 text-[#242528]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
