"use client";
import React, { useState } from "react";
import { axiosInstance } from "@/utils/axios-instance";
import { handleAxiosError, handleAxiosSuccess } from "@/utils/common";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ENDPOINTS } from "@/utils/constants";

export default function Page() {
    const router = useRouter();
    const [form, setForm] = useState({
        fullName: "",
        mobile: "",
        mobileOtp: "",
        email: "",
        emailOtp: "",
        gender: "",
        agree: false,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [mobileOtpSent, setMobileOtpSent] = useState(false);
    const [emailOtpSent, setEmailOtpSent] = useState(false);
    const [mobileOtp, setMobileOtp] = useState(["", "", "", "", "", ""]);
    const [mobileOtpVerified, setMobileOtpVerified] = useState(false);

    const classAdd = "w-full border border-brand rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand outline-none text-base";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        let checked = false;
        if (type === "checkbox" && "checked" in e.target) {
            checked = (e.target as HTMLInputElement).checked;
        }
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSendMobileOtp = async () => {
        // Dummy OTP send logic
        setMobileOtpSent(true);
    };

    const handleSendEmailOtp = async () => {
        // Dummy OTP send logic
        setEmailOtpSent(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        // Dummy submit logic
        setTimeout(() => {
            setLoading(false);
            // handleAxiosSuccess({}, form);
        }, 1000);
    };

    const handleMobileOtpChange = (value: string, idx: number) => {
        if (!/^\d?$/.test(value)) return;
        const nextOtp = [...mobileOtp];
        nextOtp[idx] = value;
        setMobileOtp(nextOtp);

        // Auto-focus next input
        if (value && idx < 5) {
            const nextInput = document.getElementById(`mobile-otp-${idx + 1}`);
            if (nextInput) (nextInput as HTMLInputElement).focus();
        }

        // Check if OTP is complete (all 6 digits)
        if (nextOtp.every((d) => d.length === 1)) {
            setMobileOtpVerified(true);
        } else {
            setMobileOtpVerified(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white">
            <div className="flex flex-col md:flex-row w-full shadow-none md:shadow-xl rounded-none md:rounded-lg overflow-hidden">
                {/* LEFT SIDE IMAGE */}
                <div className="hidden md:block md:w-1/2 relative">
                    <img
                        src="/extra/Frame427321840.png"
                        alt="Signup Visual"
                        className="w-full h-screen object-cover"
                    />
                    <h1 className="absolute top-10 left-10 text-4xl font-bold text-white drop-shadow-lg">
                        Welcome to Visamart
                    </h1>
                </div>
                {/* RIGHT SIDE FORM */}
                <div className="w-full md:w-1/2 flex flex-col px-4 sm:px-8 md:px-16 py-6 md:py-12 relative justify-center items-center">
                    <div className="w-full max-w-xs sm:max-w-sm mx-auto">
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <h2 className="text-2xl font-semibold text-brand mb-2 mt-8">Sign Up</h2>
                            {/* Full Name */}
                            <input
                                className={classAdd}
                                type="text"
                                placeholder="Full Name"
                                name="fullName"
                                value={form.fullName}
                                onChange={handleChange}
                                required
                            />
                            {/* Mobile Number with Country Code */}
                            <div className="flex flex-col  "> 

                                <div className="flex items-center gap-2">
                                    <div className="flex items-center border border-brand rounded-lg px-2 py-2 bg-gray-50">
                                        <img src="https://flagcdn.com/16x12/bd.png" alt="BD" className="w-5 h-4 mr-1" />
                                        <span className="text-gray-700 text-sm">+880</span>
                                    </div>
                                    <input
                                        className={classAdd + " flex-1"}
                                        type="tel"
                                        placeholder="Your mobile number"
                                        name="mobile"
                                        value={form.mobile}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                {form.mobile && form.mobile.replace(/\D/g, '').length >= 10 && (
                                    <button
                                        type="button"
                                            className="m-2 text-brand text-sm font-medium flex items-center justify-end"
                                        onClick={handleSendMobileOtp}
                                        disabled={mobileOtpSent}
                                    >
                                        Send Code
                                    </button>
                                )}
                            </div>
                            {/* Mobile OTP */}
                            {form.mobile && form.mobile.replace(/\D/g, '').length >= 10 && mobileOtpSent && (
                                <div className="flex gap-2 mt-2">
                                    {[0, 1, 2, 3, 4, 5].map((i) => (
                                        <input
                                            key={i}
                                            id={`mobile-otp-${i}`}
                                            type="text"
                                            maxLength={1}
                                            className="w-14 h-12 border border-brand rounded-lg text-center text-lg"
                                            value={mobileOtp[i]}
                                            onChange={e => handleMobileOtpChange(e.target.value, i)}
                                            disabled={mobileOtpVerified}
                                        />
                                    ))}
                                </div>
                            )}
                            {/* Email and Gender: show only if mobile OTP is verified */}
                            {mobileOtpVerified && (
                                <>
                                    {/* Email */}
                                    <div className="flex flex-col  gap-2">
                                        <input
                                            className={classAdd + " flex-1"}
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="ml-2 text-brand text-sm font-medium flex items-center justify-end"
                                            onClick={handleSendEmailOtp}
                                            disabled={emailOtpSent}
                                        >
                                            Send Code
                                        </button>
                                    </div>
                                    {/* Email OTP */}
                                    {form.email && /\S+@\S+\.\S+/.test(form.email) && emailOtpSent && (
                                        <div className="flex gap-2 mt-2">
                                            {[0, 1, 2, 3, 4, 5].map((i) => (
                                                <input
                                                    key={i}
                                                    type="text"
                                                    maxLength={1}
                                                    className="w-14 h-12 border border-brand rounded-lg text-center text-lg"
                                                // ...handle OTP input logic as needed...
                                                />
                                            ))}
                                        </div>
                                    )}
                                    {/* Gender: show only if email is verified */}
                                    {form.email && /\S+@\S+\.\S+/.test(form.email) && emailOtpSent && form.emailOtp && form.emailOtp.length === 6 && (
                                        <select
                                            className={classAdd}
                                            name="gender"
                                            value={form.gender}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    )}
                                </>
                            )}
                            {/* Terms and Policy */}
                          
                            {/* Error Message */}
                            {error && (
                                <div className="text-red-500 text-xs">{error}</div>
                            )}
                            {/* Sign Up Button */}
                            <button
                                className="w-full bg-brand hover:bg-[#1d417a] text-white py-3 rounded-full font-medium transition text-base mt-6"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Next"}
                            </button>
                        </form>
                       
                    </div>
                    {/* Responsive image: static and centered on mobile, absolute on md+ */}
                    <div className="w-16 h-16 mx-auto mt-6 md:w-28 md:h-28 md:absolute md:bottom-14 md:right-0 md:mt-0 md:mx-0">
                        <img
                            src="/extra/sidebgBg.png"
                            alt="Signup Visual"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
