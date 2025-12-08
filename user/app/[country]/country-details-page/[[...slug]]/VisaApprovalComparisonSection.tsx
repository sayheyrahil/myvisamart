"use client";
import React from "react";
import SectionHeading from "@/components/tools/SectionHeading";

type Row = {
  title: string;
  atlys_text: string;
  other_text: string;
  atlys_status?: string;
  other_status?: string;
};

type Props = {
  comparison: {
    rows: Row[];
    atlys_percentage: string;
    overall_percentage: string;
  };
};

export default function VisaApprovalComparisonSection({ comparison }: Props) {
  return (
    <div className="my-8">
      <SectionHeading>Your Approval is Guaranteed on Atlys</SectionHeading>
      <div className="text-gray-700 mb-4">
        Applying for a Schengen visa is tedious and often gets rejected due to manual errors in most cases. Atlys however combines a manual expert review with AI review to ensure <span className="font-bold">ZERO mistakes</span>.
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-4">
          <div className="flex-1 flex flex-col items-center justify-center bg-green-50 rounded-lg p-4">
            <div className="text-3xl font-bold text-green-700 flex items-center gap-2">
              <span>✔</span>
              {comparison.atlys_percentage}%
            </div>
            <div className="text-green-700 font-semibold mt-2">APPROVAL ON ATLYS</div>
          </div>
          <div className="flex items-center justify-center font-bold text-lg bg-gray-100 rounded-full w-12 h-12">
            vs
          </div>
          <div className="flex-1 flex flex-col items-center justify-center bg-red-50 rounded-lg p-4">
            <div className="text-3xl font-bold text-red-600 flex items-center gap-2">
              <span>❗</span>
              {comparison.overall_percentage}%
            </div>
            <div className="text-red-600 font-semibold mt-2">APPROVAL OVERALL</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-0 border-t border-b border-gray-200">
          <div className="font-semibold py-2 pl-2"> </div>
          <div className="font-semibold py-2 text-center text-green-700">Atlys</div>
          <div className="font-semibold py-2 text-center text-red-600">Others</div>
        </div>
        {comparison.rows.map((row, idx) => (
          <div key={idx} className="grid grid-cols-3 gap-0 border-b border-gray-100 last:border-b-0">
            <div className="py-2 pl-2 font-medium">{row.title}</div>
            <div className="py-2 text-start flex items-start justify-start gap-2">
              <span>{row.atlys_text}</span>
              {row.atlys_status === "true" && (
                <span className="text-green-600 text-lg">✔</span>
              )}
            </div>
            <div className="py-2 text-start flex items-start justify-start gap-2">
              <span>{row.other_text}</span>
              {row.other_status === "true" && (
                <span className="text-red-600 text-lg">❗</span>
              )}
              {/* Show warning if other_status is empty and other_text exists */}
              {row.other_status !== "true" && row.other_text && (
                <span className="text-red-600 text-lg">❗</span>
              )}
            </div>
          </div>
        ))}
        <div className="bg-green-100 rounded-b-xl mt-4 px-4 py-3 text-green-700 font-semibold flex items-center gap-2">
          <span>✔</span>
          Your approval is guaranteed, or your visa fees back!
        </div>
      </div>
    </div>
  );
}
