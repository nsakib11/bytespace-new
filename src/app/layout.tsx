import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ByteSpace - Master In-Demand Tech & Design Skills",
  description: "Get access to unlimited courses, industry-verified certificates, and 1-on-1 mentorship with senior engineering and design leaders.",
  keywords: ["online courses", "UI/UX design", "Next.js", "AI engineering", "coding bootcamp", "ByteSpace"],
  authors: [{ name: "ByteSpace Team" }],
  openGraph: {
    title: "ByteSpace - Master In-Demand Tech & Design Skills",
    description: "Get access to unlimited courses, industry-verified certificates, and 1-on-1 mentorship with senior engineering and design leaders.",
    url: "https://bytespace-new.vercel.app",
    siteName: "ByteSpace",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-[#CEFF00] selection:text-[#0B0F19]">
        {children}
      </body>
    </html>
  );
}
