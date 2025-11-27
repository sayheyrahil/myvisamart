"use client";
import React, { useState, useRef } from "react";
import {  useRouter } from "next/navigation";
import { axiosInstance } from "@/utils/axios-instance";
import { handleAxiosError } from "@/utils/common";
import Link from "next/dist/client/link";

export default function Page() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const router = useRouter();

    const handleChange = (value: string, index: number) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Auto-focus next box
            if (value && index < otp.length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
            // If deleting, focus previous
            if (!value && index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
        if (pasted.length === otp.length) {
            setOtp(pasted.split(""));
            // Focus last input
            inputRefs.current[otp.length - 1]?.focus();
        }
    };

    const [userData, setUserData] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            setUserData(localStorage.getItem("userData"));
        }
    }, []);

    const handleContinue = async () => {
        setError(null);
        setSuccess(null);
        setLoading(true);
        try {
            let payload: any = {
                otp: otp.join(""),
                email: userData ? JSON.parse(userData).email : undefined,
                phone: userData ? JSON.parse(userData).phone : undefined
            };

            await axiosInstance.post("/forget-password-otp-verify", payload)
                .then((response) => {
                    localStorage.setItem("resetPasswordToken", response.data.data.token);
                })
                .catch((err) => {
                    setError("Failed to send OTP.");
                    handleAxiosError(err);
                })
                .finally(() => {
                    setLoading(false);
                    router.push('/agent/set-password');
                });

        } catch (err: any) {
            setError("Failed to send OTP.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white">
            <div className="flex flex-col md:flex-row w-full h-auto md:h-screen shadow-xl rounded-lg overflow-hidden">

                {/* LEFT SIDE IMAGE */}
                <div className="w-full md:w-1/2 relative h-60 md:h-auto">
                    <img
                        src="/Frame427321840.png"
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
                                    // ref={el => inputRefs.current[index] = el}
                                    maxLength={1}
                                    value={value}
                                    onChange={(e) => handleChange(e.target.value, index)}
                                    onPaste={index === 0 ? handlePaste : undefined}
                                    type="tel"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    className="w-10 h-10 md:w-14 md:h-14 border border-blue-400 rounded-md text-center text-2xl focus:outline-none focus:border-blue-600"
                                />
                            ))}
                        </div>

                        {/* Error/Success Message */}
                        {error && (
                            <div className="text-red-500 text-sm mt-4">{error}</div>
                        )}
                        {success && (
                            <div className="text-green-600 text-sm mt-4">{success}</div>
                        )}

                        {/* Button */}
                        <button
                            className="mt-8 md:mt-10 w-full md:w-80 bg-brand text-white py-3 rounded-full text-lg hover:bg-blue-800 transition"
                            onClick={handleContinue}
                            disabled={loading}
                        >
                            {loading ? "Verifying..." : "Verify OTP"}
                        </button>

                        {/* Footer */}
                        <p className="mt-6 text-gray-500 text-center w-full">
                            Already have an account?{" "}
                            <Link href='/agent/signin' className="text-brand cursor-pointer hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </div>

                    <div className="w-16 h-16 md:w-28 md:h-28 absolute bottom-4 right-0 md:bottom-14">
                        <img
                            src="/sidebgBg.png"
                            alt="Signup Visual"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
