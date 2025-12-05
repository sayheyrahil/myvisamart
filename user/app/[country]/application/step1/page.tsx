'use client';
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import SignupMasterPage from "@/components/user/SignupMasterPage";
import ProceedButton from "@/components/user/ProceedButton";

export default function Page() {
    const handleProceed = () => {
        // Your proceed logic here
    };
    return (
        <SignupMasterPage>
            {/* Unique content for this step */}
            <div className="flex flex-col items-center md:items-start w-full">
                <div className="font-madefor font-normal text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-[40px] sm:leading-[52px] md:leading-[70px] lg:leading-[80px] text-[#85ABDB] mb-0 text-center md:text-left">
                    Let’s Start With Your <br />
                    <span className="text-[#0A509F]">Full Name</span>
                </div>
                <div className="mt-6 sm:mt-8 md:mt-10 flex items-center bg-white shadow-xl rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl">
                    <input
                        type="text"
                        placeholder="Enter Your Full Name"
                        className="flex-1 outline-none text-gray-700 text-base sm:text-lg md:text-xl bg-transparent"
                    />
                    <ProceedButton onClick={handleProceed} />

                </div>
            </div>
        </SignupMasterPage>
    );
}
