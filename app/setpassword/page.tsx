"use client";
import React, { useState } from "react";

export default function Page() {

    const [otp, setOtp] = useState(["", "", "", "", ""]);

    const handleChange = (value: any, index: any) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Auto-focus next box
            if (value && index < 4) {
                // @ts-ignore
                document.getElementById(`otp-${index + 1}`).focus();
            }
        }
    };
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white">
            <div className="flex flex-col md:flex-row w-full h-auto md:h-screen shadow-xl rounded-lg overflow-hidden">

                {/* LEFT SIDE IMAGE */}
                <div className="w-full md:w-1/2 relative h-60 md:h-auto">
                    <img
                        src="./Frame427321840.png"
                        alt="Signup Visual"
                        className="w-full h-full object-cover"
                    />
                    <h1 className="absolute top-4 left-4 md:top-10 md:left-10 text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                        Welcome to Visamart
                    </h1>
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="w-full md:w-1/2 flex flex-col px-4 md:px-16 py-8 md:py-12 relative bg-white">

                    <div className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen bg-white">
                        <div className="flex flex-col items-start w-full max-w-md">

                            <h1
                                className="text-brand font-medium text-2xl md:text-[34px] leading-tight md:leading-[41px] tracking-[0px] font-inter"
                            >
                                Set Password
                            </h1>
                            {/* Password Fields */}
                            <div className="w-full mt-8 flex flex-col gap-6">
                                {/* Password Input */}
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="Enter Your Password"
                                        className="w-full border border-blue-300 rounded-lg py-4 px-4 pr-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                                        {/* Eye icon (SVG) */}
                                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
                                            <circle cx="12" cy="12" r="3"/>
                                        </svg>
                                    </span>
                                </div>
                                {/* Confirm Password Input */}
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        className="w-full border border-blue-300 rounded-lg py-4 px-4 pr-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                                        {/* Eye icon (SVG) */}
                                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/>
                                            <circle cx="12" cy="12" r="3"/>
                                        </svg>
                                    </span>
                                </div>
                                {/* Helper Text */}
                                <span className="text-gray-400 text-sm mt-1 ml-1">
                                    Atleast 1 number or a special character
                                </span>
                            </div>
                         </div>
 
                        {/* Button */}
                        <button className="mt-8 md:mt-10 w-full md:w-80 bg-brand text-white py-3 rounded-full text-lg hover:bg-blue-800 transition">
                        Register
                        </button>

                        
                    </div>

                    <div className="w-16 h-16 md:w-28 md:h-28 absolute bottom-4 right-0 md:bottom-14">
                        <img
                            src="./sidebgBg.png"
                            alt="Signup Visual"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
