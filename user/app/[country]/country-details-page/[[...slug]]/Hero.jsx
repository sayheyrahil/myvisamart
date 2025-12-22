import React from "react";
import { FiClock } from "react-icons/fi";
import ImageWithPreview from "@/components/common/ImageWithPreview";

export default function Hero({ src = "/extra/hero.jpg", time = "1 day" }) {
  return (
    <div className="rounded-2xl overflow-hidden relative shadow-sm">
      <ImageWithPreview
        src={src}
        alt={"hero"}
        className="w-full h-[340px] object-cover"
      />
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow flex items-center gap-2 text-sm">
        <FiClock className="text-brand" />
        <span className="text-brand font-medium">
          Visa guaranteed in {time}
        </span>
      </div>
    </div>
  );
}
