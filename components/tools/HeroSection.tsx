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
  <section className="px-2 grid md:grid-cols-2 gap-12 items-center">
    <div className="space-y-8">
      <div
        className="text-gray-900 font-bold text-[36px] leading-[44px] tracking-[-0.02em] md:text-[72px] md:leading-[90px]"
      >
        {title}
      </div>
      <div className="text-[16px] leading-[24px] tracking-normal text-[#A8A8A8] md:text-[18px] md:leading-[28px]"
      >
        {description}
      </div>
      <button className="px-6 py-3 bg-brand text-white rounded-3xl text-lg shadow hover:bg-brand transition">
        {buttonText}
      </button>
    </div>
    <div className="flex justify-center">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-auto object-cover"
      />
    </div>
  </section>
);

export default HeroSection;
