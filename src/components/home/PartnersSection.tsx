import React from "react";
import Image from "next/image";

export default function PartnersSection() {
  return (
    <section className="bg-white py-14 border-b border-[#E5E7EB]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 flex justify-center items-center">
        <div className="w-full max-w-[1080px] overflow-hidden flex justify-center items-center opacity-80 hover:opacity-100 transition-opacity">
          <Image
            src="/assets/logo_partners.svg"
            alt="ByteSpace Partner Logos"
            width={1132}
            height={42}
            className="w-full h-auto max-h-11 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
