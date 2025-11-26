"use client";
import React from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/tools/HeroSection";
import { Map, FileText, Truck } from "lucide-react";
import HowItWorksSection from "@/components/tools/HowItWorksSection";
import * as TbIcons from "react-icons/tb";
import Image from "next/image";
import SectionIcon from "@/components/tools/SectionIcon";
import { TbArrowBadgeRightFilled } from "react-icons/tb";


export default function Page() {
  return (
    <MasterPage title="Visa Eligibility Quiz - Atlys" >
      <div className="max-w-6xl mx-auto bg-white">
        <div className="w-full min-h-screen  text-gray-900">
          {/* Hero Section */}
          <HeroSection
            title={
              <div
              >
                Check Visa Eligibility In Minutes
              </div>
            }
            description="Your dream destination is just a visa away – let’s make it happen."
            buttonText="Check my visa photo"
            imageSrc="/tools/image56.png"
            imageAlt="image56 Preview"
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

            ]}
          />


          {/* Selector Section */}
          <section className="py-12">
            <div className="border rounded-2xl p-0 md:p-8 shadow-sm  ">
              {/* Tabs */}
              <div className="flex items-center border-b px-4 md:px-8 pt-4 md:pt-0 mb-8">
                <button
                  className="flex items-center gap-2 px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium focus:outline-none"
                  disabled
                >
                  <svg width="20" height="20" fill="none"><path d="M4 4.75A2.75 2.75 0 0 1 6.75 2h6.5A2.75 2.75 0 0 1 16 4.75v10.5A2.75 2.75 0 0 1 13.25 18h-6.5A2.75 2.75 0 0 1 4 15.25V4.75Z" stroke="#0A509F" strokeWidth="1.5" strokeLinecap="round" /><path d="M7 6h6M7 10h6M7 14h3" stroke="#0A509F" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  Answer questions
                </button>
                <button
                  className="flex items-center gap-2 px-4 py-2 text-gray-400 font-medium"
                  disabled
                >
                  <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="8" stroke="#9ca3af" strokeWidth="1.5" /><path d="M7 10h6" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  Eligible countries
                </button>
              </div>

              {/* Quiz Form */}
              <form className="space-y-10 px-4 md:px-8 pb-8">
                <div className="space-y-8">
                  {/* Question 1 */}
                  <div>
                    <div className="mb-2 font-medium text-gray-900">
                      Are you currently employed? (includes self employment)
                    </div>
                    <div className="flex gap-8 flex-wrap">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="employed" className="accent-blue-600" />
                        Yes
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="employed" className="accent-blue-600" />
                        No
                      </label>
                    </div>
                  </div>
                  {/* Question 2 */}
                  <div>
                    <div className="mb-2 font-medium text-gray-900">
                      How much do you earn monthly? (in local currency but prorated to $)
                    </div>
                    <div className="flex gap-8 flex-wrap">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="income" className="accent-blue-600" />
                        Less than $500
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="income" className="accent-blue-600" />
                        $500 to $999
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="income" className="accent-blue-600" />
                        $1000 or more
                      </label>
                    </div>
                  </div>
                  {/* Question 3 */}
                  <div>
                    <div className="mb-2 font-medium text-gray-900">
                      Have you traveled to US/UK/Schengen/Canada before?
                    </div>
                    <div className="flex gap-8 flex-wrap">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="traveled" className="accent-blue-600" />
                        Yes
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="traveled" className="accent-blue-600" />
                        No
                      </label>
                    </div>
                  </div>
                  {/* Question 4 */}
                  <div>
                    <div className="mb-2 font-medium text-gray-900">
                      How many international trips do you take in a year?
                    </div>
                    <div className="flex gap-8 flex-wrap">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="trips" className="accent-blue-600" />
                        1
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="trips" className="accent-blue-600" />
                        2-4
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="trips" className="accent-blue-600" />
                        5-6
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="trips" className="accent-blue-600" />
                        7+
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium shadow hover:bg-blue-700 transition"
                  >
                    Generate Invitation Letter
                  </button>
                </div>
              </form>
            </div>
          </section>




          {/* Schengen Invitation Letter Info Sections */}
          <div className=" pt-8 pb-1">
            {/* Section 1 */}
            <div className="flex items-start gap-3 mb-6">
              <SectionIcon />
              <div>
                <div className="  text-[24px] leading-[32px] font-semibold text-[#23272E] mb-2">
                  What is the visa eligibility quiz?
                </div>
                <p className="text-[#5B5F62] text-[16px] leading-[24px]  ">
                  The visa eligibility check helps travellers determine which countries they can apply for a visa to based on their current circumstances. Factors determining eligibility include employment, monthly income, and travel history.
                  <div className="my-2">

                    Certain countries have specific requirements for travellers, such as travel history and minimum funds to qualify for a visa. By using our tool to check your tourist visa eligibility, you can quickly determine your next travel destination.
                  </div>          </p>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-6">
              <SectionIcon />
              <div>
                <div className="  text-[24px] leading-[32px] font-semibold text-[#23272E] mb-2">
                  Why use the visa eligibility quiz?                </div>
                <p className="text-[#5B5F62] text-[16px] leading-[24px]  ">
                  Using the eligibility quiz ensures you are well-informed about which
                  countries you can apply for a visa. This helps you save time and eliminates the need to research specific countries.
                  <div className="my-2">

                    Our tool uses the information you provide to analyse and identify which countries you are eligible for and for which you have the highest probability of receiving a visa.
                  </div>
                </p>
              </div>
            </div>

          </div>

          {/* How do you use the visa eligibility check tool? */}
          <div className=" rounded-2xl  md:px-1 py-1 mb-10">
            <div className=" ">
              <div className="flex items-center gap-2 mb-2">
                <SectionIcon />

                <h2 className="text-lg  font-semibold  ">
                  How do you use the visa eligibility check tool?
                </h2>
              </div>
              <div className="text-[#5B5F62] text-base md:text-lg leading-7 mb-2">
                The eligibility quiz is straightforward and will take less than two minutes to complete. The process goes as follows:
              </div>
              <ul className="list-none pl-0 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1">
                    <svg width="18" height="18" fill="none"><path d="M7 6l4 3-4 3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span>
                    <b>Answer 4 easy questions:</b> First, answer 4 questions honestly asked by the tool. This will get you the most accurate results.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">
                    <svg width="18" height="18" fill="none"><path d="M7 6l4 3-4 3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span>
                    <b>Submit your answers:</b> Click on "View Eligibility" to instantly receive a list of countries for which you can apply for a visa.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">
                    <svg width="18" height="18" fill="none"><path d="M7 6l4 3-4 3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span>
                    <b>Apply for your visa:</b> Use the list to decide your next destination and you can apply visa directly through Atlys.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className=" py-10 mb-10">
            <div className=" ">
              <div className="divide-y divide-[#E5E7EB] border rounded-xl bg-[#F8FAFC]">
                {[
                  "Am I guaranteed to receive a visa when I am found eligible?",
                  "Is the visa eligibility quiz accurate?",
                  "What do I do when I am eligible to apply for a visa?",
                  "Can I retake the quiz if my circumstances change?",
                  "How do I find the type of visa I can apply for?",
                ].map((q, i) => (
                  <details key={i} className="group">
                    <summary className="flex justify-between items-center cursor-pointer px-5 py-4 text-[15px] text-[#23272E] select-none group-open:text-[#0A509F]">
                      {q}
                      <span className="ml-2 transition-transform group-open:rotate-90">
                        <svg width="18" height="18" fill="none"><path d="M7 6l4 3-4 3" stroke="#0A509F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                    </summary>
                    {/* Add answer content here if needed */}
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* How we reviewed this tool */}
          <div className=" rounded-2xl px-4 md:px-10 py-10 mb-10">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-2 mb-2">
                <SectionIcon />
                <h2 className="text-lg md:text-xl font-semibold text-[#23272E]">
                  How we reviewed this tool:
                </h2>
              </div>
              <div className="text-[#5B5F62] text-base md:text-lg leading-7 mb-4">
                Our experts continually monitor the official sources for any changes, and we update our articles when new information becomes available.
              </div>
              {/* History Tab */}
              <div className="flex items-center gap-2 mb-6">
                <button className="flex items-center gap-2 px-3 py-1 border-b-2 border-[#0EA5E9] text-[#0EA5E9] font-medium bg-transparent focus:outline-none">
                  <svg width="22" height="22" fill="none" className="text-[#0EA5E9]"><path d="M11 2v18M2 11h18" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  History
                </button>
              </div>
              <div className="text-[#23272E] text-[16px] font-semibold mb-4">
                Current Version
              </div>
              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {[
                  { date: "30 Jan 2025", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
                  { date: "22 Nov 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
                  { date: "22 Oct 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
                  { date: "26 Jun 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
                  { date: "25 Jun 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
                  { date: "14 May 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
                  { date: "09 May 2024", writer: "Satish Ramcharan", editor: "Arun Kumar Gundu" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-[#E0E7EF] rounded-xl bg-white p-5 flex flex-col gap-2 min-h-[120px]"
                  >
                    <div className="text-[#23272E] font-semibold text-[16px] mb-2">{item.date}</div>
                    <div className="text-[#5B5F62] text-[14px]">
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
        </div>



      </div >

    </MasterPage >
  );
}
