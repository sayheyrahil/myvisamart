"use client";
import React, { useState } from "react";
import SectionHeading from "@/components/tools/SectionHeading";
import { WEB_URL } from "@/utils/constants";

type Props = {
  images: string[];
};

export default function WhatYouGetSection({ images }: Props) {
  const [current, setCurrent] = useState(0);

  const goPrev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goNext = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="my-8">
      <SectionHeading>What you get</SectionHeading>
      <div className="text-gray-600 mb-4">
        will give you a completed application packet with all necessary
        documents
      </div>
      <div
        className="bg-white rounded-2xl shadow p-6 flex flex-col items-center relative"
        style={{ minHeight: 420 }}
      >
        <div className="w-full text-center font-bold text-xl mb-2">
          Your Final Application Preview
        </div>
        <div className="w-full text-center text-gray-500 mb-4">
          Application Packet
        </div>
        <div
          className="relative flex items-center justify-center w-full"
          style={{ minHeight: 320 }}
        >
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10"
            onClick={goPrev}
            aria-label="Previous"
            style={{ display: images.length > 1 ? "block" : "none" }}
          >
            <svg width="24" height="24" fill="none">
              <path
                d="M15 6l-6 6 6 6"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <img
            src={WEB_URL + images[current]}
            alt={`What you get ${current + 1}`}
            className="rounded-xl shadow-lg object-contain"
            style={{ maxHeight: 340, maxWidth: "90%" }}
          />
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10"
            onClick={goNext}
            aria-label="Next"
            style={{ display: images.length > 1 ? "block" : "none" }}
          >
            <svg width="24" height="24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4 text-gray-500 text-center text-sm italic">
          For illustrative purposes only; actual packet will reflect your
          details
        </div>
        <div className="flex justify-center items-center mt-4 gap-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === current ? "bg-brand" : "bg-gray-300"
              }`}
              style={{ display: "inline-block" }}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
