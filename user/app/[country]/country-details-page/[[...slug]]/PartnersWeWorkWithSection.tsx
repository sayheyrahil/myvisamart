"use client";
import React from "react";
import { WEB_URL } from "@/utils/constants";
import SectionHeading from "@/components/tools/SectionHeading";

// Accept array of strings (image URLs)
type PartnersWeWorkWithSectionProps = {
  partners: string[];
};

export default function PartnersWeWorkWithSection({
  partners,
}: PartnersWeWorkWithSectionProps) {
  return (
    <div className="my-8">
      <SectionHeading>Partners We Work With</SectionHeading>

      <div className="flex gap-6 flex-wrap mt-5">
        {partners.map((image, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-1 flex items-center justify-center"
            style={{ width: 140, height: 140 }}
          >
            <img
              src={WEB_URL + image}
              alt="Partner"
              className="w-full h-full  object-contain  "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
