import React from "react";
import MasterPage from "@/components/layouts/master";

export default function DubaiVisaPage() {
  return (
    <MasterPage title="Dubai Visa Application">
      <div className="min-h-screen  flex justify-center py-6">
        <div className="w-full max-w-6xl bg-white rounded-xl shadow-sm p-4">
          
          {/* Top Banner */}
          <div className="relative w-full h-72 rounded-xl overflow-hidden">
            <img
              src="/your-image.jpg" 
              alt="Dubai"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full shadow text-sm font-medium">
              Visa guaranteed in 1 day
            </div>
          </div>

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

            {/* Left Section */}
            <div className="md:col-span-2 space-y-6">

              {/* Dubai Visa Information */}
              <div className="bg-white p-5 rounded-xl shadow">
                <h2 className="text-lg font-semibold mb-4">Dubai Visa Information</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <InfoCard title="Visa Type" value="E-Visa" />
                  <InfoCard title="Length of Stay" value="30 days" />
                  <InfoCard title="Validity" value="60 days" />
                  <InfoCard title="Entry" value="$0 for now" />
                </div>
              </div>

              {/* Get Visa Date */}
              <div className="bg-white p-5 rounded-xl shadow">
                <h2 className="text-lg font-semibold mb-4">Get a Guaranteed Visa on</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Calendar */}
                  <div className="border rounded-xl p-4">
                    <p className="font-medium mb-3">24 Sep 2025 at 12:54 PM</p>
                    <CalendarComponent />
                  </div>

                  {/* Time Selector */}
                  <div className="border rounded-xl p-4 flex flex-col justify-between">
                    <p className="font-medium">24 Sep 2025 at 12:54 PM</p>
                    <select className="w-full mt-4 border rounded-lg px-3 py-2">
                      <option>Select Time</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Required Documents */}
              <div className="bg-white p-5 rounded-xl shadow">
                <h2 className="text-lg font-semibold mb-4">Required Documents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DocumentCard title="Passport" text="Upload your Live Scan" />
                  <DocumentCard title="That's it!" text="Just 1 step needed" />
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div>
              <div className="bg-white p-5 rounded-xl shadow sticky top-4">
                <h2 className="text-lg font-semibold">Dubai Visa for Indians</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <div className="mt-4 bg-blue-50 px-4 py-2 text-center rounded-lg text-blue-700 font-semibold">
                  Visa guaranteed in 1 day
                </div>

                {/* Price Breakdown */}
                <div className="mt-5 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Pay Now</span>
                    <span>$75 + 1</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Pay Later</span>
                    <span>$35.50 for now</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Total Amount</span>
                    <span>$75</span>
                  </div>
                </div>

                <button className="w-full mt-5 bg-blue-600 text-white rounded-lg py-3 font-medium hover:bg-blue-700 transition">
                  Start Application
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </MasterPage>
  );
}

/*---------------------- Components ----------------------*/

function InfoCard({ title, value }: { title: any; value: any }) {
  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <p className="text-xs text-gray-600">{title}</p>
      <p className="text-base font-semibold">{value}</p>
    </div>
  );
}

function DocumentCard({ title, text }: { title: any; text: any }) {
  return (
    <div className="border rounded-xl p-5 text-center bg-gray-50">
      <p className="font-semibold text-lg">{title}</p>
      <p className="text-sm text-gray-600 mt-1">{text}</p>
    </div>
  );
}

function CalendarComponent() {
  return (
    <div className="w-full border rounded-lg p-4 text-center text-sm">
      {/* Replace with date picker library if needed */}
      <p className="text-gray-500">Calendar UI Here</p>
    </div>
  );
}
