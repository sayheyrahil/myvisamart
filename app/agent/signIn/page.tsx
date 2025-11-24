import React from "react";

export default function Page() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white">
            <div className="flex flex-col md:flex-row w-full  shadow-none md:shadow-xl rounded-none md:rounded-lg overflow-hidden">
                {/* LEFT SIDE IMAGE */}
                <div className="hidden md:block md:w-1/2 relative">
                    <img
                        src="./Frame427321840.png"
                        alt="Signup Visual"
                        className="w-full h-screen object-cover"
                    />
                    <h1 className="absolute top-10 left-10 text-4xl font-bold text-white drop-shadow-lg">
                        Welcome to Visamart
                    </h1>
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="w-full md:w-1/2 flex flex-col px-4 sm:px-8 md:px-16 py-6 md:py-12 relative justify-center items-center">
                    <div className="w-full max-w-xs sm:max-w-sm  mx-auto">
                        <form className="flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-[#2456A6] mb-2 mt-8">Login</h2>
                            {/* Email or Phone */}
                            <input
                                className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-200 outline-none text-base"
                                type="text"
                                placeholder="Email or Phone Number"
                            />
                            {/* Password */}
                            <div className="relative">
                                <input
                                    className="w-full border border-blue-200 rounded-lg px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-200 outline-none text-base"
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                                    {/* Eye-off icon */}
                                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.77 21.77 0 0 1 5.06-6.06M1 1l22 22" />
                                        <path d="M9.53 9.53A3 3 0 0 0 12 15a3 3 0 0 0 2.47-5.47" />
                                    </svg>
                                </span>
                                <a href="#" className="absolute right-0 -bottom-6 text-xs text-red-500">Forget Password?</a>
                            </div>
                            {/* Login Button */}
                            <button
                                className="w-full bg-[#2456A6] hover:bg-[#1d417a] text-white py-3 rounded-full font-medium transition text-base mt-6"
                                type="submit"
                            >
                                Login
                            </button>
                        </form>
                        {/* OR Divider */}
                        <div className="flex items-center my-8 gap-3">
                            <div className="flex-1 h-px bg-gray-200" />
                            <span className="text-gray-400 text-base">Or</span>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>
                        {/* SOCIAL LOGIN */}
                        <div className="flex justify-center gap-4 text-2xl mb-2">
                            <button className="border border-gray-300 p-2 rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" className="w-6" />
                            </button>
                            <button className="border border-gray-300 p-2 rounded-md">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" className="w-6" />
                            </button>
                            <button className="border border-gray-300 p-2 rounded-md">
                                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" className="w-6" />
                            </button>
                        </div>
                        {/* Already have account */}
                        <p className="mt-4 text-center text-gray-600 text-base">
                            Already have an account?{" "}
                            <a href="#" className="text-[#2456A6] font-medium">Sign in</a>
                        </p>
                    </div>
                    {/* Responsive image: static and centered on mobile, absolute on md+ */}
                    <div className="w-16 h-16 mx-auto mt-6 md:w-28 md:h-28 md:absolute md:bottom-14 md:right-0 md:mt-0 md:mx-0">
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
