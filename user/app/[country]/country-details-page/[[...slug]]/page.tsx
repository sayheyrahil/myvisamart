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

  return (
    <MasterPage title={`Country Details Page | Visamart - ${countryDetail?.name || ""}`}>
      <div className="min-h-screen bg-bg py-10 px-5">
        <div className="max-w-6xl mx-auto space-y-10">
          <Hero time={countryDetail?.visa_process_time || "N/A"} src={WEB_URL + countryDetail?.image} />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-3">
              <InfoCard name={countryDetail?.name} visa={countryDetail?.visa_information} />
              <div className="space-y-4 mt-5">
                <SectionHeading>Get a Guaranteed Visa on</SectionHeading>
                <CalendarCard />
                {/* ...existing code for CalendarCard... */}
              </div>
              <RequiredDocumentsSection countryDetail={countryDetail} />
              <RelatedCountriesSection countryDetail={countryDetail} />
              <PaymentSection countryDetail={countryDetail} />
              <div className="mt-10">
                <FAQ faqData={faqs} />
              </div>
              <DocumentsRequiredProcessSection documents_required_process={countryDetail?.documents_required_process} />
              <TransitTimelineSection countryDetail={countryDetail} />
              <VisaStatisticsCard stats={countryDetail?.statistics} name={countryDetail?.name} />
              <NearbyCountriesMap countries={countryDetail?.related_countries || []}  name={countryDetail?.name} />
            </div>
            <div className="md:col-span-2">
              <PriceCard detail={countryDetail} />
            </div>
          </div>
        </div>
      </div>
    </MasterPage>
  );
}
