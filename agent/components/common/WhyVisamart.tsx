import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  "Lorem ipsum dolor sit amet consectetur",
  "Blandit quis suspendisse aliquet nisi sodales",
  "Cras eleifend turpis fames primis vulputate ornare sagittis.",
  "Sem placerat in id cursus mi pretium",
  "Orci varius natoque penatibus et magnis",
  "Proin libero feugiat tristique accumsan maecenas",
  "Sed diam urna tempor pulvinar vivamus fringilla lacus.",
  "Eros lobortis nulla molestie mattis scelerisque",
];

const WhyVisamart = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-0">
      {/* Why Visamart Section */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-16 px-2 md:px-6">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Why Visamart
          </h2>
          <p className="text-gray-600 mb-8">
            Here are lots of interesting destinations to visit, but don’t be
            confused—they’re already grouped by category.
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                All You Needs
              </h4>
              <p className="text-gray-500 max-w-md">
                Lorem Ipsum is simply dummy text. The best getaways and happiest
                Lorem Ipsum has been the industry’s standard dummy text ever.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Flexible Booking
              </h4>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Secure Payment
              </h4>
            </div>
          </div>
        </div>

        {/* Right Section (Illustration) */}
        <div className="flex justify-center items-center">
          <img
            src="/img/Frame1100377394.png"
            alt="World map"
            className="w-full h-auto max-h-[350px] object-contain opacity-90"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full flex justify-center items-start mt-0 min-h-screen px-2 md:px-6">
        <div className="flex flex-col md:flex-row w-full max-w-6xl">
          {/* Sidebar Title */}
          <div className="flex flex-col justify-start items-start w-full md:w-1/2 pl-0 md:pl-12 pr-0 md:pr-8 mb-8 md:mb-0">
            <h3
              className="font-[Wix_Madefor_Display] text-[32px] md:text-[48px] leading-[40px] md:leading-[60px] mb-2 text-black"
              style={{
                fontFamily: "'Wix Madefor Display', sans-serif",
                fontWeight: 600,
                fontStyle: "normal",
                letterSpacing: "-0.02em",
              }}
            >
              Frequently Asked
              <br />
              Questions
            </h3>
          </div>
          {/* FAQ List */}
          <div className="w-full md:w-1/2 flex flex-col items-center py-2 pl-0 md:pl-8">
            <div className="w-full max-w-xl space-y-3">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid transparent",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(white, white) padding-box, linear-gradient(90.91deg, #0A509F -0.28%, #FFFFFF 100%) border-box",
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left px-4 md:px-6 py-4 hover:bg-[#f5f9ff] hover:rounded-xl transition focus:outline-none"
                  >
                    <span className="text-gray-700 font-medium">{item}</span>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-[#3b82f6]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#b0b8c1]" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-4 md:px-6 pb-4 text-gray-500 text-sm border-t border-[#f0f4fa]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum incidunt omnis eveniet pariatur neque autem.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVisamart;
