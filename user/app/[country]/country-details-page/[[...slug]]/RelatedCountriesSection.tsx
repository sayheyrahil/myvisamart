import SectionHeading from "@/components/tools/SectionHeading";
import { WEB_URL } from "@/utils/constants";

export default function RelatedCountriesSection({ countryDetail }: { countryDetail: any }) {
  return (
    <div className="  mt-10 rounded-2xl  ">
      <SectionHeading>All {countryDetail.related_countries?.length || 0} Emirates with 1 Visa</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-5">
        {Array.isArray(countryDetail?.related_countries) && countryDetail.related_countries.length > 0 ? (
          countryDetail.related_countries.map((emirate: any, idx: number) => (
            <div key={emirate.id || idx} className="relative rounded-xl overflow-hidden shadow bg-white">
              <img
                src={WEB_URL + emirate.image}
                alt={emirate.name || "Emirate"}
                className="w-full h-40 object-cover bg-gray-200"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-2 rounded-b-xl">
                <span className="text-white font-semibold text-base">{emirate.name}</span>
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
          TDAC stands for the Thailand Digital Arrival Card, a mandatory digital process that all travellers must fill before travelling to Thailand. T DAC serves as an official record of the travellers entry.
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
