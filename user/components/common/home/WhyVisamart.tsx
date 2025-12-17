import React, { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

  import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";

import FAQ from "@/components/common/FAQ";
import { handleAxiosError } from "@/utils/common";




const WhyVisamart = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    const [faqs, setFaqs] = useState<any[]>([]);
  const getFaqs = async () => {
    await axiosInstance
      .post(ENDPOINTS.faqActive, {
        type: "agent_home",
      })
      .then((response: any) => {
        if (response?.data?.data) {
           setFaqs(response.data.data);
        }
      })
      .catch((error: any) => {
        handleAxiosError(error);
      })
      .finally(() => {
       });
  };

  useEffect(() => {
    getFaqs();
  }, []);

  return (
    <section className="min-h-screen   flex flex-col items-center justify-center px-0 py-0">
      {/* Why Visamart Section */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 py-16">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Why Visamart
          </h2>
          <p className="text-gray-600 mb-8">
            Here are lots of interesting destinations to visit, but don’t be
            confused—they’re already grouped by category.
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                All You Needs
              </h4>
              <p className="text-gray-500 max-w-md">
                Lorem Ipsum is simply dummy text. The best getaways and happiest
                Lorem Ipsum has been the industry’s standard dummy text ever.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Flexible Booking
              </h4>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Secure Payment
              </h4>
            </div>
          </div>
        </div>

        {/* Right Section (Illustration) */}
        <div className="flex justify-center items-center">
          <img
            src="/extra/Frame1100377394.png"
            alt="World map"
            className="w-full h-full object-contain opacity-90"
          />
        </div>
      </div>
     <FAQ faqData={faqs} />
    </section>
  );
};

export default WhyVisamart;
