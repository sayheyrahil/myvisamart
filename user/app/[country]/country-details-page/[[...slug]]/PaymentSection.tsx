import SectionHeading from "@/components/tools/SectionHeading";

export default function PaymentSection({ countryDetail }: { countryDetail: any }) {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="space-y-6">
        <div className="bg-[#EEEEEE] rounded-2xl shadow p-1">
          <div className="flex items-center gap-5 p-4">
            <span className="text-xs font-semibold text-gray-500">Acceptable Payment Methods:</span>
            <div className="flex gap-2">
              <span className="bg-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                <span className="i-mdi:credit-card-outline" /> Credit/Debit
              </span>
              <span className="bg-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                <span className="i-mdi:upi" /> UPI
              </span>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <div className="font-semibold text-[#1A355A] mb-2">Pay Now on Atlys</div>
            <div className="flex justify-between text-sm mb-1 border-b pb-1">
              <div>
                <span>Appointment Fee x 1</span>
                <div className="text-xs text-gray-400">Paid to government | Zero commission</div>
              </div>
              <span className="font-semibold">
                ₹{countryDetail?.visa_fee_now ? countryDetail.visa_fee_now.toLocaleString() : "0"}
              </span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>Atlys Service Fee</span>
              <span className="font-semibold">
                ₹{countryDetail?.service_fee_now ? countryDetail.service_fee_now.toLocaleString() : "0"}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#EEEEEE] rounded-2xl shadow p-1">
          <div className="flex items-center gap-5 p-4">
            <span className="text-xs font-semibold text-gray-500">Acceptable Payment Methods:</span>
            <div className="flex gap-2">
              <span className="bg-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                <span className="i-mdi:credit-card-outline" /> Credit/Debit
              </span>
              <span className="bg-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                <span className="i-mdi:upi" /> UPI
              </span>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <div className="font-semibold text-[#1A355A] mb-2">Pay Later At Appointment Center</div>
            <div className="flex justify-between text-sm mb-1 border-b pb-1">
              <div>
                <span>Visa Fee</span>
                <div className="text-xs text-gray-400">Paid in person directly to a government official | May vary</div>
              </div>
              <span className="font-semibold">
                ₹{countryDetail?.visa_fee_later ? countryDetail.visa_fee_later.toLocaleString() : "0"}
              </span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>Atlys Service Fee</span>
              <span className="font-semibold">
                ₹{countryDetail?.service_fee_later ? countryDetail.service_fee_later.toLocaleString() : "0"}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F8FB] rounded-2xl shadow p-4 flex justify-between items-center mt-2 border border-blue-200">
          <span className="font-semibold text-[#1A355A]">Total Amount for one Traveller</span>
          <span className="font-bold text-blue-700 text-lg">
            ₹{((countryDetail?.visa_fee_now || 0) + (countryDetail?.service_fee_now || 0)).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
