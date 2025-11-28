import React from "react";

export default function ProfileTab() {
  return (
    <>
      {/* Info Cards */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 mb-8 px-4">
        <div className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col gap-1">
          <div className="text-xs text-gray-400">Contact Us at</div>
          <div className="font-medium text-[#101828]">example9@gmail.com</div>
          <div className="text-[#101828] text-sm">+919876543210</div>
          <div className="text-xs text-gray-400 mt-2">
            Please only call if it’s a real emergency or escalation. For everything else, please create a support ticket.
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col justify-center items-center">
          <div className="text-[#101828] text-base mb-2">Have questions about the product?</div>
          <button className="px-6 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold shadow hover:bg-blue-100 transition text-sm">
            Join Demo Call
          </button>
        </div>
      </div>

      {/* Agency Information */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-8 mb-8 px-4">
        <div className="text-2xl font-semibold mb-6">Agency Information</div>
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select className="border border-blue-200 rounded-lg px-4 py-3 text-base">
              <option>Country</option>
              <option>India</option>
              <option>Bangladesh</option>
            </select>
            <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" placeholder="Account Type" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center border border-blue-200 rounded-lg px-4 py-3 bg-white">
              <span className="mr-2 text-2xl">🇧🇩</span>
              <span className="text-gray-500 mr-2">+880</span>
              <input className="flex-1 outline-none bg-transparent text-base" placeholder="Your mobile number" />
            </div>
            <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" placeholder="GST Number" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" placeholder="PAN Number" />
            <div className="flex gap-6">
              <label className="flex-1 flex items-center border border-blue-200 rounded-lg px-4 py-3 cursor-pointer bg-white">
                <span className="flex-1 text-gray-500">GST Certificate</span>
                <svg width="20" height="20" fill="none" stroke="#bdbdbd" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M16 16v6H8v-6M12 12V2m0 10l-4-4m4 4l4-4" />
                </svg>
                <input type="file" className="hidden" />
              </label>
              <label className="flex-1 flex items-center border border-blue-200 rounded-lg px-4 py-3 cursor-pointer bg-white">
                <span className="flex-1 text-gray-500">Cancel Cheque</span>
                <svg width="20" height="20" fill="none" stroke="#bdbdbd" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M16 16v6H8v-6M12 12V2m0 10l-4-4m4 4l4-4" />
                </svg>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" placeholder="Address Line 1*" />
          <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" placeholder="Address Line 2" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <select className="border border-blue-200 rounded-lg px-4 py-3 text-base">
              <option>City</option>
              <option>Delhi</option>
              <option>Mumbai</option>
            </select>
            <select className="border border-blue-200 rounded-lg px-4 py-3 text-base">
              <option>State</option>
              <option>Maharashtra</option>
              <option>West Bengal</option>
            </select>
            <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" placeholder="Zip Code" />
          </div>
          <button className="w-32 mt-2 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-full font-medium transition text-base" type="button">
            Save
          </button>
        </form>
      </div>

      {/* Aadhar Details */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-8 mb-8 px-4">
        <div className="text-2xl font-semibold mb-6">Aadhar details</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" placeholder="Name as per Aadhar" />
          <input className="border border-blue-200 rounded-lg px-4 py-3 text-base" placeholder="Aadhar number" />
        </div>
        <input className="border border-blue-200 rounded-lg px-4 py-3 text-base mb-4" placeholder="Address" />
      </div>

      {/* Office Photo */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-8 px-4">
        <div className="text-2xl font-semibold mb-6">Office Photo</div>
        <label className="flex items-center border border-blue-200 rounded-lg px-4 py-3 cursor-pointer bg-white w-full max-w-xl">
          <span className="flex-1 text-gray-500">Office photo</span>
          <svg width="20" height="20" fill="none" stroke="#bdbdbd" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M16 16v6H8v-6M12 12V2m0 10l-4-4m4 4l4-4" />
          </svg>
          <input type="file" className="hidden" />
        </label>
      </div>
    </>
  );
}
