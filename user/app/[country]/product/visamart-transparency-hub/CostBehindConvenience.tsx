import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const feeData = [
  [
    { name: "Visa Processing", value: 40, color: "#6366F1" },
    { name: "Platform Maintenance", value: 20, color: "#A21CAF" },
    { name: "Customer Support", value: 25, color: "#F43F5E" },
    { name: "Others", value: 15, color: "#22D3EE" },
  ],
  [
    { name: "Visa Processing", value: 35, color: "#6366F1" },
    { name: "Platform Maintenance", value: 25, color: "#A21CAF" },
    { name: "Customer Support", value: 20, color: "#F43F5E" },
    { name: "Others", value: 20, color: "#22D3EE" },
  ],
  [
    { name: "Visa Processing", value: 50, color: "#6366F1" },
    { name: "Platform Maintenance", value: 15, color: "#A21CAF" },
    { name: "Customer Support", value: 20, color: "#F43F5E" },
    { name: "Others", value: 15, color: "#22D3EE" },
  ],
  [
    { name: "Visa Processing", value: 30, color: "#6366F1" },
    { name: "Platform Maintenance", value: 30, color: "#A21CAF" },
    { name: "Customer Support", value: 25, color: "#F43F5E" },
    { name: "Others", value: 15, color: "#22D3EE" },
  ],
];

export default function CostBehindConvenience() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 bg-white">
      <div className="  w-full flex flex-col items-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-black text-center">
          The Cost Behind the Convenience:<br />Your Fees Explained
        </h2>
        <p className="text-gray-500 text-base md:text-lg mb-8 text-center  ">
          Yes, Atlys is a safe, reliable, and trusted platform serving visas. Here’s why millions of users trust us.
        </p>
        <div className="flex items-center justify-center w-full mb-8">
          <input
            type="text"
            placeholder="Search Country..."
            className="w-full  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C2BD7] transition"
          />
        </div>
        <div className="flex gap-6 mb-8 flex-wrap justify-center">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full" style={{ background: "#6366F1" }}></span>
            <span className="text-sm text-[#18181B]">Visa Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full" style={{ background: "#A21CAF" }}></span>
            <span className="text-sm text-[#18181B]">Platform Maintenance</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full" style={{ background: "#F43F5E" }}></span>
            <span className="text-sm text-[#18181B]">Customer Support</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full" style={{ background: "#22D3EE" }}></span>
            <span className="text-sm text-[#18181B]">Others</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          {["E-Visa", "Sticker Visas", "Appointment Visa", "Express Visa"].map((label, idx) => (
            <div className="flex flex-col items-center" key={label}>
              <ResponsiveContainer width={160} height={160}>
                <PieChart>
                  <Pie
                    data={feeData[idx]}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    innerRadius={40}
                    label={false}
                  >
                    {feeData[idx].map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <span className="font-medium text-[#18181B] mt-2">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
