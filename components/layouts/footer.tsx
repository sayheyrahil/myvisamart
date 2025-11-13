import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Top section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-12">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="My Visa Mart"
            className="w-12 h-12 mb-2"
          />
          <h2 className="font-bold text-gray-800 text-lg leading-tight">
            MY VISA
            <br />
            MART
          </h2>
        </div>

        {/* About & Products */}
        <div className="flex flex-col md:col-span-2 md:flex-row md:justify-between gap-10">
          <div>
            <h3 className="text-blue-700 font-semibold mb-3">About</h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">How to Book</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Help Center</li>
              <li className="hover:text-blue-600 cursor-pointer">Career</li>
            </ul>

            <h3 className="text-blue-700 font-semibold mt-6 mb-3">Products</h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Flights</li>
              <li className="hover:text-blue-600 cursor-pointer">Hotels</li>
              <li className="hover:text-blue-600 cursor-pointer">Trains</li>
              <li className="hover:text-blue-600 cursor-pointer">Villas</li>
            </ul>

            <h3 className="text-blue-700 font-semibold mt-6 mb-3">Other</h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Blog</li>
              <li className="hover:text-blue-600 cursor-pointer">Privacy Notice</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-blue-700 font-semibold mb-3">Contact</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Lorem Ipsum is simply dummy text the printing and typeset industry.
              Lorem Ipsum has been the industry’s standard dummy text ever.
            </p>
            <p className="text-sm text-gray-700 mb-1">+91 98765 43210</p>
            <p className="text-sm text-gray-700">example@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="border-t border-gray-200"></div>

      {/* Bottom section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 text-sm text-gray-700">
        <div className="flex items-center gap-2 mb-3 md:mb-0">
          <button className="border border-gray-300 px-4 py-1 rounded-full flex items-center gap-1 hover:bg-gray-100 transition">
            <span>View All 160 Countries</span>
            <span className="text-lg">▼</span>
          </button>
        </div>

        <div className="flex gap-4 text-gray-600">
          <span className="hover:text-blue-600 cursor-pointer">Instagram</span>
          <span className="hover:text-blue-600 cursor-pointer">Youtube</span>
          <span className="hover:text-blue-600 cursor-pointer">WhatsApp</span>
        </div>

        <div className="text-gray-500 text-sm">© 2025 Visamart</div>
      </div>

      {/* Scenic background image */}
      <div className="w-full h-48">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=60"
          alt="Mountain view"
          className="w-full h-full object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
