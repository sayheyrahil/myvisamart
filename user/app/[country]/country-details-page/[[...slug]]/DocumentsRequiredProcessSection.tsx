import React from "react";
import SectionHeading from "@/components/tools/SectionHeading";

import parse from "html-react-parser";

export default function DocumentsRequiredProcessSection({
  documents_required_process,
}: any) {
  if (
    !documents_required_process ||
    !Array.isArray(documents_required_process) ||
    documents_required_process.length === 0
  ) {
    return null;
  }

  return (
    <div className="mt-10">
      <SectionHeading>Documents Required &amp; Process</SectionHeading>
      <div className="  rounded-lg   p-6 space-y-6">
        {documents_required_process.map((data, idx) => (
          <div key={idx} className="relative pl-8 pb-6">
            {/* Timeline dot */}
            <span className="absolute left-0 top-2 w-4 h-4   border-2 border-brand rounded-full"></span>
            {/* Timeline line */}
            {idx < documents_required_process.length - 1 && (
              <span className="absolute left-2 top-6 w-0.5 h-full bg-brand"></span>
            )}
            <div className="bg-white p-5 rounded-lg shadow">
              <div className="font-semibold text-lg mb-1">{data.title}</div>
                 {parse(data.description)}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
