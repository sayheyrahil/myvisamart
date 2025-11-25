"use client";
import React from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/HeroSection";
import { Map, FileText, Truck } from "lucide-react";
import HowItWorksSection from "@/components/HowItWorksSection";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import Image from "next/image";


export default function Page() {
  return (
    <MasterPage title=" Schengen Visa Cover Letter Generator - Atlys" >
      <div className="max-w-6xl mx-auto bg-white">
        <div className="w-full min-h-screen  text-gray-900">
          {/* Hero Section */}
          <HeroSection
            title={
              <div
              >
                Cover Letter for  <br /> <span className="text-brand">Schengen Visa</span>
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


          {/* Selector Section */}
          <section className="max-w-screen-xl mx-auto px-6 py-12">
            <div className="border rounded-2xl p-8 shadow-sm">
              {/* Tabs */}
              <div className="flex items-center border-b mb-8">
                <button
                  className="flex items-center gap-2 px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium focus:outline-none"
                  disabled
                >
                  <svg width="20" height="20" fill="none"><path d="M4 4.75A2.75 2.75 0 0 1 6.75 2h6.5A2.75 2.75 0 0 1 16 4.75v10.5A2.75 2.75 0 0 1 13.25 18h-6.5A2.75 2.75 0 0 1 4 15.25V4.75Z" stroke="#2563eb" strokeWidth="1.5" /><path d="M7 6h6M7 10h6M7 14h3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" /></svg>
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


          {/* Schengen Invitation Letter Info Box */}
          <div className="max-w-screen-xl mx-auto px-6 pt-8">
            <div
              className="p-6 rounded-xl not-italic text-[16px] leading-[22px] tracking-[0] text-[#5B5F62]  "
            >
              Are you planning to visit friends or family in a Schengen country or travel for work? You’ll likely need an invitation letter for your visa application. Whether you’re visiting for tourism, business, or medical care, a Schengen invitation letter is essential.<br /><br />
              To make this easier, we’ve developed the Atlys Schengen Invitation Letter Generator, a tool that helps you create a compelling invitation letter to boost your chances of visa approval. We’ve also provided templates for your reference. So, without further delay, let’s start your Schengen journey!
            </div>
          </div>

          {/* Schengen Invitation Letter Info Sections */}
          <div className="max-w-screen-xl mx-auto px-6 pt-8 pb-16">
            {/* Section 1 */}
            <div className="flex items-start gap-3 mb-6">
              <img
                alt="Frame 1272632106"
                className="h-5 w-[22px]"
                loading="lazy"
                src="https://api.builder.io/api/v1/image/assets/TEMP/d8bbdc33d3850907db2e516e823b977337e6b902?width=43"
              />
              <div>
                <h2 className="  text-[24px] leading-[32px] font-semibold text-[#23272E] mb-2">
                  What is the invitation letter for a Schengen visa?
                </h2>
                <p className="text-[#5B5F62] text-[16px] leading-[24px]  ">
                  An invitation letter for a Schengen visa is a document provided to you by the host already residing in the Schengen country. This letter proves your accommodation and demonstrates that you have a valid reason for your trip. If you’re visiting family or friends or need to travel to Europe for business or educational purposes, an invitation letter is often necessary, particularly for work-related trips.
                </p>
              </div>
            </div>
            {/* Section 2 */}
            <div className="flex items-start gap-3 mb-4">
             <img
                alt="Frame 1272632106"
                className="h-5 w-[22px]"
                loading="lazy"
                src="https://api.builder.io/api/v1/image/assets/TEMP/d8bbdc33d3850907db2e516e823b977337e6b902?width=43"
              />
              <div>
                <h2 className="  text-[24px] leading-[32px] font-semibold text-[#23272E] mb-2">
                  What are the types of invitation letters for a Schengen visa?
                </h2>
                <p className="text-[#5B5F62] text-[16px] leading-[24px]   mb-2">
                  Several types of invitation letters can support your&nbsp;Schengen visa application, depending on the purpose of the visit. Each type corresponds to the specific category of visa being applied for. Below are the common types of invitation letters:
                </p>
                {/* Subsection: Invitation Letter for Family or Friend Visit */}
                <div className="pl-2 pt-2">
                  <div className="  text-[18px] leading-[26px] font-semibold text-[#23272E] mb-1">
                    1. Invitation Letter for Family or Friend Visit
                  </div>
                  <div className="text-[#5B5F62] text-[16px] leading-[24px]   mb-2">
                    This is for applicants who plan to visit family members or friends residing in a Schengen country. The letter should include details about the host, such as their:
                  </div>
                  <ul className="space-y-1 pl-1">
                    <li className="flex items-start gap-2">
                      <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                      <span>Residency status.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                      <span>Relationship with the applicant.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                      <span>The reason for the visit.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                      <span>The intended duration of stay.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                      <span>The host's contact information.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                      <span>If the host is sponsoring the trip, this should also be mentioned.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* END: Schengen Invitation Letter Info Sections */}

          {/* Important Notice */}
          <div className="max-w-screen-xl mx-auto px-6 pb-8">
            <div className="flex items-start gap-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-4 text-[#15803D] text-[15px] leading-[22px]  ">
              <span className="mt-1">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="11" fill="#BBF7D0" />
                  <path d="M11 6.5V12.5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="11" cy="15.5" r="1" fill="#22C55E" />
                </svg>
              </span>
              <span>
                <span className="font-semibold">Important Notice:</span> For visits to family or friends in certain countries, the invitation must be notarised and issued by the relevant authority.<br />
                This applies to the Netherlands, Austria, Czechia, Portugal, and France. In these cases, the Atlys Invitation Letter Generator cannot be used.
              </span>
            </div>
          </div>

          {/* More Invitation Letter Types */}
          <div className="max-w-screen-xl mx-auto px-6 pb-16">
            {/* 2. Business Invitation Letter for Schengen */}
            <div className="mb-8">
              <div className="  text-[22px] md:text-[22px] leading-[30px] font-semibold text-[#23272E] mb-2">
                2. Business Invitation Letter for Schengen
              </div>
              <div className="text-[#5B5F62] text-[16px] leading-[24px]   mb-2">
                This is for applicants visiting a Schengen country for business purposes, such as attending meetings, conferences, or training. This letter is written by a company or organisation in the Schengen zone inviting the applicant for business reasons.
              </div>
              <ul className="space-y-1 pl-1">
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                  <span>It should outline the business relationship between the applicant and the inviting company.</span>
                </li>
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                  <span>The dates of the business trip.</span>
                </li>
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                  <span>The purpose of the visit (e.g., meetings, contract negotiations).</span>
                </li>
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                  <span>The company may also take responsibility for the applicant’s accommodation and expenses.</span>
                </li>
              </ul>
            </div>
          </div>
          {/* 3. Invitation Letter for Medical Treatment */}
          <div className="mb-8">
            <div className="  text-[22px] md:text-[22px] leading-[30px] font-semibold text-[#23272E] mb-2">
              3. Invitation Letter for Medical Treatment
            </div>
            <div className="text-[#5B5F62] text-[16px] leading-[24px]   mb-2">
              This type of letter is needed for applicants seeking medical treatment in a Schengen country. It is usually written by the medical institution (e.g., hospital or clinic) where the treatment will take place. The letter should contain details about the applicant’s:
            </div>
            <ul className="space-y-1 pl-1">
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                <span>Medical condition.</span>
              </li>
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                <span>The type of treatment.</span>
              </li>
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                <span>The estimated duration of stay for medical care.</span>
              </li>
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                <span>The confirmation of appointments or treatment plans.</span>
              </li>
            </ul>
            <div className="text-[#5B5F62] text-[15px] leading-[22px]   mt-2">
              <span className="font-semibold">Note:</span> An invitation letter is mandatory for medical visits and must be signed by the doctor.
            </div>
          </div>
          {/* 4. Invitation Letter for Cultural, Sports, or Religious Events */}
          <div>
            <div className="  text-[22px] md:text-[22px] leading-[30px] font-semibold text-[#23272E] mb-2">
              4. Invitation Letter for Cultural, Sports, or Religious Events
            </div>
            <div className="text-[#5B5F62] text-[16px] leading-[24px]   mb-2">
              This letter is for individuals invited to attend cultural events, sporting activities, or religious ceremonies in a Schengen country. The organising institution or event organiser should issue the invitation letter. It should include
            </div>
            <ul className="space-y-1 pl-1">
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                <span>Information about the event.</span>
              </li>
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                <span>The applicant’s role or participation.</span>
              </li>
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                <span>The dates of the event.</span>
              </li>
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                <span>Details about accommodation arrangements, if applicable.</span>
              </li>
            </ul>
          </div>
          {/* 5. Invitation Letter for Training, Internships, or Educational Visits */}
          <div className="mb-8">
            <div className="  text-[22px] leading-[30px] font-semibold text-[#23272E] mb-2">
              5. Invitation Letter for Training, Internships, or Educational Visits
            </div>
            <div className="text-[#5B5F62] text-[16px] leading-[24px]   mb-2">
              This is for applicants visiting a Schengen country for training programs, internships, or educational purposes. The educational institution or training organisation usually writes this letter and should outline the details of the program, the duration of the stay, and the financial arrangements.
            </div>
            <ul className="space-y-1 pl-1">
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                <span>
                  <b>Enter details:</b> Start by entering the following details one by one, including: current date (date), Personal details (full name), travel details (destination country, departure date), and invite details (name or hotel name, email address line 1, city).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                <span>
                  <b>Generate:</b> Press the "Generate Invitation Letter".
                </span>
              </li>
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled className="text-[#2563eb] text-[20px] mt-[2px]" />
                <span>
                  <b>Download:</b> After completing the details and pressing the generation button, you can download the invitation letter for Schengen visa pdf and save it.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* How can I get an invitation letter for a Schengen visa? */}
        <div className="max-w-screen-xl mx-auto px-6 pb-8">
          <div className="flex items-center gap-2 mb-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="14" fill="#DCFCE7" />
              <path d="M14 8v6" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="14" cy="18" r="1" fill="#22C55E" />
            </svg>
            <h2 className="  text-[22px] leading-[30px] font-semibold text-[#22C55E]">
              How can I get an invitation letter for a Schengen visa?
            </h2>
          </div>
          <div className="text-[#5B5F62] text-[16px] leading-[24px]   mb-4">
            You can easily generate your Schengen visa application invitation letter using Atlys by following the below-mentioned steps:
          </div>
          {/* Info Box */}
          <div className="bg-[#F1F5F9] border border-[#E0E7EF] rounded-xl p-6 mb-8">
            <div className="  text-[18px] font-semibold text-[#23272E] mb-2">
              Why use our Atlys Schengen invitation letter generator?
            </div>
            <div className="text-[#5B5F62] text-[15px] leading-[22px]  ">
              Our Schengen invitation letter generator can help you with the following:
            </div>
            <ul className="space-y-1 mt-2 pl-1">
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled className="text-[#2563eb] text-[18px] mt-[2px]" />
                <span>
                  <b>Convenience:</b> The tool allows you to complete the invitation letter for a Schengen visa in 2 minutes, reducing the time required to gather all the required documents.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled className="text-[#2563eb] text-[18px] mt-[2px]" />
                <span>
                  <b>Accuracy:</b> You won’t have to type or write the letter or worry about whether it’s in the correct format.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled className="text-[#2563eb] text-[18px] mt-[2px]" />
                <span>
                  <b>Compliance:</b> The generator/letter is designed to comply with the requirements of Schengen visa authorities. This increases the likelihood of your invitation letter being accepted without issues.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* How to write an invitation letter for Schengen visa */}
        <div className="max-w-screen-xl mx-auto px-6 pb-8">
          <div className="flex items-center gap-2 mb-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="14" fill="#DCFCE7" />
              <path d="M14 8v6" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="14" cy="18" r="1" fill="#22C55E" />
            </svg>
            <h2 className="  text-[22px] leading-[30px] font-semibold text-[#22C55E]">
              How to write an invitation letter for Schengen visa
            </h2>
          </div>
          <div className="text-[#5B5F62] text-[16px] leading-[24px]   mb-4">
            If you are planning to write the Schengen invitation letter by yourself, then here is some important information that should be present in any type of invitation letter:
          </div>
          <ul className="list-disc pl-6 text-[#23272E] text-[16px] leading-[24px]   mb-4">
            <li>
              <b>Host’s information:</b> Full name, address, contact details, and legal status in the Schengen country (e.g., citizen, resident).
            </li>
            <li>
              <b>Applicant’s information:</b> Full name, passport number, address, relationship with the host, and details about the purpose of the visit.
            </li>
            <li>
              <b>Duration:</b> Exact dates of the intended visit.
            </li>
            <li>
              <b>Financial support:</b> Information about who will cover the expenses during the visit (if the host sponsors the trip).
            </li>
            <li>
              <b>Proof of accommodation:</b> Mention whether the guest will stay with the host or elsewhere.
            </li>
          </ul>
          <div className="text-[#5B5F62] text-[16px] leading-[24px]   mb-2">
            Here is a simple invitation letter for a Schengen visa application:
          </div>
          <div className="text-[#2563eb] underline text-[16px] leading-[24px]   cursor-pointer">
            Invitation letter for visiting Friends and Family
          </div>
        </div>

        {/* What are some key mistakes to avoid... */}
        <div className="max-w-screen-xl mx-auto px-6 pb-8">
          <div className="flex items-center gap-2 mb-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="14" fill="#DCFCE7" />
              <path d="M14 8v6" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="14" cy="18" r="1" fill="#22C55E" />
            </svg>
            <h2 className="  text-[22px] leading-[30px] font-semibold text-[#22C55E]">
              What are some key mistakes to avoid when preparing a Schengen visa invitation letter?
            </h2>
          </div>
          <div className="text-[#5B5F62] text-[16px] leading-[24px]   mb-4">
            Precision and clarity are essential to avoid delays or refusals when preparing an invitation letter for a Schengen visa application. Here are some key mistakes to steer clear of:
          </div>
          <ul className="list-disc pl-6 text-[#23272E] text-[16px] leading-[24px]   mb-4">
            <li>
              <b>Only complete or correct information:</b> Ensure all essential details are included, such as the full names of both the host and guest, specific dates of stay, and the precise purpose of the visit.
            </li>
            <li>
              <b>Vague purposes:</b> Clearly state the reason for the visit (e.g., tourism, business, family visit). Avoid vague terms like “visit” without specifying the nature.
            </li>
            <li>
              <b>Inconsistent dates:</b> Use consistent dates throughout your application, ensuring they match the invitation letter, flight itinerary, and hotel reservations.
            </li>
            <li>
              <b>Financial responsibility:</b> Indicate who will pay for the visitor’s trip, accommodation, and other expenses.
            </li>
            <li>
              <b>Host’s legal status:</b> Specify the host’s legal status within the Schengen country (e.g., citizen, permanent resident).
            </li>
            <li>
              <b>Accommodation details:</b> Provide clear information about the applicant’s accommodation during their stay, ensuring consistency with other documents.
            </li>
            <li>
              <b>Clarity and conciseness:</b> Use clear, concise language and avoid overly complex sentences or grammar errors that could hinder understanding.
            </li>
          </ul>
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-4 text-[#15803D] text-[15px] leading-[22px]   flex items-start gap-2">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="mt-1">
              <circle cx="11" cy="11" r="11" fill="#BBF7D0" />
              <path d="M11 6.5V12.5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="11" cy="15.5" r="1" fill="#22C55E" />
            </svg>
            <span>
              <span className="font-semibold">Note:</span> Choose the Atlys Schengen invitation letter tool to avoid such mistakes and increase your chances of getting a visa approval.
            </span>
          </div>
        </div>

        {/* Who doesn't need a Schengen invitation letter? */}
        <div className="max-w-screen-xl mx-auto px-6 pb-12">
          <div className="flex items-center gap-2 mb-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="14" fill="#E0F2FE" />
              <path d="M14 8v6" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="14" cy="18" r="1" fill="#0EA5E9" />
            </svg>
            <h2 className="  text-[22px] leading-[30px] font-semibold text-[#0EA5E9]">
              Who doesn’t need a Schengen invitation letter?
            </h2>
          </div>
          <div className="text-[#5B5F62] text-[16px] leading-[24px]   mb-2">
            An invitation letter is sometimes required for a Schengen visa but not always mandatory. If you’re traveling for tourism, it is not needed. However, if you’re visiting friends or family and staying with a host, it will be required. It’s essential to know the specific requirements before submitting your application.
          </div>
          <div className="text-[#23272E] text-[16px] leading-[24px]   mb-2">
            An invitation letter is often needed in the following cases:
          </div>
          <ul className="space-y-1 pl-1 mb-4">
            <li className="flex items-start gap-2">
              <TbArrowBadgeRightFilled className="text-[#2563eb] text-[18px] mt-[2px]" />
              <span>Business</span>
            </li>
            <li className="flex items-start gap-2">
              <TbArrowBadgeRightFilled className="text-[#2563eb] text-[18px] mt-[2px]" />
              <span>Official invitations</span>
            </li>
            <li className="flex items-start gap-2">
              <TbArrowBadgeRightFilled className="text-[#2563eb] text-[18px] mt-[2px]" />
              <span>Visiting relatives and friends</span>
            </li>
            <li className="flex items-start gap-2">
              <TbArrowBadgeRightFilled className="text-[#2563eb] text-[18px] mt-[2px]" />
              <span>To attend cultural, scientific, religious, sporting, political, or other gatherings and activities</span>
            </li>
          </ul>

          {/* FAQ Accordion */}
          <div className="divide-y divide-[#E5E7EB] border rounded-xl bg-white">
            {[
              "Is the Schengen invitation letter generator free?",
              "Is an invitation letter required for a Schengen tourist visa?",
              "Is it safe to use the Schengen invitation letter generator?",
              "What inspired us to create the Schengen invitation letter generator?",
              "What is the purpose of the Schengen invitation letter?",
              "How long is the Schengen invitation letter valid?",
            ].map((q, i) => (
              <details key={i} className="group">
                <summary className="flex justify-between items-center cursor-pointer px-5 py-4   text-[16px] text-[#23272E] select-none group-open:text-[#2563eb]">
                  {q}
                  <span className="ml-2 transition-transform group-open:rotate-90">
                    <svg width="18" height="18" fill="none"><path d="M7 6l4 3-4 3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </summary>
                {/* You can add answer content here if needed */}
              </details>
            ))}
          </div>
        </div>

        {/* How we reviewed this tool */}
        <div className="max-w-screen-xl mx-auto px-6 pb-16">
          <div className="flex items-center gap-2 mb-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="14" fill="#E0F2FE" />
              <path d="M14 8v6" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="14" cy="18" r="1" fill="#0EA5E9" />
            </svg>
            <h2 className="  text-[22px] leading-[30px] font-semibold text-[#0EA5E9]">
              How we reviewed this tool:
            </h2>
          </div>
          <div className="text-[#5B5F62] text-[16px] leading-[24px]   mb-4">
            Our experts continually monitor the official sources for any changes, and we update our articles when new information becomes available.
          </div>
          <button className="flex items-center gap-2 px-4 py-2 mb-6 bg-[#F1F5F9] border border-[#E0E7EF] rounded-lg text-[#2563eb]   text-[15px] font-medium">
            <svg width="18" height="18" fill="none"><path d="M9 2v14M2 9h14" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            History
          </button>
          {/* History Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { date: "30 Jan 2025", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
              { date: "22 Nov 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
              { date: "22 Oct 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
              { date: "26 Jun 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
              { date: "25 Jun 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
              { date: "14 May 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
              { date: "09 May 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F8FAFC] border border-[#E0E7EF] rounded-xl p-4 flex flex-col gap-2">
                <div className="text-[#23272E]   text-[16px] font-semibold">{item.date}</div>
                <div className="text-[#5B5F62]   text-[14px]">
                  <div>Written By:<br /><span className="font-medium">{item.writer}</span></div>
                  <div className="mt-1">Edited By:<br /><span className="font-medium">{item.editor}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </MasterPage>
  );
}
