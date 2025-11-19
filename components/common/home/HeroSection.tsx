import React from "react";
import { Search, ArrowRight, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#F5FAFF] min-h-[90vh] flex items-center justify-center px-8 md:px-16">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#FFD54F] to-[#FFB300] text-[#4E2C00] text-sm font-medium px-5 py-2 rounded-full shadow hover:shadow-md transition">
            Explore the world!
            <ArrowRight size={16} />
          </button>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Unlock the World <br /> with <span className="text-[#0047AB]">Visamart</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-md">
            Your dream destination is just a visa away – let’s make it happen.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search Destination"
              className="w-full py-3 pl-5 pr-10 rounded-full shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <Search
              size={20}
              className="absolute right-4 top-3.5 text-blue-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Right Section (Image Grid) */}
        <div className="flex   ">
       

          {/* Image cards */}
          <img
            src="./hero.png"
            alt="Beach"
            className="rounded-2xl object-cover w-full h-full shadow-md"
          />
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
