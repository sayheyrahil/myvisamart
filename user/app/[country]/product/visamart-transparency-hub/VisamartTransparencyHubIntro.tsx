import React from "react";

export default function VisamartTransparencyHubIntro() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 bg-[#F7FAFC]">
      <div className=" w-full flex flex-col items-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#18181B] mb-3 text-center">
          Visamart Transparency Hub
        </h1>
        <p className="text-gray-500 text-base md:text-lg mb-10 text-center ">
          Exercitationem quia laudantium sunt necessitatibus cupiditate
          exercitationem ligula tempus feugiat adipiscing elit
          necessitatibus necessitatibus culpa labore ligula vestibulum est
          molestie congue magna aliqua
        </p>
        <div className="mb-6 mt-2 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#18181B] mb-2">
            is Visamart safe to
            <br />
            get a visa?
          </h2>
          <p className="text-gray-600 text-base mb-2">
            Yes, Atlys is a safe, reliable, and trusted platform serving
            visas. Here’s why millions of users trust us.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className=" rounded-full w-10 h-10 flex items-center justify-center mb-3">
              <svg width="45" height="45" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#6C2BD7" />
                <text
                  x="12"
                  y="17"
                  textAnchor="middle"
                  fontSize="8"
                  fill="#fff"
                  fontWeight="bold"
                >
                  1M+
                </text>
              </svg>
            </div>
            <div className="font-semibold text-[#18181B] mb-1">
              1 million+ Visas Processed
            </div>
            <div className="text-gray-500 text-sm">
              We’ve successfully processed over a million visas, earning the
              trust of travelers worldwide.
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className=" rounded-full w-10 h-10 flex items-center justify-center mb-3">
              <svg width="45" height="45" fill="none" viewBox="0 0 24 24">
                <rect width="22" height="22" rx="11" fill="#6C2BD7" />
                <path
                  d="M7 11h8M7 15h8M9 7v4M15 7v4"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="font-semibold text-[#18181B] mb-1">
              End-to-end data Encryption
            </div>
            <div className="text-gray-500 text-sm">
              All personal and payment information is encrypted and
              protected to the highest standards.
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className=" rounded-full w-10 h-10 flex items-center justify-center mb-3">
              <svg width="45" height="45" fill="none" viewBox="0 0 24 24">
                <rect width="22" height="22" rx="11" fill="#6C2BD7" />
                <path
                  d="M12 7v5l3 3"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="font-semibold text-[#18181B] mb-1">
              Outstanding customer reviews
            </div>
            <div className="text-gray-500 text-sm">
              Thousands of 5-star reviews from happy travelers on Google,
              Trustpilot, and more.
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center md:col-span-1">
            <div className=" rounded-full w-10 h-10 flex items-center justify-center mb-3">
              <svg width="45" height="45" fill="none" viewBox="0 0 24 24">
                <rect width="22" height="22" rx="11" fill="#6C2BD7" />
                <path
                  d="M6 12l4 4 8-8"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="font-semibold text-[#18181B] mb-1">
              Secure payment systems
            </div>
            <div className="text-gray-500 text-sm">
              All transactions are processed through PCI-compliant, secure
              payment gateways.
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center md:col-span-1">
            <div className=" rounded-full w-10 h-10 flex items-center justify-center mb-3">
              <svg width="45" height="45" fill="none" viewBox="0 0 24 24">
                <rect width="22" height="22" rx="11" fill="#6C2BD7" />
                <path
                  d="M8 12h8M8 16h8M8 8h8"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="font-semibold text-[#18181B] mb-1">
              Featured in reputable media outlets
            </div>
            <div className="text-gray-500 text-sm">
              Recognized and featured by leading travel and news
              publications globally.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
