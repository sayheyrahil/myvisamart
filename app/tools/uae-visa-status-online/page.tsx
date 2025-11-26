"use client";
import React from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/tools/HeroSection";
import { Map, FileText, Truck } from "lucide-react";
import HowItWorksSection from "@/components/tools/HowItWorksSection";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import SectionIcon from "@/components/tools/SectionIcon";
import SectionHeading from "@/components/tools/SectionHeading";
import SectionDescription from "@/components/tools/SectionDescription";


export default function Page() {
  return (
    <MasterPage title="Visa Photo Maker - Create Passport Size Photos Online">
      <div className="w-full min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <HeroSection
          title={
            <div
            >
              UAE Visa Status Online
            </div>
          }
          description="Your dream destination is just an e-visa away. Let's make it happen."
          buttonText="Create my visa photo"
          imageSrc="/tools/imagedw56.png"
          imageAlt="Visa Preview"
        />


        {/* How it Works */}
        <HowItWorksSection
          title="How It Works"
          steps={[
            {
              id: 1,
              icon: <Map size={28} className="text-white" />,
              bgColor: "bg-[#EDE7F6]",
              iconBg: "bg-[#7E57C2]",
              title: "Select Destination & Speed",
              desc: "Tell us where and how fast you need it.",
            },

          ]}
        />


        {/* Selector Section */}
        <section className="max-w-screen-xl mx-auto px-6 py-12">
          <div className="border rounded-2xl p-8   shadow-sm relative" style={{ borderColor: "#D6E0EA" }}>
            {/* Tab Navigation */}
            <div className="flex gap-8 border-b pb-2 mb-8 items-center" style={{ borderColor: "#D6E0EA" }}>
              <button
                className="flex items-center gap-2 text-[#1566C0] font-semibold border-b-2 border-[#1566C0] px-2 py-1 focus:outline-none"
                style={{ background: "transparent" }}
                disabled
              >
                <svg width="18" height="18" fill="none"><path d="M13.5 4.5l-6 6-3-3" stroke="#1566C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Enter details
              </button>
              <button
                className="flex items-center gap-2 text-[#A0AEC0] font-semibold px-2 py-1"
                style={{ background: "transparent" }}
                disabled
              >
                <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="8" stroke="#A0AEC0" strokeWidth="1.5" /><path d="M6 9l2 2 4-4" stroke="#A0AEC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                View status
              </button>
            </div>

            {/* Form */}
            <form className="max-w-xl mx-auto space-y-6">
              <div>
                <label htmlFor="nationality" className="block mb-2 font-medium text-[#222B45]">
                  Nationality<span className="text-red-500">*</span>
                </label>
                <select
                  id="nationality"
                  name="nationality"
                  className="w-full border border-[#D6E0EA] p-3 rounded-lg bg-white focus:outline-none"
                  required
                >
                  <option value="">Select...</option>
                  <option value="IN">India</option>
                  <option value="PK">Pakistan</option>
                  <option value="BD">Bangladesh</option>
                  <option value="PH">Philippines</option>
                  {/* Add more as needed */}
                </select>
              </div>
              <div>
                <label htmlFor="passportNumber" className="block mb-2 font-medium text-[#222B45]">
                  Passport Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="passportNumber"
                  name="passportNumber"
                  className="w-full border border-[#D6E0EA] p-3 rounded-lg bg-white focus:outline-none"
                  required
                  placeholder="Enter passport number"
                />
              </div>
              <div>
                <label htmlFor="passportValidUntil" className="block mb-2 font-medium text-[#222B45]">
                  Passport Valid until<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="passportValidUntil"
                    name="passportValidUntil"
                    className="w-full border border-[#D6E0EA] p-3 rounded-lg bg-white focus:outline-none pr-10"
                    required
                    placeholder="dd-mm-YYYY"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0AEC0] pointer-events-none">
                    <svg width="20" height="20" fill="none"><path d="M7 2v2M13 2v2M3 7h14M5 4h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="#A0AEC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>
              </div>
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="px-8 py-2.5 bg-[#1566C0] text-white rounded-full text-base font-semibold shadow hover:bg-[#0d4e9c] transition"
                >
                  Check Status
                </button>
              </div>
            </form>
          </div>
        </section>


        {/* Info Section */}
        <section className="max-w-screen-xl mx-auto px-6 py-12 space-y-10">
          <div className="flex flex-col gap-8 items-center w-full max-md:gap-6 max-sm:gap-5">
            <div className="flex gap-2.5 items-center w-full max-sm:flex-col max-sm:gap-4 max-sm:items-start">
              <SectionIcon />
              <SectionHeading>
                How to check UAE/Dubai visa status by passport number?
              </SectionHeading>
            </div>
            <SectionDescription className="p-5 rounded-xl">
              Here’s a step-by-step guide to check the UAE/Dubai visa status by passport number:
              <ul className="mt-2 space-y-1">
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled color="0A509F" size={30} />
                  <span>Select your nationality from the dropdown list.</span>
                </li>
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled color="0A509F" size={30} />
                  <span>Enter your passport number and select its validity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <TbArrowBadgeRightFilled color="0A509F" size={30} />
                  <span>Click ‘Check Status’ for immediate updates on your visa application status.</span>
                </li>
              </ul>
              <div className="mt-3">
                <span className="font-semibold">Disclaimer:</span>
                <span> The information provided by our tool is sourced directly from immigration authorities. Actual processing times may vary.</span>
              </div>
            </SectionDescription>
          </div>
          <div className="flex flex-col gap-8 items-center w-full max-md:gap-6 max-sm:gap-5">

            <SectionDescription className="rounded-xl">
              {/* UAE visa status using ICP */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <SectionIcon />
                  <SectionHeading>
                    How to check the UAE visa status using ICP?
                  </SectionHeading>
                </div>
                <div className="mb-2">
                  If you have applied for a visa to Abu Dhabi, Sharjah, Ajman, Umm AL Quwain, Ras Al Khaimah, and Fujairah,
                  here’s how to check the UAE visa status using ICP smart services:
                </div>
                <ul className="list-none pl-0 space-y-1">
                  <li className="flex items-start gap-2">
                    <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
                    <span>
                      Go to <a href="https://smartservices.icp.gov.ae/echannels/web/client/default.html#/fileValidity"
                        target="_blank" rel="noopener noreferrer" className="text-[#1566C0] underline">
                        https://smartservices.icp.gov.ae/echannels/web/client/default.html#/fileValidity</a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
                    <span>
                      Choose search by: <b>Passport Information</b>, and select the type: <b>Visa</b>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
                    <span>
                      Now enter passport no., passport expiry date and your Nationality
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
                    <span>
                      Click on 'Search', and you can now check and validate the application status.
                    </span>
                  </li>
                </ul>
              </div>
              {/* Dubai visa status using GDRFA */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <SectionIcon />
                  <SectionHeading>
                    How to check the Dubai visa status using GDRFA?
                  </SectionHeading>
                </div>
                <div className="mb-2">
                  Here’s how you can also check your Dubai visa status using the GDRFA website:
                </div>
                <ul className="list-none pl-0 space-y-1">
                  <li className="flex items-start gap-2">
                    <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
                    <span>
                      Go to <a href="https://smart.gdrfad.gov.ae/Public_Th/StatusInquiry_New.aspx" target="_blank" rel="noopener noreferrer"
                        className="text-[#1566C0] underline">https://smart.gdrfad.gov.ae/Public_Th/StatusInquiry_New.aspx</a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
                    <span>
                      Enter order number, transaction number and visa applied date
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
                    <span>
                      Check the captcha and click on search
                    </span>
                  </li>
                </ul>
                <div className="mt-2">
                  That’s it! This should display the status of your Dubai visa application.
                </div>
              </div>
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <SectionIcon />
                  <SectionHeading>
                    You can check your visa status for Dubai offline in different ways, but it can take longer.
                  </SectionHeading>
                </div>
                <div className="mb-2">
                  Here’s how you can also check your Dubai visa status using the GDRFA website:
                </div>
                <ul className="list-none pl-0 space-y-1">
                  <li className="flex items-start gap-2">
                    <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
                    <span>
                      You can call the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP)
                      helpline number and ask for your visa status
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
                    <span>
                      You can visit the UAE embassy near you, show your documents to the helpdesk and ask for assistance.
                    </span>
                  </li>
                </ul>
                <div className="mt-2">
                  Please note that the tracking time of your visa application status extends if you are
                  using offline methods. Use the Atlys Dubai visa status tool for instant results.
                </div>
              </div>
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <SectionIcon />
                  <SectionHeading>
                    Why choose Atlys' UAE visa status checker?
                  </SectionHeading>
                </div>
                <div className="mb-2">
                  Atlys' visa status checker tool can help you with the following:
                </div>
                <ul className="list-none pl-0 space-y-1">
                  <li className="flex items-start gap-2">
                    <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
                    <span>
                      Real-time updates on your Dubai visa application status.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
                    <span>
                      User-friendly interface for a seamless experience.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
                    <span>
                      Secure and reliable handling of your information.
                    </span>
                  </li>
                </ul>
              </div>
            </SectionDescription>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl   p-6  ">
            <div className="divide-y">
              <div className="py-4 flex justify-between items-center">
                <span>Why is it important to check the status of a UAE visa?</span>
                <span className="text-gray-400">&#9660;</span>
              </div>
              <div className="py-4 flex justify-between items-center">
                <span>Can I check the UAE Dubai visa status if I have applied from 
                  the govemment website?</span>
                <span className="text-gray-400">&#9660;</span>
              </div>
              <div className="py-4 flex justify-between items-center">
                <span>What information do I need to check my Dubai visa status online?</span>
                <span className="text-gray-400">&#9660;</span>
              </div>
              <div className="py-4 flex justify-between items-center">
                <span>Is there a fee for checking UAE visa status online?</span>
                <span className="text-gray-400">&#9660;</span>
              </div>
              <div className="py-4 flex justify-between items-center">
                <span>How long does it take to process an online UAE visa status check?</span>
                <span className="text-gray-400">&#9660;</span>
              </div>
            </div>
          </div>


          {/* How we reviewed this tool */}
          <div className="  rounded-2xl p-0 pt-8 pb-12">
            <div className="max-w-screen-xl mx-auto px-6">
              <div className="flex items-center gap-2 mb-2">
                <SectionIcon />
                <h3 className="text-[22px] leading-[30px] text-[#0EA5E9]  ">
                  How we reviewed this tool:
                </h3>
              </div>
              <p className="mb-4 text-[#5B5F62] text-[16px] leading-[24px]  ">
                Our experts continually monitor the official sources for any changes, and we update our articles when new information becomes available.
              </p>
              {/* History Tab */}
              <div className="flex items-center gap-2 mb-6">
                <button className="flex items-center gap-2 px-3 py-1 border-b-2 border-[#0EA5E9] text-[#0EA5E9] font-medium bg-transparent focus:outline-none">
                  <svg width="22" height="22" fill="none" className="text-[#0EA5E9]"><path d="M11 2v18M2 11h18" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  History
                </button>
              </div>
              <div className="text-[#23272E] text-[16px] font-semibold mb-4  ">
                Current Version
              </div>
              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {[
                  { date: "30 Jan 2025", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
                  { date: "22 Nov 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
                  { date: "22 Oct 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
                  { date: "26 Jun 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
                  { date: "25 Jun 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
                  { date: "14 May 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
                  { date: "09 May 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-[#E0E7EF] rounded-xl bg-white p-5 flex flex-col gap-2 min-h-[140px]"
                  >
                    <div className="text-[#23272E]   text-[16px] font-semibold mb-2">{item.date}</div>
                    <div className="text-[#5B5F62]   text-[14px]">
                      <div>
                        <span className="font-semibold">Written By:</span><br />
                        <span className="font-medium">{item.writer}</span>
                      </div>
                      <div className="mt-1">
                        <span className="font-semibold">Edited By:</span><br />
                        <span className="font-medium">{item.editor}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </MasterPage>
  );
}
