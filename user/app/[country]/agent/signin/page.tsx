"use client";
import SocialLoginButtons from "@/components/SocialLoginButtons";
import React, { useState } from "react";
import { axiosInstance } from "@/utils/axios-instance";
import { handleAxiosError, handleAxiosSuccess } from "@/utils/common";
 import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { ENDPOINTS } from "@/utils/constants";

export default function Page() {
     const router = useRouter();

    const [form, setForm] = useState({
        identifier: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    const classAdd = "w-full border border-blue-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-200 outline-none text-base";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        await axiosInstance.post(ENDPOINTS.login, {
            email: form.identifier,
            password: form.password,
        })
            .then((response: any) => {
                // Store user data in localStorage
                if (response?.data?.data) {
                    localStorage.setItem("user", JSON.stringify(response.data.data));
                    localStorage.setItem("token", response.data.data.access_token);
                }
                handleAxiosSuccess(response, form);
            })
            .catch((error: any) => {
                handleAxiosError(error);
            })
            .finally(() => {
                setLoading(false);
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
                    <div className="w-full max-w-xs sm:max-w-sm mx-auto">
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <h2 className="text-2xl font-semibold text-brand mb-2 mt-8">Login</h2>
                            {/* Email or Phone */}
                            <input
                                className={classAdd}
                                type="text"
                                placeholder="Email or Phone Number"
                                name="identifier"
                                value={form.identifier}
                                onChange={handleChange}
                                required
                            />
                            {/* Password */}
                            <div className="relative">
                                <input
                                    className={classAdd + " pr-12"}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                />
                                {showPassword ? (
                                    <FaEyeSlash
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(false)}
                                    />
                                ) : (
                                    <FaEye
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(true)}
                                    />
                                )}
                            </div>
                            <div className="relative">
                                <Link
                                    href="/agent/verify"
                                    className="absolute right-0 -bottom-6 text-xs text-red-500"
                                >
                                    Forget Password?
                                </Link>
                            </div>
                            {/* Error Message */}
                            {error && (
                                <div className="text-red-500 text-xs">{error}</div>
                            )}
                            {/* Login Button */}
                            <button
                                className="w-full bg-brand hover:bg-[#1d417a] text-white py-3 rounded-full font-medium transition text-base mt-6"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </form>
                        {/* OR Divider */}
                        <div className="flex items-center my-8 gap-3">
                            <div className="flex-1 h-px bg-gray-200" />
                            <span className="text-gray-400 text-base">Or</span>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>
                        {/* SOCIAL LOGIN */}
                        <SocialLoginButtons />
                        {/* Already have account */}
                        <p className="mt-4 text-center text-gray-600 text-base">
                            Already have an account?{" "}
                            <Link href="/agent/signup" className="text-brand font-medium">Sign up</Link>
                        </p>
                    </div>
                    {/* Responsive image: static and centered on mobile, absolute on md+ */}
                    <div className="w-16 h-16 mx-auto mt-6 md:w-28 md:h-28 md:absolute md:bottom-14 md:right-0 md:mt-0 md:mx-0">
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
