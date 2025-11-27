import Hero from "./Hero";
import InfoCard from "./InfoCard";
import PriceCard from "./PriceCard";
import CalendarCard from "./CalendarCard";
import SectionHeading from "@/components/tools/SectionHeading";
import Image from "next/image";
export default function Page() {
  return (
    <div className="min-h-screen bg-bg py-10 px-5">
      <div className="max-w-6xl mx-auto space-y-10">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3">
            <InfoCard />
            <div className="space-y-4">
              <SectionHeading>
                Get a Guaranteed Visa on
              </SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CalendarCard />
                <div className="bg-white rounded-2xl p-5 shadow flex flex-col justify-between">
                  <div>
                    <p className="font-medium text-[#1A355A]">24 Sep 2025 at 12:54 PM</p>
                    <button className="text-blue-600 text-sm underline mt-1">View Timeline</button>
                  </div>
                  <button className="mt-6 w-full border border-gray-300 py-2 rounded-xl text-gray-500">Select</button>
                  <p className="text-right mt-2 text-sm text-gray-400">in 2 days</p>
                </div>
              </div>
            </div>
            {/* Required Documents Section */}
            <div className="max-w-6xl mx-auto mt-10 bg-white rounded-2xl shadow p-6">
              <SectionHeading>
                Required Documents
              </SectionHeading>
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div className="flex-1 bg-[#F4F8FB] rounded-xl p-6 flex flex-col items-center shadow">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    {/* Example icon, replace with your own if needed */}
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2a2 2 0 0 1 2 2v2h2.5A1.5 1.5 0 0 1 18 7.5v12A2.5 2.5 0 0 1 15.5 22h-7A2.5 2.5 0 0 1 6 19.5v-12A1.5 1.5 0 0 1 7.5 6H10V4a2 2 0 0 1 2-2Zm0 2H10v2h4V4a2 2 0 0 0-2-2Zm-4 3.5V19.5A1.5 1.5 0 0 0 8.5 21h7a1.5 1.5 0 0 0 1.5-1.5V7.5A.5.5 0 0 0 15.5 7h-7a.5.5 0 0 0-.5.5ZM12 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" fill="#0A509F" /></svg>
                  </div>
                  <div className="font-semibold text-[#1A355A] text-base mb-1">Passport</div>
                  <div className="text-gray-500 text-sm text-center">Upload or Live Scan. Auto-filled, no manual errors.</div>
                </div>
                <div className="flex-1 bg-[#F4F8FB] rounded-xl p-6 flex flex-col items-center shadow">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    {/* Example icon, replace with your own if needed */}
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#0A509F" /></svg>
                  </div>
                  <div className="font-semibold text-[#1A355A] text-base mb-1">That's It!</div>
                  <div className="text-gray-500 text-sm text-center">Just 1 steps and we'll process your visa!</div>
                </div>
              </div>
              {/* What is TDAC Section */}
              <SectionHeading >
                What is TDAC ?
              </SectionHeading>
              <div className="text-gray-700 text-base mb-6">
                TDAC stands for the Thailand Digital Arrival Card, a mandatory digital process that all travellers must fill before travelling to Thailand. T DAC serves as an official record of the travellers entry.
              </div>
              {/* Check Appointment availability */}
              <SectionHeading >
                Check Appointment availability
              </SectionHeading>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2 inline-block"></span>
                  7 slots left for 6th Oct!
                </span>
              </div>
            </div>
            {/* Appointment & Payment Section */}
            <div className="max-w-6xl mx-auto mt-10">
              <div className="bg-white rounded-2xl shadow p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="text-[#1A355A] font-semibold text-lg mb-1">
                      Visa Appointment as Early as <span className="text-blue-700">6th Oct 2025</span>
                    </div>
                    <div className="text-sm text-gray-500 mb-2">Appointment Location</div>
                    <select className="border border-gray-300 rounded px-3 py-2 text-sm mb-2">
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Bangalore</option>
                    </select>
                    <button className="block w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-full font-semibold mt-2 hover:bg-blue-700 transition">
                      Reserve Appointment Now
                    </button>
                  </div>
                  <div className="flex-1 flex justify-center items-center">
                    {/* Simple gauge/meter illustration */}
                    <svg width="120" height="60" viewBox="0 0 120 60">
                      <path d="M10,60 A50,50 0 0,1 110,60" fill="none" stroke="#E0E7EF" strokeWidth="10" />
                      <path d="M10,60 A50,50 0 0,1 90,20" fill="none" stroke="#0A509F" strokeWidth="10" />
                      <circle cx="60" cy="60" r="7" fill="#0A509F" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Payment Methods & Breakdown */}
              <div className="space-y-6">
                {/* Pay Now */}
                <div className="bg-white rounded-2xl shadow p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-500">Acceptable Payment Methods:</span>
                    <div className="flex gap-2">
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">Credit/Debit</span>
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">UPI</span>
                    </div>
                  </div>
                  <div className="font-semibold text-[#1A355A] mb-2">Pay Now on Atlys</div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Appointment Fee x 1</span>
                    <span className="font-semibold">₹2,690</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Atlys Service Fee</span>
                    <span className="font-semibold">₹3,990</span>
                  </div>
                </div>
                {/* Pay Later */}
                <div className="bg-white rounded-2xl shadow p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-500">Acceptable Payment Methods:</span>
                    <div className="flex gap-2">
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">Credit/Debit</span>
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">UPI</span>
                    </div>
                  </div>
                  <div className="font-semibold text-[#1A355A] mb-2">Pay Later At Appointment Center</div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Visa Fee</span>
                    <span className="font-semibold">₹8,000</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Atlys Service Fee</span>
                    <span className="font-semibold">₹3,990</span>
                  </div>
                </div>
                {/* Total */}
                <div className="bg-[#F4F8FB] rounded-2xl shadow p-4 flex justify-between items-center mt-2">
                  <span className="font-semibold text-[#1A355A]">Total Amount for one Traveller</span>
                  <span className="font-bold text-blue-700 text-lg">₹14,680</span>
                </div>
              </div>
            </div>
            {/* What you get Section */}
            <div className="max-w-6xl mx-auto mt-10">
              <SectionHeading>

                What you get
              </SectionHeading>
              <div className="text-gray-700 text-base mb-6">
                Atlys will give you a completed application packet with all necessary documents
              </div>
              <div className="  rounded-2xl   p-6 flex flex-col items-center">
                <div className="w-full ">
                  <Image
                    src="/Frame1991424902.png"
                    alt="What You Get"
                    width={1200}
                    height={400}
                    className="w-full h-full"
                  />

                </div>
              </div>
            </div>
            {/* Statistics, Save Later, and Appointment Centers Section */}
            <div className="max-w-6xl mx-auto mt-10 space-y-10">
              {/* Statistics */}
              <div>
                <SectionHeading>
                  Statistics
                </SectionHeading>

                <div className="flex items-center gap-3 mb-2 text-sm text-gray-500">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F4F8FB] text-blue-700 font-semibold">
                    <svg width="18" height="18" fill="none" className="mr-1"><rect width="18" height="18" rx="4" fill="#0A509F" /></svg>
                    29 August - 28 September, 2025
                  </span>
                </div>
                <Image
                  src="/_Navfeatured-card.png"
                  alt="Statistics Map"
                  width={1200}
                  height={400}
                  className="w-full h-auto rounded-2xl  "
                />
              </div>
              {/* Apply now, save later */}
              <div>
                <h3 className="text-lg font-semibold text-[#1A355A] flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                  Apply now, save later!
                </h3>
                <div className="flex items-center gap-3 mb-2 text-sm text-gray-500">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F4F8FB] text-blue-700 font-semibold">
                    <svg width="18" height="18" fill="none" className="mr-1"><rect width="18" height="18" rx="4" fill="#0A509F" /></svg>
                    29 August - 28 September, 2025
                  </span>
                </div>
                <Image
                  src="/Frame1991424971.png"
                  alt="Apply Now Save Later"
                  width={1200}
                  height={400}
                  className="w-full h-auto rounded-2xl  "
                />
              </div>
              {/* Appointment Centers & Available Slots */}
              <div>
                <SectionHeading>
                  Appointment Centers & Available Slots
                </SectionHeading>
                <Image
                  src="/_Nav-featured-card.png"
                  alt="Appointment Centers"
                  width={1200}
                  height={400}
                  className="w-full h-auto rounded-2xl  "
                />
              </div>
              <div>
                <SectionHeading>
                  We Track Appointment Openings 24/7
                </SectionHeading>
                <Image
                  src="/Frame1272632137.png"
                  alt="Appointment Centers"
                  width={1200}
                  height={400}
                  className="w-full h-auto rounded-2xl  "
                />
              </div>
              <div>
                <SectionHeading>
                  How to Get a UK Visa on Atlys
                </SectionHeading>
                <Image
                  src="/32312312.png"
                  alt="Appointment Centers"
                  width={1200}
                  height={400}
                  className="w-full h-auto rounded-2xl  "
                />
              </div>
              <div>
                <SectionHeading>
                  What Documents Do You Need to Submit?
                </SectionHeading>
                <Image
                  src="/qweqeq2323.png"
                  alt="Appointment Centers"
                  width={1200}
                  height={400}
                  className="w-full h-auto rounded-2xl  "
                />
              </div>
              <div>
                <SectionHeading>
                  Appointment Centers in India
                </SectionHeading>
                <Image
                  src="/qeqweqwe45656121.png"
                  alt="Appointment Centers"
                  width={1200}
                  height={400}
                  className="w-full h-auto rounded-2xl  "
                />
              </div>
              <div>
                <SectionHeading>
                  Chances of approval for United Kingdom
                </SectionHeading>
                <Image
                  src="/Frame12726321371.png"
                  alt="Appointment Centers"
                  width={1200}
                  height={400}
                  className="w-full h-auto rounded-2xl  "
                />
              </div>
              <div>
                <SectionHeading>
                  Simplified visas with UK visa
                </SectionHeading>
                <Image
                  src="/Frames1272632137.png"
                  alt="Appointment Centers"
                  width={1200}
                  height={400}
                  className="w-full h-auto rounded-2xl  "
                />
              </div>
              <div>
                <SectionHeading>
                  Delhi Center Security & Inspection Report
                </SectionHeading>
                <Image
                  src="/Frame1991425208.png"
                  alt="Appointment Centers"
                  width={1200}
                  height={400}
                  className="w-full h-auto rounded-2xl  "
                />
              </div>
              <div>
                <SectionHeading>
                  Your Passport's Voyage to Atlys' Fulfillment Center
                </SectionHeading>
                <Image
                  src="/Frame1321316465.png"
                  alt="Appointment Centers"
                  width={1200}
                  height={400}
                  className="w-full h-auto rounded-2xl  "
                />
              </div>

              <div>
                <SectionHeading>
                  Statistics on South Korea Visa
                </SectionHeading>
                <Image src="/Frame1991425212.png" alt="Appointment Centers" width={1200} height={400}
                  className="w-full h-auto rounded-2xl  " />
              </div>
              <div>
                <SectionHeading>
                  Statistics on South Korea Visa
                </SectionHeading>
                <Image src="/Frame1991425240.png" alt="Appointment Centers" width={1200} height={400}
                  className="w-full h-auto rounded-2xl  " />
              </div>
              <div>
                <SectionHeading>
                  Delhi Center Visa Experts and Staff
                </SectionHeading>
                <Image src="/Frame1991425195.png" alt="Appointment Centers" width={1200} height={400}
                  className="w-full h-auto rounded-2xl  " />
              </div>
              <div>
                <SectionHeading>
                  Your Transit Timeline
                </SectionHeading>
                  <div className="bg-white rounded-2xl shadow p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Timeline */}
                    <div className="relative flex flex-col items-center md:w-1/4">
                      <div className="absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-1 bg-blue-100 z-0" />
                      {[
                        {
                          icon: (
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="8" fill="#EAF1FA" /><path d="M8 12h8M12 8v8" stroke="#0A509F" strokeWidth="2" strokeLinecap="round" /></svg>
                          ),
                          title: "Arrives in Belarus",
                          desc: "Gather your Belongings and Head to immigration"
                        },
                        {
                          icon: (
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="8" fill="#EAF1FA" /><path d="M12 7v10M7 12h10" stroke="#0A509F" strokeWidth="2" strokeLinecap="round" /></svg>
                          ),
                          title: "Keep your Passport in Hand",
                          desc: "Your Passport must be Valid for for at Least Six Months"
                        },
                        {
                          icon: (
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="8" fill="#EAF1FA" /><path d="M8 12h8M12 8v8" stroke="#0A509F" strokeWidth="2" strokeLinecap="round" /></svg>
                          ),
                          title: "Head to Immigration",
                          desc: "Show Your Passport and Travel Document to Immigration."
                        },
                        {
                          icon: (
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="8" fill="#EAF1FA" /><path d="M8 12h8M12 8v8" stroke="#0A509F" strokeWidth="2" strokeLinecap="round" /></svg>
                          ),
                          title: "Recieve Visa Stamp",
                          desc: "Immigration Officer Stamps Passport with a Visa on Arrival."
                        },
                        {
                          icon: (
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="8" fill="#EAF1FA" /><path d="M8 12h8M12 8v8" stroke="#0A509F" strokeWidth="2" strokeLinecap="round" /></svg>
                          ),
                          title: "Entry Approved",
                          desc: "After immigration, collect luggage and enjoy your stay."
                        }
                      ].map((step, idx, arr) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center mb-8 last:mb-0">
                          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-blue-100 z-10">
                            {step.icon}
                          </div>
                          {idx < arr.length - 1 && (
                            <div className="w-1 h-8 bg-blue-100"></div>
                          )}
                        </div>
                      ))}
                    </div>
                    {/* Timeline Details */}
                    <div className="flex-1 flex flex-col gap-6">
                      {[
                        {
                          title: "Arrives in Belarus",
                          desc: "Gather your Belongings and Head to immigration"
                        },
                        {
                          title: "Keep your Passport in Hand",
                          desc: "Your Passport must be Valid for for at Least Six Months"
                        },
                        {
                          title: "Head to Immigration",
                          desc: "Show Your Passport and Travel Document to Immigration."
                        },
                        {
                          title: "Recieve Visa Stamp",
                          desc: "Immigration Officer Stamps Passport with a Visa on Arrival."
                        },
                        {
                          title: "Entry Approved",
                          desc: "After immigration, collect luggage and enjoy your stay."
                        }
                      ].map((step, idx) => (
                        <div key={idx} className="bg-[#F8FAFC] rounded-xl p-5 shadow flex flex-col">
                          <div className="font-semibold text-[#1A355A] mb-1">{step.title}</div>
                          <div className="text-gray-500 text-sm">{step.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Image src="/Frame1991425186.png" alt="Appointment Centers" width={1200} height={400}
                  className="w-full h-auto rounded-2xl  " />
              <div>
                <SectionHeading>
                  Check Serviceability
                </SectionHeading>
                <Image src="/Frame1991425232.png" alt="Appointment Centers" width={1200} height={400}
                  className="w-full h-auto rounded-2xl  " />
              </div>
              <div>
                <SectionHeading>
                  Our Fulfillment Center
                </SectionHeading>
                <Image src="/Frame1991425207.png" alt="Appointment Centers" width={1200} height={400}
                  className="w-full h-auto rounded-2xl  " />
              </div>

              <div>
                <SectionHeading>
                  Try our WHAT IF Simulator!
                </SectionHeading>
                <Image src="/Frame1991425237.png" alt="Appointment Centers" width={1200} height={400}
                  className="w-full h-auto rounded-2xl  " />
              </div>
              <div>
                <SectionHeading>
                  How We Reviewed This Page
                </SectionHeading>
                <Image src="/Frame1991425234.png" alt="Appointment Centers" width={1200} height={400}
                  className="w-full h-auto rounded-2xl  " />
              </div>
              <div>
                <SectionHeading>
                  How We Reviewed This Page  </SectionHeading>
                <Image src="/Frame1991425233.png" alt="Appointment Centers" width={1200} height={400}
                  className="w-full h-auto rounded-2xl  " />
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <PriceCard />
          </div>
        </div>

      </div>

    </div>
  );
}
