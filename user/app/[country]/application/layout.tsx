"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";
import { WEB_URL } from "@/utils/constants";
import ImageWithPreview from "@/components/common/ImageWithPreview";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const slug = searchParams.get("slug");

  const [countryDetail, setCountryDetail] = useState<any>({});

  useEffect(() => {
    if (!slug) return;
    const payload: any = { slug: slug, type: "start_application" };

    console.log("Fetching country detail with payload:", payload);
    axiosInstance
      .post(ENDPOINTS.country_detail, payload)
      .then((response: any) => {
        console.log("Received country detail response:", response);
        setCountryDetail(response.data.data);
      })
      .catch((error: any) => {
        console.error("Error fetching country detail:", error);
      });
  }, []);

 
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#E1EBF6] flex flex-col">
      <div className="max-w-7xl mx-auto w-full px-2 sm:px-4 md:px-8">
        {/* Header */}
        <div className="flex w-full justify-between mt-5 items-center flex-col sm:flex-row gap-4">
          <div className="flex justify-center sm:justify-start w-full sm:w-auto">
            <img
              src="/logo.png"
              alt="My Visa Mart"
              className="w-20 h-full  "
            />
          </div>
          <div className="flex justify-center sm:justify-end w-full sm:w-auto">
            <Link
              href="/home"
              className="px-4 py-2 sm:px-6 sm:py-2 border border-[#0A509F] text-[#0A509F] rounded-full hover:bg-[#0A509F] hover:text-white transition text-base sm:text-lg"
            >
              Home
            </Link>
          </div>
        </div>

        {/* Ribbon */}
        <div className="flex justify-center h-32 sm:h-44 md:h-52 relative mt-4 mb-4 sm:mb-8">
          <img
            src="/extra/Layer_1.png"
            alt="Ribbon"
            className="object-contain h-full w-full"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center gap-5">
            <div className="ml-5 font-madefor font-semibold text-[#022538] text-xl sm:text-2xl md:text-4xl px-2 text-center">
              {countryDetail?.name || "Country Name"}
            </div>
            <div>
              <ImageWithPreview
                src={countryDetail?.flag ? countryDetail.flag : undefined}
                alt={countryDetail?.name}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex w-full rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-20 items-center w-full">
            {/* Arch Image */}
            <div className="flex justify-center  ">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
                <ImageWithPreview
                  src={
                     (countryDetail?.round_image || "/extra/round_image.png")
                  }
                  alt={countryDetail?.name || "Country Name"}
                  className="w-full h-full object-cover z-10 rounded-t-full"
                />
              </div>
            </div>
            {/* Dynamic Content */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
