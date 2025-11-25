import SocialLoginButtons from "@/components/SocialLoginButtons";
import React from "react";

export default function Page() {
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
                <div className="w-full md:w-1/2 flex flex-col px-4 sm:px-8 md:px-16 py-6 md:py-12 relative justify-center items-center">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Sign Up</h2>
                    <div className="w-full max-w-xs sm:max-w-sm md:w-[50%] mx-auto">
                        <form className="flex flex-col gap-4">
                            {/* Name */}
                            <input
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
                                type="text"
                                placeholder="Name"
                            />
                            {/* Email */}
                            <input
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
                                type="email"
                                placeholder="Email"
                            />
                            {/* PHONE NUMBER WITH COUNTRY FLAG */}
                            <div className="w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 flex gap-2 sm:gap-3 items-center">
                                <img
                                    src="https://flagcdn.com/w20/bd.png"
                                    className="w-5 h-4 sm:w-6"
                                    alt="flag"
                                />
                                <span className="text-gray-700 text-sm sm:text-base">+880</span>
                                <input
                                    className="flex-1 outline-none text-sm sm:text-base"
                                    type="text"
                                    placeholder="Your mobile number"
                                />
                            </div>
                            {/* Gender Dropdown */}
                            <select
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
                            >
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {/* Terms */}
                            <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                                <input type="checkbox" />
                                <p>
                                    By signing up, you agree to the{" "}
                                    <a className="text-blue-600">Terms of service</a> and{" "}
                                    <a className="text-blue-600">Privacy policy</a>.
                                </p>
                            </div>
                            {/* Submit */}
                            <button
                                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 sm:py-3 rounded-lg font-medium transition text-sm sm:text-base"
                            >
                                Sign Up
                            </button>
                        </form>
                        {/* OR Divider */}
                        <div className="flex items-center my-6 sm:my-8 gap-3">
                            <div className="flex-1 h-px bg-gray-300" />
                            <span className="text-gray-500 text-xs sm:text-base">Or</span>
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
                        <a href="#" className="text-blue-600 font-medium">Sign in</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
