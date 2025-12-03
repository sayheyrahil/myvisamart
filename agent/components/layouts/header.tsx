"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaPhoneAlt,FaEnvelope } from "react-icons/fa";

const Navbar = ({ title }: { title: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

   return (
    <header className="w-full shadow-sm">
      {/* Top Banner */}
      <title>{title}</title>
      <div className="bg-[#0047AB] text-white flex items-center justify-center px-4 sm:px-6 py-3">
        <div className="container flex flex-col sm:flex-row items-center justify-center mx-auto gap-4 sm:gap-10">
       
       <div className="hidden sm:flex gap-6">
          <Link href="/discover" className="flex items-center gap-3 justify-center">

            <div className="text-xs sm:text-sm font-medium">
              Discover
            </div>
          </Link>

          <Link href="/specialdeals" className="flex items-center gap-3 justify-center">

            <div className="text-xs sm:text-sm font-medium">
              Special Deals
            </div>
          </Link>

          <Link href="/support" className="flex items-center gap-3 justify-center">

            <div className="text-xs sm:text-sm font-medium">
              Support
            </div>
          </Link>
       </div>
       <div className="flex gap-6">
        
          <Link href="/support" className="flex items-center gap-3 justify-center">
          
            <div className="text-xs sm:text-sm font-medium flex items-center gap-2">
              <FaPhoneAlt className="inline-block mr-1 text-white" />
                +91 98765 43210
            </div>
          </Link>
          <Link href="/support" className="flex items-center gap-3 justify-center">
          
            <div className="text-xs sm:text-sm font-medium flex items-center gap-2">
              <FaEnvelope className="inline-block mr-1 text-white" />
                    example@gmail.com
            </div>
          </Link>
          
        </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#F8FAFC]">
        <nav className="container mx-auto flex items-center justify-between px-4 sm:px-10 py-3 relative">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/img/logo.png"
              alt="Traveler"
              className="w-[48px] h-[48px] sm:w-[70px] sm:h-[70px]"
            />
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex justify-center px-4">
            <div className="w-full max-w-md">
              <div className="flex items-center bg-[#f6fafd] border border-[#e3eaf3] rounded-xl px-5 py-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 bg-transparent outline-none text-gray-600 text-base"
                />
                <button className="ml-2 text-[#174ea6]">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </button>
              </div>
            </div>
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
