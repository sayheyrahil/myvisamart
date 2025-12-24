import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";

export default function OurEffortsYourExperience() {
  return (
       <div className="w-full bg-[#F7FAFC] py-16 flex flex-col items-center">
             <div className="  w-full px-4 flex flex-col items-center">
               <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-black text-center">
                 Our Efforts, Your Experience
               </h2>
               <p className="text-gray-500 text-base md:text-lg mb-10 text-center  ">
                 See how our customer support works, from support ticket calls to
                 monthly spending and resolution times.
               </p>
               {/* Top 3 charts */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
                 {/* Chart 1 */}
                 <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                   <span className="font-medium mb-2 text-sm text-[#18181B]">
                     Agent Handled Calls
                   </span>
                   <ResponsiveContainer width="100%" height={140}>
                     <LineChart
                       data={[
                         { month: "Jan", value: 120 },
                         { month: "Feb", value: 140 },
                         { month: "Mar", value: 160 },
                         { month: "Apr", value: 180 },
                         { month: "May", value: 200 },
                         { month: "Jun", value: 210 },
                       ]}
                     >
                       <Line
                         type="monotone"
                         dataKey="value"
                         stroke="#6366F1"
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
                     Resolution Rate per Hotline
                   </span>
                   <ResponsiveContainer width="100%" height={140}>
                     <LineChart
                       data={[
                         { month: "Jan", value: 0.62 },
                         { month: "Feb", value: 0.68 },
                         { month: "Mar", value: 0.71 },
                         { month: "Apr", value: 0.74 },
                         { month: "May", value: 0.77 },
                         { month: "Jun", value: 0.8 },
                       ]}
                     >
                       <Line
                         type="monotone"
                         dataKey="value"
                         stroke="#6366F1"
                         strokeWidth={2}
                         dot={false}
                       />
                       <XAxis dataKey="month" hide />
                       <YAxis hide />
                     </LineChart>
                   </ResponsiveContainer>
                 </div>
                 {/* Chart 3 */}
                 <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                   <span className="font-medium mb-2 text-sm text-[#18181B]">
                     Customer Support Spending
                   </span>
                   <ResponsiveContainer width="100%" height={140}>
                     <LineChart
                       data={[
                         { month: "Jan", value: 1000 },
                         { month: "Feb", value: 1200 },
                         { month: "Mar", value: 1400 },
                         { month: "Apr", value: 1600 },
                         { month: "May", value: 1800 },
                         { month: "Jun", value: 2000 },
                       ]}
                     >
                       <Line
                         type="monotone"
                         dataKey="value"
                         stroke="#6366F1"
                         strokeWidth={2}
                         dot={false}
                       />
                       <XAxis dataKey="month" hide />
                       <YAxis hide />
                     </LineChart>
                   </ResponsiveContainer>
                 </div>
               </div>
               {/* Stats */}
               <div className="flex gap-8 mb-8">
                 <div className="flex flex-col items-center">
                   <span className="text-3xl font-bold text-[#6366F1]">35</span>
                   <span className="text-gray-500 text-sm">
                     Total Customer Support Employees
                   </span>
                 </div>
                 <div className="flex flex-col items-center">
                   <span className="text-3xl font-bold text-[#6366F1]">4</span>
                   <span className="text-gray-500 text-sm">
                     Night Shift Employees
                   </span>
                 </div>
                 <div className="flex flex-col items-center">
                   <span className="text-3xl font-bold text-[#6366F1]">11</span>
                   <span className="text-gray-500 text-sm">Offices Worldwide</span>
                 </div>
               </div>
               {/* Bottom 2 charts */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
                 {/* Chart 4 */}
                 <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                   <span className="font-medium mb-2 text-sm text-[#18181B]">
                     Email Response Time
                   </span>
                   <ResponsiveContainer width="100%" height={140}>
                     <LineChart
                       data={[
                         { month: "Jan", value: 2.1 },
                         { month: "Feb", value: 2.0 },
                         { month: "Mar", value: 1.9 },
                         { month: "Apr", value: 1.8 },
                         { month: "May", value: 1.7 },
                         { month: "Jun", value: 1.6 },
                       ]}
                     >
                       <Line
                         type="monotone"
                         dataKey="value"
                         stroke="#6366F1"
                         strokeWidth={2}
                         dot={false}
                       />
                       <XAxis dataKey="month" hide />
                       <YAxis hide />
                     </LineChart>
                   </ResponsiveContainer>
                 </div>
                 {/* Chart 5 */}
                 <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                   <span className="font-medium mb-2 text-sm text-[#18181B]">
                     Phone Response Time
                   </span>
                   <ResponsiveContainer width="100%" height={140}>
                     <LineChart
                       data={[
                         { month: "Jan", value: 1.5 },
                         { month: "Feb", value: 1.4 },
                         { month: "Mar", value: 1.3 },
                         { month: "Apr", value: 1.2 },
                         { month: "May", value: 1.1 },
                         { month: "Jun", value: 1.0 },
                       ]}
                     >
                       <Line
                         type="monotone"
                         dataKey="value"
                         stroke="#6366F1"
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
