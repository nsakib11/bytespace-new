"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ByteSpaceLogo } from "@/components/ui/DecorativeElements";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/#creators" },
  ];

  // If on home and not scrolled, keep it blended with the Figma hero blue #0445FF
  const navBg = isHome
    ? scrolled
      ? "bg-[#0445FF]/95 backdrop-blur-md border-b border-white/10 shadow-lg text-white"
      : "bg-transparent text-white"
    : "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] text-[#242528] shadow-sm";

  const linkClass = (isActive: boolean) =>
    isHome
      ? `text-[16px] font-medium transition-colors hover:text-[#CBFC01] ${
          isActive ? "text-[#CBFC01] font-semibold" : "text-white/90"
        }`
      : `text-[16px] font-medium transition-colors hover:text-[#0445FF] ${
          isActive ? "text-[#0445FF] font-semibold" : "text-[#71767B]"
        }`;

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${navBg}`}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[88px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <ByteSpaceLogo textColor={isHome ? "#F5F5F6" : "#242528"} />
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.label} href={link.href} className={linkClass(isActive)}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Menu */}
          <div className="hidden sm:flex items-center gap-6">
            <Link
              href="/login"
              className={
                isHome
                  ? "text-[16px] font-medium text-white/95 hover:text-[#CBFC01] transition-colors"
                  : "text-[16px] font-medium text-[#242528] hover:text-[#0445FF] transition-colors"
              }
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className={`inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${
                isHome
                  ? "bg-[#CBFC01] hover:bg-[#b8e800] text-[#242528] shadow-md shadow-[#CBFC01]/20"
                  : "bg-[#0445FF] hover:bg-[#0336CC] text-white shadow-md shadow-[#0445FF]/20"
              }`}
            >
              <span>Join Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isHome ? "text-white hover:bg-white/10" : "text-[#242528] hover:bg-gray-100"
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className={`sm:hidden border-b px-6 pt-4 pb-8 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200 ${
            isHome
              ? "bg-[#0445FF] border-white/15 text-white"
              : "bg-white border-[#E5E7EB] text-[#242528]"
          }`}
        >
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isHome ? "hover:bg-white/10 text-white" : "hover:bg-gray-50 text-[#242528]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div
            className={`pt-4 border-t flex flex-col gap-3 ${
              isHome ? "border-white/15" : "border-gray-100"
            }`}
          >
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-center py-3 rounded-full font-semibold text-sm transition-colors ${
                isHome
                  ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  : "bg-gray-100 hover:bg-gray-200 text-[#242528]"
              }`}
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full font-bold bg-[#CBFC01] hover:bg-[#b8e800] text-[#242528] text-sm shadow-md"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
