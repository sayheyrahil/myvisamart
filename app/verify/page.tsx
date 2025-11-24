import React from "react";

export default function Page() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white">
            <div className="flex flex-col md:flex-row w-full shadow-none md:shadow-xl rounded-none md:rounded-lg overflow-hidden">
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
                    <div className="w-full max-w-xl mx-auto">
                        <h2 className="text-3xl font-semibold text-[#2456A6] mb-2">
                            Verify
                        </h2>
                        <p className="text-gray-400 mb-8 text-base">
                            Verification email or phone number
                        </p>
                        <input
                            type="text"
                            placeholder="Email or Phone Number"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 mb-8 focus:outline-none focus:border-[#2456A6] text-base"
                        />
                        <button
                            className="w-full bg-[#2456A6] hover:bg-[#1d417a] text-white py-4 rounded-full font-medium text-lg"
                            type="button"
                        >
                            Send OTP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
