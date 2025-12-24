"use client";
import React, { useEffect, useState } from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/tools/HeroSection";
import TestimonialsSlider from "@/components/tools/TestimonialsSlider";
import FAQ from "@/components/common/FAQ";
import { WEB_URL } from "@/utils/constants";
import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";
import HowItWorks from "@/components/common/home/HowItWorks";

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
                <div className="text-4xl md:text-5xl font-bold text-[#18181B] mb-2">
                 Private Transparent Secure
                </div>
                <div className="text-lg font-medium text-[#18181B] mb-1">
                 Velit aliquam imperdiet mollis nullam volutpat porttitor maximus eget fermentum odio phasellus non.


                </div>
                
              </div>
            </div>
          }
          description="Your dream destination is just an e-visa away. Let's make it happen."
          buttonText=""
          imageSrc="/tools/Frame1991424822.png"
          imageAlt="Visa Preview"
        />

        {/* Documents We Collect Section */}
        <div className="w-full bg-[#F7FAFC] py-12 flex flex-col items-center">
          <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start justify-between px-4 gap-8">
            {/* Left: Heading */}
            <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
              <span className="text-2xl md:text-3xl font-semibold text-black leading-tight">
                Documents<br />We Collect
              </span>
            </div>
            {/* Right: Document Cards */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Row 1 */}
              <div className="flex gap-4">
                <div className="flex items-center bg-[#F4F3FF] rounded-xl px-4 py-3 shadow-sm min-w-[200px]">
                  <span className="bg-[#6C2BD7] rounded-lg p-2 mr-3 flex items-center justify-center">
                    {/* Payment Icon */}
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                      <rect width="24" height="24" rx="6" fill="#6C2BD7"/>
                      <path d="M7 10h10M7 14h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                      <rect x="5" y="7" width="14" height="10" rx="2" stroke="#fff" strokeWidth="1.5"/>
                    </svg>
                  </span>
                  <span className="font-medium text-[#18181B] text-base">Payment Information</span>
                </div>
              </div>
              {/* Row 2 */}
              <div className="flex gap-4">
                <div className="flex items-center bg-[#F4F3FF] rounded-xl px-4 py-3 shadow-sm min-w-[200px]">
                  <span className="bg-[#6C2BD7] rounded-lg p-2 mr-3 flex items-center justify-center">
                    {/* Photos Icon */}
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                      <rect width="24" height="24" rx="6" fill="#6C2BD7"/>
                      <path d="M8 15l2.5-3 2 2.5L16 12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                      <rect x="5" y="7" width="14" height="10" rx="2" stroke="#fff" strokeWidth="1.5"/>
                    </svg>
                  </span>
                  <span className="font-medium text-[#18181B] text-base">Photos</span>
                </div>
                <div className="flex items-center bg-[#F4F3FF] rounded-xl px-4 py-3 shadow-sm min-w-[200px]">
                  <span className="bg-[#6C2BD7] rounded-lg p-2 mr-3 flex items-center justify-center">
                    {/* Bank Icon */}
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                      <rect width="24" height="24" rx="6" fill="#6C2BD7"/>
                      <path d="M7 11h10M7 15h10M9 7v4M15 7v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                      <rect x="5" y="7" width="14" height="10" rx="2" stroke="#fff" strokeWidth="1.5"/>
                    </svg>
                  </span>
                  <span className="font-medium text-[#18181B] text-base">Bank Statements</span>
                </div>
              </div>
              {/* Row 3 */}
              <div className="flex gap-4">
                <div className="flex items-center bg-[#F4F3FF] rounded-xl px-4 py-3 shadow-sm min-w-[200px]">
                  <span className="bg-[#6C2BD7] rounded-lg p-2 mr-3 flex items-center justify-center">
                    {/* Past Visas Icon */}
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                      <rect width="24" height="24" rx="6" fill="#6C2BD7"/>
                      <path d="M8 12h8M8 16h8M8 8h8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span className="font-medium text-[#18181B] text-base">Past Visas</span>
                </div>
                <div className="flex items-center bg-[#F4F3FF] rounded-xl px-4 py-3 shadow-sm min-w-[200px]">
                  <span className="bg-[#6C2BD7] rounded-lg p-2 mr-3 flex items-center justify-center">
                    {/* Passport Icon */}
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                      <rect width="24" height="24" rx="6" fill="#6C2BD7"/>
                      <circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="1.5"/>
                      <rect x="8" y="7" width="8" height="10" rx="2" stroke="#fff" strokeWidth="1.5"/>
                    </svg>
                  </span>
                  <span className="font-medium text-[#18181B] text-base">Passport</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="w-full bg-[#F7FAFC] py-12 flex flex-col items-center">
          <div className="max-w-5xl w-full px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-black">Key Features</h2>
            <div className="flex flex-col gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Parturient voluptatum</h3>
                  <p className="text-gray-600 mb-4">
                    Sodales nec lacus fermentum feugiat mus mus suspendisse dictumst, placerat praesent excepturi sociosqu mollis.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                      Feature bullet point one
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                      Feature bullet point two
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-56 flex-shrink-0">
                  <img
                    src="/features/feature1.jpg"
                    alt="Feature 1"
                    className="rounded-xl object-cover w-full h-40 md:h-32"
                  />
                </div>
              </div>
              {/* Feature 2 */}
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Cupiditate eu sunt</h3>
                  <p className="text-gray-600 mb-4">
                    Suspendisse potenti magnis facilisis feugiat, volutpat non pulvinar excepturi sociosqu mollis.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                      Feature bullet point one
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                      Feature bullet point two
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-56 flex-shrink-0">
                  <img
                    src="/features/feature2.jpg"
                    alt="Feature 2"
                    className="rounded-xl object-cover w-full h-40 md:h-32"
                  />
                </div>
              </div>
              {/* Feature 3 */}
              <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Sint voluptatibus cum reprehenderit</h3>
                  <p className="text-gray-600 mb-4">
                    Etiam dictumst, placerat praesent excepturi sociosqu mollis. Sodales nec lacus fermentum feugiat mus mus suspendisse.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                      Feature bullet point one
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                      Feature bullet point two
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-56 flex-shrink-0">
                  <img
                    src="/features/feature3.jpg"
                    alt="Feature 3"
                    className="rounded-xl object-cover w-full h-40 md:h-32"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance with Industry Standards Section */}
        <div className="w-full bg-white py-16 flex flex-col items-center">
          <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start justify-between px-4 gap-8">
            {/* Left: Heading and Description */}
            <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Compliance with<br />Industry Standards
              </h2>
              <p className="text-gray-600 text-base max-w-md">
                Adheres to industry standards, including ISO/IEC 27001, GDPR, CCPA, and SOC 2. We are also in the process of achieving various other leading compliance and audit standards.
              </p>
            </div>
            {/* Right: Compliance Badges */}
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
              <img src="/compliance/soc2.png" alt="SOC 2" className="w-24 h-24 object-contain" />
              <img src="/compliance/nist.png" alt="NIST" className="w-24 h-24 object-contain" />
              <img src="/compliance/iso27001.png" alt="ISO 27001" className="w-24 h-24 object-contain" />
              <img src="/compliance/gdpr.png" alt="GDPR" className="w-24 h-24 object-contain" />
              <img src="/compliance/ccpa.png" alt="CCPA" className="w-24 h-24 object-contain" />
              <img src="/compliance/iso9001.png" alt="ISO 9001" className="w-24 h-24 object-contain" />
            </div>
          </div>
        </div>
        <HowItWorks />

        {/* <TestimonialsSlider />
        <FAQ faqs={faqs} /> */}
      </div>
    </MasterPage>
  );
}
