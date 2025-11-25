import React from "react";
import Link from "next/link";

const Navbar = ({ title }: { title: string }) => {
  return (
    <header className="w-full shadow-sm">
      {/* Top Banner */}
      <title>{title}</title>
      <div className="bg-[#0047AB] text-white flex items-center justify-center px-6 py-0">
        <div className="container flex items-center justify-between mx-auto">

          <div className="flex items-center gap-3 justify-center">
          
          </div>
          <div className="flex items-center gap-3 justify-center">
            <img
              src="/banner.png"
              alt="Traveler"
              className="w-[66px] h-[58px]"
            />
            <p className="text-sm font-medium">
              Earn Points & Perks on your next Visa Application
            </p>
          </div>

          <div className="flex items-center gap-4 justify-end">
            <span className="text-xs opacity-80 cursor-pointer  ">
              T&C Apply
            </span>
            <button className="bg-[#FFB800] text-sm font-medium px-4 py-1.5 rounded-full hover:bg-yellow-500 transition">
              Join Free
            </button>
            {/* <button className="text-xl font-bold">✕</button> */}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#F8FAFC] container mx-auto flex items-center justify-between px-10 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Traveler"
            className="w-[70px] h-[70px]"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8">
          <li className="font-[Wix_Madefor_Display] font-medium text-[16px] leading-[24px] tracking-normal  cursor-pointer text-brand">
            <Link href="/">Home</Link>
          </li>
          <li className="font-[Wix_Madefor_Display] font-medium text-[16px] leading-[24px] tracking-normal text-[#1C1C1C] cursor-pointer hover:text-brand">
            <Link href="/discover">Discover</Link>
          </li>
          <li className="font-[Wix_Madefor_Display] font-medium text-[16px] leading-[24px] tracking-normal text-[#1C1C1C] cursor-pointer hover:text-brand">
            <Link href="/aboutus">About Us</Link>
          </li>
          <li className="font-[Wix_Madefor_Display] font-medium text-[16px] leading-[24px] tracking-normal text-[#1C1C1C] cursor-pointer hover:text-brand">
            <Link href="/contactus">Support</Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="border border-[#FFB800] text-[#FFB800] px-8 py-3  rounded-full text-sm font-medium hover:bg-[#FFF8E1] transition">
            Login
          </button>
          <button className="bg-[#0047AB] text-white px-8 py-3  rounded-full text-sm font-medium hover:bg-[#003b8b] transition">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
