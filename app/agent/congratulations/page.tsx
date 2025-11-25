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



                    <div className="h-full w-full flex items-start justify-center bg-white">
                        <div className="w-full max-w-md mx-auto flex flex-col items-start">
                            {/* Shield Icon */}
                            <img
                                src="/congratulations.png"
                                alt="Success"
                                className="w-24 h-24 mb-6"
                            />
                            {/* Congratulations Heading */}
                            <h2 className="text-4xl font-bold text-blue-800 mb-2">Congratulations</h2>
                            {/* Subtext */}
                            <p className="text-gray-500 text-base mb-8 text-center">
                                Your password has been reset successfully.<br />
                                You will be redirected to the Home Page in a few seconds.
                            </p>
                            {/* Continue Button */}
                            <button
                                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-full font-medium transition text-base"
                                onClick={() => window.location.href = '/'}
                            >
                                Continue to Home
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
