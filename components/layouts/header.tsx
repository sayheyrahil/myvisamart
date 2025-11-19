import React from "react";

const Navbar = () => {
  return (
    <header className="w-full shadow-sm">
      {/* Top Banner */}
      <div className="bg-[#0047AB] text-white flex items-center justify-center px-6 py-2">
        <div className="container flex">

          <div className="flex items-center gap-3 justify-center">
            <img
              src="./banner.png"
              alt="Traveler"
              className="w-[66px] h-[58px]"
            />
            <p className="text-sm font-medium">
              Earn Points & Perks on your next Visa Application
            </p>
          </div>

          <div className="flex items-center gap-4 justify-end">
            <span className="text-xs opacity-80 cursor-pointer hover:underline">
              T&C Apply
            </span>
            <button className="bg-[#FFB800] text-sm font-medium px-4 py-1.5 rounded-full hover:bg-yellow-500 transition">
              Join Free
            </button>
            <button className="text-xl font-bold">✕</button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#F8FAFC] container mx-auto flex items-center justify-between px-10 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="./logo.png"
            alt="Traveler"
            className="w-[70px] h-[70px]"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-gray-700 text-sm font-medium">
          <li className="text-[#007BFF] cursor-pointer">Home</li>
          <li className="hover:text-[#007BFF] cursor-pointer">Discover</li>
          <li className="hover:text-[#007BFF] cursor-pointer">Special Deals</li>
          <li className="hover:text-[#007BFF] cursor-pointer">Support</li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="border border-[#FFB800] text-[#FFB800] px-5 py-1.5 rounded-full text-sm font-medium hover:bg-[#FFF8E1] transition">
            Login
          </button>
          <button className="bg-[#0047AB] text-white px-5 py-1.5 rounded-full text-sm font-medium hover:bg-[#003b8b] transition">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
