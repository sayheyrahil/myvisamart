import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";
import ImageWithPreview from "@/components/common/ImageWithPreview";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

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
        : (idx - 2 + testimonials.length) % testimonials.length
    );
  };

  const nextTestimonial = () => {
    setTestimonialIdx((idx) =>
      testimonials.length === 0
        ? 0
        : (idx + 2) % testimonials.length
    );
  };

  if (testimonials.length === 0) {
    return null;
  }

  // Get two testimonials to display at a time, wrap around if needed
  const displayTestimonials = [
    testimonials[testimonialIdx],
    testimonials[(testimonialIdx + 1) % testimonials.length],
  ];

  return (
    <div className="w-full bg-[#F7FAFC] py-16 flex flex-col items-center">
      <div className="w-full px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-black">
          Testimonials
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          {displayTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex-1   rounded-xl bg-white shadow p-6 relative"
            >
              <div className="flex items-center mb-2">
                <span className="flex text-yellow-400 mr-2">
                  {[...Array(item?.rating || 0)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </span>
              </div>
              <div className="text-gray-700 mb-4 h-10">
                {item?.description ? `"${item.description}"` : ""}
              </div>
              <div className="flex items-center mt-4 justify-start  gap-10">
                <ImageWithPreview
                  src={item.image}
                  alt={"hero"}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-sm text-[#18181B]">
                    {item?.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {item?.designation || item?.location}
                  </div>
                </div>
                {item?.company_logo && (
                  <ImageWithPreview
                    src={item.company_logo}
                    alt={"hero"}
                    className="w-14 h-14 rounded-full mr-3"
                  />
                )}
              </div>
              <div
                className="absolute inset-0 pointer-events-none   rounded-xl"
                style={{ zIndex: 1 }}
              />
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-start mt-6 gap-2">
          <button
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white text-brand font-bold"
            onClick={prevTestimonial}
            aria-label="Previous testimonials"
            type="button"
          >
            &lt;
          </button>
          <button
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white text-brand font-bold"
            onClick={nextTestimonial}
            aria-label="Next testimonials"
            type="button"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
