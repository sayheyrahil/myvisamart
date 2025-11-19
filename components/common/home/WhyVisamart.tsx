import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  "Lorem ipsum dolor sit amet consectetur",
  "Blandit quis suspendisse aliquet nisl sodales",
  "Cras eleifend turpis fermentum vulputate ornare sagittis",
  "Sem placerat in id cursus pretium quam",
  "Orci varius natoque penatibus et magnis",
  "Proin libero feugiat tristique accumsan nec ornare",
  "Sed diam urna tempor pulvinar vivamus fringilla lacus",
  "Eros lobortis nulla molestie mattis scelerisque",
];

const WhyVisamart = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-[#f5f9ff] px-8 py-16 flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
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
            src="./Frame1100377394.png"
            alt="World map"
            className="w-full h-full object-contain opacity-90"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl w-full mt-20">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Frequently Asked Questions
        </h3>
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-5 py-4 hover:bg-gray-50 transition"
              >
                <span className="text-gray-700 font-medium">{item}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-600" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-500 text-sm border-t border-gray-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Voluptatum incidunt omnis eveniet pariatur neque autem.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVisamart;
