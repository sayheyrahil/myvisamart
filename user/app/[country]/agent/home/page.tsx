"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import MasterPage from '@/components/layouts/master';
import HeroSection from "@/components/tools/HeroSection";
import TrustedByAgents from "@/components/TrustedByAgents";
import WhyVisamart from "@/components/common/home/WhyVisamart";

export default function Page() {

  const [countryCode, setCountryCode] = useState("+880");
  const [flag, setFlag] = useState("🇧🇩");


  return (
    <MasterPage title="MyVisaMart - Your Gateway to Hassle-Free Visa Applications">
      <HeroSection
        title={
          <div className="w-full flex flex-col items-center text-center py-20 px-4 leading-[24px] ">
            {/* Badge */}
            <div className="flex justify-start w-full max-w-md mb-6">
              <div className="px-4 py-1.5 bg-white rounded-full shadow-lg text-sm font-medium flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                Easy Application
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#101828] leading-tight mb-3 text-left w-full max-w-md">
              Great Value,<br />Simple Bookings
            </h1>

            {/* Description */}
            <div className="text-gray-500 mb-8 text-left w-full max-w-md text-sm font-normal">
              Velit aliquam imperdiet mollis nullam volutpat porttitor
            </div>

            {/* Phone Input */}
            <div className="flex items-center w-full max-w-md border border-gray-300 rounded-xl px-4 py-3 bg-white mb-6 shadow-sm">
              {/* Flag & Country Code */}
              <div className="flex items-center gap-2 cursor-pointer select-none">
                <span className="text-2xl">{flag}</span>
                <ChevronDown size={18} className="text-gray-500" />
              </div>
              <span className="mx-3 text-gray-400 text-sm" >{countryCode}</span>
              <input
                type="text"
                placeholder="Your mobile number"
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent text-sm"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex w-full max-w-md gap-4">
              <button className="flex-1 px-2 text-sm py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Sign Up for Free
              </button>
              <button className="flex-1 px-2 text-sm py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition">
                Attend a Demo
              </button>
            </div>
          </div>
        }
        description=""
        buttonText=""
        imageSrc="/Rectangle14367.png"
        imageAlt="Visa Preview"
      />
      {/* Stats Section */}

      <TrustedByAgents />
      <WhyVisamart />

      <div
        className="w-full max-w-6xl mx-auto mt-10 mb-14 rounded-[48px] overflow-hidden relative"
        style={{
          backgroundImage: "url('/Content1231212.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: 420,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full py-14 px-4">
          <div className="text-white text-3xl md:text-5xl font-semibold text-center mb-10 drop-shadow-lg">
            99.2% Visas<br />Delivered On Time
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 w-full">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="text-blue-100 text-4xl md:text-5xl font-semibold mb-2">5,00,000+</div>
              <div className="w-16 h-1 bg-white/40 mb-2" />
              <div className="text-white text-lg font-medium">Visas</div>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <div className="text-blue-100 text-4xl md:text-5xl font-semibold mb-2">65</div>
              <div className="w-16 h-1 bg-white/40 mb-2" />
              <div className="text-white text-lg font-medium">Types of Visas</div>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <div className="text-blue-100 text-4xl md:text-5xl font-semibold mb-2">5,000+</div>
              <div className="w-16 h-1 bg-white/40 mb-2" />
              <div className="text-white text-lg font-medium">Agents</div>
            </div>
          </div>
        </div>
      </div>
      {/* Steps Section */}
      <div className="w-full bg-[#f6fafd] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-[#101828]">
            How to apply for a visa in<br className="hidden md:block" /> 30 seconds?
          </h2>
          <div className="flex flex-col gap-10">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-md p-8 md:p-12 mb-2">
              <div className="flex-1 w-full md:w-auto mb-8 md:mb-0">
                <div className="text-[56px] font-bold text-gray-200 leading-none mb-2">01</div>
                <div className="text-xl font-medium text-[#101828] mb-2">Select your destination<br />and travel dates</div>
              </div>
              <div className="flex-1 flex justify-center w-full">
                {/* Custom Form UI */}
                <div className="w-full max-w-md bg-[#f6fafd] rounded-2xl p-6 shadow flex flex-col gap-4">
                  {/* Country */}
                  <div className="flex items-center bg-white rounded-xl px-5 py-4 shadow-sm mb-1">
                    <span className="mr-3 text-2xl">
                      {/* Home icon SVG */}
                      <svg width="28" height="28" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 11.5L12 5l9 6.5" /><path d="M4 10v10h16V10" /><path d="M9 21V13h6v8" /></svg>
                    </span>
                    <span className="border-l border-gray-200 h-6 mx-3"></span>
                    <span className="text-gray-600 text-lg">India</span>
                  </div>
                  {/* Going to */}
                  <div className="flex items-center bg-white rounded-xl px-5 py-4 border-2 border-blue-300 shadow-sm mb-1">
                    <span className="mr-3 text-2xl">
                      {/* Plane icon SVG */}
                      <svg width="28" height="28" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><path d="M2.5 19.5L21.5 12 2.5 4.5 6 12l-3.5 7.5z" /></svg>
                    </span>
                    <span className="border-l border-gray-200 h-6 mx-3"></span>
                    <input
                      type="text"
                      placeholder="Going to"
                      className="flex-1 bg-transparent outline-none text-gray-600 text-lg"
                    />
                  </div>
                  {/* Dates */}
                  <div className="flex gap-4">
                    <div className="flex-1 flex items-center bg-white rounded-xl px-5 py-4 shadow-sm">
                      <span className="text-gray-400 flex-1 text-lg">Depart Date</span>
                      <span>
                        {/* Calendar icon SVG */}
                        <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 9h18" /></svg>
                      </span>
                    </div>
                    <div className="flex-1 flex items-center bg-white rounded-xl px-5 py-4 shadow-sm">
                      <span className="text-gray-400 flex-1 text-lg">Return Date</span>
                      <span>
                        {/* Calendar icon SVG */}
                        <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 9h18" /></svg>
                      </span>
                    </div>
                  </div>
                  {/* Search Button */}
                  <button className="w-full mt-2 py-4 rounded-full bg-[#0a53b7] text-white text-lg font-semibold shadow hover:bg-[#174ea6] transition">
                    Search
                  </button>
                </div>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-md p-8 md:p-12 mb-2">
              <div className="flex-1 w-full md:w-auto mb-8 md:mb-0">
                <div className="text-[56px] font-bold text-gray-200 leading-none mb-2">02</div>
                <div className="text-xl font-medium text-[#101828] mb-2">Upload your passport<br />and photo</div>
              </div>
              <div className="flex-1 flex justify-center w-full">
                {/* Custom Form UI for Step 2 */}
                <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow flex flex-col gap-4">
                  {/* Tabs */}
                  <div className="flex border-b border-gray-200 mb-2">
                    <button className="flex-1 text-blue-700 font-medium pb-2 border-b-2 border-blue-700 focus:outline-none">
                      Individual
                    </button>
                    <button className="flex-1 text-gray-400 font-medium pb-2 border-b-2 border-transparent focus:outline-none">
                      Multiple
                    </button>
                  </div>
                  {/* Passport Number */}
                  <input
                    type="text"
                    placeholder="Passport Number"
                    className="w-full bg-[#f6fafd] rounded-lg px-4 py-3 border border-gray-200 focus:border-blue-400 outline-none text-gray-700 text-base mb-2"
                  />
                  {/* First/Last Name */}
                  <div className="flex gap-3 mb-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="flex-1 bg-[#f6fafd] rounded-lg px-4 py-3 border border-gray-200 focus:border-blue-400 outline-none text-gray-700 text-base"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="flex-1 bg-[#f6fafd] rounded-lg px-4 py-3 border border-gray-200 focus:border-blue-400 outline-none text-gray-700 text-base"
                    />
                  </div>
                  {/* Origin State */}
                  <input
                    type="text"
                    placeholder="Origin State"
                    className="w-full bg-[#f6fafd] rounded-lg px-4 py-3 border border-gray-200 focus:border-blue-400 outline-none text-gray-700 text-base mb-2"
                  />
                  {/* File Upload */}
                  <label className="w-full bg-[#f6fafd] rounded-lg px-4 py-3 border border-gray-200 flex items-center cursor-pointer text-gray-400 text-base mb-2">
                    <span className="flex-1">Select File</span>
                    <svg width="20" height="20" fill="none" stroke="#bdbdbd" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M16 16v6H8v-6M12 12V2m0 10l-4-4m4 4l4-4" />
                    </svg>
                    <input type="file" className="hidden" />
                  </label>
                  {/* Search Button */}
                  <button className="w-full mt-2 py-3 rounded-full bg-[#174ea6] text-white text-lg font-semibold shadow hover:bg-[#0a53b7] transition">
                    Search
                  </button>
                </div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-md p-8 md:p-12 mb-2">
              <div className="flex-1 w-full md:w-auto mb-8 md:mb-0">
                <div className="text-[56px] font-bold text-gray-200 leading-none mb-2">03</div>
                <div className="text-xl font-medium text-[#101828] mb-2">Make a payment from<br />Visamart Wallet</div>
              </div>
              <div className="flex-1 flex justify-center w-full">
                {/* Price Details Card */}
                <div className="w-full max-w-md bg-[#f8fbfd] rounded-2xl shadow p-6">
                  <div className="text-[#101828] text-lg font-semibold mb-4">Price Details</div>
                  <div className="bg-[#e9f0f7] rounded-xl mb-4">
                    <div className="flex justify-between items-center px-4 py-3 border-b border-[#dde6ef]">
                      <span className="text-[#101828] text-base">Traveller 1</span>
                      <span className="text-[#101828] text-base font-medium">₹2000</span>
                    </div>
                    <div className="flex justify-between items-center px-4 py-3 border-b border-[#dde6ef]">
                      <span className="text-[#101828] text-base">Total Amount</span>
                      <span className="text-[#0a53b7] text-base font-bold">₹2000</span>
                    </div>
                    <div className="flex justify-between items-center px-4 py-3">
                      <span className="text-[#101828] text-base">Wallet Balance</span>
                      <span className="text-[#101828] text-base">₹28,000</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-2">
                    <button className="flex-1 py-2 rounded-full border border-[#0a53b7] text-[#0a53b7] font-medium bg-white hover:bg-[#e9f0f7] transition">
                      Add Funds
                    </button>
                    <button className="flex-1 py-2 rounded-full bg-[#174ea6] text-white font-medium hover:bg-[#0a53b7] transition">
                      Submit &amp; Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-md p-8 md:p-12">
              <div className="flex-1 w-full md:w-auto mb-8 md:mb-0">
                <div className="text-[56px] font-bold text-gray-200 leading-none mb-2">04</div>
                <div className="text-xl font-medium text-[#101828] mb-2">Get your visa within<br />the ETA!</div>
              </div>
              <div className="flex-1 flex justify-center w-full">
                {/* Visa Approved Card */}
                <div className="w-full max-w-md bg-[#f6fafd] rounded-2xl shadow p-6">
                  <div className="bg-[#0a2940] rounded-lg px-4 py-2 flex items-center justify-center mb-4">
                    <span className="text-white text-base font-medium flex items-center gap-2">
                      <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" className="inline-block"><path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" /><path d="M9.5 12.5l2 2 3-3" /></svg>
                      Visa Approved
                    </span>
                  </div>
                  <div className="text-[#101828] text-sm mb-2">Get your Visa Before Time</div>
                  <div className="flex justify-between text-[#667085] text-xs mb-1">
                    <span>Guaranteed On</span>
                    <span className="text-[#101828] font-medium">3 Aug 2023 at 8:10 PM</span>
                  </div>
                  <div className="flex justify-between text-[#667085] text-xs mb-4">
                    <span>Delivered On</span>
                    <span className="text-[#101828] font-medium">2 Aug 2023 at 5:45 AM</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 rounded-full border border-[#0a53b7] text-[#0a53b7] font-medium bg-white hover:bg-[#e9f0f7] transition text-xs">
                      Download Invoice
                    </button>
                    <button className="flex-1 py-2 rounded-full bg-[#174ea6] text-white font-medium hover:bg-[#0a53b7] transition text-xs">
                      Download Visa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* Travel Insurance Section */}
      <div
        className="w-full max-w-6xl mx-auto mt-10 mb-14 rounded-[48px] overflow-hidden relative"
        style={{
          backgroundImage: "url('/Frame1100377401565.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: 320,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full py-14 px-4">
          <div className="text-white text-3xl md:text-5xl font-semibold text-center mb-8">
            Looking for travel insurance?
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-8">
            <div className="flex flex-col items-center">
              <div className="text-white text-4xl md:text-5xl font-bold mb-1">98%</div>
              <div className="text-white text-base opacity-80 text-center">settlement rate on your<br />insurance plans</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-white text-4xl md:text-5xl font-bold mb-1">1 Day</div>
              <div className="text-white text-base opacity-80 text-center">Completely digital<br />claims processing</div>
            </div>
          </div>
          <button className="px-8 py-3 rounded-full bg-white text-[#0a53b7] font-semibold text-lg shadow hover:bg-blue-50 transition">
            Sign Up for Free
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full  py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-[#101828]">
            Testimonials
          </h2>
          {(() => {
            const testimonials = [
              {
                name: "John Doe",
                role: "Manager",
                companyLogo: "/user-avatar.png",
                avatar: "/user-avatar.png",
                text: "MyVisaMart made the visa process so easy and fast. Highly recommended!",
                stars: 5,
              },
              {
                name: "Jane Smith",
                role: "Travel Agent",
                companyLogo: "/user-avatar.png",
                avatar: "/user-avatar.png",
                text: "Excellent support and a seamless experience for our clients.",
                stars: 5,
              },
              {
                name: "Rahul Kumar",
                role: "Tour Operator",
                companyLogo: "/user-avatar.png",
                avatar: "/user-avatar.png",
                text: "The platform is intuitive and the approval rate is amazing.",
                stars: 5,
              },
              {
                name: "Priya Singh",
                role: "Consultant",
                companyLogo: "/user-avatar.png",
                avatar: "/user-avatar.png",
                text: "I saved so much time using MyVisaMart for my customers.",
                stars: 5,
              },
              {
                name: "Alex Lee",
                role: "Business Owner",
                companyLogo: "/user-avatar.png",
                avatar: "/user-avatar.png",
                text: "Reliable and transparent service. Will use again!",
                stars: 5,
              },
              {
                name: "Fatima Noor",
                role: "Travel Desk",
                companyLogo: "/user-avatar.png",
                avatar: "/user-avatar.png",
                text: "Great customer care and fast processing.",
                stars: 5,
              },
              {
                name: "Carlos Mendez",
                role: "Travel Manager",
                companyLogo: "/user-avatar.png",
                avatar: "/user-avatar.png",
                text: "Our agency's go-to for all visa needs.",
                stars: 5,
              },
              {
                name: "Sara Kim",
                role: "Operations Head",
                companyLogo: "/user-avatar.png",
                avatar: "/user-avatar.png",
                text: "Smooth workflow and excellent results every time.",
                stars: 5,
              },
              {
                name: "Mohammed Ali",
                role: "Visa Specialist",
                companyLogo: "/user-avatar.png",
                avatar: "/user-avatar.png",
                text: "The best platform for agents. Highly efficient.",
                stars: 5,
              },
              {
                name: "Emily Chen",
                role: "Travel Advisor",
                companyLogo: "/user-avatar.png",
                avatar: "/user-avatar.png",
                text: "User-friendly and trustworthy. My clients are happy!",
                stars: 5,
              },
            ];
            return (
              <TestimonialSlider testimonials={testimonials} />
            );
          })()}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full bg-[#f6fafd] py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-4">
          {/* Left: Heading */}
          <div className="flex-1 flex items-start justify-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#101828] mb-2">
                Too good to be true?<br />Learn more here!
              </h2>
            </div>
          </div>
          {/* Right: FAQ List */}
          <div className="flex-1 flex flex-col gap-4">
            {[
              "Lorem ipsum dolor sit amet consectetur",
              "Blandit quis suspendisse aliquet nisi sodales",
              "Cras eleifend turpis fames primis vulputate ornare sagittis.",
              "Sem placerat in id cursus mi pretium",
              "Orci varius natoque penatibus et magnis",
              "Proin libero feugiat tristique accumsan maecenas",
              "Sed diam urna tempor pulvinar vivamus fringilla lacus.",
              "Eros lobortis nulla molestie mattis scelerisque"
            ].map((q, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-white border border-blue-200 rounded-xl px-6 py-4 text-[#101828] text-base font-normal cursor-pointer hover:bg-blue-50 transition"
              >
                <span>{q}</span>
                <span className="text-blue-500 text-2xl font-light">+</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </MasterPage>
  );
}
// Place this outside or above your Page component
function TestimonialSlider({ testimonials }: { testimonials: any[] }) {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const prev = () => setCurrent((c) => (c - 2 + total) % total);
  const next = () => setCurrent((c) => (c + 2) % total);

  if (total === 0) return null;

  // Show 2 testimonials at a time, wrap around if odd
  const getPair = () => {
    if (total === 1) return [testimonials[0]];
    if (current === total - 1) return [testimonials[current], testimonials[0]];
    return [testimonials[current], testimonials[(current + 1) % total]];
  };
  const pair = getPair();

  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 w-full">
        {pair.map((t, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <polygon points="10,1 12.59,7.36 19.51,7.36 13.97,11.63 16.56,17.99 10,13.72 3.44,17.99 6.03,11.63 0.49,7.36 7.41,7.36" />
                  </svg>
                ))}
              </div>
              <div className="text-[#101828] text-base mb-6">
                "{t.text}"
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-[#101828]">{t.name}</div>
                <div className="text-xs text-[#667085]">{t.role}</div>
              </div>
              <div className="flex-1 flex items-center justify-end gap-2">
                <img src={t.companyLogo} alt="Company Logo" className="h-7" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <button
          className="w-10 h-10 rounded-full border border-[#174ea6] bg-white flex items-center justify-center text-[#174ea6] hover:bg-[#e9f0f7] transition"
          onClick={prev}
          aria-label="Previous"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="w-10 h-10 rounded-full bg-[#174ea6] flex items-center justify-center text-white hover:bg-[#0a53b7] transition"
          onClick={next}
          aria-label="Next"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
  
    </div>
  );
}