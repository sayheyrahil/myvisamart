import React from "react";
import { FiClock } from "react-icons/fi";

export default function Hero({ src = "/images/hero.jpg" }) {
  return (
    <div className="rounded-2xl overflow-hidden relative shadow-sm">
      <img src={src} alt="hero" className="w-full h-[340px] object-cover" />
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow flex items-center gap-2 text-sm">
        <FiClock className="text-blue-600" />
        <span className="text-blue-700 font-medium">Visa guaranteed in 1 day</span>
      </div>
    </div>
  );
}
