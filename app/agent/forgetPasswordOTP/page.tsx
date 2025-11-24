'use client';
import React from "react";

export default function Page() {

    const [selected, setSelected] = React.useState<"sms" | "email" | null>(null);
    return (
        <div className="h-full w-full flex items-center justify-center bg-white">
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



                    <div className="h-full w-full flex items-center justify-center bg-white">
                        <div className="w-full max-w-md mx-auto flex flex-col items-center">
                            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Forgot Password</h2>
                            <p className="text-gray-500 text-sm mb-8 text-center">
                                Code has been sent to +1 ***** ***70
                            </p>
                            <form className="w-full flex flex-col items-center">
                                <div className="flex gap-4 mb-6">
                                    {/* OTP Inputs */}
                                    <input
                                        type="text"
                                        maxLength={1}
                                        className="w-14 h-14 border border-blue-300 rounded-lg text-center text-2xl focus:outline-none focus:border-blue-700"
                                    />
                                    <input
                                        type="text"
                                        maxLength={1}
                                        className="w-14 h-14 border border-blue-300 rounded-lg text-center text-2xl focus:outline-none focus:border-blue-700"
                                    />
                                    <input
                                        type="text"
                                        maxLength={1}
                                        className="w-14 h-14 border border-blue-300 rounded-lg text-center text-2xl focus:outline-none focus:border-blue-700"
                                    />
                                    <input
                                        type="text"
                                        maxLength={1}
                                        className="w-14 h-14 border border-blue-300 rounded-lg text-center text-2xl focus:outline-none focus:border-blue-700"
                                    />
                                </div>
                                <div className="mb-8 text-gray-500 text-sm">
                                    Didn't receive code?{" "}
                                    <a href="#" className="text-blue-700 font-medium hover:underline">Resend again</a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-full font-medium transition text-base"
                                >
                                    Verify
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
