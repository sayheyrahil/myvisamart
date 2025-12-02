'use client';
import React, { useState } from "react";
import { FiArrowRight, FiCheck, FiPlus } from "react-icons/fi";
import SignupMasterPage from "@/components/user/SignupMasterPage";
import ProceedButton from "@/components/user/ProceedButton";

export default function Page() {
    const [selected, setSelected] = useState<"self" | "other">("self");
    const [otherName, setOtherName] = useState("");
    const [relation, setRelation] = useState("");

    function handleProceed(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <SignupMasterPage>
            <div className="flex flex-col items-center md:items-start w-full">
                {/* Title */}
                <div className="font-madefor font-normal text-[28px] sm:text-[32px] md:text-[40px] lg:text-[40px] leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[52px] text-[#85ABDB] mb-8 text-center md:text-left">
                    Who’s Sponsoring this <br />
                    <span className="text-[#022538] font-semibold">Trip to Switzerland</span>
                </div>
                {/* Options */}
                <div className="flex gap-4 mb-10 w-full max-w-xl justify-center md:justify-start">
                    {/* Self Option */}
                    <button
                        type="button"
                        onClick={() => setSelected("self")}
                        className={`flex items-center px-5 py-3 rounded-full border transition text-base sm:text-lg font-medium shadow
                            ${selected === "self"
                                ? "bg-[#f8fbff] border-[#0A509F] text-[#022538] shadow-lg"
                                : "bg-white border-[#E1EBF6] text-[#022538] hover:border-[#0A509F]"}
                        `}
                    >
                        <span className="w-8 h-8 rounded-full bg-[#E6F0FA] flex items-center justify-center mr-3 text-[#0A509F] font-bold text-base">
                            AD
                        </span>
                        Anjum Desai(You)
                        {selected === "self" && (
                            <span className="ml-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#0A509F]">
                                <FiCheck className="text-white w-4 h-4" />
                            </span>
                        )}
                    </button>
                    {/* Other Option */}
                    <button
                        type="button"
                        onClick={() => setSelected("other")}
                        className={`flex items-center px-5 py-3 rounded-full border transition text-base sm:text-lg font-medium shadow
                            ${selected === "other"
                                ? "bg-[#f8fbff] border-[#0A509F] text-[#022538] shadow-lg"
                                : "bg-white border-[#E1EBF6] text-[#022538] hover:border-[#0A509F]"}
                        `}
                    >
                        Someone Else
                        <span className="ml-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#E6F0FA]">
                            <FiPlus className="text-[#0A509F] w-4 h-4" />
                        </span>
                    </button>
                </div>
                {/* If "Someone Else" is selected, show input row */}
                {selected === "other" && (
                    <div className="flex items-center w-full  mb-10 gap-4 rounded-lg">
                        <div className="flex">

                            <input
                                type="text"
                                value={otherName}
                                onChange={e => setOtherName(e.target.value)}
                                placeholder="Enter Name"
                                className="flex-1 border border-[#BFD1EA]  px-6 py-4 text-lg outline-none bg-white rounded-l-full"
                            />
                            <select
                                value={relation}
                                onChange={e => setRelation(e.target.value)}
                                className="border border-[#BFD1EA] bg-[#F8FBFF]  rounded-r-full rounded-l-none text-[#022538] px-3 py-4 text-lg outline-none"
                            >
                                <option value="">Relation</option>
                                <option value="father">Father</option>
                                <option value="mother">Mother</option>
                                <option value="spouse">Spouse</option>
                                <option value="child">Child</option>
                                <option value="friend">Friend</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="">
                            <button
                                type="button"
                                className="bg-[#0A509F] m-2 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl border-2 border-[#BFD1EA] -ml-2"
                                tabIndex={-1}
                            >
                                <FiPlus />
                            </button>
                        </div>
                    </div>
                )}
                           <ProceedButton onClick={handleProceed} />
           
            </div>
        </SignupMasterPage>
    );
}
