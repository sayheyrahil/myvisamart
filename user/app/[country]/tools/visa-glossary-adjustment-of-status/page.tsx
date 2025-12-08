"use client";
import React,{useState ,useEffect } from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/tools/HeroSection";
import HowItWorksSection from "@/components/tools/HowItWorksSection";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import SectionHeading from "@/components/tools/SectionHeading";
import SectionDescription from "@/components/tools/SectionDescription";
import HistorySection from "@/components/tools/HistorySection";
 import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";

import FAQ from "@/components/common/FAQ";

import SectionIcon from "@/components/tools/SectionIcon";
import WhyUseAtlysPhotoMaker from "@/components/tools/WhyUseAtlysPhotoMaker";

import Image from "next/image";
export default function Page() {

    const [faqs, setFaqs] = useState<any[]>([]);
  const getFaqs = async () => {
    await axiosInstance
      .post(ENDPOINTS.faqActive, {
        type: "visa_glossary_adjustment_of_status",
      })
      .then((response: any) => {
        if (response?.data?.data) {
           setFaqs(response.data.data);
        }
      })
      .catch((error: any) => {
        handleAxiosError(error);
      })
      .finally(() => {
       });
  };

  useEffect(() => {
    getFaqs();
  }, []);


  return (
    <MasterPage title="Schengen Visa Invitation Letter">
      <div className="w-full min-h-screen   text-gray-900">
        {/* Hero Section */}
        <HeroSection
          title={
            <div>
              Invitation Letter <br /> <span className="text-brand">Schengen Visa</span>
            </div>
          }
          description="Your dream destination is just an e-visa away. Let's make it happen."
          buttonText="Check my visa photo"
          imageSrc="/tools/coverLetter.png"
          imageAlt="coverLetter.png Preview"
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
            {
              id: 2,
              icon: <Image src="/tools/Frame1s272632083.png" width={58} height={58} alt="No mistakes" />,
              bgColor: "bg-[#FFF8E1]",
              iconBg: "bg-[#FFCA28]",
              title: "No mistakes",
              desc: "No chance of typos or misinformation.",
            },
            {
              id: 3,
              icon: <Image src="/tools/Frame272632083.png" width={58} height={58} alt="Correct Format" />,
              bgColor: "bg-[#FCE4EC]",
              iconBg: "bg-[#E57373]",
              title: "Correct Format",
              desc: "Leave the detailing to us.",
            },
          ]}
        />


        {/* Form Section */}
        <div className="my-10">
          <SectionHeading>
            Generate your Schengen Visa Invitation Letter
          </SectionHeading>
          <SectionDescription>
            Enter your details below to generate a compliant Schengen visa invitation letter in minutes.
          </SectionDescription>
          <section className="px-6 py-8">
            <div className="border rounded-2xl p-8 shadow-sm bg-white">
              {/* Letter Details */}
              <div>
                <div className="text-lg font-semibold mb-4">Letter Details</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-1">
                    <label className="block mb-2 font-medium">Date*</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="dd-mm-YYYY"
                        className="w-full border border-[#dbeafe] rounded-lg p-3 pr-10 bg-white focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg width="20" height="20" fill="none"><path d="M6.667 2.5v2.5m6.666-2.5v2.5M3.333 7.5h13.334M4.167 4.167h11.666A1.667 1.667 0 0 1 17.5 5.833v8.334a1.667 1.667 0 0 1-1.667 1.666H4.167A1.667 1.667 0 0 1 2.5 14.167V5.833a1.667 1.667 0 0 1 1.667-1.666Z" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Details */}
              <div>
                <div className="text-lg font-semibold mb-4">Your Details</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block mb-2 font-medium">Full Name*</label>
                    <input
                      type="text"
                      className="w-full border border-[#dbeafe] rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>
                </div>
              </div>

              {/* Travel Details */}
              <div>
                <div className="text-lg font-semibold mb-4">Travel Details</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium">Destination Country*</label>
                    <select className="w-full border border-[#dbeafe] rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand">
                      <option value="">Select country</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Departure Date*</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="dd-mm-YYYY"
                        className="w-full border border-[#dbeafe] rounded-lg p-3 pr-10 bg-white focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg width="20" height="20" fill="none"><path d="M6.667 2.5v2.5m6.666-2.5v2.5M3.333 7.5h13.334M4.167 4.167h11.666A1.667 1.667 0 0 1 17.5 5.833v8.334a1.667 1.667 0 0 1-1.667 1.666H4.167A1.667 1.667 0 0 1 2.5 14.167V5.833a1.667 1.667 0 0 1 1.667-1.666Z" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Return Date*</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="dd-mm-YYYY"
                        className="w-full border border-[#dbeafe] rounded-lg p-3 pr-10 bg-white focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg width="20" height="20" fill="none"><path d="M6.667 2.5v2.5m6.666-2.5v2.5M3.333 7.5h13.334M4.167 4.167h11.666A1.667 1.667 0 0 1 17.5 5.833v8.334a1.667 1.667 0 0 1-1.667 1.666H4.167A1.667 1.667 0 0 1 2.5 14.167V5.833a1.667 1.667 0 0 1 1.667-1.666Z" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Invitee Details */}
              <div>
                <div className="text-lg font-semibold mb-4">Invitee Details</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block mb-2 font-medium">Name or Hotel Name*</label>
                    <input
                      type="text"
                      className="w-full border border-[#dbeafe] rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block mb-2 font-medium">Address Line 1*</label>
                    <input
                      type="text"
                      className="w-full border border-[#dbeafe] rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Email*</label>
                    <input
                      type="email"
                      className="w-full border border-[#dbeafe] rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">City*</label>
                    <input
                      type="text"
                      className="w-full border border-[#dbeafe] rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-brand text-white rounded-full text-lg font-medium shadow hover:bg-brand transition"
                >
                  Generate Invitation Letter
                </button>
              </div>
            </div>
          </section>
        </div>


        {/* Info Section */}
        <div className="my-10">
          <SectionHeading>
            What is the invitation letter for a Schengen visa?
          </SectionHeading>
          <SectionDescription>
            An invitation letter for a Schengen visa is a document provided to you by the host already residing in the Schengen country. This letter proves your accommodation and demonstrates that you have a valid reason for your trip. If you’re visiting family or friends or need to travel to Europe for business or educational purposes, an invitation letter is often necessary, particularly for work-related trips.
          </SectionDescription>
        </div>

        <div className="my-10">
          <SectionHeading>
            What are the types of invitation letters for a Schengen visa?
          </SectionHeading>
          <SectionDescription>
            Several types of invitation letters can support your Schengen visa application, depending on the purpose of the visit. Each type corresponds to the specific category of visa being applied for. Below are the common types of invitation letters:
          </SectionDescription>
          <SectionHeading>1. Invitation Letter for Family or Friend Visit</SectionHeading>
          <SectionDescription>
            This is for applicants who plan to visit family members or friends residing in a Schengen country. The letter should include details about the host, such as their residency status, relationship with the applicant, the reason for the visit, the intended duration of stay, the host's contact information, and if the host is sponsoring the trip, this should also be mentioned.
          </SectionDescription>
          <SectionHeading>2. Business Invitation Letter for Schengen</SectionHeading>
          <SectionDescription>
            This is for applicants visiting a Schengen country for business purposes, such as attending meetings, conferences, or training. This letter is written by a company or organisation in the Schengen zone inviting the applicant for business reasons. It should outline the business relationship, the dates of the business trip, the purpose of the visit, and may also mention responsibility for accommodation and expenses.
          </SectionDescription>
          <SectionHeading>3. Invitation Letter for Medical Treatment</SectionHeading>
          <SectionDescription>
            This type of letter is needed for applicants seeking medical treatment in a Schengen country. It is usually written by the medical institution (e.g., hospital or clinic) where the treatment will take place. The letter should contain details about the applicant’s medical condition, the type of treatment, the estimated duration of stay for medical care, and confirmation of appointments or treatment plans.
          </SectionDescription>
          <SectionHeading>4. Invitation Letter for Cultural, Sports, or Religious Events</SectionHeading>
          <SectionDescription>
            This letter is for individuals invited to attend cultural events, sporting activities, or religious ceremonies in a Schengen country. The organising institution or event organiser should issue the invitation letter. It should include information about the event, the applicant’s role or participation, the dates of the event, and details about accommodation arrangements, if applicable.
          </SectionDescription>
          <SectionHeading>5. Invitation Letter for Training, Internships, or Educational Visits</SectionHeading>
          <SectionDescription>
            This is for applicants visiting a Schengen country for training programs, internships, or educational purposes. The educational institution or training organisation usually writes this letter and should outline the details of the program, the duration of the stay, and the financial arrangements.
          </SectionDescription>
        </div>

        <div className="my-10">
          <SectionHeading>
            How can I get an invitation letter for a Schengen visa?
          </SectionHeading>
          <SectionDescription>
            You can easily generate your Schengen visa application invitation letter using Atlys by following the below-mentioned steps:
          </SectionDescription>
          <WhyUseAtlysPhotoMaker
            points={[
              {
                title: "Convenience:",
                desc: "The tool allows you to complete the invitation letter for a Schengen visa in 2 minutes, reducing the time required to gather all the required documents.",
              },
              {
                title: "Accuracy:",
                desc: "You won’t have to type or write the letter or worry about whether it’s in the correct format.",
              },
              {
                title: "Compliance:",
                desc: "The generator/letter is designed to comply with the requirements of Schengen visa authorities. This increases the likelihood of your invitation letter being accepted without issues.",
              },
            ]}
          />
        </div>

        <div className="my-10">
          <SectionHeading>
            How to write an invitation letter for Schengen visa
          </SectionHeading>
          <SectionDescription>
            If you are planning to write the Schengen invitation letter by yourself, then here is some important information that should be present in any type of invitation letter:
          </SectionDescription>
          <WhyUseAtlysPhotoMaker
            points={[
              {
                title: "Host’s information:",
                desc: "Full name, address, contact details, and legal status in the Schengen country (e.g., citizen, resident).",
              },
              {
                title: "Applicant’s information:",
                desc: "Full name, passport number, address, relationship with the host, and details about the purpose of the visit.",
              },
              {
                title: "Duration:",
                desc: "Exact dates of the intended visit.",
              },
              {
                title: "Financial support:",
                desc: "Information about who will cover the expenses during the visit (if the host sponsors the trip).",
              },
              {
                title: "Proof of accommodation:",
                desc: "Mention whether the guest will stay with the host or elsewhere.",
              },
            ]}
          />
        </div>

        <div className="my-10">
          <SectionHeading>
            What are some key mistakes to avoid when preparing a Schengen visa invitation letter?
          </SectionHeading>
          <SectionDescription>
            Precision and clarity are essential to avoid delays or refusals when preparing an invitation letter for a Schengen visa application. Here are some key mistakes to steer clear of:
          </SectionDescription>
          <WhyUseAtlysPhotoMaker
            points={[
              {
                title: "Only complete or correct information:",
                desc: "Ensure all essential details are included, such as the full names of both the host and guest, specific dates of stay, and the precise purpose of the visit.",
              },
              {
                title: "Vague purposes:",
                desc: "Clearly state the reason for the visit (e.g., tourism, business, family visit). Avoid vague terms like “visit” without specifying the nature.",
              },
              {
                title: "Inconsistent dates:",
                desc: "Use consistent dates throughout your application, ensuring they match the invitation letter, flight itinerary, and hotel reservations.",
              },
              {
                title: "Financial responsibility:",
                desc: "Indicate who will pay for the visitor’s trip, accommodation, and other expenses.",
              },
              {
                title: "Host’s legal status:",
                desc: "Specify the host’s legal status within the Schengen country (e.g., citizen, permanent resident).",
              },
              {
                title: "Accommodation details:",
                desc: "Provide clear information about the applicant’s accommodation during their stay, ensuring consistency with other documents.",
              },
              {
                title: "Clarity and conciseness:",
                desc: "Use clear, concise language and avoid overly complex sentences or grammar errors that could hinder understanding.",
              },
            ]}
          />
        </div>

        <div className="my-10">
          <SectionHeading>
            Who doesn’t need a Schengen invitation letter?
          </SectionHeading>
          <SectionDescription>
            An invitation letter is sometimes required for a Schengen visa but not always mandatory. If you’re traveling for tourism, it is not needed. However, if you’re visiting friends or family and staying with a host, it will be required. It’s essential to know the specific requirements before submitting your application.
            <br />
            An invitation letter is often needed in the following cases:
          </SectionDescription>
          <WhyUseAtlysPhotoMaker
            points={[
              {
                title: "Business",
                desc: "",
              },
              {
                title: "Official invitations",
                desc: "",
              },
              {
                title: "Visiting relatives and friends",
                desc: "",
              },
              {
                title: "To attend cultural, scientific, religious, sporting, political, or other gatherings and activities",
                desc: "",
              },
            ]}
          />
        </div>

        {/* FAQ Section */}
         <FAQ faqData={faqs} />
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
