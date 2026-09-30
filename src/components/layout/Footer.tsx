"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2 } from "lucide-react";
import { ByteSpaceLogo, SparkleStar } from "@/components/ui/DecorativeElements";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#0B0F19] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block text-white">
              <div className="flex items-center gap-2.5 font-bold tracking-tight text-xl">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#0D50E8] text-white shadow-sm overflow-hidden">
                  <span className="text-lg font-black italic tracking-tighter">B</span>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#CEFF00] rounded-tl-sm" />
                </div>
                <div className="flex items-baseline">
                  <span className="font-extrabold tracking-tight text-white">Byte</span>
                  <span className="font-semibold text-[#0D50E8]">Space</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CEFF00] ml-0.5" />
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              ByteSpace is the premier online learning platform empowering over 50,000+ ambitious designers and engineers to master cutting-edge industry skills.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#0D50E8] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#0D50E8] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#0D50E8] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#0D50E8] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 flex items-center gap-1.5">
              <SparkleStar className="w-3 h-3 text-[#CEFF00]" />
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">
                  Explore Courses
                </Link>
              </li>
              <li>
                <Link href="/#mentors" className="hover:text-white transition-colors">
                  Find Mentors
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">
                  Career Tracks
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-white transition-colors">
                  Free Student Tier
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Student Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 flex items-center gap-1.5">
              <SparkleStar className="w-3 h-3 text-[#CEFF00]" />
              Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/courses?category=Design" className="hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/courses?category=Development" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/courses?category=Data+Science" className="hover:text-white transition-colors">
                  AI & Data Science
                </Link>
              </li>
              <li>
                <Link href="/courses?category=Marketing" className="hover:text-white transition-colors">
                  Growth Marketing
                </Link>
              </li>
              <li>
                <Link href="/courses?category=Business" className="hover:text-white transition-colors">
                  Product & Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 flex items-center gap-1.5">
              <SparkleStar className="w-3 h-3 text-[#CEFF00]" />
              Stay Updated
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed mb-3">
              Subscribe to get notified about new masterclasses, scholarships, and engineering insights.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-950/80 border border-emerald-600 rounded-lg text-emerald-300 text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Thank you! You are subscribed.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0D50E8] focus:ring-1 focus:ring-[#0D50E8]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 px-3 py-1.5 rounded-md bg-[#CEFF00] hover:bg-[#bcec00] text-[#0B0F19] text-xs font-bold flex items-center gap-1 transition-colors"
                  >
                    Join
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ByteSpace Inc. All rights reserved. Designed for future builders.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="hover:text-slate-400 transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
