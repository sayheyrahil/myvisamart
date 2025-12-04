"use client";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import Hero from "./Hero";
import InfoCard from "./InfoCard";
import PriceCard from "./PriceCard";
import CalendarCard from "./CalendarCard";
import SectionHeading from "@/components/tools/SectionHeading";
import Image from "next/image";
import { useParams } from "next/navigation";
import MasterPage from "@/components/layouts/master";
import { WEB_URL } from "@/utils/constants";
import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";
import FAQ from "@/components/common/FAQ";

export default function Page() {
  // Get slug from URL params
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const [countryDetail, setCountryDetail] = useState<any>({});
  React.useEffect(() => {
    const payload: any = { slug: slug };

    axiosInstance
      .post(ENDPOINTS.country_detail, payload)
      .then((response: any) => {
        setCountryDetail(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching country details", error);
        setCountryDetail({});
      });
  }, []);
  const [faqs, setFaqs] = useState<any[]>([]);
  const getFaqs = async () => {
    await axiosInstance
      .post(ENDPOINTS.faqActive, {
        type: slug,
      })
      .then((response: any) => {
        if (response?.data?.data) {
          setFaqs(response.data.data);
        }
      })
      .catch((error: any) => {
        handleAxiosError(error);
      })
      .finally(() => {});
  };

  useEffect(() => {
    getFaqs();
  }, []);

  console.log("countryDetai111111", countryDetail);
  return (
    <MasterPage
      title={`Country Details Page | Visamart - ${countryDetail?.name || ""}`}
    >
      <div className="min-h-screen bg-bg py-10 px-5">
        <div className="max-w-6xl mx-auto space-y-10">
          <Hero
            time={countryDetail?.visa_process_time || "N/A"}
            src={WEB_URL + countryDetail?.image}
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-3">
              <InfoCard
                name={countryDetail?.name}
                visa={countryDetail?.visa_information}
              />
              <div className="space-y-4 mt-5">
                <SectionHeading>Get a Guaranteed Visa on</SectionHeading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CalendarCard />
                </div>
              </div>
              {/* Required Documents Section */}
              <div className="max-w-6xl mx-auto mt-10  rounded-2xl   p-6">
                <SectionHeading>Required Documents</SectionHeading>
                <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  {Array.isArray(countryDetail?.required_documents) &&
                  countryDetail.required_documents.length > 0 ? (
                    countryDetail.required_documents.map(
                      (doc: any, idx: number) => {
                        // Remove console.log from JSX return
                        return (
                          <div
                            key={idx + Math.random()}
                            className="flex-1 bg-white mt-5 rounded-xl p-6 flex flex-col items-center shadow"
                          >
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                              {doc.icon ? (
                                <img
                                  src={WEB_URL + doc.icon}
                                  alt={doc.title || "Document Icon"}
                                  className="w-16 h-16 object-contain rounded-full"
                                />
                              ) : (
                                // fallback icon
                                <svg
                                  width="32"
                                  height="32"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    fill="#0A509F"
                                  />
                                </svg>
                              )}
                            </div>
                            <div className="font-semibold text-[#1A355A] text-base mb-1">
                              {doc.title || `Document ${idx + 1}`}
                            </div>
                            <div className="text-gray-500 text-sm text-center">
                              {doc.description || ""}
                            </div>
                          </div>
                        );
                      }
                    )
                  ) : (
                    <>
                      {/* ...existing code for static cards as fallback... */}
                    </>
                  )}
                </div>
                {/* What is TDAC Section */}
                <SectionHeading>What is TDAC ?</SectionHeading>
                <div className="text-gray-700 text-base my-6 ">
                  TDAC stands for the Thailand Digital Arrival Card, a mandatory
                  digital process that all travellers must fill before
                  travelling to Thailand. T DAC serves as an official record of
                  the travellers entry.
                </div>
                {/* Check Appointment availability */}
                <SectionHeading>Check Appointment availability</SectionHeading>
                <div className="flex items-center gap-2 my-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2 inline-block"></span>
                    7 slots left for 6th Oct!
                  </span>
                </div>
              </div>
              {/* Appointment & Payment Section */}
              <div className="max-w-6xl mx-auto mt-10">
                {/* Payment Methods & Breakdown */}
                <div className="space-y-6">
                  {/* Pay Now */}
                  <div className="bg-[#EEEEEE] rounded-2xl shadow p-1">
                    <div className="flex items-center  gap-5 p-4 ">
                      <span className="text-xs font-semibold text-gray-500">
                        Acceptable Payment Methods:
                      </span>
                      <div className="flex gap-2">
                        <span className="bg-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                          <span className="i-mdi:credit-card-outline" />{" "}
                          Credit/Debit
                        </span>
                        <span className="bg-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                          <span className="i-mdi:upi" /> UPI
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-4 ">
                      <div className="font-semibold text-[#1A355A] mb-2">
                        Pay Now on Atlys
                      </div>
                      <div className="flex justify-between text-sm mb-1 border-b pb-1">
                        <div>
                          <span>Appointment Fee x 1</span>
                          <div className="text-xs text-gray-400">
                            Paid to government | Zero commission
                          </div>
                        </div>
                        <span className="font-semibold">
                          ₹
                          {countryDetail?.visa_fee_now
                            ? countryDetail.visa_fee_now.toLocaleString()
                            : "0"}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span>Atlys Service Fee</span>
                        <span className="font-semibold">
                          ₹
                          {countryDetail?.service_fee_now
                            ? countryDetail.service_fee_now.toLocaleString()
                            : "0"}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Pay Later */}
                  <div className="bg-[#EEEEEE] rounded-2xl shadow p-1">
                    <div className="flex items-center  gap-5   p-4">
                      <span className="text-xs font-semibold text-gray-500">
                        Acceptable Payment Methods:
                      </span>
                      <div className="flex gap-2">
                        <span className="bg-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                          <span className="i-mdi:credit-card-outline" />{" "}
                          Credit/Debit
                        </span>
                        <span className="bg-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                          <span className="i-mdi:upi" /> UPI
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow p-4 ">
                      <div className="font-semibold text-[#1A355A] mb-2">
                        Pay Later At Appointment Center
                      </div>
                      <div className="flex justify-between text-sm mb-1 border-b pb-1">
                        <div>
                          <span>Visa Fee</span>
                          <div className="text-xs text-gray-400">
                            Paid in person directly to a government official |
                            May vary
                          </div>
                        </div>
                        <span className="font-semibold">
                          ₹
                          {countryDetail?.visa_fee_later
                            ? countryDetail.visa_fee_later.toLocaleString()
                            : "0"}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span>Atlys Service Fee</span>
                        <span className="font-semibold">
                          ₹
                          {countryDetail?.service_fee_later
                            ? countryDetail.service_fee_later.toLocaleString()
                            : "0"}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Total */}
                  <div className="bg-[#F4F8FB] rounded-2xl shadow p-4 flex justify-between items-center mt-2 border border-blue-200">
                    <span className="font-semibold text-[#1A355A]">
                      Total Amount for one Traveller
                    </span>
                    <span className="font-bold text-blue-700 text-lg">
                      ₹
                      {(
                        (countryDetail?.visa_fee_now || 0) +
                        (countryDetail?.service_fee_now || 0)
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <FAQ faqData={faqs} />
              </div>
            </div>
            <div className="md:col-span-2">
              <PriceCard detail={countryDetail} />
            </div>
          </div>

          {/* Reviews Section */}
        </div>
      </div>
    </MasterPage>
  );
}
