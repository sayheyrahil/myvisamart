"use client";
import React, { useEffect, useState } from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/tools/HeroSection";
import TestimonialsSlider from "@/components/tools/TestimonialsSlider";
import FAQ from "@/components/common/FAQ";
import { WEB_URL } from "@/utils/constants";
import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";

const companyLogos = Array(8).fill("/tools/company-logo.png"); // Replace with actual logo path

export default function Page() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const getFaqs = async () => {
    await axiosInstance
      .post(ENDPOINTS.faqActive, { type: "enterprise" })
      .then((response: any) => {
        if (response?.data?.data) setFaqs(response.data.data);
      })
      .catch(() => {});
  };
  useEffect(() => {
    getFaqs();
  }, []);

  return (
    <MasterPage title="Vietnam Visa Status Checker - Track Your E-Visa Application Online">
      <div className="w-full min-h-screen text-gray-900 ">
        {/* Hero Section */}
        <HeroSection
          title={
            <div className="w-full bg-[#F7FAFC] py-12 flex flex-col items-center">
              <div className="max-w-3xl w-full px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-[#18181B] mb-2">
                  Visas Done Right
                </h1>
                <div className="text-lg font-medium text-[#18181B] mb-1">
                  Never Miss a Meeting Again
                </div>
                <div className="text-gray-500 mb-8 text-xl">
                  Ut labore et dolore. exercitationem. cupidatat? 100+ fugiat?
                  justo esse per via dolor mollis sum quae.
                </div>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-brand">
                      98.7 %
                    </div>
                    <div className="text-gray-500 text-sm mt-1">
                      Success Rate
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-brand">
                      2 M +
                    </div>
                    <div className="text-gray-500 text-sm mt-1">Visas</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-brand">
                      4.5 <span className="underline">Trustpilot</span>
                    </div>
                    <div className="text-gray-500 text-sm mt-1">Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          }
          description="Your dream destination is just an e-visa away. Let's make it happen."
          buttonText=""
          imageSrc="/tools/imageAppointment56.png"
          imageAlt="Visa Preview"
        />

        {/* Top: Employees of Leading Companies */}
        <div className="w-full flex flex-col items-center pt-6 mt-10 pb-2">
          <span className="text-sm text-[#3B82F6] font-medium mb-2">
            Employees of Leading Companies Use Visamart
          </span>
          <div className="flex flex-row flex-wrap justify-center items-center gap-6 w-full max-w-4xl px-4 py-2">
            {companyLogos.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="Company Logo"
                className="h-6 object-contain"
                style={{ maxWidth: 120 }}
              />
            ))}
          </div>
        </div>

        {/* Visa Workflow Section */}
        <div className="w-full flex flex-col items-center mt-12 mb-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Your Visa Workflow, Simplified
          </h2>
          <div className="flex flex-col md:flex-row gap-6 w-full  justify-center px-4">
            {/* Card 1 */}
            <div className="bg-[#EAF1FB] rounded-xl p-8 flex-1 flex flex-col items-center shadow-sm">
              <div className="bg-[#D1E3F8] rounded-full p-3 mb-4">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 12h14M12 5v14"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="font-semibold text-lg mb-2 text-center">
                AI Powered Automation
              </div>
              <div className="text-gray-600 text-center text-sm">
                Forms auto-filled, documents stored, and reused effortlessly.
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-[#EAF1FB] rounded-xl p-8 flex-1 flex flex-col items-center shadow-sm">
              <div className="bg-[#D1E3F8] rounded-full p-3 mb-4">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                    stroke="#2563EB"
                    strokeWidth="2"
                  />
                  <path
                    d="M2 12h20"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 2a15.3 15.3 0 010 20"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="font-semibold text-lg mb-2 text-center">
                150+ Destinations
              </div>
              <div className="text-gray-600 text-center text-sm">
                Business and tourist visas, all in one place.
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-[#EAF1FB] rounded-xl p-8 flex-1 flex flex-col items-center shadow-sm">
              <div className="bg-[#D1E3F8] rounded-full p-3 mb-4">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M4 7v10a2 2 0 002 2h12a2 2 0 002-2V7"
                    stroke="#2563EB"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z"
                    stroke="#2563EB"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="font-semibold text-lg mb-2 text-center">
                Dynamic Document Repository
              </div>
              <div className="text-gray-600 text-center text-sm">
                All documents in one place, reused automatically - no more
                redundancies.
              </div>
            </div>
          </div>
        </div>

        {/* Why Enterprises Choose Visamart Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center bg-[#F7FBFF] py-12 px-4 md:px-0 mt-5">
          {/* Left: Text */}
          <div className="flex-1 max-w-xl md:pr-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Why Enterprises
              <br />
              Choose Visamart
            </h2>
            <div className="mb-6">
              <div className="font-semibold text-lg mb-1">
                INstant Travel Docs
              </div>
              <div className="text-gray-600 text-sm mb-3">
                Confirmed Flights, Hotels, Auto Generated itineraries, cover
                letters &amp; NOCs.
              </div>
              <div className="border-b border-gray-300 mb-3" />
            </div>
            <div className="font-medium text-base mb-4">
              Seamless HRMS integration
            </div>
            <div className="font-medium text-base mb-4">
              Effortless group travel
            </div>
            <div className="font-medium text-base mb-4">
              24/7 Concierge support
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
            <img
              src="/tools/Rectangle14378.png"
              alt="Robot Hand"
              className="rounded-2xl object-cover w-[340px] h-[240px] md:w-[400px] md:h-[300px] shadow"
              style={{ background: "#0C1B2A" }}
            />
          </div>
        </div>

        {/* Visa's, Without Chaos Section */}
        <div className="w-full flex flex-col justify-center items-center  bg-[#D6E3F7]  ">
          <div className="relative w-full rounded-3xl px-6 md:px-16 pt-12 flex flex-col md:flex-row gap-8">
            {/* Left: Heading */}
            <div className="flex-1 flex flex-col justify-start">
              <h2 className="text-4xl md:text-5xl font-semibold text-[#18181B] mb-4 leading-tight">
                Visa’s,
                <br />
                Without
                <br />
                Chaos
              </h2>
            </div>
            {/* Right: Feature Cards */}
            <div className="flex-[2] flex flex-col gap-4 relative">
              {/* Card 1 */}
              <div className="absolute -top-8 left-0 w-[340px] md:w-[370px] z-30">
                <div className="flex items-center gap-4 bg-[#F3F8E7] rounded-xl shadow p-4">
                  <div className="bg-[#C8E17C] rounded-lg p-2 flex items-center justify-center">
                    {/* Icon: Chat */}
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                      <rect width="24" height="24" rx="6" fill="#C8E17C" />
                      <path
                        d="M7 10h10M7 14h6"
                        stroke="#5B6B1E"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-base mb-1">
                      Simple Questions, No Jargon
                    </div>
                    <div className="text-gray-600 text-sm">
                      Answer a few Clear, Smart Prompts
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="absolute top-12 left-10 w-[340px] md:w-[370px] z-20">
                <div className="flex items-center gap-4 bg-[#E2F3EF] rounded-xl shadow p-4">
                  <div className="bg-[#2CBCA6] rounded-lg p-2 flex items-center justify-center">
                    {/* Icon: Auto-Fill */}
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                      <rect width="24" height="24" rx="6" fill="#2CBCA6" />
                      <path
                        d="M8 12h8M8 16h5"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <rect
                        x="8"
                        y="8"
                        width="8"
                        height="2"
                        rx="1"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-base mb-1">
                      Auto-Filled Application
                    </div>
                    <div className="text-gray-600 text-sm">
                      No Typing, Just Upload Your
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="absolute top-32 left-20 w-[340px] md:w-[370px] z-10">
                <div className="flex items-center gap-4 bg-[#F3EAF7] rounded-xl shadow p-4">
                  <div className="bg-[#A16DC7] rounded-lg p-2 flex items-center justify-center">
                    {/* Icon: Risk Report */}
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                      <rect width="24" height="24" rx="6" fill="#A16DC7" />
                      <path
                        d="M12 8v4l2 2"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="#fff"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-base mb-1">
                      Real-Time Risk Report
                    </div>
                    <div className="text-gray-600 text-sm">
                      And strengthen your application to pre-empt rejections.
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="absolute top-52 left-0 w-[340px] md:w-[370px] z-0">
                <div className="flex items-center gap-4 bg-[#F2F5FB] rounded-xl shadow p-4">
                  <div className="bg-[#5B6BCE] rounded-lg p-2 flex items-center justify-center">
                    {/* Icon: Reuse */}
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                      <rect width="24" height="24" rx="6" fill="#5B6BCE" />
                      <path
                        d="M8 12h8M8 16h5"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <rect
                        x="8"
                        y="8"
                        width="8"
                        height="2"
                        rx="1"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-base mb-1">
                      Reuse Your Documents
                    </div>
                    <div className="text-gray-600 text-sm">
                      Just re-apply in 3 clicks.
                    </div>
                  </div>
                </div>
              </div>
              {/* Spacer for layout */}
              <div className="h-[320px]"></div>
              {/* Table */}
            </div>
          </div>
          <div className="my-8">
            <div className="bg-white rounded-xl shadow p-0 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#F3F4F6] text-gray-700">
                    <th className="px-4 py-3 font-medium">Apply Visa For</th>
                    <th className="px-4 py-3 font-medium">DIY</th>
                    <th className="px-4 py-3 font-medium">Agents</th>
                    <th className="px-4 py-3 font-medium">*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3">Schengen</td>
                    <td className="px-4 py-3">1 - 2 days</td>
                    <td className="px-4 py-3">1 week</td>
                    <td className="px-4 py-3">&lt; 5 minutes</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">US</td>
                    <td className="px-4 py-3">3 - 4 hours</td>
                    <td className="px-4 py-3">3 - 4 days</td>
                    <td className="px-4 py-3">&lt; 20 minutes</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-3">Japan</td>
                    <td className="px-4 py-3">2 - 3 days</td>
                    <td className="px-4 py-3">1 week</td>
                    <td className="px-4 py-3">&lt; 30 minutes</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-xs text-gray-400 px-4 py-2">
                * Real flight &amp; hotel bookings, itineraries, and all
                required documents — prepared instantly for your application
              </div>
            </div>
          </div>
        </div>
        <TestimonialsSlider />
        {faqs && faqs.length > 0 && (
        <div className="mt-10">
          <FAQ faqData={faqs} />
        </div>
        )}          
      </div>
    </MasterPage>
  );
}
