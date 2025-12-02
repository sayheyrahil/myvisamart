import React from "react";
import { Map } from "lucide-react";

interface Step {
  id: number;
  bgColor: string;
  iconBg: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface HowItWorksSectionProps {
  steps: Step[];
  title?: string;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ steps }) => {
  // Dynamic marginTops: if only 1 step, no margin; else use default pattern
  const marginTops =
    steps.length === 1
      ? ["mt-5"]
      : ["mt-[150px]", "mt-[50px]", "mt-[0px]"];
  return (
    <section className="py-5  ">
      <div
        className="text-[44px] leading-[56px] font-semibold1 text-start font-wix"
      >
        How It Works
      </div>

      <div className="relative flex flex-col md:flex-row   justify-between gap-10  ">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`${step.bgColor} ${marginTops[index]} w-[300px] h-[280px] relative p-8 rounded-3xl shadow-lg md:w-1/3 transition hover:shadow-md`}
          >
            <div
              className={`${step.iconBg} w-12 h-12 flex items-center justify-center rounded-xl mb-20 mx-auto md:mx-0`}
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
    </section>
  );
};

export default HowItWorksSection;
