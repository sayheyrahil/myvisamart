
"use client";
import React from "react";
import SectionHeading from "@/components/tools/SectionHeading";
import { WEB_URL } from "@/utils/constants";

type data = {
  icon?: string;
  title?: string;
  description?: string;
};

type Props = {
  why: data[];
};

export default function WhySection({ why }: Props) {
  return (
    <div className="flex-1 flex flex-col gap-6 mt-5">
      <SectionHeading>Why Choose Us</SectionHeading>
      <div className="flex flex-row gap-8 items-start bg-[#F4F8FB] rounded-2xl">
        <div className="flex-1 flex flex-col gap-6">
          {Array.isArray(why) && why.length > 0 ? (
            why.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow flex gap-5">
                <div className="flex flex-col">
                  {item.icon && (
                    <img
                      src={WEB_URL + item.icon}
                      alt={item.title || `item ${idx + 1}`}
                      className="w-12 h-12 object-contain mb-3"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-[#1A355A] mb-1">{item.title || `item ${idx + 1}`}</div>
                  <div className="text-gray-500 text-sm">{item.description || ""}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-xl p-5 shadow flex flex-col">
              <div className="font-semibold text-[#1A355A] mb-1">No   available.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
