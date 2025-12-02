import React from "react";

export default function CTASection() {
  return (
    <div className="w-full flex justify-center items-center py-12">
      <div
        className="w-full max-w-5xl rounded-[32px] px-4 py-8 md:px-8 md:py-12 flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/tools/Frame1100377401.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "220px",
        }}
      >
        <div className="absolute inset-0 bg-[#1566C0]/60 rounded-[32px] pointer-events-none" />
        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="text-white font-wix-heading text-center text-[22px] leading-[1.2] md:text-[32px] md:leading-[1.1] font-semibold mb-2">
            Ready to Book Your Schengen Visa Appointment?
          </div>
          <div className="text-white text-center text-sm md:text-base md:text-lg mb-6 max-w-2xl">
            Check available dates, find application centers, and get started with
            your Schengen visa process today.
          </div>
          <button
            className="bg-white text-[#1566C0] font-semibold rounded-full px-5 py-2.5 md:px-6 md:py-3 shadow hover:bg-[#F1F5F9] transition text-base"
            style={{ minWidth: 180 }}
          >
            Check Appointment Availability
          </button>
        </div>
      </div>
    </div>
  );
}
