import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import SponsorDetailModal from "@/components/application/SponsorDetailModal";

export default function SponsorReviewStep({
  noOptions,
  onBack,
  onProceed,
  fullName,
}: {
  noOptions: { name: string; relation: string }[];
  onBack: () => void;
  onProceed: () => void;
  fullName?: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{ name: string; relation: string } | null>(null);

  // Helper to render a person row
  const renderPerson = (name: string, relation: string) => (
    <button
      type="button"
      className="flex items-center w-full px-4 py-3 rounded-full bg-white border border-[#E1EBF6] shadow hover:shadow-md transition group"
      tabIndex={-1}
      onClick={() => {
        setModalData({ name, relation });
        setModalOpen(true);
      }}
    >
      <span className="w-12 h-12 rounded-full bg-[#E6F0FA] flex items-center justify-center mr-4 text-[#0A509F] font-bold text-lg text-center uppercase">
        {name
          ? name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
          : ""}
      </span>
      <span className="flex-1 text-left text-[#022538] font-medium text-base">
        {name} ({relation})
      </span>
      <FiChevronRight className="text-[#0A509F] w-6 h-6" />
    </button>
  );

  return (
    <div className="flex flex-col items-center md:items-start w-full">
      <div className="font-madefor font-normal text-[32px] sm:text-[40px] md:text-[48px] lg:text-[48px] leading-[40px] sm:leading-[52px] md:leading-[60px] lg:leading-[60px] text-[#85ABDB] mb-2 text-center md:text-left">
        Let’s start with your{" "}
        <span className="text-[#022538] font-semibold">details</span>
      </div>
      <div className="text-[#7B7B7B] mb-8 text-base text-center md:text-left">
        Confirm your details to proceed further.
      </div>
      <div className="flex flex-col gap-4 w-full max-w-md mb-8">
        {fullName && renderPerson(fullName, "You")}
        {noOptions.length > 0 &&
          noOptions.map((item, idx) =>
            renderPerson(
              item.name,
              item.relation.charAt(0).toUpperCase() + item.relation.slice(1)
            )
          )}
      </div>
      <div className="flex gap-4">
        <button
          className="bg-[#F7FAFC] text-[#7B7B7B] border border-[#D1D5DB] px-10 py-4 rounded-full flex items-center justify-center text-lg font-medium shadow hover:bg-[#e5e7eb] transition"
          onClick={onBack}
          type="button"
        >
          Back
        </button>
        <button
          className="bg-[#022538] text-white px-10 py-4 rounded-full flex items-center gap-2 hover:bg-[#083d7a] transition text-lg font-medium shadow"
          onClick={onProceed}
          type="button"
        >
          Proceed
          <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
            <path d="M13 5l7 7-7 7M5 12h14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      {/* Modal */}
      {modalOpen && modalData && (
        <SponsorDetailModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          name={modalData.name}
          relation={modalData.relation}
        />
      )}
    </div>
  );
}
