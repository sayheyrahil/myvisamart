"use client";
import React from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/HeroSection";
 import HowItWorksSection from "@/components/HowItWorksSection";
 import Image from "next/image";
import SectionIcon from "@/components/SectionIcon";
 

export default function Page() {
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
                  className={`text-[30px] font-medium cursor-pointer ${
                    idx === 0 ? "text-[#2563eb]" : "text-[#23272E] hover:text-[#2563eb]"
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
            {/* A */}
            <div className="mb-8">
              <div className="text-[22px] font-bold text-[#2563eb] mb-4">A</div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Adjustment Of Status</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    Adjustment of Status (AOS) is a process in the U.S. for an immigrant to become a permanent resident without leaving the country.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Alien</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    The term alien refers to an individual who is not a national or citizen of the country, such as foreign nationals and legal/undocumented visitors of a nation. The word is often used in U.S. immigration law to refer to non-citizens. The term has negative connotations and is being replaced by terms like “noncitizen” or “foreign national.” An alien can be classified as a resident or nonresident alien, depending on the length of stay and other factors.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Appeal Letter</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    An Appeal Letter is a formal way to ask for the review of a denied visa application, providing arguments and additional information to overturn the decision.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Asylum</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    Asylum is protection granted by a nation to individuals fleeing danger or persecution in their home countries, ensuring their safety.
                  </div>
                </div>
              </div>
            </div>
            {/* B */}
            <div className="mb-8">
              <div className="text-[22px] font-bold text-[#2563eb] mb-4">B</div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Background Check</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    Background checks involve evaluating an individual's criminal, financial, and employment history to ensure their reliability and safety.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Bilateral Agreement</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    Bilateral ties include agreements between two countries, like visa-free trips for tourists, for secure and accurate traveler identification.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Biometrics</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    Biometrics like fingerprints or retina/iris/facial scans, allow for highly secure, fast, and accurate traveler identification.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Bona Fide</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    Bona fide describes valid and genuine relationships and intent, and may be a status in visa law to prove the genuineness of people, families, or goods.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Border Control</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    Border control refers to all laws and regulations enforced at entry and exit points to a nation, regulating the movement of people, animals, and goods. It includes the verification of travel documents and security checks and legal transportation of goods.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Business Visa</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    A business visa is issued to people traveling abroad for work or business-related purposes.
                  </div>
                </div>
              </div>
            </div>
            {/* C */}
            <div className="mb-8">
              <div className="text-[22px] font-bold text-[#2563eb] mb-4">C</div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Citizenship</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    Citizenship signifies legal belonging to a specific country, entitling one to civil rights, voting, and in some cases, healthcare, social protections, travel access or consular services.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Consent Letter</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    A consent letter is a written approval from a parent/guardian or legal representative for a minor to travel or undertake actions on a parent’s behalf.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Consular Officer</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    A diplomatic official representing a country’s interests abroad, responsible for issuing consular services and visas and issuing travel bans to foreign nationals.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Consular Processing</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    Consular processing is the procedure through which non-citizens receive a visa or green card from embassies, consulates, or consular sections, especially for Consul.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Consulate</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    A consulate is the office or official who serves the process of international forms: diplomatic relations, especially for Consul.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Cultural Exchange Visa</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    A visa that allows for formalized, scheduled programs for cultural, educational, or work exchanges between two countries.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="font-semibold text-[#23272E]">Customs Declaration</span>
                  </div>
                  <div className="text-[#5B5F62] text-[15px] ml-6">
                    A required form for travelers, declaring goods for customs clearance and regulation at borders or entry points.
                  </div>
                </div>
              </div>
            </div>
          </div>



      </div >

</div>
    </MasterPage >
  );
}
