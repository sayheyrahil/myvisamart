import React from "react";
import { FaTimes } from "react-icons/fa";

export default function SupportTicketModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="relative bg-[#f6fafd] rounded-3xl shadow-xl p-8 w-full max-w-4xl mx-auto">
        {/* Close Button */}
        <button
          className="absolute -right-8 top-4 w-12 h-12 rounded-full bg-[#174ea6] flex items-center justify-center text-white text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          <FaTimes />
        </button>
        <div className="mb-8 mt-2 text-3xl font-semibold text-[#101828]">Generate Support Ticket</div>
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="border border-blue-300 rounded-lg px-4 py-4 text-base focus:outline-none">
              <option>Visa Type</option>
              <option>Tourist</option>
              <option>Business</option>
            </select>
            <input className="border border-blue-300 rounded-lg px-4 py-4 text-base" placeholder="Internal ID" />
            <input className="border border-blue-300 rounded-lg px-4 py-4 text-base" placeholder="Group Name" />
          </div>
          <label className="flex items-center border border-blue-300 rounded-lg px-4 py-4 bg-white cursor-pointer relative">
            <span className="flex-1 text-gray-400">Drag and Drop Files Here or Click to Upload</span>
            <svg width="22" height="22" fill="none" stroke="#174ea6" strokeWidth="2" viewBox="0 0 24 24" className="absolute right-4">
              <path d="M16 16v6H8v-6M12 12V2m0 10l-4-4m4 4l4-4"/>
            </svg>
            <input type="file" className="hidden" />
          </label>
          <textarea
            className="border border-blue-300 rounded-lg px-4 py-4 text-base min-h-[120px] resize-none"
            placeholder="Write Something"
          />
          <div className="flex">
            <button
              type="button"
              className="px-10 py-4 rounded-full bg-[#174ea6] text-white font-semibold text-lg shadow hover:bg-[#0a53b7] transition"
            >
              Create Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
