"use client";
import React, { useState } from "react";
import YesNoToggle from "@/components/user/YesNoToggle";
import ProceedButton from "@/components/user/ProceedButton";
import { useRouter } from "next/navigation";

export default function Page() {
  const [selected, setSelected] = useState<"yes" | "no" | null>("yes");

  const router = useRouter();
  const handleProceed = () => {
    router.push(`/application/step3`);
  };

  return (
    <div className="flex flex-col items-center md:items-start w-full">
      <div className="font-madefor font-normal text-[32px] sm:text-[40px] md:text-[48px] lg:text-[48px] leading-[40px] sm:leading-[52px] md:leading-[60px] lg:leading-[60px] text-[#85ABDB] mb-6 text-center md:text-left">
        Traveling with <br />
        <span className="text-[#022538] font-semibold">others?</span>
      </div>

      <YesNoToggle selected={selected} setSelected={setSelected} />
      <ProceedButton onClick={handleProceed} />
    </div>
  );
}
