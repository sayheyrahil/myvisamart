"use client";
import React from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/tools/HeroSection";
import HowItWorksSection from "@/components/tools/HowItWorksSection";
import SectionHeading from "@/components/tools/SectionHeading";
import SectionDescription from "@/components/tools/SectionDescription";
import HistorySection from "@/components/tools/HistorySection";
import FaqSection from "@/components/tools/FaqSection";
import SectionIcon from "@/components/tools/SectionIcon";
import WhyUseAtlysPhotoMaker from "@/components/tools/WhyUseAtlysPhotoMaker";
import Image from "next/image";
export default function Page() {
  return (
    <MasterPage title="Visa Eligibility Quiz - Atlys">
      <div className="w-full min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <HeroSection
          title={<div>Check Visa Eligibility In Minutes</div>}
          description="Your dream destination is just a visa away – let’s make it happen."
          buttonText="Check my visa photo"
          imageSrc="/tools/image56.png"
          imageAlt="image56 Preview"
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
        {/* Quiz Section */}
        <div className="my-10">
          <SectionHeading>
            Take the Visa Eligibility Quiz
          </SectionHeading>
          <SectionDescription>
            Answer a few simple questions to check which countries you are eligible to apply for a visa.
          </SectionDescription>
          <section className="max-w-2xl mx-auto py-8">
            <div className="border rounded-2xl p-0 md:p-8 shadow-sm bg-white">
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
        </div>

        {/* Info Sections */}
        <div className="my-10">
          <SectionHeading>
            What is the visa eligibility quiz?
          </SectionHeading>
          <SectionDescription>
            The visa eligibility check helps travellers determine which countries they can apply for a visa to based on their current circumstances. Factors determining eligibility include employment, monthly income, and travel history.
            <br />
            Certain countries have specific requirements for travellers, such as travel history and minimum funds to qualify for a visa. By using our tool to check your tourist visa eligibility, you can quickly determine your next travel destination.
          </SectionDescription>
        </div>

        <div className="my-10">
          <SectionHeading>
            Why use the visa eligibility quiz?
          </SectionHeading>
          <SectionDescription>
            Using the eligibility quiz ensures you are well-informed about which countries you can apply for a visa. This helps you save time and eliminates the need to research specific countries.
            <br />
            Our tool uses the information you provide to analyse and identify which countries you are eligible for and for which you have the highest probability of receiving a visa.
          </SectionDescription>
        </div>

        <div className="my-10">
          <SectionHeading>
            How do you use the visa eligibility check tool?
          </SectionHeading>
          <SectionDescription>
            The eligibility quiz is straightforward and will take less than two minutes to complete. The process goes as follows:
          </SectionDescription>
          <WhyUseAtlysPhotoMaker
            points={[
              {
                title: "Answer 4 easy questions:",
                desc: "First, answer 4 questions honestly asked by the tool. This will get you the most accurate results.",
              },
              {
                title: "Submit your answers:",
                desc: 'Click on "View Eligibility" to instantly receive a list of countries for which you can apply for a visa.',
              },
              {
                title: "Apply for your visa:",
                desc: "Use the list to decide your next destination and you can apply visa directly through Atlys.",
              },
            ]}
          />
        </div>

        {/* FAQ Section */}
        <FaqSection
          faqs={[
            "Am I guaranteed to receive a visa when I am found eligible?",
            "Is the visa eligibility quiz accurate?",
            "What do I do when I am eligible to apply for a visa?",
            "Can I retake the quiz if my circumstances change?",
            "How do I find the type of visa I can apply for?",
          ]}
        />

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
