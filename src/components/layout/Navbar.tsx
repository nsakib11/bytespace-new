"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, BookOpen, User, ArrowRight } from "lucide-react";
import { ByteSpaceLogo } from "@/components/ui/DecorativeElements";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Mentors", href: "/#mentors" },
    { label: "Why Us", href: "/#features" },
    { label: "Reviews", href: "/#testimonials" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <ByteSpaceLogo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#0D50E8] ${
                    isActive ? "text-[#0D50E8] font-semibold" : "text-slate-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/courses"
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              title="Search courses"
            >
              <Search className="w-5 h-5" />
            </Link>

            <Link
              href="/login"
              className="text-sm font-semibold text-slate-700 hover:text-[#0D50E8] px-3 py-2 transition-colors"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-[#CEFF00] hover:bg-[#bcec00] text-[#0B0F19] transition-all transform hover:-translate-y-0.5 shadow-sm active:translate-y-0"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden gap-2">
            <Link
              href="/courses"
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <Search className="w-5 h-5" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0D50E8]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg border border-slate-200 font-semibold text-slate-700 hover:bg-slate-50 text-sm"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg font-bold bg-[#CEFF00] hover:bg-[#bcec00] text-[#0B0F19] text-sm shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
