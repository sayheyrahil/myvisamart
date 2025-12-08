"use client";
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import InfoCard from "./InfoCard";
import PriceCard from "./PriceCard";
import SectionHeading from "@/components/tools/SectionHeading";
import { useParams } from "next/navigation";
import MasterPage from "@/components/layouts/master";
import { WEB_URL } from "@/utils/constants";
import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";
import FAQ from "@/components/common/FAQ";
import VisaStatisticsCard from "./VisaStatisticsCard";
import CalendarCard from "./CalendarCard";
// Import new components
import RequiredDocumentsSection from "./RequiredDocumentsSection";
import RelatedCountriesSection from "./RelatedCountriesSection";
import PaymentSection from "./PaymentSection";
import TransitTimelineSection from "./TransitTimelineSection";
import NearbyCountriesMap from "./NearbyCountriesMap";
import DocumentsRequiredProcessSection from "./DocumentsRequiredProcessSection";

export default function Page() {
  // Get slug from URL params
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const [countryDetail, setCountryDetail] = useState<any>({});
  useEffect(() => {
    const payload: any = { slug: slug };
    axiosInstance
      .post(ENDPOINTS.country_detail, payload)
      .then((response: any) => {
        setCountryDetail(response.data.data);
      })
      .catch(() => setCountryDetail({}));
  }, []);
  const [faqs, setFaqs] = useState<any[]>([]);
  const getFaqs = async () => {
    await axiosInstance
      .post(ENDPOINTS.faqActive, { type: slug })
      .then((response: any) => {
        if (response?.data?.data) setFaqs(response.data.data);
      })
      .catch(() => {});
  };
  useEffect(() => {
    getFaqs();
  }, []);

  console.log("countryDetail", countryDetail);

  return (
    <MasterPage title={`Country Details Page | Visamart - ${countryDetail?.name || ""}`}>
      <div className="min-h-screen bg-bg py-10 px-5">
        <div className="max-w-6xl mx-auto space-y-10">
          {countryDetail?.image && (
            <Hero time={countryDetail?.visa_process_time || "N/A"} src={WEB_URL + countryDetail?.image} />
          )}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-3 bg-red-900">
              {countryDetail?.visa_information && countryDetail?.visa_information && (
                <InfoCard name={countryDetail?.name} visa={countryDetail?.visa_information} />
              )}
              <div className="space-y-4 mt-5">
                {countryDetail?.get_a_guaranteed_visa_on && (
                  <>
                    <SectionHeading>Get a Guaranteed Visa on</SectionHeading>
                    <CalendarCard />
                  </>
                )}
                {/* ...existing code for CalendarCard... */}
              </div>
              {countryDetail?.required_documents && countryDetail?.required_documents.length > 0 && (
                <RequiredDocumentsSection countryDetail={countryDetail} />
              )}
              {countryDetail?.related_countries && countryDetail?.related_countries.length > 0 && (
                <RelatedCountriesSection countryDetail={countryDetail} />
              )}
              {(countryDetail?.visa_fee_now || countryDetail?.service_fee_now || countryDetail?.visa_fee_later || countryDetail?.service_fee_later) && (
                <PaymentSection countryDetail={countryDetail} />
              )}
              {faqs && faqs.length > 0 && (
                <div className="mt-10">
                  <FAQ faqData={faqs} />
                </div>
              )}
              {countryDetail?.documents_required_process && countryDetail?.documents_required_process.length > 0 && (
                <DocumentsRequiredProcessSection documents_required_process={countryDetail?.documents_required_process} />
              )}
              {countryDetail?.transit_timeline && countryDetail?.transit_timeline.length > 0 && (
                <TransitTimelineSection countryDetail={countryDetail} />
              )}
              {countryDetail?.statistics && (
                <VisaStatisticsCard stats={countryDetail?.statistics} name={countryDetail?.name} />
              )}
              {countryDetail?.related_countries && countryDetail?.related_countries.length > 0 && (
                <NearbyCountriesMap countries={countryDetail?.related_countries || []} name={countryDetail?.name} />
              )}
            </div>
            <div className="md:col-span-2">
              {(countryDetail?.visa_fee_now ||
                countryDetail?.service_fee_now ||
                countryDetail?.visa_fee_later ||
                countryDetail?.service_fee_later) && (
                <PriceCard
                  detail={{
                    name: countryDetail?.name,
                    detail: countryDetail,
                    visa_fee_now: countryDetail?.visa_fee_now,
                    service_fee_now: countryDetail?.service_fee_now,
                    visa_fee_later: countryDetail?.visa_fee_later,
                    service_fee_later: countryDetail?.service_fee_later,
                    visa_process_time: countryDetail?.visa_process_time,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </MasterPage>
  );
}
