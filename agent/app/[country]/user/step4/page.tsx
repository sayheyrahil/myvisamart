'use client';
import React, { useState } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import SignupMasterPage from "@/components/user/SignupMasterPage";
import ProceedButton from "@/components/user/ProceedButton";

const radioBtnClass = (active: boolean) =>
    `flex items-center gap-2 px-4 py-2 rounded-full border transition text-base font-medium
   ${active
        ? "bg-[#0A509F] text-white border-[#0A509F] shadow"
        : "bg-white text-[#022538] border-[#E1EBF6] hover:border-[#0A509F]"}
  `;

export default function Page() {
    const [schengen, setSchengen] = useState<"yes" | "no">("yes");
    const [marital, setMarital] = useState<"single" | "married" | "divorced" | "widowed">("single");
    const [employment, setEmployment] = useState<"employed" | "self" | "unemployed" | "retired">("employed");

    function handleProceed(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <SignupMasterPage>
            <div className="flex flex-col items-center md:items-start w-full ">
                {/* User Card */}
                <div className="flex items-center bg-white rounded-full px-6 py-3 shadow mb-8">
                    <span className="w-10 h-10 rounded-full bg-[#E6F0FA] flex items-center justify-center mr-3 text-[#0A509F] font-bold text-lg">
                        AD
                    </span>
                    <span className="font-madefor font-medium text-[#022538] text-lg mr-2">
                        Anjum Desai(You)
                    </span>
                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#0A509F]">
                        <FiCheck className="text-white w-4 h-4" />
                    </span>
                </div>

                {/* Schengen Visa */}
                <div className="bg-white rounded-2xl shadow p-6 mb-5 w-full  ">
                    <div className="font-madefor font-medium text-[#022538] text-lg mb-4">
                        Had a Prior Schengen Visa ?
                    </div>
                    <div className="flex gap-6">
                        <button
                            type="button"
                            className={radioBtnClass(schengen === "yes")}
                            onClick={() => setSchengen("yes")}
                        >
                            <span className="flex items-center">
                                <span className="w-4 h-4 rounded-full border-2 border-white bg-white flex items-center justify-center mr-2">
                                    {schengen === "yes" && (
                                        <span className="w-2.5 h-2.5 bg-[#0A509F] rounded-full block" />
                                    )}
                                </span>
                                Yes
                            </span>
                        </button>
                        <button
                            type="button"
                            className={radioBtnClass(schengen === "no")}
                            onClick={() => setSchengen("no")}
                        >
                            <span className="flex items-center">
                                <span className="w-4 h-4 rounded-full border-2 border-white bg-white flex items-center justify-center mr-2">
                                    {schengen === "no" && (
                                        <span className="w-2.5 h-2.5 bg-[#0A509F] rounded-full block" />
                                    )}
                                </span>
                                No
                            </span>
                        </button>
                    </div>
                </div>

                {/* Marital Status */}
                <div className="bg-white rounded-2xl shadow p-6 mb-5 w-full max-w-xl">
                    <div className="font-madefor font-medium text-[#022538] text-lg mb-4">
                        What is your Marital Status?
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {["single", "married", "divorced", "widowed"].map((status) => (
                            <button
                                key={status}
                                type="button"
                                className={radioBtnClass(marital === status)}
                                onClick={() => setMarital(status as any)}
                            >
                                <span className="flex items-center">
                                    <span className="w-4 h-4 rounded-full border-2 border-white bg-white flex items-center justify-center mr-2">
                                        {marital === status && (
                                            <span className="w-2.5 h-2.5 bg-[#0A509F] rounded-full block" />
                                        )}
                                    </span>
                                    {status.charAt(0).toUpperCase() + status.slice(1)}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Employment Status */}
                <div className="bg-white rounded-2xl shadow p-6 mb-8 w-full  ">
                    <div className="font-madefor font-medium text-[#022538] text-lg mb-4">
                        What is your Employment Status?
                    </div>
                    <div className="flex flex-wrap gap-1">
                        <button
                            type="button"
                            className={radioBtnClass(employment === "employed")}
                            onClick={() => setEmployment("employed")}
                        >
                            <span className="flex items-center">
                                <span className="w-4 h-4 rounded-full border-2 border-white bg-white flex items-center justify-center mr-2">
                                    {employment === "employed" && (
                                        <span className="w-2.5 h-2.5 bg-[#0A509F] rounded-full block" />
                                    )}
                                </span>
                                Employed
                            </span>
                        </button>
                        <button
                            type="button"
                            className={radioBtnClass(employment === "self")}
                            onClick={() => setEmployment("self")}
                        >
                            <span className="flex items-center">
                                <span className="w-4 h-4 rounded-full border-2 border-white bg-white flex items-center justify-center mr-2">
                                    {employment === "self" && (
                                        <span className="w-2.5 h-2.5 bg-[#0A509F] rounded-full block" />
                                    )}
                                </span>
                                Self Employed
                            </span>
                        </button>
                        <button
                            type="button"
                            className={radioBtnClass(employment === "unemployed")}
                            onClick={() => setEmployment("unemployed")}
                        >
                            <span className="flex items-center">
                                <span className="w-4 h-4 rounded-full border-2 border-white bg-white flex items-center justify-center mr-2">
                                    {employment === "unemployed" && (
                                        <span className="w-2.5 h-2.5 bg-[#0A509F] rounded-full block" />
                                    )}
                                </span>
                                Unemployed
                            </span>
                        </button>
                        <button
                            type="button"
                            className={radioBtnClass(employment === "retired")}
                            onClick={() => setEmployment("retired")}
                        >
                            <span className="flex items-center">
                                <span className="w-4 h-4 rounded-full border-2 border-white bg-white flex items-center justify-center mr-2">
                                    {employment === "retired" && (
                                        <span className="w-2.5 h-2.5 bg-[#0A509F] rounded-full block" />
                                    )}
                                </span>
                                Retired
                            </span>
                        </button>
                    </div>
                </div>

                <ProceedButton onClick={handleProceed} />

            </div>
        </SignupMasterPage>
    );
}
