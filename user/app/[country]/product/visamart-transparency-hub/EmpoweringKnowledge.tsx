import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  { month: "Jan", Blogs: 20, Youtube: 30, Instagram: 10 },
  { month: "Feb", Blogs: 22, Youtube: 32, Instagram: 12 },
  { month: "Mar", Blogs: 23, Youtube: 33, Instagram: 13 },
  { month: "Apr", Blogs: 24, Youtube: 34, Instagram: 14 },
  { month: "May", Blogs: 25, Youtube: 36, Instagram: 15 },
  { month: "Jun", Blogs: 26, Youtube: 37, Instagram: 16 },
  { month: "Jul", Blogs: 27, Youtube: 38, Instagram: 17 },
  { month: "Aug", Blogs: 28, Youtube: 39, Instagram: 18 },
  { month: "Sep", Blogs: 29, Youtube: 40, Instagram: 19 },
  { month: "Oct", Blogs: 30, Youtube: 41, Instagram: 20 },
  { month: "Nov", Blogs: 32, Youtube: 43, Instagram: 22 },
  { month: "Dec", Blogs: 34, Youtube: 45, Instagram: 24 },
];

export default function EmpoweringKnowledge() {
  return (
    <div className="bg-[#F7FAFC] py-16 flex flex-col items-center px-4">
      <h2 className="text-3xl font-bold text-black mb-4 text-center">
        Empowering You with<br />Knowledge
      </h2>
      <p className="text-gray-500 text-base mb-8 text-center ">
        From comprehensive guides to FAQs and video tutorials, here’s everything we’ve put together to ensure you have all the information you need for a smooth journey
      </p>
      <div className="w-full   bg-white rounded-2xl shadow p-4">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend
              verticalAlign="top"
              align="center"
              iconType="circle"
              wrapperStyle={{ paddingBottom: 16 }}
            />
            <Line type="monotone" dataKey="Blogs" stroke="#F43F5E" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="Youtube" stroke="#F59E42" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="Instagram" stroke="#FACC15" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
        <div className="text-center text-sm text-gray-500 mt-2">
          International Content Posted Weekly
        </div>
      </div>
    </div>
  );
}
