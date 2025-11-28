"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = ({ title }: { title: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm">
      {/* Top Banner */}
      <title>{title}</title>
      <div className="bg-[#0047AB] text-white flex items-center justify-center px-4 sm:px-6 py-0">
        <div className="container flex items-center justify-between mx-auto">
          {/* ...existing code... */}
          <div className="flex items-center gap-3 justify-center">
            {/* ...existing code... */}
          </div>
          <div className="flex items-center gap-3 justify-center">
            <img
              src="/banner.png"
              alt="Traveler"
              className="w-[48px] h-[42px] sm:w-[66px] sm:h-[58px]"
            />
            <p className="text-xs sm:text-sm font-medium">
              Earn Points & Perks on your next Visa Application
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 justify-end">
            <span className="text-xs opacity-80 cursor-pointer">T&C Apply</span>
            <button className="bg-[#FFB800] text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 rounded-full hover:bg-yellow-500 transition">
              Join Free
            </button>
            {/* <button className="text-xl font-bold">✕</button> */}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#F8FAFC]">
        <nav className="container mx-auto flex items-center justify-between px-4 sm:px-10 py-3 relative">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Traveler"
              className="w-[48px] h-[48px] sm:w-[70px] sm:h-[70px]"
            />
          </div>

          {/* Hamburger Icon */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`block w-6 h-0.5 bg-[#0047AB] mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-[#0047AB] mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-[#0047AB] transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </button>

          {/* Navigation Links */}
          <ul
            className={`
              flex gap-8
              sm:flex-row sm:static sm:bg-transparent sm:p-0
              fixed top-0 left-0   h-full bg-white z-50 flex-col items-start p-8  transition-transform duration-300
              ${menuOpen ? "translate-x-0" : "-translate-x-full"}
              sm:translate-x-0
            `}
          >
            <li className="font-medium text-[16px] leading-[24px] tracking-normal cursor-pointer text-brand">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="font-medium text-[16px] leading-[24px] tracking-normal text-[#1C1C1C] cursor-pointer hover:text-brand">
              <Link href="/discover" onClick={() => setMenuOpen(false)}>Discover</Link>
            </li>
            <li className="font-medium text-[16px] leading-[24px] tracking-normal text-[#1C1C1C] cursor-pointer hover:text-brand">
              <Link href="/aboutus" onClick={() => setMenuOpen(false)}>About Us</Link>
            </li>
            <li className="font-medium text-[16px] leading-[24px] tracking-normal text-[#1C1C1C] cursor-pointer hover:text-brand">
              <Link href="/contactus" onClick={() => setMenuOpen(false)}>Support</Link>
            </li>
            {/* Mobile only: Buttons */}
            <li className="flex flex-col gap-2 w-full mt-6 sm:hidden">
              <button className="border border-[#FFB800] text-[#FFB800] px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FFF8E1] transition w-full">
                Login
              </button>
              <button className="bg-[#0047AB] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#003b8b] transition w-full">
                Sign Up
              </button>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="gap-3 hidden sm:flex">
            <button className="border border-[#FFB800] text-[#FFB800] px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FFF8E1] transition">
              Login
            </button>
            <button className="bg-[#0047AB] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#003b8b] transition">
              Sign Up
            </button>
          </div>
        </nav>
        {/* Overlay for mobile menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40 sm:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
