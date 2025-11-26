"use client";
import React from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/tools/HeroSection";
import HowItWorksSection from "@/components/tools/HowItWorksSection";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import SectionHeading from "@/components/tools/SectionHeading";
import SectionDescription from "@/components/tools/SectionDescription";
import HistorySection from "@/components/tools/HistorySection";
import FaqSection from "@/components/tools/FaqSection";
import Image from "next/image";
import WhyUseAtlysPhotoMaker from "@/components/tools/WhyUseAtlysPhotoMaker";
export default function Page() {
  return (
    <MasterPage title="Vietnam Visa Status Checker - Track Your E-Visa Application Online">
      <div className="w-full min-h-screen bg-white text-gray-900">
        <HeroSection
          title={
            <div>
              Track Vietnam Visa Status Online
            </div>
          }
          description="Your dream destination is just an e-visa away. Let's make it happen."
          buttonText="Create my visa photo"
          imageSrc="/tools/imageqww56.png"
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
        <section className="max-w-screen-xl mx-auto px-6 py-12">
          <div className="border rounded-2xl p-8 shadow-sm relative  "
            style={{ borderColor: "#D6E0EA" }}>
            {/* Tab Navigation */}
            <div className="flex gap-8 border-b pb-2 mb-8 items-center"
              style={{ borderColor: "#D6E0EA" }}>
              <button
                className="flex items-center gap-2 text-[#1566C0] font-semibold border-b-2 border-[#1566C0] px-2 py-1 focus:outline-none"
                style={{ background: "transparent" }}
                disabled
              >
                <svg width="18" height="18" fill="none"><path d="M3 9h12M9 3v12" stroke="#1566C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Enter details
              </button>
              <button
                className="flex items-center gap-2 text-[#A0AEC0] font-semibold px-2 py-1"
                style={{ background: "transparent" }}
                disabled
              >
                <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="8" stroke="#A0AEC0" strokeWidth="1.5" />
                  <path d="M6 9l2 2 4-4" stroke="#A0AEC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                View status
              </button>
            </div>

            {/* Form */}
            <form className="max-w-xl mx-auto space-y-6">
              <div>
                <label htmlFor="dob" className="block mb-2 font-medium text-[#222B45]">
                  Date of Birth<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    className="w-full border border-[#D6E0EA] p-3 rounded-lg bg-white focus:outline-none pr-10"
                    required
                    placeholder="dd-mm-YYYY"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0AEC0] pointer-events-none">
                    <svg width="20" height="20" fill="none"><rect x="3" y="5" width="14" height="12" rx="2" stroke="#A0AEC0" strokeWidth="1.5" />
                      <path d="M7 3v2M13 3v2M3 9h14" stroke="#A0AEC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>
              </div>
              <div>
                <label htmlFor="applicationNumber" className="block mb-2 font-medium text-[#222B45]">
                  Application Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="applicationNumber"
                  name="applicationNumber"
                  className="w-full border border-[#D6E0EA] p-3 rounded-lg bg-white focus:outline-none"
                  required
                  placeholder="Enter application number"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-[#222B45]">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-[#D6E0EA] p-3 rounded-lg bg-white focus:outline-none"
                  required
                  placeholder="That was used during visa application"
                />
                <span className="text-xs text-gray-400 pl-1">That was used during visa application</span>
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
        <div className="my-5">
          <SectionDescription>
            Have you recently applied for a Vietnam visa? Do not get stuck wondering about your visa application status;
            instead, stay updated with our Atlys Vietnam visa status tracking tool.
          </SectionDescription>
          <SectionDescription>
            Whether you are located in the East or West or have applied through the government website, each applicant can use our tool to
            check Vietnam evisa application status in real-time.
          </SectionDescription>
        </div>

        {/* How to check Vietnam visa status online */}
        <div className="my-5">
          <SectionHeading>
            How to check your Vietnam visa status online?
          </SectionHeading>
          <SectionDescription>
            Here are simple steps to track Vietnam e-visa status:
          </SectionDescription>
          <ul className="mb-2 space-y-2">
            <li className="flex items-start gap-2">
              <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
              <span>
                <b>Step 1:</b> Enter your date of birth, visa application number (or registration code) and email address.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
              <span>
                <b>Step 2:</b> Click 'Check Status' to view your Vietnam visa application status.
              </span>
            </li>
          </ul>
          <SectionDescription>
            One of the following results will be displayed on the screen:
          </SectionDescription>
          <ul className="list-disc pl-6 text-base text-zinc-700 space-y-1">
            <li><b>Approved:</b> Your visa is approved.</li>
            <li><b>In process:</b> Your visa application is still being processed.</li>
            <li><b>Rejected:</b> Your application has been rejected by the visa authorities.</li>
            <li><b>Unknown:</b> The information you have entered is invalid.</li>
          </ul>
        </div>

        {/* Why use the Atlys Vietnam visa status tracking tool? */}
        <div className="my-10">
          <SectionHeading>
            Why use the Atlys Vietnam visa status tracking tool?
          </SectionHeading>
          <ul className="mb-2 space-y-2">
            <li className="flex items-start gap-2">
              <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
              <span>
                Atlys works with the Vietnamese immigration authorities to provide 100% accurate, real-time updates.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
              <span>
                The tool lets you track your visa status anytime, anywhere, using your smartphone or laptop.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <TbArrowBadgeRightFilled color="#0A509F" size={22} className="mt-1" />
              <span>
                The use of advanced technology ensures data protection and prevents unauthorised access.
              </span>
            </li>
          </ul>
        </div>

        <div className="my-5">
          <SectionHeading>
            How will I receive my Vietnam e-visa once it is approved?
          </SectionHeading>
          <SectionDescription>
            Once approved, you will receive the Vietnam e-visa as a downloadable PDF. Depending on how you applied, you can either receive it by email or
            download it from the website where you applied.
          </SectionDescription>
          <SectionDescription>
            Here is a sample of the Vietnam e-visa:
          </SectionDescription>
          <Image
            src="/tools/image151558.png"
            alt="Vietnam e-visa sample"
            width={600}
            height={400}
            className="my-4 border"
          />


             <div className="bg-[#E6F4EA] border border-[#BBF7D0] rounded-xl p-4 flex items-start gap-2 mt-4">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="mt-1">
              <circle cx="11" cy="11" r="11" fill="#BBF7D0" />
              <path d="M11 6.5V12.5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="11" cy="15.5" r="1" fill="#22C55E" />
            </svg>
            <span className="text-[#15803D] text-[15px] leading-[22px]">
              <span className="font-semibold">Tip:</span> Once you receive it, make sure to print it out and carry it with you to present upon arrival in Vietnam.
            </span>
          </div>
        </div>

        <div className="my-5">
          <SectionHeading>
            My Vietnam e-visa status shows "rejected." What should I do?
          </SectionHeading>
          <SectionDescription>
            If your Vietnam visa application status shows <b>"rejected"</b>, understand and address the reasons for rejection before reapplying. Some of the most common rejection reasons for a Vietnam visa include:
          </SectionDescription>
          <WhyUseAtlysPhotoMaker
            points={[
              {
                title: "Incomplete or inaccurate application:",
                desc: "Missing or mismatching information on your visa form can often lead to visa rejection.",
              },
              {
                title: "Invalid passport:",
                desc: "Having a passport with a validity of less than six months (at least) from the arrival date in Vietnam.",
              },
              {
                title: "Incorrect photographs:",
                desc: "Submitting photos that do not meet the visa photo requirements (e.g., must be clear, unedited, and not older than 6 months) can cause issues.",
              },
              {
                title: "Missing surname:",
                desc: "A surname is mandatory when applying for a Vietnam e-visa. Applying without a surname on the government website will result in rejection.",
              },
            ]}
          />
          <div className="bg-[#E6F4EA] border border-[#BBF7D0] rounded-xl p-4 flex items-start gap-2 mt-4">
            <span className="text-[#15803D] text-[15px] leading-[22px]">
              Worried about another visa rejection? <a href="#" className="text-[#2563eb] underline">Apply with Atlys</a>, and let our experts ensure that nothing stops you from getting a Vietnam visa this time!
            </span>
          </div>
        </div>

        <FaqSection
          faqs={[
            "Can I check the Vietnam visa status using my passport number?",
            "What information do I need to track the Vietnam visa application?",
            'My Vietnam e-visa status is still showing "in process." What can I do?',
            "Can I check my Vietnam visa application status offline?",
          ]}
        />


        <div className="my-8">
          <div className="bg-[#E6F4EA] border border-[#BBF7D0] rounded-xl p-4 flex items-start gap-2">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="mt-1">
              <circle cx="11" cy="11" r="11" fill="#BBF7D0" />
              <path d="M11 6.5V12.5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="11" cy="15.5" r="1" fill="#22C55E" />
            </svg>
            <span className="text-[#15803D] text-[15px] leading-[22px]">
              <span className="font-semibold">Got further questions?</span> Reach out to the Atlys support team at <a href="mailto:support@atlys.com" className="underline text-[#15803D]">support@atlys.com</a> or the Vietnamese government's e-visa support team at <a href="mailto:foreigners@immigration.gov.vn" className="underline text-[#15803D]">foreigners@immigration.gov.vn</a> (Global Hotline +8424-382-64026).
            </span>
          </div>
        </div>
        
        {/* How we reviewed this tool */}
        <HistorySection
          title="How we reviewed this tool:"
          description="Our experts continually monitor the official sources for any changes,
             and we update our articles when new information becomes available."
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
