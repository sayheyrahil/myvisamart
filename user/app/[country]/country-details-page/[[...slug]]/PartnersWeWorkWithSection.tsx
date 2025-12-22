"use client";
import React from "react";
 
import SectionHeading from "@/components/tools/SectionHeading";
import ImageWithPreview from "@/components/common/ImageWithPreview";

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
            className="bg-white rounded-xl shadow p-3 flex items-center justify-center"
            style={{ width: 140, height: 140 }}
          >
            <ImageWithPreview
              src={image}
              alt={"partner-" + idx}
              className="w-full h-full  object-containr"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
