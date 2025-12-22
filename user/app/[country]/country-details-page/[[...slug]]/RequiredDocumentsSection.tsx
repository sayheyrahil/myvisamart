import ImageWithPreview from "@/components/common/ImageWithPreview";
import SectionHeading from "@/components/tools/SectionHeading";
import { WEB_URL } from "@/utils/constants";

export default function RequiredDocumentsSection({
  countryDetail,
}: {
  countryDetail: any;
}) {
  return (
    <div className="  mt-10 rounded-2xl  ">
      <SectionHeading>Required Documents</SectionHeading>
      <div className="flex flex-col sm:flex-row gap-6 mb-6">
        {Array.isArray(countryDetail?.required_documents) &&
        countryDetail.required_documents.length > 0 ? (
          countryDetail.required_documents.map((doc: any, idx: number) => (
            <div
              key={idx + Math.random()}
              className="flex-1 bg-white mt-5 rounded-xl p-6 flex flex-col items-center shadow"
            >
              <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center mb-3">
                {doc.icon ? (
                  <ImageWithPreview
                    src={doc.icon}
                    alt={doc.title || "Document Icon"}
                    className="w-16 h-16 object-contain rounded-full"
                  />
                ) : (
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#0A509F" />
                  </svg>
                )}
              </div>
              <div className="font-semibold text-[#1A355A] text-base mb-1">
                {doc.title || `Document ${idx + 1}`}
              </div>
              <div className="text-gray-500 text-sm text-center">
                {doc.description || ""}
              </div>
            </div>
          ))
        ) : (
          <>{/* ...existing code for static cards as fallback... */}</>
        )}
      </div>
      <div className="my-10">
        <SectionHeading>What is TDAC ?</SectionHeading>
        <div className="text-gray-700 text-base my-6">
          TDAC stands for the Thailand Digital Arrival Card, a mandatory digital
          process that all travellers must fill before travelling to Thailand. T
          DAC serves as an official record of the travellers entry.
        </div>
      </div>
      <SectionHeading>Check Appointment availability</SectionHeading>
      <div className="flex items-center gap-2 my-2">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2 inline-block"></span>
          7 slots left for 6th Oct!
        </span>
      </div>
    </div>
  );
}
