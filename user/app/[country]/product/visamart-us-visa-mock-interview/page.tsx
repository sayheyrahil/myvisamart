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
      .post(ENDPOINTS.faqActive, { type: "visamart-us-visa-mock-interview" })
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
                <div className="text-4xl md:text-5xl font-bold text-[#18181B] mb-2">
                U.S. Visa Mock Interview

                </div>
                <div className="text-lg font-medium text-[#18181B] mb-1">
We will assess you on all facets of a visa interview, and give you feedback on how to better your answers.
                </div>
              
              </div>
            </div>
          }
          description="Your dream destination is just an e-visa away. Let's make it happen."
          buttonText=""
          imageSrc="/tools/imageAppointment56.png"
          imageAlt="Visa Preview"
        />

        {/* What are the Steps Section */}
        <div className="w-full flex flex-col items-center justify-center py-16 bg-[#F7FAFC]">
          <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 px-4">
            {/* Left: Heading */}
            <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
              <span className="text-3xl md:text-4xl font-semibold text-black leading-tight">
                What are the<br />Steps ?
              </span>
            </div>
            {/* Right: Steps */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Step 1 */}
              <div className="flex items-center gap-4">
                <span className="text-[40px] font-bold text-[#D1D5DB] leading-none relative" style={{fontFamily: 'Wix_Madefor_Display, sans-serif'}}>01</span>
                <div className="flex-1 bg-[#F4F3FF] rounded-xl px-5 py-4 text-base text-[#18181B] font-medium shadow-sm">
                  We ask you questions to exactly replicate the US visa interview process
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex items-center gap-4">
                <span className="text-[40px] font-bold text-[#D1D5DB] leading-none relative" style={{fontFamily: 'Wix_Madefor_Display, sans-serif'}}>02</span>
                <div className="flex-1 bg-[#F4F3FF] rounded-xl px-5 py-4 text-base text-[#18181B] font-medium shadow-sm">
                  Answer those questions by simply speaking into your microphone
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex items-center gap-4">
                <span className="text-[40px] font-bold text-[#D1D5DB] leading-none relative" style={{fontFamily: 'Wix_Madefor_Display, sans-serif'}}>03</span>
                <div className="flex-1 bg-[#F4F3FF] rounded-xl px-5 py-4 text-base text-[#18181B] font-medium shadow-sm">
                  Get a detailed analysis on your performance and improvement tips
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-10">
          <FAQ faqData={faqs} />
        </div>
       </div>
    </MasterPage>
  );
}
