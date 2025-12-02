import React from "react";

function MiniCalendar() {
  return (
    <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500">
      {["M","T","W","T","F","S","S"].map(d => <div key={d} className="font-medium">{d}</div>)}
      {Array.from({length:30}).map((_,i)=>(
        <div key={i} className="py-1">{i+1}</div>
      ))}
    </div>
  );
}

export default function CalendarCard() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow">
      <div className="flex justify-between items-center">
        <p className="font-medium text-[#1A355A]">24 Sep 2025 at 12:54 PM</p>
        <button className="text-blue-600 text-sm underline">View Timeline</button>
      </div>

      <div className="mt-3 border rounded-xl p-4">
        <p className="text-sm font-semibold mb-2">September 2025</p>
        <MiniCalendar />
      </div>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm">Selected</button>
    </div>
  );
}
