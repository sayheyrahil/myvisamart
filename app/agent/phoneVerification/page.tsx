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
                                Phone verification
                            </h1>
                            <p className="text-gray-400 mt-2">Enter your OTP code</p>
                        </div>

                        {/* OTP Boxes */}
                        <div className="flex gap-2 md:gap-4 mt-8 md:mt-10">
                            {otp.map((value, index) => (
                                <input
                                    key={index}
                                    id={`otp-${index}`}
                                    maxLength={1}
                                    value={value}
                                    onChange={(e) => handleChange(e.target.value, index)}
                                    className="w-10 h-10 md:w-14 md:h-14 border border-blue-400 rounded-md text-center text-2xl focus:outline-none focus:border-blue-600"
                                />
                            ))}
                        </div>

                        {/* Button */}
                        <button className="mt-8 md:mt-10 w-full md:w-80 bg-brand text-white py-3 rounded-full text-lg hover:bg-blue-800 transition">
                            Sign Up
                        </button>

                        {/* Footer */}
                        <p className="mt-6 text-gray-500 text-center w-full">
                            Already have an account?{" "}
                            <span className="text-blue-600 cursor-pointer hover:underline">
                                Sign in
                            </span>
                        </p>
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
