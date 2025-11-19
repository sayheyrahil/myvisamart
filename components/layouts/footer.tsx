import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-white border-t border-gray-200">
        {/* Top section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 py-12">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="My Visa Mart"
              className="w-16 h-16 mb-4"
            />
            <h2 className="font-extrabold text-gray-800 text-2xl leading-tight text-center md:text-left tracking-wide uppercase">
              MY VISA
              <br />
              MART
            </h2>
          </div>

          {/* About, Products, Other */}
          <div className="flex flex-col justify-center">
            <div>
              <h3 className="text-blue-700 font-semibold text-sm mb-1 uppercase tracking-wide">
                About
              </h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-1 text-gray-600 text-sm mb-4">
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  How to Book
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Contact Us
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Help Center
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Career
                </li>
              </ul>
              <h3 className="text-blue-700 font-semibold text-sm mb-1 mt-4 uppercase tracking-wide">
                Products
              </h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-1 text-gray-600 text-sm mb-4">
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Flights
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Hotels
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Trains
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Villas
                </li>
              </ul>
              <h3 className="text-blue-700 font-semibold text-sm mb-1 mt-4 uppercase tracking-wide">
                Other
              </h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-1 text-gray-600 text-sm">
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Blog
                </li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer">
                  Privacy Notice
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col justify-center">
            <h3 className="text-blue-700 font-semibold text-sm mb-1 uppercase tracking-wide">
              Contact
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Lorem Ipsum is simply dummy text the printing and typeset industry.
              Lorem Ipsum has been the industry’s standard dummy text ever
            </p>
            <p className="text-sm text-gray-700 mb-1">+91 98765 43210</p>
            <a
              href="mailto:example@gmail.com"
              className="text-sm text-blue-700 underline hover:text-blue-900"
            >
              example@gmail.com
            </a>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-200"></div>

        {/* Bottom section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center px-6 py-4 text-sm text-gray-700">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-3 md:mb-0">
            <button className="border border-gray-300 px-4 py-1 rounded-full flex items-center gap-1 hover:bg-gray-100 transition">
              <span>View All 160 Countries</span>
              <span className="text-lg">▼</span>
            </button>
          </div>
          <div className="flex gap-8 justify-center text-gray-600">
            <span className="hover:text-blue-600 hover:underline cursor-pointer">
              Instagram
            </span>
            <span className="hover:text-blue-600 hover:underline cursor-pointer">
              Youtube
            </span>
            <span className="hover:text-blue-600 hover:underline cursor-pointer">
              WhatsApp
            </span>
          </div>
          <div className="text-gray-500 text-sm text-center md:text-right">
            © 2025 Visamart
          </div>
        </div>
      </footer>
      <div className="w-full h-48">
        <img
          src="./Rectangle4353.png"
          alt="Mountain view"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Footer;
