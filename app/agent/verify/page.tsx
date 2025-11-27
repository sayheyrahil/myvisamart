"use client";
import React, { useState } from "react";
import { axiosInstance } from "@/utils/axios-instance";
import { handleAxiosError, handleAxiosSuccess } from "@/utils/common";
  
import { useRouter } from "next/navigation"

export default function Page() {
     const router = useRouter()

    const [identifier, setIdentifier] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [fieldError, setFieldError] = useState<string | null>(null);

    const classAdd = "w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#2456A6] text-base";
    const errorClass = "border-red-500 focus:border-red-500";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIdentifier(e.target.value);
        setFieldError(null);
        setError(null);
        setSuccess(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        // Required validation
        if (!identifier.trim()) {
            setFieldError("Email or Phone Number is required.");
            return;
        }

        setLoading(true);

        await axiosInstance.post("/verify", { identifier })
            .then((response: any) => {
                setSuccess("OTP sent successfully.");
                const userData = response?.data?.data;
                localStorage.setItem("forgetPasswordData", JSON.stringify(userData));
                handleAxiosSuccess(response, { identifier });
            })
            .catch((err: any) => {
                setError("Failed to send OTP.");
                handleAxiosError(err);
            })
            .finally(() => {
                setLoading(false);
                router.push('/agent/forget-password');
            });
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white">
            <div className="flex flex-col md:flex-row w-full shadow-none md:shadow-xl rounded-none md:rounded-lg overflow-hidden">
                {/* LEFT SIDE IMAGE */}
                <div className="hidden md:block md:w-1/2 relative">
                    <img
                        src="/Frame427321840.png"
                        alt="Signup Visual"
                        className="w-full h-screen object-cover"
                    />
                    <h1 className="absolute top-10 left-10 text-4xl font-bold text-white drop-shadow-lg">
                        Welcome to Visamart
                    </h1>
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="w-full md:w-1/2 flex flex-col px-4 sm:px-8 md:px-16 py-6 md:py-12 relative justify-center items-center">
                    <div className="w-full max-w-xl mx-auto">
                        <h2 className="text-3xl font-semibold text-[#2456A6] mb-2">
                            Verify
                        </h2>
                        <p className="text-gray-400 mb-8 text-base">
                            Verification email or phone number
                        </p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                            <input
                                type="text"
                                placeholder="Email or Phone Number"
                                className={`${classAdd} ${fieldError ? errorClass : ""} mb-2`}
                                value={identifier}
                                onChange={handleChange}
                            />
                            {fieldError && <div className="text-red-500 text-xs mb-2">{fieldError}</div>}
                            {error && <div className="text-red-500 text-xs mb-2">{error}</div>}
                            {success && <div className="text-green-600 text-xs mb-2">{success}</div>}
                            <button
                                className="w-full bg-[#2456A6] hover:bg-[#1d417a] text-white py-4 rounded-full font-medium text-lg"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send OTP"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
