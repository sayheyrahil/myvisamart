import React from "react";

export default function SignupMasterPage({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1EBF6] flex flex-col">
            <div className="max-w-7xl mx-auto w-full px-2 sm:px-4 md:px-8">
                {/* Header */}
                <div className="flex w-full justify-between mt-5 items-center flex-col sm:flex-row gap-4">
                    <div className="flex justify-center sm:justify-start w-full sm:w-auto">
                        <img
                            src="/logo.png"
                            alt="My Visa Mart"
                            className="w-20 h-20 sm:w-28 sm:h-28 mb-0 sm:mb-4"
                        />
                    </div>
                    <div className="flex justify-center sm:justify-end w-full sm:w-auto">
                        <button className="px-4 py-2 sm:px-6 sm:py-2 border border-[#0A509F] text-[#0A509F] rounded-full hover:bg-[#0A509F] hover:text-white transition text-base sm:text-lg">
                            Home
                        </button>
                    </div>
                </div>

                {/* Ribbon */}
                <div className="flex justify-center h-32 sm:h-44 md:h-52 relative mt-4 mb-4 sm:mb-8">
                    <img
                        src="/extra/Layer_1.png"
                        alt="Ribbon"
                        className="object-contain h-full w-full"
                    />
                    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                        <span className="font-madefor font-semibold text-[#022538] text-xl sm:text-2xl md:text-4xl px-2 text-center">
                            Switzerland
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex w-full rounded-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-20 items-center w-full">
                        {/* Arch Image */}
                        <div className="flex justify-center  ">
                            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
                                <img
                                    src="/extra/Rectangle4411.png"
                                    alt="Switzerland"
                                    className="w-full h-full object-cover z-10 rounded-t-full"
                                />
                            </div>
                        </div>
                        {/* Dynamic Content */}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
