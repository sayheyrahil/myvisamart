"use client";
import React from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/HeroSection";
import { Map, FileText, Truck } from "lucide-react";
import HowItWorksSection from "@/components/HowItWorksSection";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import SectionIcon from "@/components/SectionIcon";


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
                <svg width="18" height="18" fill="none"><path d="M13.5 4.5l-6 6-3-3" stroke="#1566C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Enter details
              </button>
              <button
                className="flex items-center gap-2 text-[#A0AEC0] font-semibold px-2 py-1"
                style={{ background: "transparent" }}
                disabled
              >
                <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="8" stroke="#A0AEC0" strokeWidth="1.5"/><path d="M6 9l2 2 4-4" stroke="#A0AEC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
                    <svg width="20" height="20" fill="none"><path d="M7 2v2M13 2v2M3 7h14M5 4h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="#A0AEC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
              <div
                layer-name="Heading 2 → Dubai Visa Information"
                className="text-3xl font-semibold leading-9 text-teal-950 max-md:text-2xl max-md:leading-8 max-sm:text-xl max-sm:leading-7"
              >
               How to check UAE/Dubai visa status by passport number?
              </div>
            </div>
            <div
              layer-name="A passport-size photo is a small, standardised photo that's required for most visa applications. It helps immigration officials verify your identity. Different countries have different rules when it comes to photo size, background colours, and other specifications. Following these specific requirements is important to ensure a successful visa application."
              className="w-full text-base leading-6 text-zinc-600 max-md:text-base max-md:leading-5 max-sm:text-sm max-sm:leading-5   p-5 rounded-xl"
            >
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
            </div>
          </div>

          {/* How to create the perfect passport-size photo? */}
          <div className="flex flex-col gap-8 items-center w-full max-md:gap-6 max-sm:gap-5">
            <div className="flex gap-2.5 items-center w-full max-sm:flex-col max-sm:gap-4 max-sm:items-start">
              <SectionIcon />
              <div
                layer-name="Heading 2 → Dubai Visa Information"
                className="text-3xl font-semibold leading-9 text-teal-950 max-md:text-2xl max-md:leading-8 max-sm:text-xl max-sm:leading-7"
              >
                How to create the perfect passport-size photo for your visa?
              </div>
            </div>
            <div className="flex flex-col gap-2.5 items-start w-full">
              <div
                layer-name="Steps to create and adjust your passport-size photo to meet visa requirements using passport photo maker:"
                className="w-full text-base leading-6 text-zinc-600 max-md:text-base max-md:leading-5 max-sm:text-sm max-sm:leading-5"
              >
                Steps to create and adjust your passport-size photo to meet visa
                requirements using passport photo maker:
              </div>
              <div className="flex gap-3 items-center pl-5 w-full max-sm:gap-2 max-sm:pl-2.5">
                <TbArrowBadgeRightFilled color="0A509F" size={30} />
                <div
                  className="text-base leading-6 text-zinc-600 max-md:text-base max-md:leading-5 max-sm:text-sm max-sm:leading-5"
                >
                  Upload your photo in JPEG, JPG, or PNG format.
                </div>
              </div>
              <div className="flex gap-3 items-center pl-5 w-full max-sm:gap-2 max-sm:pl-2.5">
                <TbArrowBadgeRightFilled color="0A509F" size={30} />
                <div
                  className="text-base leading-6 text-zinc-600 max-md:text-base max-md:leading-5 max-sm:text-sm max-sm:leading-5"
                >
                  Click 'Transform' to resize and adjust your photo.
                </div>
              </div>
              <div className="flex gap-3 items-center pl-5 w-full max-sm:gap-2 max-sm:pl-2.5">
                <TbArrowBadgeRightFilled color="0A509F" size={30} />
                <div
                  className="text-base leading-6 text-zinc-600 max-md:text-base max-md:leading-5 max-sm:text-sm max-sm:leading-5"
                >
                  Download your ready-to-use passport-size photo.
                </div>
              </div>
            </div>
          </div>

          {/* Why use the Atlys passport size photo maker? */}
          <div className="bg-white rounded-2xl   p-6  ">
            <div className="flex items-center gap-3 mb-4">
              <SectionIcon />
              <h3 className="text-2xl font-bold text-teal-950">Why use the Atlys passport size photo maker?</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 "><span className="font-bold flex"> <TbArrowBadgeRightFilled color="0A509F" size={30} />
                Quick and easy:</span> Convert your photo into the perfect passport size, all for free, without the hassle of visiting a photo studio or booth.</li>
              <li className="flex items-center gap-3 "><span className="font-bold flex"> <TbArrowBadgeRightFilled color="0A509F" size={30} />
                Perfectly prepared:</span> Your photo will be automatically adjusted to meet official visa requirements, ensuring a smooth application process.</li>
              <li className="flex items-center gap-3 "><span className="font-bold flex"> <TbArrowBadgeRightFilled color="0A509F" size={30} />
                Reliable accuracy:</span> Our tool is regularly updated with the latest guidelines, so your photo always meets the necessary standards.</li>
              <li className="flex items-center gap-3 "><span className="font-bold flex"> <TbArrowBadgeRightFilled color="0A509F" size={30} />
                Easy access:</span> Adjust your selfie photo anytime and anywhere directly from your tablet, laptop, or smartphone.</li>
              <li className="flex items-center gap-3 "><span className="font-bold flex"> <TbArrowBadgeRightFilled color="0A509F" size={30} />
                Get two ready-to-use photos:</span> Our free visa photo tool will automatically provide you with two passport-sized photos to use for your visa application.</li>
            </ul>
            <div className="mt-6 flex justify-center">
              <img
                alt="passport photo example"
                className="rounded-3xl h-[340px] w-[604px] max-w-full object-cover"
                src="/tools/Frame1272632106.png"
              />
            </div>
          </div>


          {/* General passport-size visa photo requirements */}
          <div className="bg-white rounded-2xl   p-6 ">
            <div className="flex items-center gap-3 mb-4">
              <SectionIcon />
              <h3 className="text-2xl font-bold text-teal-950">General passport-size visa photo requirements</h3>
            </div>
            <p className="mb-4 text-gray-700">Here are the general visa photo requirements that most countries follow:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li className="flex items-center gap-3 "> <TbArrowBadgeRightFilled color="0A509F" size={30} /> <span className="font-bold">Size:</span> 35mm x 45mm (general size, some countries may differ)</li>
              <li className="flex items-center gap-3 "> <TbArrowBadgeRightFilled color="0A509F" size={30} /> <span className="font-bold">Background:</span> Plain white or light-coloured, no patterns or shadows</li>
              <li className="flex items-center gap-3 "> <TbArrowBadgeRightFilled color="0A509F" size={30} /> <span className="font-bold">Facial expression:</span> Neutral, mouth closed, looking directly at camera</li>
              <li className="flex items-center gap-3 "> <TbArrowBadgeRightFilled color="0A509F" size={30} /> <span className="font-bold">Lighting:</span> Even, no shadows, reflections, or red-eye</li>
              <li className="flex items-center gap-3 "> <TbArrowBadgeRightFilled color="0A509F" size={30} /> <span className="font-bold">Head position:</span> Face centered, 70-80% of frame</li>
              <li className="flex items-center gap-3 "> <TbArrowBadgeRightFilled color="0A509F" size={30} /> <span className="font-bold">Photo quality:</span> Clean, undamaged, high-quality paper, 600 dpi</li>
              <li className="flex items-center gap-3 "> <TbArrowBadgeRightFilled color="0A509F" size={30} /> <span className="font-bold">Glasses:</span> Allowed if eyes visible, no glare</li>
              <li className="flex items-center gap-3 "> <TbArrowBadgeRightFilled color="0A509F" size={30} /> <span className="font-bold">Head coverings:</span> Religious coverings allowed if face visible, hats not permitted</li>
              <li className="flex items-center gap-3 "> <TbArrowBadgeRightFilled color="0A509F" size={30} /> <span className="font-bold">Accessories:</span> No jewelry/headphones that obscure face</li>
            </ul>
            {/* Example requirements table */}
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full border text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-3 py-2">Size</th>
                    <th className="border px-3 py-2">Background</th>
                    <th className="border px-3 py-2">Expression</th>
                    <th className="border px-3 py-2">Lighting</th>
                    <th className="border px-3 py-2">Glasses</th>
                    <th className="border px-3 py-2">Head Covering</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2">35x45mm</td>
                    <td className="border px-3 py-2">White/Light</td>
                    <td className="border px-3 py-2">Neutral</td>
                    <td className="border px-3 py-2">No shadows</td>
                    <td className="border px-3 py-2">Allowed (no glare)</td>
                    <td className="border px-3 py-2">Religious only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          {/* FAQ Section */}
          <div className="bg-white rounded-2xl   p-6  ">
            <div className="divide-y">
              <div className="py-4 flex justify-between items-center">
                <span>Is the Atlys visa photo maker free?</span>
                <span className="text-gray-400">&#9660;</span>
              </div>
              <div className="py-4 flex justify-between items-center">
                <span>Can I convert a selfie into a visa photo using Atlys free online visa photo editor?</span>
                <span className="text-gray-400">&#9660;</span>
              </div>
              <div className="py-4 flex justify-between items-center">
                <span>How recent should my visa photo be?</span>
                <span className="text-gray-400">&#9660;</span>
              </div>
              <div className="py-4 flex justify-between items-center">
                <span>Why can't I upload my photo to the Atlys visa photo maker?</span>
                <span className="text-gray-400">&#9660;</span>
              </div>
              <div className="py-4 flex justify-between items-center">
                <span>Can my visa get rejected if I submit the incorrect photo?</span>
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
