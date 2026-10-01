"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { ByteSpaceLogo } from "@/components/ui/DecorativeElements";

const BROWSE_LINKS = [
  { label: "Featured Courses", href: "/courses" },
  { label: "Featured Categories", href: "/courses" },
  { label: "Business", href: "/courses?category=Business" },
  { label: "IT", href: "/courses?category=IT+%26+Software" },
  { label: "Design", href: "/courses?category=Design" },
  { label: "Development", href: "/courses?category=Development" },
  { label: "Marketing", href: "/courses?category=Marketing" },
  { label: "Photography", href: "/courses?category=Photography" },
  { label: "Finance", href: "/courses" },
  { label: "Sport", href: "/courses" },
];

const PLATFORM_LINKS = [
  { label: "Become a Creator", href: "/#creators" },
  { label: "Affiliate Program", href: "/courses" },
  { label: "Contact", href: "/courses" },
  { label: "Help", href: "/courses" },
  { label: "About", href: "/courses" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-white text-[#242528] pt-16 pb-12 border-t border-[#E5E7EB]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Main Footer Navigation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-[#E5E7EB]">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-6 space-y-5">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <ByteSpaceLogo textColor="#242528" />
            </Link>

            <p className="text-[16px] text-[#242528] font-medium max-w-md leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Subscription Form */}
            <form onSubmit={handleSubmit} className="pt-2 max-w-md">
              <div className="flex items-center bg-[#F5F5F6] rounded-full p-1.5 pl-5 border border-[#E5E7EB] focus-within:border-[#242528] transition-colors">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-transparent text-sm text-[#242528] placeholder-[#71767B] outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 bg-[#CBFC01] hover:bg-[#b8e800] text-[#242528] font-semibold text-sm px-6 py-2.5 rounded-full transition-transform active:scale-95 shadow-xs"
                >
                  <Search className="w-3.5 h-3.5 text-[#242528]" />
                  <span>{submitted ? "Subscribed!" : "Search "}</span>
                </button>
              </div>
            </form>

            <p className="text-xs text-[#71767B] leading-relaxed max-w-md">
              By subscribing, you agree to our{" "}
              <Link href="/privacy" className="underline hover:text-[#242528]">
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Browse & Platform Links */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:gap-12">
            {/* Column 1: Browse */}
            <div>
              <h4 className="text-[18px] font-semibold text-[#242528] mb-5">
                Browse
              </h4>
              <ul className="space-y-3 text-[15px] text-[#71767B]">
                {BROWSE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-[#0445FF] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Platform */}
            <div>
              <h4 className="text-[18px] font-semibold text-[#242528] mb-5">
                Platform
              </h4>
              <ul className="space-y-3 text-[15px] text-[#71767B]">
                {PLATFORM_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-[#0445FF] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71767B]">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#242528] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#242528] transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-[#242528] transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
