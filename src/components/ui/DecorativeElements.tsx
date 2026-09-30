import React from "react";

export function SparkleStar({ className = "w-6 h-6 text-[#CEFF00]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

export function WavyShape({ className = "w-16 h-16 text-[#CEFF00]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 0C60 15 80 15 90 30C100 45 95 65 85 80C75 95 55 98 40 95C25 90 10 80 5 65C0 50 10 35 20 20C30 5 40 -15 50 0Z" />
    </svg>
  );
}

export function GeometricAsterisk({ className = "w-8 h-8 text-[#CEFF00]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
    </svg>
  );
}

export function CurvedBadge({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#CEFF00] text-[#0B0F19] shadow-sm ${className}`}
    >
      <SparkleStar className="w-3.5 h-3.5 text-[#0B0F19]" />
      {label}
    </span>
  );
}

export function ByteSpaceLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 font-bold tracking-tight text-xl ${className}`}>
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#0D50E8] text-white shadow-sm overflow-hidden group">
        <span className="text-lg font-black italic tracking-tighter">B</span>
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#CEFF00] rounded-tl-sm" />
      </div>
      <div className="flex items-baseline">
        <span className="font-extrabold tracking-tight">Byte</span>
        <span className="font-semibold text-[#0D50E8]">Space</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#CEFF00] ml-0.5" />
      </div>
    </div>
  );
}
