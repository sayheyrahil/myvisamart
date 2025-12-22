import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Helper for consistent date formatting (avoids locale mismatch)
function formatDate(date) {
  // Format: DD MMM YYYY (e.g., 04 Dec 2025)
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export default function CalendarCard() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="bg-white rounded-2xl p-5 shadow mt-5" >
      <div className="flex justify-between items-center">
        <p className="font-medium text-[#1A355A]">
          {formatDate(selectedDate)}
        </p>
        <button className="text-brand text-sm underline">View Timeline</button>
      </div>

      <div className="mt-3 border rounded-xl p-4">
        <p className="text-sm font-semibold mb-2">
          {selectedDate.toLocaleString("en-US", { month: "long", year: "numeric" })}
        </p>
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          inline
          calendarClassName="!border-0"
        />
      </div>

      <button className="mt-4 bg-brand text-white px-4 py-2 rounded-xl text-sm">Selected</button>
    </div>
  );
}
