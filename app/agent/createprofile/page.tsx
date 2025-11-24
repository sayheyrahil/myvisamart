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
                <div className="w-full md:w-1/2 flex flex-col px-4 sm:px-8 md:px-16 py-6 md:py-10 relative  ">
                     <div className="w-full max-w-xs sm:max-w-sm md:w-[50%] mx-auto">
                        <form className="flex flex-col gap-4  ">
                            {/* Title */}
                            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Create Profile</h2>
                            {/* Profile Picture Upload */}
                            <div className="flex flex-col items-center mb-2">
                                <div className="relative">
                                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-4xl">
                                        <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <circle cx="12" cy="8" r="4" />
                                            <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
                                        </svg>
                                    </div>
                                    <label className="absolute bottom-0 right-0 bg-white rounded-full border border-gray-300 p-1 cursor-pointer">
                                        <input type="file" className="hidden" />
                                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="3" />
                                            <path d="M12 2v2m0 16v2m10-10h-2M4 12H2" />
                                        </svg>
                                    </label>
                                </div>
                                <span className="text-gray-500 text-sm mt-2">Add your profile picture</span>
                            </div>
                            {/* Full Name */}
                            <input
                                className="w-full border border-blue-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-200 outline-none text-base"
                                type="text"
                                placeholder="Full Name"
                            />
                            {/* Mobile Number with Country Flag */}
                            <div className="w-full border border-blue-300 rounded-lg px-4 py-3 flex gap-2 items-center">
                                <img
                                    src="https://flagcdn.com/w20/bd.png"
                                    className="w-5 h-4"
                                    alt="flag"
                                />
                                <span className="text-gray-700 text-base">+880</span>
                                <input
                                    className="flex-1 outline-none text-base bg-transparent"
                                    type="text"
                                    placeholder="Your mobile number"
                                />
                            </div>
                            {/* Email */}
                            <input
                                className="w-full border border-blue-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-200 outline-none text-base"
                                type="email"
                                placeholder="Email"
                            />
                            {/* Street */}
                            <input
                                className="w-full border border-blue-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-200 outline-none text-base"
                                type="text"
                                placeholder="Street"
                            />
                            {/* City & District */}
                            <div className="flex gap-2">
                                <select className="w-1/2 border border-blue-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-200 outline-none text-base">
                                    <option value="">City</option>
                                    {/* ...city options... */}
                                </select>
                                <select className="w-1/2 border border-blue-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-200 outline-none text-base">
                                    <option value="">District</option>
                                    {/* ...district options... */}
                                </select>
                            </div>
                            {/* Pan Card & Aadhaar Card */}
                            <div className="flex gap-2">
                                <div className="relative w-1/2">
                                    <input
                                        className="w-full border border-blue-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-200 outline-none text-base"
                                        type="text"
                                        placeholder="Pan Card"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 cursor-pointer">
                                        {/* Upload icon */}
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>
                                            <polyline points="7 9 12 4 17 9"/>
                                            <line x1="12" y1="4" x2="12" y2="16"/>
                                        </svg>
                                    </span>
                                </div>
                                <div className="relative w-1/2">
                                    <input
                                        className="w-full border border-blue-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-200 outline-none text-base"
                                        type="text"
                                        placeholder="Aadhaar Card"
                                    />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 cursor-pointer">
                                        {/* Upload icon */}
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>
                                            <polyline points="7 9 12 4 17 9"/>
                                            <line x1="12" y1="4" x2="12" y2="16"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            {/* GST No. */}
                            <input
                                className="w-full border border-blue-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-200 outline-none text-base"
                                type="text"
                                placeholder="GST No."
                            />
                            {/* Save Button */}
                            <button
                                className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-full font-medium transition text-base mt-2"
                                type="submit"
                            >
                                Save
                            </button>
                        </form>
                     
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
