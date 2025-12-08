import React from "react";

type Props = {
  data: any;
};

const AppointmentAvailabilitySection: React.FC<Props> = ({ data }) => {
  // Example data extraction (customize as needed)
  const slotsLeft = data?.slots_left || 4;
  const date = data?.date || "16th Dec";
  const appointmentDate = data?.appointment_date || "16th Dec 2025";
  const location = data?.location || "Ahmedabad";
  const daysUntil = data?.days_until || 8;

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Check Appointment availability</h2>
      <div className="mb-4">
        <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium text-sm">
          {slotsLeft} slots left for {date}!
        </span>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 min-w-[220px]">
          <div className="text-lg font-semibold mb-2">
            Visa Appointment as Early as <span className="text-brand font-bold">{appointmentDate}</span>
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Appointment Location</label>
            <div className="flex items-center gap-2">
              <span className="material-icons-outlined text-brand">location_on</span>
              <select
                className="border rounded px-3 py-2 w-full"
                value={location}
                disabled
              >
                <option>{location}</option>
              </select>
            </div>
          </div>
          <button className="mt-2 px-6 py-2 rounded bg-brand text-white font-semibold hover:bg-brand-dark transition">
            Reserve Appointment Now
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative flex flex-col items-center">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <path
                d="M20,100 A50,50 0 1,1 100,100"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="6"
              />
              <path
                d="M20,100 A50,50 0 0,1 100,100"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="6"
                strokeDasharray="157"
                strokeDashoffset={157 - (daysUntil / 80) * 157}
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-2xl font-bold">{daysUntil} Days</div>
              <div className="text-xs text-gray-500">until nearest available appointment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentAvailabilitySection;
