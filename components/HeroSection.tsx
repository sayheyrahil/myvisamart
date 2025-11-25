import React from "react";

interface HeroSectionProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
}) => (
  <section className="max-w-screen-xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
    <div className="space-y-8">
      <div
        className="text-gray-900 font-bold font-[Wix_Madefor_Display] text-[72px] leading-[90px] tracking-[-0.02em]"
      >
        {title}
      </div>
      <div className="font-[Wix_Madefor_Display]  text-[18px] leading-[28px] tracking-normal text-[#A8A8A8]  "
      >
        {description}
      </div>
      <button className="px-6 py-3 bg-brand text-white rounded-3xl text-lg shadow hover:bg-blue-700 transition">
        {buttonText}
      </button>
    </div>
    <div className="flex justify-center">
      <img
        src={imageSrc}
        alt={imageAlt}
        className=" w-full h-auto object-cover"
      />
    </div>
  </section>
);

export default HeroSection;
