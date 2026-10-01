"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Star } from "lucide-react";
import { ByteSpaceLogo } from "@/components/ui/DecorativeElements";

export default function SignupPage() {
  const [fullName, setFullName] = useState("Jamie Davis");
  const [email, setEmail] = useState("designer@example.com");
  const [password, setPassword] = useState("password123");
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
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Container holding the split-screen card */}
      <div className="w-full max-w-[1200px] min-h-[700px] rounded-[32px] overflow-hidden border border-[#E5E7EB] shadow-2xl grid grid-cols-1 lg:grid-cols-12 bg-white">
        {/* Left Side: Deep Blue Hero Column */}
        <div className="lg:col-span-6 bg-[#0445FF] p-8 sm:p-12 text-white relative overflow-hidden flex flex-col justify-between min-h-[520px]">
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Floating 3D Cone ornament */}
          <div className="absolute top-1/2 -right-8 w-44 h-44 pointer-events-none select-none z-10 hidden sm:block opacity-90">
            <Image
              src="/assets/8670b841eac7883ecb790f84eb349c6c01db588b.png"
              alt="3D Cone"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>

          {/* Top: Logo & Title */}
          <div className="relative z-20 space-y-8">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <ByteSpaceLogo textColor="#F5F5F6" />
            </Link>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#F5F5F6] tracking-tight leading-tight">
                Sign up and come in
              </h2>
              <p className="text-[15px] text-[#F5F5F6]/90 font-normal leading-relaxed max-w-md">
                The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
              </p>
            </div>
          </div>

          {/* Bottom Visual: Stacked Course Card & Happy Students Badge */}
          <div className="relative z-20 pt-8 mt-auto">
            {/* Main Preview Course Card */}
            <div className="bg-white rounded-2xl p-4 shadow-xl text-[#242528] max-w-[340px] border border-white/20">
              <div className="relative aspect-[341/195] w-full rounded-xl overflow-hidden mb-2 bg-[#F5F5F6]">
                <Image
                  src="/assets/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.png"
                  alt="the Power of Big Data"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#71767B] font-medium mb-1">
                <span>17 Lessons</span>
                <span>•</span>
                <span>2 hours 16 mins</span>
                <span>•</span>
                <span>59 Comments</span>
              </div>
              <h4 className="font-semibold text-sm text-[#242528] line-clamp-1 mb-1">
                the Power of Big Data
              </h4>
              <p className="text-[11px] text-[#71767B] mb-2">by purepearl studio</p>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-xs font-bold text-[#242528]">$25/lifetime</span>
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#242528]">
                  <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  <span>4.5</span>
                </div>
              </div>
            </div>

            {/* Overlapping Happy Students Badge */}
            <div className="absolute right-0 -bottom-2 bg-white rounded-2xl p-3 shadow-2xl border border-gray-100 text-left hidden sm:block">
              <h6 className="text-[11px] font-semibold text-[#242528]">Happy Students</h6>
              <div className="flex items-center gap-1 mt-0.5">
                <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                <span className="text-xs font-bold text-[#242528]">4.5</span>
                <span className="text-[10px] text-[#71767B]">(240)</span>
              </div>
              <div className="flex items-center mt-2 -space-x-1.5">
                <Image
                  src="/assets/9ef8cb329b949267cc8214b6727067c4a13af4b4.png"
                  alt="Avatar"
                  width={22}
                  height={22}
                  className="w-5 h-5 rounded-full border border-white object-cover"
                />
                <Image
                  src="/assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png"
                  alt="Avatar"
                  width={22}
                  height={22}
                  className="w-5 h-5 rounded-full border border-white object-cover"
                />
                <span className="w-5 h-5 rounded-full border border-white bg-[#CBFC01] text-[#242528] text-[9px] font-bold flex items-center justify-center">
                  2K+
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Column */}
        <div className="lg:col-span-6 p-8 sm:p-14 lg:p-16 flex flex-col justify-center bg-white">
          <div className="max-w-[420px] w-full mx-auto space-y-6">
            <div>
              <span className="text-sm font-semibold text-[#0445FF]">
                Create an Account
              </span>
              <h1 className="text-3xl font-semibold text-[#242528] tracking-tight mt-1">
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
                    placeholder="********"
                    required
                    className="w-full px-4 py-3 rounded-full border border-[#E5E7EB] text-sm text-[#242528] placeholder-[#71767B] focus:outline-none focus:border-[#242528] bg-white transition-colors pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Continue Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 py-3.5 rounded-full bg-[#CBFC01] hover:bg-[#b8e800] text-[#242528] font-bold text-sm transition-all transform active:scale-95 shadow-md shadow-[#CBFC01]/20 disabled:opacity-50"
              >
                {isLoading ? "Creating account..." : "Continue"}
              </button>

              {/* Bottom Switch Link */}
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
    </div>
  );
}
