"use client";
import React, { useEffect, useState } from "react";
import MasterPage from "@/components/layouts/master";
import FAQ from "@/components/common/FAQ";
import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";
import VisamartTransparencyHubIntro from "./VisamartTransparencyHubIntro";
import TestimonialsSection from "./TestimonialsSection";
import WhereEveryCentGoes from "./WhereEveryCentGoes";
import CostBehindConvenience from "./CostBehindConvenience";
import OurEffortsYourExperience from "./OurEffortsYourExperience";
import SupportWhenThingsDontGo from "./SupportWhenThingsDontGo";
import CommonFrustrations from "./CommonFrustrations";
import SecurityComplianceAndVisaFees from "./SecurityComplianceAndVisaFees";
import EmpoweringKnowledge from "./EmpoweringKnowledge";
import YouTubeVideosThisMonth from "./YouTubeVideosThisMonth";

export default function Page() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const getFaqs = async () => {
    await axiosInstance
      .post(ENDPOINTS.faqActive, { type: "visamart-transparency-hub" })
      .then((response: any) => {
        if (response?.data?.data) setFaqs(response.data.data);
      })
      .catch(() => {});
  };
  useEffect(() => {
    getFaqs();
  }, []);

  return (
    <MasterPage title="Vietnam Visa Status Checker - Track Your E-Visa Application Online">
      <div>
        <VisamartTransparencyHubIntro />
        <TestimonialsSection />
        <WhereEveryCentGoes />
        <CostBehindConvenience />
        <OurEffortsYourExperience />
        <SupportWhenThingsDontGo />
        <CommonFrustrations />
        <SecurityComplianceAndVisaFees />
        <EmpoweringKnowledge />
        <YouTubeVideosThisMonth />
        {/* FAQ Section */}
        {faqs && faqs.length > 0 && (
          <div className="mt-10">
            <FAQ faqData={faqs} />
          </div>
        )}
      </div>
    </MasterPage>
  );
}
