"use client";
import React,{useState ,useEffect } from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/tools/HeroSection";
import HowItWorksSection from "@/components/tools/HowItWorksSection";
import SectionHeading from "@/components/tools/SectionHeading";
import SectionDescription from "@/components/tools/SectionDescription";
import HistorySection from "@/components/tools/HistorySection";
 import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";

import FAQ from "@/components/common/FAQ";

import SectionIcon from "@/components/tools/SectionIcon";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import WhyUseAtlysPhotoMaker from "@/components/tools/WhyUseAtlysPhotoMaker";
import Image from "next/image";
export default function Page() {
    const [faqs, setFaqs] = useState<any[]>([]);
  const getFaqs = async () => {
    await axiosInstance
      .post(ENDPOINTS.faqActive, {
        type: "uae_visa_status_online",
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
    <MasterPage title="UAE Visa Status Online - Atlys">
      <div className="w-full min-h-screen   text-gray-900">
        {/* Hero Section */}
        <HeroSection
          title={<div>UAE Visa Status Online</div>}
          description="Your dream destination is just an e-visa away. Let's make it happen."
          buttonText="Create my visa photo"
          imageSrc="/tools/imagedw56.png"
          imageAlt="Visa Preview"
        />

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
           
          ]}
        />

        {/* Selector Section */}
        <div className="my-10">
          <SectionHeading>
            Check your UAE visa status online
          </SectionHeading>
          <SectionDescription>
            Enter your details below to check your UAE visa application status instantly.
          </SectionDescription>
          <section className="max-w-screen-xl mx-auto px-6 py-8">
            <div className="border rounded-2xl p-8 shadow-sm relative" style={{ borderColor: "#D6E0EA" }}>
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
        </div>

        {/* Info Section */}
        <div className="my-10">
          <SectionHeading>
            How to check UAE/Dubai visa status by passport number?
          </SectionHeading>
          <SectionDescription>
            Here’s a step-by-step guide to check the UAE/Dubai visa status by passport number:
            <ul className="mt-2 space-y-1">
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled color="0A509F" size={22} className="mt-1" />
                <span>Select your nationality from the dropdown list.</span>
              </li>
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled color="0A509F" size={22} className="mt-1" />
                <span>Enter your passport number and select its validity.</span>
              </li>
              <li className="flex items-start gap-2">
                <TbArrowBadgeRightFilled color="0A509F" size={22} className="mt-1" />
                <span>Click ‘Check Status’ for immediate updates on your visa application status.</span>
              </li>
            </ul>
            <div className="mt-3">
              <span className="font-semibold">Disclaimer:</span>
              <span> The information provided by our tool is sourced directly from immigration authorities. Actual processing times may vary.</span>
            </div>
          </SectionDescription>
        </div>

        <div className="my-10">
          <SectionHeading>
            How to check the UAE visa status using ICP?
          </SectionHeading>
          <SectionDescription>
            If you have applied for a visa to Abu Dhabi, Sharjah, Ajman, Umm AL Quwain, Ras Al Khaimah, and Fujairah,
            here’s how to check the UAE visa status using ICP smart services:
            <ul className="mt-2 space-y-1">
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
          </SectionDescription>
        </div>

        <div className="my-10">
          <SectionHeading>
            How to check the Dubai visa status using GDRFA?
          </SectionHeading>
          <SectionDescription>
            Here’s how you can also check your Dubai visa status using the GDRFA website:
            <ul className="mt-2 space-y-1">
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
          </SectionDescription>
        </div>

        <div className="my-10">
          <SectionHeading>
            You can check your visa status for Dubai offline in different ways, but it can take longer.
          </SectionHeading>
          <WhyUseAtlysPhotoMaker
            points={[
              {
                title: "",
                desc: "You can call the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) helpline number and ask for your visa status"
              },
              {
                title: "",
                desc: "You can visit the UAE embassy near you, show your documents to the helpdesk and ask for assistance."
              }
            ]}
          />
          <div className="mt-2">
            Please note that the tracking time of your visa application status extends if you are
            using offline methods. Use the Atlys Dubai visa status tool for instant results.
          </div>
        </div>

        <div className="my-10">
          <SectionHeading>
            Why choose Atlys' UAE visa status checker?
          </SectionHeading>
          <WhyUseAtlysPhotoMaker
            points={[
              {
                title: "",
                desc: "Real-time updates on your Dubai visa application status."
              },
              {
                title: "",
                desc: "User-friendly interface for a seamless experience."
              },
              {
                title: "",
                desc: "Secure and reliable handling of your information."
              }
            ]}
          />
        </div>
        {/* FAQ Section */}
       <FAQ faqData={faqs} />
        {/* History Section */}
        <HistorySection
          title="How we reviewed this tool:"
          description="Our experts continually monitor the official sources for any changes, and we update our articles when new information becomes available."
          history={[
            { date: "30 Jan 2025", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "22 Nov 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "22 Oct 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "26 Jun 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "25 Jun 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "14 May 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "09 May 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
          ]}
        />
      </div>
    </MasterPage>
  );
}
