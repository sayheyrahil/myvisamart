"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { axiosInstance } from "@/utils/axios-instance";
import { handleAxiosError, handleAxiosSuccess } from "@/utils/common";
import { useRouter } from "next/navigation";
import { ENDPOINTS } from "@/utils/constants";

export default function Page() {
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const [form, setForm] = useState({ password: "", confirmPassword: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<{ password?: string; confirmPassword?: string }>({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const router = useRouter();
    const [forgetPasswordData, setForgetPasswordData] = useState<string | null>(null);
    const classAdd = "w-full border border-blue-300 rounded-lg py-4 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200";
    const errorClass = "border-red-500 focus:ring-red-200";

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            setForgetPasswordData(localStorage.getItem("forgetPasswordData"));
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setFieldErrors({ ...fieldErrors, [e.target.name]: undefined });
    };

    const handleOtpChange = (value: any, index: any) => {
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

    const handleSave = async () => {
        setError(null);
        setSuccess(null);
        setLoading(true);
        try {
            let payload: any = {};
            const parsedData = forgetPasswordData ? JSON.parse(forgetPasswordData) : {};
            // You may need to get the token from localStorage or previous API response
            const token = localStorage.getItem("resetPasswordToken");
            if (parsedData.phone) {
                payload = { phone: parsedData.phone };
            } else if (parsedData.email) {
                payload = { email: parsedData.email };
            }
            payload.password = form.password;
            payload.confirmPassword = form.confirmPassword;
            payload.token = token;

            await axiosInstance.post(ENDPOINTS.set_password, payload)
                .then((response) => {
                    //  handleAxiosSuccess(response, {});
                    localStorage.removeItem("forgetPasswordData");
                    localStorage.removeItem("resetPasswordToken");

                    // Optionally redirect to login or success page
                    router.push('/agent/create-profile');
                })
                .catch((err) => {
                    setError("Failed to set password.");
                    handleAxiosError(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        } catch (err: any) {
            setError("Failed to set password.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white">
            <div className="flex flex-col md:flex-row w-full h-auto md:h-screen shadow-xl rounded-lg overflow-hidden">

                {/* LEFT SIDE IMAGE */}
                <div className="w-full md:w-1/2 relative h-60 md:h-auto">
                    <img
                        src="/img/Frame427321840.png"
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
                                {/* Password */}
                                <div>
                                    <div className="relative">
                                        <input
                                            className={`${classAdd} pr-12 ${fieldErrors.password ? errorClass : ""}`}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password"
                                            name="password"
                                            value={form.password}
                                            onChange={handleChange}
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
                                    {fieldErrors.password && <div className="text-red-500 text-xs mt-1">{fieldErrors.password}</div>}
                                </div>
                                {/* Confirm Password */}
                                <div>
                                    <div className="relative">
                                        <input
                                            className={`${classAdd} pr-12 ${fieldErrors.confirmPassword ? errorClass : ""}`}
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Confirm Password"
                                            name="confirmPassword"
                                            value={form.confirmPassword}
                                            onChange={handleChange}
                                        />
                                        {showConfirmPassword ? (
                                            <FaEyeSlash
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                                                onClick={() => setShowConfirmPassword(false)}
                                            />
                                        ) : (
                                            <FaEye
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                                                onClick={() => setShowConfirmPassword(true)}
                                            />
                                        )}
                                    </div>
                                    {fieldErrors.confirmPassword && <div className="text-red-500 text-xs mt-1">{fieldErrors.confirmPassword}</div>}
                                </div>
                                {/* Helper Text */}
                                <span className="text-gray-400 text-sm mt-1 ml-1">
                                    Atleast 1 number or a special character
                                </span>
                            </div>
                         </div>
 
                        {/* Button */}
                        <button
                            className="mt-8 md:mt-10 w-full md:w-80 bg-brand text-white py-3 rounded-full text-lg hover:bg-blue-800 transition"
                            type="button"
                            onClick={handleSave}
                            disabled={loading}
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>

                        
                    </div>

                    <div className="w-16 h-16 md:w-28 md:h-28 absolute bottom-4 right-0 md:bottom-14">
                        <img
                            src="/img/sidebgBg.png"
                            alt="Signup Visual"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
