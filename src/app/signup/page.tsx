"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { ByteSpaceLogo } from "@/components/ui/DecorativeElements";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0445FF] flex flex-col lg:flex-row">
      {/* ── LEFT: Blue hero column ── */}
      <div className="relative lg:w-1/2 bg-[#0445FF] flex flex-col justify-between p-10 sm:p-14 lg:p-16 min-h-[480px] lg:min-h-screen overflow-hidden">
        {/* 120px Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "120px 120px",
          }}
        />

        {/* Top: Logo + tagline */}
        <div className="relative z-10 space-y-8">
          <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
            <ByteSpaceLogo textColor="#F5F5F6" />
          </Link>
          <div className="space-y-3 max-w-md">
            <h2 className="text-3xl sm:text-[40px] font-semibold text-white tracking-tight leading-tight">
              Sign up and come in
            </h2>
            <p className="text-[15px] text-white/85 font-normal leading-relaxed">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
            </p>
          </div>
        </div>

        {/* Bottom: Two stacked course cards + Happy Students badge */}
        <div className="relative z-10 mt-12 lg:mt-0">
          <div className="relative w-full max-w-[380px]">
            {/* Back card (Build Digital Asset) */}
            <div className="absolute -top-6 left-10 w-[340px] sm:w-[360px] bg-white rounded-2xl p-4 shadow-xl text-[#242528] opacity-80 pointer-events-none">
              <div className="relative aspect-[341/195] w-full rounded-xl overflow-hidden mb-2 bg-[#F5F5F6]">
                <Image
                  src="/assets/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.png"
                  alt="Build Digital Asset"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-semibold text-sm text-[#242528] mb-0.5">Build Digital Asset</h4>
              <p className="text-[11px] text-[#71767B]">by purepearl studio</p>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-2">
                <span className="text-xs font-bold text-[#30107A]">$25 <span className="font-normal text-[#71767B]">/lifetime</span></span>
                <span className="text-[11px] font-bold text-[#71767B]">4.5 ★</span>
              </div>
            </div>

            {/* Front card (Power of Big Data) */}
            <div className="relative bg-white rounded-2xl p-4 shadow-2xl text-[#242528] w-[340px] sm:w-[360px] mt-16">
              <div className="relative aspect-[341/195] w-full rounded-xl overflow-hidden mb-2 bg-[#F5F5F6]">
                <Image
                  src="/assets/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.png"
                  alt="the Power of Big Data"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#71767B] font-medium mb-1">
                <span>17 Lessons</span><span>•</span>
                <span>2 hours 16 mins</span><span>•</span>
                <span>59 Comments</span>
              </div>
              <h4 className="font-semibold text-sm text-[#242528] line-clamp-1 mb-1">the Power of Big Data</h4>
              <p className="text-[11px] text-[#71767B] mb-2">by purepearl studio</p>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-xs font-bold text-[#30107A]">$25 <span className="font-normal text-[#71767B]">/lifetime</span></span>
                <span className="text-[11px] font-bold text-[#71767B]">4.5 ★</span>
              </div>
            </div>

            {/* Happy Students badge – lime background */}
            <div className="absolute -right-4 -bottom-6 bg-[#CBFC01] rounded-2xl p-4 shadow-2xl text-[#242528] min-w-[200px]">
              <h6 className="text-sm font-bold text-[#242528]">Happy Students</h6>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-xs font-bold text-[#242528]">4.5</span>
                <span className="text-[11px] text-[#71767B]">(240)</span>
                <span className="text-[#0445FF] text-xs">★</span>
              </div>
              <div className="flex items-center mt-2 -space-x-1.5">
                {[
                  "/assets/9ef8cb329b949267cc8214b6727067c4a13af4b4.png",
                  "/assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png",
                  "/assets/83fb3e04056cc892636460bee5791aa3f243854c.png",
                  "/assets/f3cf29a8fed39589ceb38423e65b26b8d6c93123.png",
                  "/assets/5824acacb3b76175bc84084ec18597109498f96d.png",
                  "/assets/7fdccc783264eedc4fb989984eecbc4058a219f2.png",
                ].map((src, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden shrink-0">
                    <Image src={src} alt="Student" width={28} height={28} className="object-cover" />
                  </div>
                ))}
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#242528] text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                  2K+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT: White form column ── */}
      <div className="lg:w-1/2 bg-white flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-16 min-h-screen">
        <div className="max-w-[420px] w-full mx-auto space-y-6">
          <div>
            <span className="text-sm font-semibold text-[#0445FF]">Create an Account</span>
            <h1 className="text-[32px] sm:text-[40px] font-semibold text-[#242528] tracking-tight mt-1 leading-tight">
              Welcome to ByteSpace
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#242528]">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jamie Davis"
                required
                className="w-full px-4 py-3 rounded-full border border-[#E5E7EB] text-sm text-[#242528] placeholder-[#71767B] focus:outline-none focus:border-[#242528] bg-white transition-colors"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#242528]">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="designer@example.com"
                required
                className="w-full px-4 py-3 rounded-full border border-[#E5E7EB] text-sm text-[#242528] placeholder-[#71767B] focus:outline-none focus:border-[#242528] bg-white transition-colors"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#242528]">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 rounded-full border border-[#E5E7EB] text-sm text-[#242528] placeholder-[#71767B] focus:outline-none focus:border-[#242528] bg-white transition-colors pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Continue Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3.5 rounded-full bg-[#CBFC01] hover:bg-[#b8e800] text-[#242528] font-bold text-sm transition-all active:scale-95 shadow-md disabled:opacity-50"
            >
              {isLoading ? "Creating account..." : "Continue"}
            </button>

            {/* Footer link */}
            <div className="pt-4 text-center text-sm text-[#71767B]">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-[#0445FF] hover:underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
