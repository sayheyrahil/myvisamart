"use client";
import SocialLoginButtons from "@/components/SocialLoginButtons";
import React, { useState } from "react";
import { axiosInstance } from "@/utils/axios-instance"
import { handleAxiosError, handleAxiosSuccess } from "@/utils/common"
import { useRouter } from "next/navigation"
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Link from "next/link";
import { ENDPOINTS } from "@/utils/constants";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Page() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
    // const [showPassword, setShowPassword] = useState(false);
    // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter()

    const classAdd = `w-full border border-[#578BCC] rounded-lg px-4 py-2 sm:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base`;
    // Handle input changes
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | string | null,
        name?: string
    ) => {
        if (typeof e === "string" && name === "phone") {
            setForm((prev) => ({
                ...prev,
                phone: e,
            }));
        } else if (e && typeof e === "object" && "target" in e) {
            const target = e.target as HTMLInputElement | HTMLSelectElement;
            const { name, value, type } = target;
            setForm((prev) => ({
                ...prev,
                [name]: type === "checkbox" ? (target as HTMLInputElement).checked : value,
            }));
        }
    };

    // Handle form submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        const errors: { [key: string]: string } = {};

        if (!form.name.trim()) errors.name = "Name is required.";
        if (!form.email.trim()) errors.email = "Email is required.";
        if (!form.phone || form.phone.trim().length < 8) errors.phone = "Valid phone number is required.";
        if (!form.gender) errors.gender = "Gender is required.";
        if (!form.terms) errors.terms = "You must agree to the Terms of service and Privacy policy.";

        setFieldErrors(errors);

        if (Object.keys(errors).length > 0) {
            setError("Please fix the errors above.");
            return;
        }

        setLoading(true);

        try {
            const response = await axiosInstance.post(ENDPOINTS.signup, {
                name: form.name,
                email: form.email,
                phone: form.phone,
                gender: form.gender,
            });
            const data = response?.data?.data;
            localStorage.setItem("userData", JSON.stringify(data.user));

            router.push(`/agent/phone-verification?token=${encodeURIComponent(data.token)}&phone=${encodeURIComponent(form.phone)}`);

        } catch (error: any) {
            handleAxiosError(error);
            setError(error?.response?.data?.message || "Signup failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Helper for error border
    const errorClass = "border-red-500 focus:ring-red-500";

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white">
            <div className="flex flex-col md:flex-row w-full  shadow-none md:shadow-xl rounded-none md:rounded-lg overflow-hidden">
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
                <div className="w-full md:w-1/2 flex flex-col px-4 sm:px-8 md:px-20 py-6 md:py-12 relative max-w-3xl mx-auto ">
                    <div className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Sign Up</div>
                    <div className="w-full max-w-4xl mx-auto">
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            {/* Name */}
                            <div>
                                <input
                                    className={`${classAdd} ${fieldErrors.name ? errorClass : ""}`}
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                                {fieldErrors.name && <div className="text-red-500 text-xs mt-1">{fieldErrors.name}</div>}
                            </div>
                            {/* Email */}
                            <div>
                                <input
                                    className={`${classAdd} ${fieldErrors.email ? errorClass : ""}`}
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                                {fieldErrors.email && <div className="text-red-500 text-xs mt-1">{fieldErrors.email}</div>}
                            </div>
                            {/* PHONE NUMBER WITH COUNTRY PICKER AND SEARCH */}
                            <div>
                                <div className={`${classAdd} ${fieldErrors.phone ? errorClass : ""} p-0`}>
                                    <PhoneInput
                                        international
                                        defaultCountry="IN"
                                        value={form.phone}
                                        onChange={(value) => handleChange(value ?? "", "phone")}
                                        className="w-full"
                                        countrySelectProps={{
                                            searchable: 'true',
                                        }}
                                    />
                                </div>
                                {fieldErrors.phone && <div className="text-red-500 text-xs mt-1">{fieldErrors.phone}</div>}
                            </div>
                            {/* Gender Dropdown */}
                            <div>
                                <select
                                    className={`${classAdd} ${fieldErrors.gender ? errorClass : ""}`}
                                    name="gender"
                                    value={form.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                {fieldErrors.gender && <div className="text-red-500 text-xs mt-1">{fieldErrors.gender}</div>}
                            </div>
                            {/* Password */}
                            {/* <div>
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
                            </div> */}
                            {/* Confirm Password */}
                            {/* <div>
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
                            </div> */}
                            {/* Terms */}
                            <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    checked={form.terms}
                                    onChange={handleChange}
                                />
                                <p>
                                    By signing up, you agree to the{" "}
                                    <Link href="/terms-of-service" className="text-brand">Terms of service</Link> and{" "}
                                    <Link href="/privacy-policy" className="text-brand">Privacy policy</Link>.
                                </p>
                            </div>
                            {fieldErrors.terms && <div className="text-red-500 text-xs mt-1">{fieldErrors.terms}</div>}
                            {/* Error Message */}
                            {error && (
                                <div className="text-red-500 text-xs">{error}</div>
                            )}
                            {/* Submit */}
                            <button
                                className="w-full bg-brand  text-white py-2 sm:py-3 rounded-lg font-medium transition text-sm sm:text-base"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Signing Up..." : "Sign Up"}
                            </button>
                        </form>
                        {/* OR Divider */}
                        <div className="flex items-center my-6 sm:my-8 gap-3">
                            <div className="flex-1 h-px bg-gray-300" />
                            <span className="text-brand gray-500 text-xs sm:text-base">Or</span>
                            <div className="flex-1 h-px bg-gray-300" />
                        </div>
                        <SocialLoginButtons />

                    </div>
                    {/* Responsive image: static and centered on mobile, absolute on md+ */}
                    <div className="w-16 h-16 mx-auto mt-6 md:w-28 md:h-28 md:absolute md:bottom-14 md:right-0 md:mt-0 md:mx-0">
                        <img
                            src="/sidebgBg.png"
                            alt="Signup Visual"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Already have account */}
                    <p className="mt-6 sm:mt-8 text-center text-gray-600 text-sm sm:text-base">
                        Already have an account?{" "}
                        <Link href="/agent/signin" className="text-brand font-medium">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
