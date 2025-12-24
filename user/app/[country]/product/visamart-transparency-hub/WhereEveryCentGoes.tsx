import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const centData = [
  { name: "Customer Support", value: 11, color: "#F43F5E" },
  { name: "Operating Cost", value: 20, color: "#F59E42" },
  { name: "Marketing", value: 29, color: "#FACC15" },
  { name: "Processing Visas", value: 12, color: "#22D3EE" },
  { name: "Reimbursements", value: 16, color: "#6366F1" },
  { name: "Platform Maintenance", value: 7, color: "#A21CAF" },
  { name: "Other", value: 5, color: "#64748B" },
];

export default function WhereEveryCentGoes() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 bg-[#F7FAFC]">
      <div className="  w-full flex flex-col items-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-black text-center">
          Where Every Cent Goes
        </h2>
        <p className="text-gray-500 text-base md:text-lg mb-8 text-center  ">
          Yes, Atlys is a safe, reliable, and trusted platform serving visas. Here’s why millions of users trust us.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
          <div className="flex-shrink-0">
            <ResponsiveContainer width={260} height={260}>
              <PieChart>
                <Pie
                  data={centData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={60}
                  label
                >
                  {centData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-2 text-base">
            {centData.map((item) => (
              <div className="flex items-center gap-2" key={item.name}>
                <span className="w-4 h-4 rounded-full" style={{ background: item.color }}></span>
                <span className="font-medium text-[#18181B]">{item.value}% {item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
