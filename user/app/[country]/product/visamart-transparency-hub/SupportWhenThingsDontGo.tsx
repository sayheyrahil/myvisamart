import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";

export default function SupportWhenThingsDontGo() {
  return (
    <div className="w-full bg-[#F7FAFC] py-16 flex flex-col items-center">
      <div className="  w-full px-4 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-black text-center">
          Support When Things Don’t Go as Planned
        </h2>
        <p className="text-gray-500 text-base md:text-lg mb-10 text-center  ">
          When connections are needed, we’re here to help. We track support
          requests, reimbursement history, and breakdowns of cases we’ve
          resolved with the metrics and insights below.
        </p>
        {/* Top 2 charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
          {/* Chart 1 */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <span className="font-medium mb-2 text-sm text-[#18181B]">
              Visa Cancellation Counts
            </span>
            <ResponsiveContainer width="100%" height={140}>
              <LineChart
                data={[
                  { month: "Jan", value: 200 },
                  { month: "Feb", value: 220 },
                  { month: "Mar", value: 240 },
                  { month: "Apr", value: 260 },
                  { month: "May", value: 280 },
                  { month: "Jun", value: 300 },
                ]}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#F43F5E"
                  strokeWidth={2}
                  dot={false}
                />
                <XAxis dataKey="month" hide />
                <YAxis hide />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Chart 2 */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <span className="font-medium mb-2 text-sm text-[#18181B]">
              Payment Refund Rate
            </span>
            <ResponsiveContainer width="100%" height={140}>
              <LineChart
                data={[
                  { month: "Jan", value: 0.85 },
                  { month: "Feb", value: 0.87 },
                  { month: "Mar", value: 0.89 },
                  { month: "Apr", value: 0.91 },
                  { month: "May", value: 0.93 },
                  { month: "Jun", value: 0.95 },
                ]}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#F43F5E"
                  strokeWidth={2}
                  dot={false}
                />
                <XAxis dataKey="month" hide />
                <YAxis hide />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Bottom 2 charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Chart 3 */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <span className="font-medium mb-2 text-sm text-[#18181B]">
              High Risk Reimbursement Payouts (cases due to User Data)
            </span>
            <ResponsiveContainer width="100%" height={140}>
              <LineChart
                data={[
                  { month: "Jan", value: 10 },
                  { month: "Feb", value: 12 },
                  { month: "Mar", value: 14 },
                  { month: "Apr", value: 13 },
                  { month: "May", value: 15 },
                  { month: "Jun", value: 16 },
                ]}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#F43F5E"
                  strokeWidth={2}
                  dot={false}
                />
                <XAxis dataKey="month" hide />
                <YAxis hide />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Chart 4 */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <span className="font-medium mb-2 text-sm text-[#18181B]">
              Weekly Email Escalations
            </span>
            <ResponsiveContainer width="100%" height={140}>
              <LineChart
                data={[
                  { month: "Jan", value: 30 },
                  { month: "Feb", value: 32 },
                  { month: "Mar", value: 31 },
                  { month: "Apr", value: 33 },
                  { month: "May", value: 35 },
                  { month: "Jun", value: 36 },
                ]}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#F43F5E"
                  strokeWidth={2}
                  dot={false}
                />
                <XAxis dataKey="month" hide />
                <YAxis hide />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
