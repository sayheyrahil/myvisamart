import React from "react";
import Link from "next/link";

const Footer = () => {
  // Add font weight and style variants to the class string as needed
  const allSubTitle = 'text-sm font-[Wix_Madefor_Display] font-medium text-[16px] leading-[24px] tracking-normal align-middle text-[#9E9E9E] hover:text-brand cursor-pointer';
  return (
    <>
      <footer className="bg-white border-t border-gray-200">
        {/* Top section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-12">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <img
              src="/img/logo.png"
              alt="My Visa Mart"
              className="w-28 h-28 mb-4"
            />
          </div>
          <div className="flex flex-col items-center md:items-start justify-center">
            <h3 className="text-[#0A509F] font-semibold text-sm mb-1 mt-4 uppercase tracking-wide">
                Tools
              </h3>
              <ul className="flex flex-col gap-y-1 mb-8">
                <li>
                  <Link className={allSubTitle} href="/tools/ds-160" target="_blank" rel="noopener noreferrer">
                    DS-160
                  </Link>
                </li>
                <li>
                  <Link className={allSubTitle} href="/tools/schengen-appointment-checker" target="_blank" rel="noopener noreferrer">
                    Schengen Appointment Checker
                  </Link>
                </li>
                <li>
                  <Link className={allSubTitle} href="/tools/schengen-cover-letter" target="_blank" rel="noopener noreferrer">
                    Schengen Cover Letter
                  </Link>
                </li>
                <li>
                  <Link className={allSubTitle} href="/tools/schengen-invitation-letter" target="_blank" rel="noopener noreferrer">
                    Schengen Invitation Letter
                  </Link>
                </li>
                <li>
                  <Link className={allSubTitle} href="/tools/uae-visa-status-online" target="_blank" rel="noopener noreferrer">
                    UAE Visa Status Online
                  </Link>
                </li>
                <li>
                  <Link className={allSubTitle} href="/tools/vietnam-visa-status-checker" target="_blank" rel="noopener noreferrer">
                    Vietnam Visa Status Checker
                  </Link>
                </li>
                <li>
                  <Link className={allSubTitle} href="/tools/visa-eligibility-quiz" target="_blank" rel="noopener noreferrer">
                    Visa Eligibility Quiz
                  </Link>
                </li>
                <li>
                  <Link className={allSubTitle} href="/tools/visa-glossary" target="_blank" rel="noopener noreferrer">
                    Visa Glossary
                  </Link>
                </li>
                <li>
                  <Link className={allSubTitle} href="/tools/visa-glossary-adjustment-of-status" target="_blank" rel="noopener noreferrer">
                    Visa Glossary Adjustment of Status
                  </Link>
                </li>
                <li>
                  <Link className={allSubTitle} href="/tools/visa-photo-maker" target="_blank" rel="noopener noreferrer">
                    Visa Photo Maker
                  </Link>
                </li>
              </ul>
          </div>

          {/* About, Products, Other */}
          <div className="flex flex-col justify-center">
            <div>
              <h3 className="text-[#0A509F] font-semibold text-sm mb-1 uppercase tracking-wide ">
                About
              </h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-1   mb-8">
                <li className={allSubTitle}>
                  How to Book
                </li>
                <li className={allSubTitle}>
                  Contact Us
                </li>
                <li className={allSubTitle}>
                  Help Center
                </li>
                <li className={allSubTitle}>
                  Career
                </li>
              </ul>
              <h3 className="text-[#0A509F] font-semibold text-sm mb-1 mt-4 uppercase tracking-wide">
                Products
              </h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-1  mb-8">
                <li className={allSubTitle}>
                  Flights
                </li>
                <li className={allSubTitle}>
                  Hotels
                </li>
                <li className={allSubTitle}>
                  Trains
                </li>
                <li className={allSubTitle}>
                  Villas
                </li>
              </ul>
              <h3 className="text-[#0A509F] font-semibold text-sm mb-1 mt-4 uppercase tracking-wide">
                Other
              </h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-1 ">
                <li className={allSubTitle}>
                  Blog
                </li>
                <li className={allSubTitle}>
                  Privacy Notice
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col justify-center">
            <h3 className="text-[#0A509F] font-semibold text-sm mb-1 uppercase tracking-wide">
              Contact
            </h3>
            <p className={allSubTitle + " mb-5"} >
              Lorem Ipsum is simply dummy text the printing and typeset industry.
              Lorem Ipsum has been the industry’s standard dummy text ever
            </p>
            <p className={allSubTitle + " mb-5"}>+91 98765 43210</p>
            <a
              href="mailto:example@gmail.com"
              className={allSubTitle}>
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
            <span className={allSubTitle}>
              Instagram
            </span>
            <span className={allSubTitle}>
              Youtube
            </span>
            <span className={allSubTitle}>
              WhatsApp
            </span>
          </div>
          <div className={allSubTitle }>
            © 2025 Visamart
          </div>
        </div>
      </footer>
      <div className="w-full h-48">
        <img
          src="/img/Rectangle4353.png"
          alt="Mountain view"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Footer;
