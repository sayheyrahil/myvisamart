"use client";
import React from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/tools/HeroSection";
import HowItWorksSection from "@/components/tools/HowItWorksSection";
import Image from "next/image";
import SectionIcon from "@/components/tools/SectionIcon";
import { TbArrowBadgeRightFilled } from "react-icons/tb";


export default function Page() {
  // Glossary data grouped by letter
  const glossaryData = [
    {
      letter: "A",
      items: [
        {
          term: "Adjustment Of Status",
          desc: "Adjustment of Status (AOS) is a process in the U.S. for an immigrant to become a permanent resident without leaving the country.",
        },
        {
          term: "Alien",
          desc: "The term alien refers to an individual who is not a national or citizen of the country, such as foreign nationals and legal/undocumented visitors of a nation. The word is often used in U.S. immigration law to refer to non-citizens. The term has negative connotations and is being replaced by terms like “noncitizen” or “foreign national.” An alien can be classified as a resident or nonresident alien, depending on the length of stay and other factors.",
        },
        {
          term: "Appeal Letter",
          desc: "An Appeal Letter is a formal way to ask for the review of a denied visa application, providing arguments and additional information to overturn the decision.",
        },
        {
          term: "Asylum",
          desc: "Asylum is protection granted by a nation to individuals fleeing danger or persecution in their home countries, ensuring their safety.",
        },
      ],
    },
    {
      letter: "B",
      items: [
        {
          term: "Background Check",
          desc: "Background checks involve evaluating an individual's criminal, financial, and employment history to ensure their reliability and safety.",
        },
        {
          term: "Bilateral Agreement",
          desc: "Bilateral ties include agreements between two countries, like visa-free trips for tourists, for secure and accurate traveler identification.",
        },
        {
          term: "Biometrics",
          desc: "Biometrics like fingerprints or retina/iris/facial scans, allow for highly secure, fast, and accurate traveler identification.",
        },
        {
          term: "Bona Fide",
          desc: "Bona fide describes valid and genuine relationships and intent, and may be a status in visa law to prove the genuineness of people, families, or goods.",
        },
        {
          term: "Border Control",
          desc: "Border control refers to all laws and regulations enforced at entry and exit points to a nation, regulating the movement of people, animals, and goods. It includes the verification of travel documents and security checks and legal transportation of goods.",
        },
        {
          term: "Business Visa",
          desc: "A business visa is issued to people traveling abroad for work or business-related purposes.",
        },
      ],
    },
    {
      letter: "C",
      items: [
        {
          term: "Citizenship",
          desc: "Citizenship signifies legal belonging to a specific country, entitling one to civil rights, voting, and in some cases, healthcare, social protections, travel access or consular services.",
        },
        {
          term: "Consent Letter",
          desc: "A consent letter is a written approval from a parent/guardian or legal representative for a minor to travel or undertake actions on a parent’s behalf.",
        },
        {
          term: "Consular Officer",
          desc: "A diplomatic official representing a country’s interests abroad, responsible for issuing consular services and visas and issuing travel bans to foreign nationals.",
        },
        {
          term: "Consular Processing",
          desc: "Consular processing is the procedure through which non-citizens receive a visa or green card from embassies, consulates, or consular sections, especially for Consul.",
        },
        {
          term: "Consulate",
          desc: "A consulate is the office or official who serves the process of international forms: diplomatic relations, especially for Consul.",
        },
        {
          term: "Cultural Exchange Visa",
          desc: "A visa that allows for formalized, scheduled programs for cultural, educational, or work exchanges between two countries.",
        },
        {
          term: "Customs Declaration",
          desc: "A required form for travelers, declaring goods for customs clearance and regulation at borders or entry points.",
        },
      ],
    },
  ];

  return (
    <MasterPage title="Visa Glossary " >
      <div className="max-w-6xl mx-auto bg-white">
        <div className="w-full min-h-screen  text-gray-900">
          {/* Hero Section */}
          <HeroSection
            title={
              <div
              >
                Visa Glossary
              </div>
            }
            description="Your dream destination is just a visa away – let’s make it happen."
            buttonText="Check my visa photo"
            imageSrc="/tools/3765832_19797631.png"
            imageAlt="3765832_19797631 Preview"
          />


          {/* Alphabet Nav & Search */}
          <div className=" py-8 mb-8 rounded-2xl">
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((char, idx) => (
                <span
                  key={char}
                  className={`text-[30px] font-medium cursor-pointer ${idx === 0 ? "text-brand" : "text-[#23272E] hover:text-[#2563eb]"
                    }`}
                >
                  {char}
                </span>
              ))}
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search countries, visas, placeholder"
                    className="w-full border border-[#E5E7EB] rounded-lg px-5 py-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="20" height="20" fill="none"><path d="M19 19l-4-4M9 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Glossary Section */}
          <div className="pt-8 pb-16">
            <div className="max-w-6xl mx-auto flex">
              {/* Timeline column */}
              <div className="w-2/12 relative flex flex-col items-center">
                {/* Vertical line: absolute, full height */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-[#0A509F] opacity-20 z-0" />
                {/* Letters: render all at once, spaced by section */}
                {glossaryData.map(({ letter }, idx) => (
                  <div
                    key={letter}
                    className="relative z-10 flex items-start justify-center"
                    style={{
                      height: `calc(100% / ${glossaryData.length})`
                    }}
                  >
                    <span className="text-[44px] font-bold text-brand bg-white px-2">{letter}</span>
                  </div>
                ))}
              </div>
              {/* Glossary content */}
              <div className="w-10/12">
                {glossaryData.map(({ letter, items }) => (
                  <div className="mb-8" key={letter}>
                    <div className="space-y-6">
                      {items.map(({ term, desc }) => (
                        <div key={term}>
                          <div className="flex items-center gap-2">
                            <SectionIcon />
                            <span className="font-semibold text-[#23272E]">{term}</span>
                          </div>
                          <div className="text-[#5B5F62] text-[15px] ml-6">
                            {desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>



        </div >

      </div>
    </MasterPage >
  );
}
