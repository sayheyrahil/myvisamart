import SectionHeading from "@/components/tools/SectionHeading";
import { WEB_URL } from "@/utils/constants";

export default function TransitTimelineSection({ countryDetail }: { countryDetail: any }) {
  return (
    <div className="flex-1 flex flex-col gap-6 mt-5">
      <SectionHeading>Your Transit Timeline</SectionHeading>
      <div className="flex flex-row gap-8 items-start bg-[#F4F8FB] rounded-2xl">
        <div className="relative flex flex-col items-center min-w-[40px] pt-2">
          <div className="absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-1 bg-blue-100 z-0" />
          {Array.isArray(countryDetail?.transit_timeline) && countryDetail.transit_timeline.length > 0
            ? countryDetail.transit_timeline.map((_, idx: number) => (
                <div key={idx} className="relative z-10 flex flex-col items-center mb-8 last:mb-0">
                  <div className="w-3 h-3 rounded-full bg-white border-2 border-blue-400 z-10" />
                  {idx <= countryDetail.transit_timeline.length - 1 && (
                    <div className="w-1 h-20 bg-blue-100"></div>
                  )}
                </div>
              ))
            : null}
        </div>
        <div className="flex-1 flex flex-col gap-6">
          {Array.isArray(countryDetail?.transit_timeline) && countryDetail.transit_timeline.length > 0 ? (
            countryDetail.transit_timeline.map((step: any, idx: number) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow flex gap-5">
                <div className="flex flex-col">
                  <img src={WEB_URL + step.icon} alt={step.title || `Step ${idx + 1}`} className="w-12 h-12 object-contain mb-3" />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-[#1A355A] mb-1">{step.title || `Step ${idx + 1}`}</div>
                  <div className="text-gray-500 text-sm">{step.desc || step.description || ""}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-xl p-5 shadow flex flex-col">
              <div className="font-semibold text-[#1A355A] mb-1">No transit timeline available.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
