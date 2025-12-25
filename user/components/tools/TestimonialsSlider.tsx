"use client";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";
export default function TestimonialsSlider() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [testimonialIdx, setTestimonialIdx] = useState(0);


  console.log("testimonials", testimonials);
  const getTestimonials = async () => {
    await axiosInstance
      .post(ENDPOINTS.testimonialActive)
      .then((response: any) => {
        if (response?.data?.data) setTestimonials(response.data.data);
      })
      .catch(() => {
        setTestimonials([]);
      });
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  const prevTestimonial = () => {
    setTestimonialIdx((idx) =>
      testimonials.length === 0
        ? 0
        : idx === 0
        ? testimonials.length - 1
        : idx - 1
    );
  };

  const nextTestimonial = () => {
    setTestimonialIdx((idx) =>
      testimonials.length === 0
        ? 0
        : idx === testimonials.length - 1
        ? 0
        : idx + 1
    );
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className="py-16">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <div className="font-wix-heading text-center mb-2">
          What Our Users Say
        </div>
        <div className="text-center text-[#5B5F62] mb-6">
          Thousands of travelers have successfully booked their Schengen visa
          appointments with our tool.
        </div>
        <div className="flex items-center justify-center gap-8 w-full">
          <button
            aria-label="Previous testimonial"
            onClick={prevTestimonial}
            className="w-9 h-9 rounded-full border border-[#1566C0] flex items-center justify-center text-[#1566C0] hover:bg-[#1566C0] hover:text-white transition"
            type="button"
          >
            <svg width="18" height="18" fill="none">
              <path
                d="M11 14l-4-4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="flex-1 flex flex-col items-center">
            <div className="flex gap-1 mb-3">
              {[...Array(testimonials[testimonialIdx]?.rating || 0)].map(
                (_, i) => (
                  <FaStar key={i} color="#FBBF24" size={24} />
                )
              )}
            </div>
            <div className="text-lg text-center mb-4 max-w-md">
              &quot;{testimonials[testimonialIdx]?.text}&quot;
            </div>
            <div className="mt-2 text-center text-[#23272E] font-semibold">
              {testimonials[testimonialIdx]?.name}
            </div>
            <div className="text-[#5B5F62] text-sm">
              {testimonials[testimonialIdx]?.location}
            </div>
          </div>
          <button
            aria-label="Next testimonial"
            onClick={nextTestimonial}
            className="w-9 h-9 rounded-full border border-[#1566C0] flex items-center justify-center text-[#1566C0] hover:bg-[#1566C0] hover:text-white transition"
            type="button"
          >
            <svg width="18" height="18" fill="none">
              <path
                d="M7 14l4-4-4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
