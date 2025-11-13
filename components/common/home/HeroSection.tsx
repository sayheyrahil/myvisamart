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
        <div className="flex-1 grid grid-cols-2 gap-6 relative">
          {/* Animated plane icons */}
          <div className="absolute -top-6 left-16 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1E88E5"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="none"
              className="w-6 h-6 rotate-45"
            >
              <path d="M2.5 19.5L21.5 12 2.5 4.5 3.5 11 14 12 3.5 13z" />
            </svg>
          </div>

          <div className="absolute top-1/2 right-2 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1E88E5"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="none"
              className="w-6 h-6 -rotate-45"
            >
              <path d="M2.5 19.5L21.5 12 2.5 4.5 3.5 11 14 12 3.5 13z" />
            </svg>
          </div>

          {/* Image cards */}
          <img
            src="https://images.unsplash.com/photo-1549887534-3db1bd59dcca?auto=format&fit=crop&w=600&q=60"
            alt="Beach"
            className="rounded-2xl object-cover w-full h-48 shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b3?auto=format&fit=crop&w=600&q=60"
            alt="Temple"
            className="rounded-2xl object-cover w-full h-48 shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=60"
            alt="City Night"
            className="rounded-2xl object-cover w-full h-48 shadow-md"
          />
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=600&q=60"
              alt="Mosque"
              className="rounded-2xl object-cover w-full h-48 shadow-md"
            />
            <div className="absolute bottom-3 right-3 bg-blue-500 p-2 rounded-full shadow-md">
              <MapPin size={16} color="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
