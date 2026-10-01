import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const satoshi = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-satoshi",
  display: "swap",
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
      className={`${poppins.variable} ${satoshi.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#242528] font-sans selection:bg-[#CBFC01] selection:text-[#242528]">
        {children}
      </body>
    </html>
  );
}
