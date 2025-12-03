"use client";
import React,{useState ,useEffect } from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/tools/HeroSection";
import HowItWorksSection from "@/components/tools/HowItWorksSection";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import SectionHeading from "@/components/tools/SectionHeading";
import SectionDescription from "@/components/tools/SectionDescription";
import HistorySection from "@/components/tools/HistorySection";
import FAQ from "@/components/common/FAQ";

import Image from "next/image";
 
 import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";

export default function Page() {

  const [faqs, setFaqs] = useState<any[]>([]);
  const getFaqs = async () => {
    await axiosInstance
      .post(ENDPOINTS.faqActive, {
        type: "schengen_cover_letter",
      })
      .then((response: any) => {
        if (response?.data?.data) {
           setFaqs(response.data.data);
        }
      })
      .catch((error: any) => {
        handleAxiosError(error);
      })
      .finally(() => {
       });
  };

  useEffect(() => {
    getFaqs();
  }, []);

  return (
    <MasterPage title="Schengen Visa Cover Letter Generator - Atlys">
      <div className="w-full min-h-screen   text-gray-900">
        {/* Hero Section */}
        <HeroSection
          title={
            <div>
              Cover Letter for <span className="text-brand">Schengen Visa</span>
            </div>
          }
          description="Your dream destination is just an e-visa away. Let's make it happen."
          buttonText="Check my visa photo"
          imageSrc="/tools/coverLetter.png"
          imageAlt="coverLetter.png Preview"
        />

        {/* How it Works */}
        <HowItWorksSection
          title="How It Works"
          steps={[
            {
              id: 1,
              icon: <Image src="/tools/Frame1272632083.png" width={58} height={58} alt="2-minute process" />,
              bgColor: "bg-[#EDE7F6]",
              iconBg: "bg-[#7E57C2]",
              title: "2-minute process",
              desc: "Fill in the fields and submit.",
            },
            {
              id: 2,
              icon: <Image src="/tools/Frame1s272632083.png" width={58} height={58} alt="No mistakes" />,
              bgColor: "bg-[#FFF8E1]",
              iconBg: "bg-[#FFCA28]",
              title: "No mistakes",
              desc: "No chance of typos or misinformation.",
            },
            {
              id: 3,
              icon: <Image src="/tools/Frame272632083.png" width={58} height={58} alt="Correct Format" />,
              bgColor: "bg-[#FCE4EC]",
              iconBg: "bg-[#E57373]",
              title: "Correct Format",
              desc: "Leave the detailing to us.",
            },
          ]}
        />

        {/* Form Section */}
        <div className="my-10">
          <SectionHeading>
            Generate your Schengen Visa Cover Letter
          </SectionHeading>
          <SectionDescription>
            Enter your details below to generate a compliant Schengen visa cover letter in minutes.
          </SectionDescription>
          <section className="py-8">
            <div className="border rounded-2xl p-8 shadow-sm bg-white">
              {/* Tabs */}
              <div className="flex items-center border-b mb-8">
                <button
                  className="flex items-center gap-2 px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium focus:outline-none"
                  disabled
                >
                  <svg width="20" height="20" fill="none"><path d="M4 4.75A2.75 2.75 0 0 1 6.75 2h6.5A2.75 2.75 0 0 1 16 4.75v10.5A2.75 2.75 0 0 1 13.25 18h-6.5A2.75 2.75 0 0 1 4 15.25V4.75Z" stroke="#0A509F" strokeWidth="1.5" /><path d="M7 6h6M7 10h6M7 14h3" stroke="#0A509F" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  Enter details
                </button>
                <button
                  className="flex items-center gap-2 px-4 py-2 text-gray-400 font-medium cursor-not-allowed"
                  disabled
                >
                  <svg width="20" height="20" fill="none"><path d="M10 2v12m0 0-3.5-3.5M10 14l3.5-3.5M4 16h12" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Download File
                </button>
              </div>
              {/* Form */}
              <form className="space-y-10">
                {/* Letter Details */}
                <div>
                  <div className="text-lg font-semibold mb-4">Letter Details</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-1">
                      <label className="block mb-2 font-medium">Date*</label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="dd-mm-YYYY"
                          className="w-full border border-[#dbeafe] rounded-lg p-3 pr-10 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg width="20" height="20" fill="none"><path d="M6.667 2.5v2.5m6.666-2.5v2.5M3.333 7.5h13.334M4.167 4.167h11.666A1.667 1.667 0 0 1 17.5 5.833v8.334a1.667 1.667 0 0 1-1.667 1.666H4.167A1.667 1.667 0 0 1 2.5 14.167V5.833a1.667 1.667 0 0 1 1.667-1.666Z" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Your Details */}
                <div>
                  <div className="text-lg font-semibold mb-4">Your Details</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block mb-2 font-medium">Full Name*</label>
                      <input
                        type="text"
                        className="w-full border border-[#dbeafe] rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Passport Number*</label>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full border border-[#dbeafe] rounded-lg p-3 pr-10 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg width="20" height="20" fill="none"><rect x="3.5" y="3.5" width="13" height="13" rx="2.5" stroke="#9ca3af" strokeWidth="1.5" /><path d="M7 7h6v6H7V7Z" stroke="#9ca3af" strokeWidth="1.5" /></svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Occupation*</label>
                      <input
                        type="text"
                        className="w-full border border-[#dbeafe] rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Travel Details */}
                <div>
                  <div className="text-lg font-semibold mb-4">Travel Details</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 font-medium">Destination Country*</label>
                      <select className="w-full border border-[#dbeafe] rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100">
                        <option value="">Select country</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Departure Date*</label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="dd-mm-YYYY"
                          className="w-full border border-[#dbeafe] rounded-lg p-3 pr-10 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg width="20" height="20" fill="none"><path d="M6.667 2.5v2.5m6.666-2.5v2.5M3.333 7.5h13.334M4.167 4.167h11.666A1.667 1.667 0 0 1 17.5 5.833v8.334a1.667 1.667 0 0 1-1.667 1.666H4.167A1.667 1.667 0 0 1 2.5 14.167V5.833a1.667 1.667 0 0 1 1.667-1.666Z" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Return Date*</label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="dd-mm-YYYY"
                          className="w-full border border-[#dbeafe] rounded-lg p-3 pr-10 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg width="20" height="20" fill="none"><path d="M6.667 2.5v2.5m6.666-2.5v2.5M3.333 7.5h13.334M4.167 4.167h11.666A1.667 1.667 0 0 1 17.5 5.833v8.334a1.667 1.667 0 0 1-1.667 1.666H4.167A1.667 1.667 0 0 1 2.5 14.167V5.833a1.667 1.667 0 0 1 1.667-1.666Z" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Purpose*</label>
                      <select className="w-full border border-[#dbeafe] rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100">
                        <option value="">Select purpose</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium shadow hover:bg-blue-700 transition"
                  >
                    Generate Cover Letter
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>

        {/* Info Section */}
        <div className="my-10">
          <SectionHeading>
            What is a Schengen visa cover letter?
          </SectionHeading>
          <SectionDescription>
            When applying for a Schengen visa, you must submit several important documents, one of the most crucial of which is the cover letter.
            <br /><br />
            Addressed to the embassy of your visiting country, the Schengen cover letter serves as a formal introduction to your visa application.
            It outlines your intent to travel to a Schengen country(s), travel plans, and other key details that help visa officers understand the context of your visit and assess your case.
          </SectionDescription>
        </div>

        {/* How to write a Schengen visa cover letter */}
        <div className="my-10">
          <SectionHeading>
            How to write a Schengen visa cover letter?
          </SectionHeading>
          <SectionDescription>
            There are two primary ways to write a cover letter for your Schengen visa application: using the Atlys Schengen visa cover letter creator or writing it yourself.
          </SectionDescription>
          {/* Steps */}
          <div className="my-8">
            <SectionHeading>1. Get the Schengen visa cover letter using the Atlys tool</SectionHeading>
            <SectionDescription>
              Here is how you can write or generate a Schengen visa cover letter online using the Atlys cover letter creator:
            </SectionDescription>
            <ul className="mb-4 space-y-2">
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled color="#0A509F" size={20} className="mt-1" />
                <span><b>Step 1:</b> Enter the date and your personal details, i.e., name, passport number and occupation.</span>
              </li>
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled color="#0A509F" size={20} className="mt-1" />
                <span><b>Step 2:</b> Provide the following travel information: destination country, departure date, return date and purpose.</span>
              </li>
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled color="#0A509F" size={20} className="mt-1" />
                <span><b>Step 3:</b> Click “Generate Cover Letter” to view and download it in a PDF format.</span>
              </li>
            </ul>
            <div className="bg-[#E9F2FB] rounded-xl p-6 flex flex-col gap-2 border border-[#D1E3F8]">
              <div className="text-[#23272E] text-lg font-semibold mb-2">
                Why use the Atlys Schengen visa cover letter creator?
              </div>
              <ul className="space-y-2 text-[#23272E] text-base">
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled className="text-[#0A509F] text-[20px] mt-[2px]" />
                  <span>
                    Create your Schengen visa cover letter in just minutes; no need to worry about writing it yourself!
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled className="text-[#0A509F] text-[20px] mt-[2px]" />
                  <span>
                    Our tool is constantly updated to ensure your letter is accurate and fully compliant with Schengen visa requirements.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled className="text-[#0A509F] text-[20px] mt-[2px]" />
                  <span>
                    The use of advanced technology ensures data protection and prevents unauthorised access.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Write yourself */}
          <div className="mb-8">
            <SectionHeading>2. Write the Schengen cover letter by yourself</SectionHeading>
            <SectionDescription>
              If you prefer to write the Schengen visa cover letter yourself, it’s essential to ensure it is clear, detailed and well-structured. Moreover, a well-written cover letter should provide the embassy with all the necessary information needed to process your visa application smoothly.
              <br />
              Here’s what to include in your Schengen visa cover letter (in the same order given below):
            </SectionDescription>
            <ul className="mb-4 space-y-2">
              {[
                {
                  title: "Introduction:",
                  desc: "Briefly introduce yourself, including your name, nationality, and passport number."
                },
                {
                  title: "Purpose of the trip:",
                  desc: "Clearly state the reason for your visit, whether for tourism, business, family visit, etc., along with the start and end dates."
                },
                {
                  title: "Itinerary:",
                  desc: "Briefly and neatly outline your travel itinerary, specifying the countries you plan to visit, accommodation and the duration of your stay in each country."
                },
                {
                  title: "Additional documents:",
                  desc: "State that you have attached all necessary supporting documents, such as flight reservations, hotel bookings, proof of funds, and any other required paperwork."
                },
                {
                  title: "Financial means:",
                  desc: "Provide information about your current professional status (for example, employed or self-employed) and declare the means for funding your trip."
                },
                {
                  title: "Ties to home country:",
                  desc: "Emphasize your strong ties to your home country, such as family, property or other commitments and convey your intention to return after the trip."
                },
                {
                  title: "Polite closing:",
                  desc: "Conclude the letter with a polite request for the visa and express gratitude for considering your application."
                },
                {
                  title: "Embassy address:",
                  desc: "Include the address of the embassy or consulate you are applying to."
                },
                {
                  title: "Applicant’s address:",
                  desc: "Provide your own address and contact details."
                },
                {
                  title: "Travel dates:",
                  desc: "Clearly mention your intended travel dates."
                },
                {
                  title: "Signature:",
                  desc: "Sign the letter at the end (if submitting a physical copy)."
                },
                {
                  title: "Sample cover letter:",
                  desc: "Attach or refer to a sample cover letter for reference."
                }
              ].map((item, index) => (
                <div key={index} className="flex justify-start  gap-4">
                  <TbArrowBadgeRightFilled color="0A509F" size={30} />
                  <div>
                    <span className="font-semibold">{item.title}</span> {item.desc}
                  </div>
                </div>
              ))}
            </ul>
            <div className="mb-6">
              <div className="text-[#23272E] text-base font-semibold mb-2">
                Here is a sample cover letter for Schengen visa (template):
              </div>
              <div className="flex justify-center">
                <img
                  src="/tools/image57.png"
                  alt="Sample Schengen Cover Letter"
                  className="rounded-lg border border-[#E0E7EF] max-w-full w-[350px] md:w-[420px] shadow"
                />
              </div>
            </div>
            <div className="bg-[#E6F4EA] border border-[#A7F3D0] rounded-xl p-4 flex items-start gap-2 mt-4">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="mt-1">
                <circle cx="11" cy="11" r="11" fill="#BBF7D0" />
                <path d="M11 6.5V12.5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="11" cy="15.5" r="1" fill="#22C55E" />
              </svg>
              <span className="text-[#15803D] text-[15px] leading-[22px]">
                <span className="font-semibold">Note:</span> Depending on the special circumstances of your visit (for example, if your trip is sponsored), you must incorporate specific information in the cover letter.
              </span>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="my-10">
          <SectionHeading>
            Tips to create a Schengen visa cover letter
          </SectionHeading>
          <SectionDescription>
            Whether you’re travelling for tourism, business, or family visits, here are some tips to help you create a well-written cover letter for your Schengen visa application:
          </SectionDescription>
          <div className="flex flex-col md:flex-row gap-8 mb-6">
            {/* Do's */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#059669] font-semibold">Do’s</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled color="#059669" size={22} className="mt-1" />
                  <span>
                    <b>Use a formal tone:</b> Keep the language professional and respectful throughout the letter.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled color="#059669" size={22} className="mt-1" />
                  <span>
                    <b>Tailor the letter to your situation:</b> Customize your cover letter based on your specific background (employment, student, etc.).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled color="#059669" size={22} className="mt-1" />
                  <span>
                    <b>Provide supporting documents:</b> Remember to mention all the supporting documents in your letter, as it gives the visa officer an idea of all the attached documents.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled color="#059669" size={22} className="mt-1" />
                  <span>
                    <b>Type the letter:</b> A typed letter is clearer and more readable than a handwritten one, ensuring a polished presentation.
                  </span>
                </li>
              </ul>
            </div>
            {/* Don'ts */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#EF4444] font-semibold">Don’ts</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled color="#EF4444" size={22} className="mt-1" />
                  <span>
                    <b>Don’t include unnecessary details:</b> Avoid irrelevant information that may confuse or clutter your letter.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled color="#EF4444" size={22} className="mt-1" />
                  <span>
                    <b>Don’t leave out essential information:</b> Missing key details, like your return plan, can lead to rejection.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled color="#EF4444" size={22} className="mt-1" />
                  <span>
                    <b>Don’t exaggerate:</b> Stick to facts and avoid embellishing your circumstances.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled color="#EF4444" size={22} className="mt-1" />
                  <span>
                    <b>Don’t forget to sign the letter:</b> After taking the printout, sign the cover letter to validate your application.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

    <FAQ faqData={faqs} />

        {/* History Section */}
        <HistorySection
          title="How we reviewed this tool:"
          description="Our experts continually monitor the official sources for any changes, and we update our articles when new information becomes available."
          history={[
            { date: "30 Jan 2025", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "22 Nov 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "22 Oct 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "26 Jun 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "25 Jun 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "14 May 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "09 May 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
          ]}
        />
      </div>
    </MasterPage>
  );
}
