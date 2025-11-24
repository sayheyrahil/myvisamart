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
                                Select which contact details should we use to reset your password
                            </p>
                            <div className="w-full flex flex-col gap-4 mb-8">
                                {/* SMS Option */}
                                <button
                                    type="button"
                                    onClick={() => setSelected("sms")}
                                    className={`flex items-center w-full border rounded-lg px-4 py-4 gap-4 transition ${selected === "sms"
                                            ? "border-blue-700 bg-blue-50"
                                            : "border-blue-200 bg-white"
                                        }`}
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/726/726623.png"
                                        alt="sms"
                                        className="w-8 h-8"
                                    />
                                    <div className="flex flex-col items-start">
                                        <span className="text-gray-700 font-medium">Via SMS</span>
                                        <span className="text-gray-500 text-sm">***** ***70</span>
                                    </div>
                                </button>
                                {/* Email Option */}
                                <button
                                    type="button"
                                    onClick={() => setSelected("email")}
                                    className={`flex items-center w-full border rounded-lg px-4 py-4 gap-4 transition ${selected === "email"
                                            ? "border-blue-700 bg-blue-50"
                                            : "border-blue-200 bg-white"
                                        }`}
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/726/726623.png"
                                        alt="email"
                                        className="w-8 h-8"
                                    />
                                    <div className="flex flex-col items-start">
                                        <span className="text-gray-700 font-medium">Via Email</span>
                                        <span className="text-gray-500 text-sm">**** **** **** xyz@xyz.com</span>
                                    </div>
                                </button>
                            </div>
                            <button
                                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-full font-medium transition text-base"
                            >
                                Continue
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
