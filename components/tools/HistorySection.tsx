import React from "react";
import SectionIcon from "@/components/tools/SectionIcon";
import { FaHistory } from "react-icons/fa";

interface HistoryItem {
  date: string;
  writer: string;
  editor: string;
}

interface HistorySectionProps {
  title: string;
  description: string;
  history: HistoryItem[];
}

const HistorySection: React.FC<HistorySectionProps> = ({
  title,
  description,
  history,
}) => (
  <div className="rounded-2xl p-0 pt-8 pb-12">
    <div className="max-w-screen-xl mx-auto px-6">
      <div className="flex items-center gap-2 mb-2">
        <SectionIcon />
        <h3
          className="text-[28px] leading-[36px] font-[600] font-['Wix_Madefor_Display',sans-serif] text-[#022538]"
          style={{
            fontFamily: "'Wix Madefor Display', sans-serif",
            fontWeight: 600,
            fontStyle: "normal",
            letterSpacing: "0%",
            verticalAlign: "middle",
          }}
        >
          {title}
        </h3>
      </div>
      <p className="mb-4 text-[#5B5F62] text-[16px] leading-[24px]">{description}</p>
      <div className="flex items-center gap-2 mb-6">
        <button className="flex items-center gap-2 px-3 py-1 border-b-2 border-brand text-brand font-medium bg-transparent focus:outline-none">
          <FaHistory color="brand"  size={20}/>

          History
        </button>
      </div>
      <div className="text-[#23272E] text-[16px] font-semibold mb-4">Current Version</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {history.map((item, idx) => (
          <div
            key={idx}
            className="border border-[#E0E7EF] rounded-xl bg-white p-5 flex flex-col gap-2 min-h-[140px]"
          >
            <div className="text-[#23272E] text-[16px] font-semibold mb-2">{item.date}</div>
            <div className="text-[#5B5F62] text-[14px]">
              <div>
                <span className="font-semibold">Written By:</span><br />
                <span className="font-medium">{item.writer}</span>
              </div>
              <div className="mt-1">
                <span className="font-semibold">Edited By:</span><br />
                <span className="font-medium">{item.editor}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HistorySection;
