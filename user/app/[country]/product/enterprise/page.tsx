"use client";
import React, { useState } from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/common/HeroSection";
import SectionHeading from "@/components/common/SectionHeading";
import SectionDescription from "@/components/common/SectionDescription";
import Image from "next/image";
import StepCard from "@/components/common/StepCard";
import TestimonialsSlider from "@/components/common/TestimonialsSlider";
import CTASection from "@/components/common/CTASection";

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
          title={<div>Schengen Visa Appointment Availability From India</div>}
          description="Your dream destination is just an e-visa away. Let's make it happen."
          buttonText=""
          imageSrc="/img/imageAppointment56.png"
          imageAlt="Visa Preview"
        />

      
      </div>
    </MasterPage>
  );
}
