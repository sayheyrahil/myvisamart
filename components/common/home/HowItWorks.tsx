import React from "react";
import { Map, FileText, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
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
  ];

  return (
    <section className="py-20 bg-[#F8FBFF]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          How It Works
        </h2>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Dotted line connector */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] border-t-2 border-dotted border-blue-200 z-0"></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className={`${step.bgColor} relative z-10 p-8 rounded-3xl shadow-sm w-full md:w-1/3 text-center md:text-left transition hover:shadow-md`}
            >
              <div
                className={`${step.iconBg} w-12 h-12 flex items-center justify-center rounded-xl mb-6 mx-auto md:mx-0`}
              >
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
