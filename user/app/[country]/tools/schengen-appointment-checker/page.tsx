"use client";
import React, { useState } from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/tools/HeroSection"; 
import SectionHeading from "@/components/tools/SectionHeading";
import SectionDescription from "@/components/tools/SectionDescription"; 
import Image from "next/image";
import StepCard from "@/components/tools/StepCard";
import { FaStar } from "react-icons/fa";
import TestimonialsSlider from "@/components/tools/TestimonialsSlider";
import CTASection from "@/components/tools/CTASection";
  
export default function Page() {
  // Testimonial data
  const testimonials = [
    {
      text: `I was struggling to find an appointment for my France visa until I used this tool. Found an early date and got my visa with plenty of time before my trip!`,
      name: "Priya S.",
      location: "Mumbai, India",
      rating: 5,
    },
    {
      text: `The appointment tracker saved me so much time. I could finally plan my trip to Germany without worrying about visa slots.`,
      name: "Rahul M.",
      location: "Bangalore, India",
      rating: 5,
    },
    {
      text: `Easy to use and very accurate. Got my Italy visa appointment in just a few clicks!`,
      name: "Ananya T.",
      location: "Delhi, India",
      rating: 5,
    },
  ];

  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const prevTestimonial = () => {
    setTestimonialIdx((idx) => (idx === 0 ? testimonials.length - 1 : idx - 1));
  };

  const nextTestimonial = () => {
    setTestimonialIdx((idx) => (idx === testimonials.length - 1 ? 0 : idx + 1));
  };

  return (
    <MasterPage title="Vietnam Visa Status Checker - Track Your E-Visa Application Online">
      <div className="w-full min-h-screen  text-gray-900">
        <HeroSection
          title={
            <div>
              Schengen Visa Appointment Availability From India
            </div>
          }
          description="Your dream destination is just an e-visa away. Let's make it happen."
          buttonText=""
          imageSrc="/tools/imageAppointment56.png"
          imageAlt="Visa Preview"
        />


        {/* Selector Section */}
        <section className="max-w-screen-xl mx-auto px-6 py-12">
          <div className="border rounded-2xl p-8 shadow-sm relative" style={{ borderColor: "#D6E0EA" }}>
            {/* Tab Navigation */}
            <div className="flex gap-8 border-b pb-2 mb-8 items-center" style={{ borderColor: "#D6E0EA" }}>
              <button
                className="flex items-center gap-2 text-brand font-semibold border-b-2 border-brand px-2 py-1 focus:outline-none"
                style={{ background: "transparent" }}
                disabled
              >
                <svg width="18" height="18" fill="none"><path d="M3 9h12M9 3v12" stroke="#1566C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Find Schengen Visa Appointments
              </button>
            </div>
            {/* Form */}
            <form className="max-w-2xl mx-auto space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">From</label>
                  <select className="w-full border border-[#D6E0EA] rounded-lg p-3 bg-white focus:outline-none">
                    <option value="">Select...</option>
                    {/* Add options here */}
                  </select>
                </div>
                <div>
                  <label className="block mb-2 font-medium">To</label>
                  <select className="w-full border border-[#D6E0EA] rounded-lg p-3 bg-white focus:outline-none">
                    <option value="">Select...</option>
                    {/* Add options here */}
                  </select>
                </div>
              </div>
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="px-8 py-2.5 bg-brand text-white rounded-full text-base font-semibold shadow hover:bg-[#0d4e9c] transition"
                >
                  Search Appointments
                </button>
              </div>
            </form>
          </div>
        </section>


        {/* Why Use Our Visa Appointment Tracker? */}
        <div className="flex flex-col justify-center  items-center  px-6 py-12">
          <SectionHeading>
            Why Use Our Visa Appointment Tracker?
          </SectionHeading>
          <div className="flex justify-center items-center max-w-3xl mx-auto">
            <SectionDescription>
              Our tool helps you navigate the Schengen visa appointment process with ease, saving you time and reducing the stress of visa application planning.
            </SectionDescription>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="rounded-2xl bg-[#F3EDFF] p-6 flex flex-col">
              <div className="flex items-center mb-3">
                <span className="inline-block bg-[#A78BFA] rounded-full p-2">
                  <svg width="28" height="28" fill="none"><rect width="28" height="28" rx="14" fill="#A78BFA" /><path d="M14 8v6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /><circle cx="14" cy="18" r="1" fill="#fff" /></svg>
                </span>
              </div>
              <div className="font-semibold text-lg mb-1">Real-Time Appointment Tracking</div>
              <div className="text-[#5B5F62] text-base">
                Get up-to-date information on available appointment slots for all Schengen countries.
              </div>
            </div>
            <div className="rounded-2xl bg-[#FEF9C3] p-6 flex flex-col">
              <div className="flex items-center mb-3">
                <span className="inline-block bg-[#FACC15] rounded-full p-2">
                  <svg width="28" height="28" fill="none"><rect width="28" height="28" rx="14" fill="#FACC15" /><path d="M14 8v6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /><circle cx="14" cy="18" r="1" fill="#fff" /></svg>
                </span>
              </div>
              <div className="font-semibold text-lg mb-1">Early Booking Options</div>
              <div className="text-[#5B5F62] text-base">
                Find and secure the earliest available appointment dates to plan your trip better.
              </div>
            </div>
            <div className="rounded-2xl bg-[#FEF9C3] flex">
              <Image
                src="/tools/Frame272632085.png"
                alt="Calendar"
                width={400}
                height={200}
                className="rounded-xl w-full h-[120px] object-cover"
                style={{ minHeight: "100px", minWidth: "100%" }}
              />
            </div>
            <div className="rounded-2xl bg-[#FEF9C3] flex">
              <Image
                src="/tools/Frame1272632087.png"
                alt="Calendar"
                width={400}
                height={400}
                className="rounded-xl w-full h-[120px] object-cover"
                style={{ minHeight: "100px", minWidth: "100%" }}
              />
            </div>
            <div className="rounded-2xl bg-[#E0F2FE] p-6 flex flex-col">
              <img src="/tools/appointment-tracker-img-1.png" alt="Travel" className="rounded-xl mb-3 w-full h-32 object-cover" />
              <div className="font-semibold text-lg mb-1">Application Center Locator</div>
              <div className="text-[#5B5F62] text-base">
                Find the nearest visa application centers with detailed address information.
              </div>
            </div>
            <div className="rounded-2xl bg-[#F1F5F9] p-6 flex flex-col">
              <img src="/tools/appointment-tracker-img-2.png" alt="Mountains" className="rounded-xl mb-3 w-full h-32 object-cover" />
              <div className="font-semibold text-lg mb-1">Appointment Alerts</div>
              <div className="text-[#5B5F62] text-base">
                Get notified when new appointment slots become available for your preferred destinations.
              </div>
            </div>
          </div>
        </div>


        {/* How It Works Section */}
        <div className="max-w-screen-xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="font-wix-heading">How It Works</div>
              <SectionDescription>
                Our simple 4-step process helps you find and secure Schengen visa appointments quickly and easily.
              </SectionDescription>

            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="flex flex-col gap-6 mt-8 relative" >
                <StepCard
                  number={1}
                  title="Select Your Countries"
                  desc="Choose your current location and the Schengen countries you want to apply to."
                 />
                <StepCard
                  number={2}
                  title="Browse Available Dates"
                  desc="View all available appointment dates across different application centers."
                />
                <StepCard
                  number={3}
                  title="Select Application Center"
                  desc="Choose the most convenient application center based on your location."
                />
                <StepCard
                  number={4}
                  title="Book Your Appointment"
                  desc="Secure your preferred appointment date and location for your visa application."
                />
               
              </div>
            </div>
          </div>
        </div>
 


        <TestimonialsSlider />
        <CTASection />
      </div>
    </MasterPage>
  );
}
