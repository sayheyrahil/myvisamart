"use client";
import React, { useState } from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/tools/HeroSection";
import SectionDescription from "@/components/tools/SectionDescription";
import Image from "next/image";
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
      <div className="w-full min-h-screen   text-gray-900">
        <HeroSection
          title={
            <div>
              The world's easiest way to fill your DS-160 form for free
            </div>
          }
          description="Your dream destination is just an e-visa away. Let's make it happen."
          buttonText="Start DS-160 Form"
          imageSrc="/tools/image2666.png"
          imageAlt="Visa Preview"
        />



        {/* Why Use Our Visa Appointment Tracker? */}
        <div className="flex flex-col justify-center  items-center  px-6 py-12">
          <div className="font-wix-heading ">
            Why Use Our Visa Appointment Tracker?
          </div>
          <div className="flex justify-center items-center max-w-3xl mx-auto">
            <SectionDescription>
              Our tool helps you navigate the Schengen visa appointment process with ease,
              saving you time and reducing the stress of visa application planning.
            </SectionDescription>
          </div>



          {/* Why Use Our DS-160 Tool? */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center px-6 py-12">
            <div className="flex">
              <img
                src="/tools/Rectanglea4366.png"
                alt="DS-160 Benefits"
                className="rounded-2xl  w-full"
                style={{ minWidth: 240, maxWidth: 320 }}
              />
            </div>
            <div className="flex-1 flex flex-col gap-5">
              <div className="flex items-start gap-2">
                <Image
                  src="/tools/Frame127263208356.png"
                  alt="Plus Icon"
                  width={50}
                  height={5}
                  className="rounded-lg "
                />


                <div>
                  <div className="font-semibold text-[#23272E]">Saves 10x Time</div>
                  <div className="text-[#5B5F62] text-sm">
                    Doing it by yourself: 4+ hours. Doing it with Atlys: 10 minutes.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  src="/tools/Frame127263212083.png"
                  alt="Plus Icon"
                  width={50}
                  height={5}
                  className="rounded-lg "
                />
                <div>
                  <div className="font-semibold text-[#23272E]">Expert Tips</div>
                  <div className="text-[#5B5F62] text-sm">
                    We help you answer every question correctly.
                    No confusion, low rejection.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  src="/tools/Frameq1272632083.png"
                  alt="Plus Icon"
                  width={50}
                  height={5}
                  className="rounded-lg "
                />
                <div>
                  <div className="font-semibold text-[#23272E]">Easy Language</div>
                  <div className="text-[#5B5F62] text-sm">
                    Each question has been rephrased in easy-to-understand wording.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  src="/tools/Frameq1272632083.png"
                  alt="Plus Icon"
                  width={50}
                  height={5}
                  className="rounded-lg "
                />
                <div>
                  <div className="font-semibold text-[#23272E]">
                    Organized in Folders</div>
                  <div className="text-[#5B5F62] text-sm">
                    All questions are grouped in folders to keep track of your
                    progress easily.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  src="/tools/Frameq1272632083.png"
                  alt="Plus Icon"
                  width={50}
                  height={5}
                  className="rounded-lg "
                />
                <div>
                  <div className="font-semibold text-[#23272E]">Unlimited Edits</div>
                  <div className="text-[#5B5F62] text-sm">
                    Get notified when new appointment slots become available
                    for your preferred destinations.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  src="/tools/FrameLoaction272632083.png"
                  alt="Plus Icon"
                  width={50}
                  height={5}
                  className="rounded-lg "
                />
                <div>
                  <div className="font-semibold text-[#23272E]">
                    Instant PDF Generation</div>
                  <div className="text-[#5B5F62] text-sm">
                    Get the final form to submit right away. No wait time.
                    No sign up required.
                  </div>
                </div>
              </div>
            </div>
          </div>




        </div>




        <CTASection />
      </div>
    </MasterPage>
  );
}
