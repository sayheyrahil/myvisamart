import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

 

// Accept faqData as a prop and default to the above array
const FaqSection = ({ faqData }: { faqData?: string[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
 
   const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
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
                  <span className="text-gray-700 font-medium">{item.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#3b82f6]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#b0b8c1]" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 md:px-6 pb-4 text-gray-500 text-sm border-t border-[#f0f4fa]">
                  <div className="whitespace-pre-line my-3">{item.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
