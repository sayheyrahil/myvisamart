import React, { useState, useContext } from "react";
import { FiChevronRight } from "react-icons/fi";
import SponsorDetailModal from "@/components/application/SponsorDetailModal";
import ProceedButton from "./ProceedButton";
import { FormDataContext } from "@/context/FormDataContext";

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
  const [modalData, setModalData] = useState<{
    name: string;
    relation: string;
    idx: number;
  } | null>(null);
  const { formData } = useContext(FormDataContext);

  // Helper to render a person row
  const renderPerson = (idx: number, name: string, relation: string) => (
    <button
      type="button"
      className="flex items-center w-full px-4 py-3 rounded-full bg-white border border-[#E1EBF6] shadow hover:shadow-md transition group"
      tabIndex={-1}
      onClick={() => {
        setModalData({ name, relation , idx });
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
        {noOptions.length > 0 &&
          noOptions
            // .filter((option) => option.relation !== "self")
            .map((item, idx) =>
              <React.Fragment key={item.name + item.relation + idx}>
                {renderPerson(
                  idx,
                  item.name,
                  item.relation.charAt(0).toUpperCase() + item.relation.slice(1)
                )}
              </React.Fragment>
            )}
      </div>
      <ProceedButton onBack={onBack} onClick={onProceed} />
      {/* Modal */}
      {modalOpen && modalData && (
        <SponsorDetailModal
          open={modalOpen}
          idx={modalData.idx}
          onClose={() => setModalOpen(false)}
          name={modalData.name}
          relation={modalData.relation}
        />
      )}
    </div>
  );
}
