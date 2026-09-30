"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Mail, User, ArrowRight, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { ByteSpaceLogo, SparkleStar, GeometricAsterisk } from "@/components/ui/DecorativeElements";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!fullName || !email || !password) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!agreeTerms) {
      setErrorMessage("Please accept the terms and conditions to proceed.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Account created successfully! Preparing your onboarding...");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    }, 1000);
  };

  const benefits = [
    "Instant access to 10+ free starter courses and workshops",
    "Join 50,000+ engineers and designers in our live community",
    "Interactive cloud browser sandbox for hands-on practice",
    "Certificate of completion on every completed masterclass",
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Top Navbar */}
      <header className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <Link href="/">
          <ByteSpaceLogo />
        </Link>
        <div className="text-xs sm:text-sm text-slate-600">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-[#0D50E8] hover:underline">
            Sign In
          </Link>
        </div>
      </header>

      {/* Main Split-Screen Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
          {/* Left Hero Graphic Card */}
          <div className="hidden lg:flex lg:col-span-6 bg-[#0D50E8] rounded-3xl p-10 text-white relative overflow-hidden flex-col justify-between min-h-[620px] shadow-2xl">
            {/* Geometric Motifs */}
            <div className="absolute top-8 right-8 opacity-20 pointer-events-none">
              <SparkleStar className="w-16 h-16 text-[#CEFF00]" />
            </div>
            <div className="absolute -bottom-10 -left-10 opacity-20 pointer-events-none">
              <GeometricAsterisk className="w-32 h-32 text-[#CEFF00]" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 backdrop-blur-md text-white border border-white/20">
                <SparkleStar className="w-3.5 h-3.5 text-[#CEFF00]" />
                Join Free Today
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Level Up Your Career with ByteSpace
              </h2>
              <p className="text-blue-100 text-sm leading-relaxed max-w-md">
                Master Next.js, AI Engineering, and Modern UI/UX Design systems with guidance from industry leaders.
              </p>
            </div>

            {/* Benefits Checklist */}
            <div className="relative z-10 space-y-3.5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#CEFF00] text-[#0B0F19] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-blue-50 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="relative z-10 pt-4 border-t border-white/20 text-xs text-blue-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#CEFF00] animate-ping" />
                <span className="font-bold text-white">450+ Active Instructors Online</span>
              </div>
              <span className="text-blue-200">No credit card required</span>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-6 max-w-md mx-auto w-full py-4">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Create an Account
                </h1>
                <p className="text-slate-500 text-sm mt-1">
                  Start learning for free. No credit card required.
                </p>
              </div>

              {/* Social Signup */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => alert("Google Sign-Up integration ready")}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors shadow-xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.97 0 12s.45 3.83 1.25 5.42l4.03-3.15Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
                    />
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  onClick={() => alert("GitHub Sign-Up integration ready")}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current text-slate-900" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                  </svg>
                  GitHub
                </button>
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center">
                <div className="border-t border-slate-200 w-full" />
                <span className="bg-white px-3 text-xs text-slate-400 font-medium uppercase tracking-wider">
                  or email
                </span>
              </div>

              {/* Alert Feedback */}
              {errorMessage && (
                <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  {successMessage}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D50E8] focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="student@bytespace.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D50E8] focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Password (min 6 characters)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0D50E8] focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start">
                  <input
                    id="agree-terms"
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="h-4 w-4 mt-0.5 rounded border-slate-300 text-[#0D50E8] focus:ring-[#0D50E8]"
                  />
                  <label htmlFor="agree-terms" className="ml-2 block text-xs text-slate-600 leading-snug">
                    I agree to the ByteSpace Terms of Service, Privacy Policy, and Student Honor Code.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 rounded-xl bg-[#CEFF00] hover:bg-[#bcec00] text-[#0B0F19] font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 active:scale-98"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-800/30 border-t-slate-900 rounded-full animate-spin" />
                      Creating account...
                    </span>
                  ) : (
                    <>
                      <span>Create Free Account</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Notice */}
      <footer className="py-4 border-t border-slate-100 text-center text-xs text-slate-400">
        Already have an account?{" "}
        <Link href="/login" className="text-[#0D50E8] font-bold hover:underline">
          Sign In here
        </Link>
      </footer>
    </div>
  );
}
