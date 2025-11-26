import React from "react";

interface FaqSectionProps {
  faqs: string[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => (
  <div className="rounded-2xl p-6">
    <div className="divide-y">
      {faqs.map((q, i) => (
        <div key={i} className="py-4 flex justify-between items-center">
          <span>{q}</span>
          <span className="text-gray-400">&#9660;</span>
        </div>
      ))}
    </div>
  </div>
);

export default FaqSection;
