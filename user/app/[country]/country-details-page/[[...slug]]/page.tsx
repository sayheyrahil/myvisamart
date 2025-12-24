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
import PartnersWeWorkWithSection from "./PartnersWeWorkWithSection";
import RejectionReasonsSection from "./RejectionReasonsSection";
import WhatYouGetSection from "./WhatYouGetSection";
import VisaApprovalComparisonSection from "./VisaApprovalComparisonSection";
import WhySection from "./WhySection";
import HowWeReviewedSection from "./HowWeReviewedSection";
import ApprovalChancesSection from "./ApprovalChancesSection";
import AppointmentAvailabilitySection from "./AppointmentAvailabilitySection";

export default function Page() {
  // Get slug from URL params
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const [countryDetail, setCountryDetail] = useState<any>({});
  useEffect(() => {

    console.log("Fetching country details for slug:", slug);
    const payload: any = { slug: slug, type: "detail" };
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
    <MasterPage
      title={`Country Details Page | Visamart - ${countryDetail?.name || ""}`}
    >
      <div className="min-h-screen bg-bg py-10 px-5">
        <div className="max-w-6xl mx-auto space-y-10">
          {countryDetail?.image && (
            <Hero
              time={countryDetail?.visa_process_time || "N/A"}
              src={WEB_URL + countryDetail?.image}
            />
          )}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-3">
              {countryDetail?.visa_information &&
                countryDetail?.visa_information && (
                  <InfoCard
                    name={countryDetail?.name}
                    visa={countryDetail?.visa_information}
                  />
                )}
              {countryDetail?.get_a_guaranteed_visa_on && (
                <div>

                  <SectionHeading>Get a Guaranteed Visa on</SectionHeading>
                  {/* <div>{countryDetail.get_a_guaranteed_visa_on}</div> */}
                  <CalendarCard />
                </div>
              )}

              {countryDetail?.required_documents &&
                countryDetail?.required_documents.length > 0 && (
                  <RequiredDocumentsSection countryDetail={countryDetail} />
                )}
              {countryDetail?.partners_we_work_with &&
                countryDetail?.partners_we_work_with.length > 0 && (
                  <PartnersWeWorkWithSection
                    partners={countryDetail.partners_we_work_with}
                  />
                )}
              {countryDetail?.rejection_reasons &&
                countryDetail?.rejection_reasons.length > 0 && (
                  <RejectionReasonsSection
                    reasons={countryDetail.rejection_reasons}
                  />
                )}

              {countryDetail?.why && countryDetail?.why.length > 0 && (
                <WhySection why={countryDetail.why} />
              )}
              {countryDetail?.related_countries &&
                countryDetail?.related_countries.length > 0 && (
                  <RelatedCountriesSection countryDetail={countryDetail} />
                )}
              {countryDetail?.visa_fee_now ||
              countryDetail?.service_fee_now ||
              countryDetail?.visa_fee_later ||
              countryDetail?.service_fee_later ? (
                <PaymentSection countryDetail={countryDetail} />
              ) : null}
              {faqs && faqs.length > 0 && (
                <div className="mt-10">
                  <FAQ faqData={faqs} />
                </div>
              )}
              {countryDetail?.documents_required_process &&
                countryDetail?.documents_required_process.length > 0 && (
                  <DocumentsRequiredProcessSection
                    documents_required_process={
                      countryDetail?.documents_required_process
                    }
                  />
                )}
              {countryDetail?.transit_timeline &&
                countryDetail?.transit_timeline.length > 0 && (
                  <TransitTimelineSection countryDetail={countryDetail} />
                )}
              {countryDetail?.statistics_on_visa_processing_time ? (
                <VisaStatisticsCard
                  stats={{
                    statistics_on_visa_processing_time:
                      countryDetail?.statistics_on_visa_processing_time,
                    statistics_on_visa_approval_rating:
                      countryDetail?.statistics_on_visa_approval_rating,
                  }}
                  name={countryDetail?.name}
                />
              ) : null}

              {countryDetail?.related_countries &&
                countryDetail?.related_countries.length > 0 && (
                  <NearbyCountriesMap
                    countries={countryDetail?.related_countries || []}
                    name={countryDetail?.name}
                  />
                )}
              {countryDetail?.what_you_get &&
                countryDetail?.what_you_get.length > 0 && (
                  <WhatYouGetSection images={countryDetail.what_you_get} />
                )}
              {countryDetail?.visa_approval_comparison &&
              countryDetail?.visa_approval_comparison.rows?.length > 0 ? (
                <VisaApprovalComparisonSection
                  comparison={countryDetail.visa_approval_comparison}
                />
              ) : null}

              {/* How We Reviewed This Page Section */}
              {countryDetail?.how_we_reviewed_this_page_sources ||
              countryDetail?.how_we_reviewed_this_page_history ? (
                <HowWeReviewedSection
                  sources={countryDetail?.how_we_reviewed_this_page_sources}
                  history={countryDetail?.how_we_reviewed_this_page_history}
                />
              ) : null}
              {/* Approval Chances Section */}
              {countryDetail?.chances_of_approval_for_this ||
              countryDetail?.chances_of_approval_for_other ? (
                <ApprovalChancesSection
                  countryName={countryDetail?.name}
                  thisValue={countryDetail?.chances_of_approval_for_this}
                  otherValue={countryDetail?.chances_of_approval_for_other}
                />
              ) : null}
              {/* Appointment Availability Section */}
              {countryDetail?.check_appointment_availability && (
                <AppointmentAvailabilitySection
                  data={countryDetail?.check_appointment_availability}
                />
              )}
            </div>

            {countryDetail?.visa_fee_now ||
            countryDetail?.service_fee_now ||
            countryDetail?.visa_fee_later ||
            countryDetail?.service_fee_later ? (
              <div className="md:col-span-2">
                <PriceCard
                  detail={{
                    name: countryDetail?.name,
                    detail: countryDetail,
                    id: countryDetail?.id,
                    slug: countryDetail?.slug,
                    visa_fee_now: countryDetail?.visa_fee_now,
                    service_fee_now: countryDetail?.service_fee_now,
                    visa_fee_later: countryDetail?.visa_fee_later,
                    service_fee_later: countryDetail?.service_fee_later,
                    visa_process_time: countryDetail?.visa_process_time,
                  }}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </MasterPage>
  );
}
