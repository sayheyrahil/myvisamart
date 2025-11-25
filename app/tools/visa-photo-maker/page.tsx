"use client";
import React from "react";
import MasterPage from "@/components/layouts/master";
import HeroSection from "@/components/HeroSection";
import { Map, FileText, Truck } from "lucide-react";
import HowItWorksSection from "@/components/HowItWorksSection";
import { TbArrowBadgeRightFilled } from "react-icons/tb";


export default function Page() {
  return (
    <MasterPage title="About Us">
      <div className="w-full min-h-screen bg-white text-gray-900">
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
            {
              id: 2,
              icon: <FileText size={28} className="text-white" />,
              bgColor: "bg-[#FFF8E1]",
              iconBg: "bg-[#FFCA28]",
              title: "Upload Documents & Pay",
              desc: "Secure upload, secure payment — takes 5 minutes.",
            },
            {
              id: 3,
              icon: <Truck size={28} className="text-white" />,
              bgColor: "bg-[#FCE4EC]",
              iconBg: "bg-[#E57373]",
              title: "Receive Your Visa",
              desc: "Delivered to your inbox by your chosen date.",
            },
          ]}
        />


        {/* Selector Section */}
        <section className="max-w-screen-xl mx-auto px-6 py-12">
          <div className="border rounded-3xl p-8 shadow-sm bg-white">
            <div className="flex gap-8 border-b pb-4 mb-6">
              <button className="text-blue-600 font-semibold">Select Country</button>
              <button className="text-gray-500">Upload Photo</button>
              <button className="text-gray-500">Download Result</button>
            </div>


            <label className="block mb-3 font-medium">Select Destination</label>
            <select className="w-full border p-3 rounded-xl mb-6">
              <option>Select an option...</option>
            </select>


            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg shadow hover:bg-blue-700 transition">
              Create my photo
            </button>
          </div>
        </section>


        {/* Info Section */}
        <section className="max-w-screen-xl mx-auto px-6 py-12 space-y-10">
          {/* What is a passport-size photo? */}
          <div className="flex flex-col gap-8 items-center w-full max-md:gap-6 max-sm:gap-5">
            <div className="flex gap-2.5 items-center w-full max-sm:flex-col max-sm:gap-4 max-sm:items-start">
              <img
                alt="Frame 1272632106"
                className="h-5 w-[22px]"
                loading="lazy"
                src="https://api.builder.io/api/v1/image/assets/TEMP/d8bbdc33d3850907db2e516e823b977337e6b902?width=43"
              />
              <div
                layer-name="Heading 2 → Dubai Visa Information"
                className="text-3xl font-semibold leading-9 text-teal-950 max-md:text-2xl max-md:leading-8 max-sm:text-xl max-sm:leading-7"
              >
                What is a passport-size photo?
              </div>
            </div>
            <div
              layer-name="A passport-size photo is a small, standardised photo that's required for most visa applications. It helps immigration officials verify your identity. Different countries have different rules when it comes to photo size, background colours, and other specifications. Following these specific requirements is important to ensure a successful visa application."
              className="w-full text-base leading-6 text-zinc-600 max-md:text-base max-md:leading-5 max-sm:text-sm max-sm:leading-5"
            >
              A passport-size photo is a small, standardised photo that's required for
              most visa applications. It helps immigration officials verify your
              identity. Different countries have different rules when it comes to
              photo size, background colours, and other specifications. Following
              these specific requirements is important to ensure a successful visa
              application.
            </div>
          </div>

          {/* How to create the perfect passport-size photo? */}
          <div className="flex flex-col gap-8 items-center w-full max-md:gap-6 max-sm:gap-5">
            <div className="flex gap-2.5 items-center w-full max-sm:flex-col max-sm:gap-4 max-sm:items-start">
              <img
                alt="Frame 1272632106"
                className="h-5 w-[22px]"
                loading="lazy"
                src="https://api.builder.io/api/v1/image/assets/TEMP/d8bbdc33d3850907db2e516e823b977337e6b902?width=43"
              />
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
                <TbArrowBadgeRightFilled color="0A509F" />


                <div
                  className="text-base leading-6 text-zinc-600 max-md:text-base max-md:leading-5 max-sm:text-sm max-sm:leading-5"
                >
                  Upload your photo in JPEG, JPG, or PNG format.
                </div>
              </div>
              <div className="flex gap-3 items-center pl-5 w-full max-sm:gap-2 max-sm:pl-2.5">
                <TbArrowBadgeRightFilled />

                <div
                  className="text-base leading-6 text-zinc-600 max-md:text-base max-md:leading-5 max-sm:text-sm max-sm:leading-5"
                >
                  Click 'Transform' to resize and adjust your photo.
                </div>
              </div>
              <div className="flex gap-3 items-center pl-5 w-full max-sm:gap-2 max-sm:pl-2.5">
                <TbArrowBadgeRightFilled />


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
              <img
                alt="icon"
                className="h-5 w-5"
                src="https://api.builder.io/api/v1/image/assets/TEMP/d8bbdc33d3850907db2e516e823b977337e6b902?width=43"
              />
              <h3 className="text-2xl font-bold text-teal-950">Why use the Atlys passport size photo maker?</h3>
            </div>
            <ul className="space-y-2">
              <li><span className="font-bold">Quick and easy:</span> Convert your photo into the perfect passport size, all for free, without the hassle of visiting a photo studio or booth.</li>
              <li><span className="font-bold">Perfectly prepared:</span> Your photo will be automatically adjusted to meet official visa requirements, ensuring a smooth application process.</li>
              <li><span className="font-bold">Reliable accuracy:</span> Our tool is regularly updated with the latest guidelines, so your photo always meets the necessary standards.</li>
              <li><span className="font-bold">Easy access:</span> Adjust your selfie photo anytime and anywhere directly from your tablet, laptop, or smartphone.</li>
              <li><span className="font-bold">Get two ready-to-use photos:</span> Our free visa photo tool will automatically provide you with two passport-sized photos to use for your visa application.</li>
            </ul>
            <div className="mt-6 flex justify-center">
              <img
                alt="passport photo example"
                className="rounded-3xl h-[340px] w-[604px] max-w-full object-cover"
                src="https://api.builder.io/api/v1/image/assets/TEMP/286985eb8d90be0bd8ae4ae2a85ae96f308fb196?width=1208"
              />
            </div>
          </div>


          {/* General passport-size visa photo requirements */}
          <div className="bg-white rounded-2xl   p-6 ">
            <div className="flex items-center gap-3 mb-4">
              <img
                alt="icon"
                className="h-5 w-5"
                src="https://api.builder.io/api/v1/image/assets/TEMP/d8bbdc33d3850907db2e516e823b977337e6b902?width=43"
              />
              <h3 className="text-2xl font-bold text-teal-950">General passport-size visa photo requirements</h3>
            </div>
            <p className="mb-4 text-gray-700">Here are the general visa photo requirements that most countries follow:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><span className="font-bold">Size:</span> 35mm x 45mm (general size, some countries may differ)</li>
              <li><span className="font-bold">Background:</span> Plain white or light-coloured, no patterns or shadows</li>
              <li><span className="font-bold">Facial expression:</span> Neutral, mouth closed, looking directly at camera</li>
              <li><span className="font-bold">Lighting:</span> Even, no shadows, reflections, or red-eye</li>
              <li><span className="font-bold">Head position:</span> Face centered, 70-80% of frame</li>
              <li><span className="font-bold">Photo quality:</span> Clean, undamaged, high-quality paper, 600 dpi</li>
              <li><span className="font-bold">Glasses:</span> Allowed if eyes visible, no glare</li>
              <li><span className="font-bold">Head coverings:</span> Religious coverings allowed if face visible, hats not permitted</li>
              <li><span className="font-bold">Accessories:</span> No jewelry/headphones that obscure face</li>
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
            <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="divide-y">
              <div className="py-3 flex justify-between items-center">
                <span>Is the Atlys visa photo maker free?</span>
                <span className="text-gray-400">&#9660;</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span>Can I convert a selfie into a visa photo using Atlys free online visa photo editor?</span>
                <span className="text-gray-400">&#9660;</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span>How recent should my visa photo be?</span>
                <span className="text-gray-400">&#9660;</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span>Why can't I upload my photo to the Atlys visa photo maker?</span>
                <span className="text-gray-400">&#9660;</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span>Can my visa get rejected if I submit the incorrect photo?</span>
                <span className="text-gray-400">&#9660;</span>
              </div>
            </div>
          </div>


          {/* How we reviewed this tool */}
          <div className="bg-white rounded-2xl   p-6  ">
            <div className="flex items-center gap-3 mb-4">
              <img
                alt="icon"
                className="h-5 w-5"
                src="https://api.builder.io/api/v1/image/assets/TEMP/d8bbdc33d3850907db2e516e823b977337e6b902?width=43"
              />
              <h3 className="text-2xl font-bold text-teal-950">How we reviewed this tool:</h3>
            </div>
            <p className="mb-4 text-gray-700">
              Our experts continually monitor the official sources for any changes, and we update our articles when new information becomes available.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded-xl p-4">
                <div className="font-bold text-lg mb-2">30 Jan 2025</div>
                <div className="text-sm"><span className="font-bold">Written By:</span> Sathish Ramcharan</div>
                <div className="text-sm"><span className="font-bold">Edited By:</span> Arun Kumar Gundu</div>
              </div>
              <div className="border rounded-xl p-4">
                <div className="font-bold text-lg mb-2">22 Nov 2024</div>
                <div className="text-sm"><span className="font-bold">Written By:</span> Sathish Ramcharan</div>
                <div className="text-sm"><span className="font-bold">Edited By:</span> Arun Kumar Gundu</div>
              </div>
              <div className="border rounded-xl p-4">
                <div className="font-bold text-lg mb-2">22 Oct 2024</div>
                <div className="text-sm"><span className="font-bold">Written By:</span> Sathish Ramcharan</div>
                <div className="text-sm"><span className="font-bold">Edited By:</span> Arun Kumar Gundu</div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="border rounded-xl p-4">
                <div className="font-bold text-lg mb-2">26 Jun 2024</div>
                <div className="text-sm"><span className="font-bold">Written By:</span> Sathish Ramcharan</div>
                <div className="text-sm"><span className="font-bold">Edited By:</span> Arun Kumar Gundu</div>
              </div>
              <div className="border rounded-xl p-4">
                <div className="font-bold text-lg mb-2">25 Jun 2024</div>
                <div className="text-sm"><span className="font-bold">Written By:</span> Sathish Ramcharan</div>
                <div className="text-sm"><span className="font-bold">Edited By:</span> Arun Kumar Gundu</div>
              </div>
              <div className="border rounded-xl p-4">
                <div className="font-bold text-lg mb-2">14 May 2024</div>
                <div className="text-sm"><span className="font-bold">Written By:</span> Sathish Ramcharan</div>
                <div className="text-sm"><span className="font-bold">Edited By:</span> Arun Kumar Gundu</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MasterPage>
  );
}
