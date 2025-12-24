import React from "react";

export default function TestimonialsSection() {
  return (
    <div className="w-full bg-[#F7FAFC] py-16 flex flex-col items-center">
      <div className="  w-full px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-black">
          Testimonials
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Active Testimonial */}
          <div className="flex-1 border-2 border-[#2563eb] rounded-xl bg-white shadow p-6 relative">
            <div className="flex items-center mb-2">
              {/* 5 stars */}
              <span className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
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
            <div className="text-gray-700 mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat."
            </div>
            <div className="flex items-center mt-4">
              <img
                src="/avatar.png"
                alt="John Doe"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="font-semibold text-sm text-[#18181B]">
                  John Doe
                </div>
                <div className="text-xs text-gray-400">Manager</div>
              </div>
              <img
                src="/tools/company-logo.png"
                alt="Company Logo"
                className="h-6 ml-4"
              />
            </div>
            {/* Active border highlight */}
            <div
              className="absolute inset-0 pointer-events-none border-2 border-[#2563eb] rounded-xl"
              style={{ zIndex: 1 }}
            />
          </div>
          {/* Inactive Testimonial */}
          <div className="flex-1 bg-white rounded-xl shadow p-6">
            <div className="flex items-center mb-2">
              {/* 5 stars */}
              <span className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
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
            <div className="text-gray-700 mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat."
            </div>
            <div className="flex items-center mt-4">
              <img
                src="/avatar.png"
                alt="John Doe"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="font-semibold text-sm text-[#18181B]">
                  John Doe
                </div>
                <div className="text-xs text-gray-400">Manager</div>
              </div>
              <img
                src="/tools/company-logo.png"
                alt="Company Logo"
                className="h-6 ml-4"
              />
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-start mt-6 gap-2">
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white text-[#2563eb] font-bold">
            &lt;
          </button>
          <button className="w-8 h-8 rounded-full border border-[#2563eb] bg-[#2563eb] text-white flex items-center justify-center font-bold">
            1
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white text-[#2563eb] font-bold">
            2
          </button>
        </div>
      </div>
    </div>
  );
}
