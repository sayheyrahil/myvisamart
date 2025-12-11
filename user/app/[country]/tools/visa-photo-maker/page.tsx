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
import { handleAxiosError } from "@/utils/common";

export default function Page() {

    const [faqs, setFaqs] = useState<any[]>([]);
  const getFaqs = async () => {
    await axiosInstance
      .post(ENDPOINTS.faqActive, {
        type: "visa_photo_maker",
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
    <MasterPage title="Visa Photo Maker - Create Passport Size Photos Online">
      <div className="w-full min-h-screen   text-gray-900">
        {/* Hero Section */}
        <HeroSection
          title={
            <div
            >
              Transform your <br /> selfie into a <br /> <span className="text-brand">visa photo</span>
            </div>
          }
          description="Your dream destination is just an e-visa away. Let's make it happen."
          buttonText="Create my visa photo"
          imageSrc="/tools/visa-photo-maker-banner.png"
          imageAlt="Visa Preview"
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

        {/* Selector Section */}
        <div className="my-10">
          <SectionHeading>
            Create your passport-size visa photo online
          </SectionHeading>
          <SectionDescription>
            Select your destination, upload your photo, and get a compliant passport-size photo in minutes.
          </SectionDescription>
          <section className="max-w-screen-xl mx-auto px-6 py-8">
            <div className="border rounded-3xl p-8 shadow-sm bg-white">
              <div className="flex gap-8 border-b pb-4 mb-6">
                <button className="text-brand font-semibold">Select Country</button>
                <button className="text-gray-500">Upload Photo</button>
                <button className="text-gray-500">Download Result</button>
              </div>
              <label className="block mb-3 font-medium">Select Destination</label>
              <select className="w-full border p-3 rounded-xl mb-6">
                <option>Select an option...</option>
              </select>
              <button className="px-6 py-3 bg-brand text-white rounded-xl text-lg shadow hover:bg-brand transition">
                Create my photo
              </button>
            </div>
          </section>
        </div>


        {/* Info Section */}
        <div className="my-10">
          <SectionHeading>
            What is a passport-size photo?
          </SectionHeading>
          <SectionDescription>
            A passport-size photo is a small, standardised photo that's required for most visa applications. It helps immigration officials verify your identity. Different countries have different rules when it comes to photo size, background colours, and other specifications. Following these specific requirements is important to ensure a successful visa application.
          </SectionDescription>
        </div>

        <div className="my-10">
          <SectionHeading>
            How to create the perfect passport-size photo for your visa?
          </SectionHeading>
          <SectionDescription>
            Steps to create and adjust your passport-size photo to meet visa requirements using passport photo maker:
          </SectionDescription>
          <ul className="mb-4 space-y-2">
            <li className="flex items-start gap-2">
              <TbArrowBadgeRightFilled color="0A509F" size={22} className="mt-1" />
              <span>Upload your photo in JPEG, JPG, or PNG format.</span>
            </li>
            <li className="flex items-start gap-2">
              <TbArrowBadgeRightFilled color="0A509F" size={22} className="mt-1" />
              <span>Click 'Transform' to resize and adjust your photo.</span>
            </li>
            <li className="flex items-start gap-2">
              <TbArrowBadgeRightFilled color="0A509F" size={22} className="mt-1" />
              <span>Download your ready-to-use passport-size photo.</span>
            </li>
          </ul>
        </div>

        <div className="my-10">
          <SectionHeading>
            Why use the Atlys passport size photo maker?
          </SectionHeading>
          <WhyUseAtlysPhotoMaker
            points={[
              {
                title: "Quick and easy:",
                desc: "Convert your photo into the perfect passport size, all for free, without the hassle of visiting a photo studio or booth.",
              },
              {
                title: "Perfectly prepared:",
                desc: "Your photo will be automatically adjusted to meet official visa requirements, ensuring a smooth application process.",
              },
              {
                title: "Reliable accuracy:",
                desc: "Our tool is regularly updated with the latest guidelines, so your photo always meets the necessary standards.",
              },
              {
                title: "Easy access:",
                desc: "Adjust your selfie photo anytime and anywhere directly from your tablet, laptop, or smartphone.",
              },
              {
                title: "Get two ready-to-use photos:",
                desc: "Our free visa photo tool will automatically provide you with two passport-sized photos to use for your visa application.",
              },
            ]}
          />
          <div className="mt-6 flex justify-center">
            <img
              alt="passport photo example"
              className="rounded-3xl h-[340px] w-[604px] max-w-full object-cover"
              src="/tools/Frame1272632106.png"
            />
          </div>
        </div>

        <div className="my-10">
          <SectionHeading>
            General passport-size visa photo requirements
          </SectionHeading>
          <SectionDescription>
            Here are the general visa photo requirements that most countries follow:
          </SectionDescription>
          <WhyUseAtlysPhotoMaker
            points={[
              {
                title: "Size:",
                desc: "35mm x 45mm (general size, some countries may differ)",
              },
              {
                title: "Background:",
                desc: "Plain white or light-coloured, no patterns or shadows",
              },
              {
                title: "Facial expression:",
                desc: "Neutral, mouth closed, looking directly at camera",
              },
              {
                title: "Lighting:",
                desc: "Even, no shadows, reflections, or red-eye",
              },
              {
                title: "Head position:",
                desc: "Face centered, 70-80% of frame",
              },
              {
                title: "Photo quality:",
                desc: "Clean, undamaged, high-quality paper, 600 dpi",
              },
              {
                title: "Glasses:",
                desc: "Allowed if eyes visible, no glare",
              },
              {
                title: "Head coverings:",
                desc: "Religious coverings allowed if face visible, hats not permitted",
              },
              {
                title: "Accessories:",
                desc: "No jewelry/headphones that obscure face",
              },
            ]}
          />
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
         <FAQ faqData={faqs} />


        {/* History Section */}
        <HistorySection
          title="How we reviewed this tool:"
          description="Our experts continually monitor the official sources for any changes, and we update our articles when new information becomes available."
          history={[
            { date: "30 Jan 2025", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "22 Nov 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "22 Oct 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "26 Jun 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "25 Jun 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "14 May 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
            { date: "09 May 2024", writer: "Sathish Ramcharan", editor: "Arun Kumar Gundu" },
          ]}
        />
      </div>
    </MasterPage>
  );
}
