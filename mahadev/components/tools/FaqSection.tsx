import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface FaqSectionProps {
  faqs: string[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => (
  <div className="">
    <div className="divide-y">
      {faqs.map((q, i) => (
        <div key={i} className="py-4 flex justify-between items-center">
          <span>{q}</span>
             <MdKeyboardArrowDown  size={30}/>
         </div>
      ))}
    </div>
  </div>
);

export default FaqSection;
