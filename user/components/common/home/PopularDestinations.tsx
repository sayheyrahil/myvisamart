import * as React from "react"
import { useCallback, useEffect, useState } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react";
import { WEB_URL } from "@/utils/constants";
// Fix import: use named import if axiosInstance is not default export
import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";

const PopularDestinations = () => {
  const [countryOptions, setCountryOptions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ITEMS_PER_PAGE = 6;

  // Fetch country names for select options
  useEffect(() => {
     axiosInstance.post(ENDPOINTS.countries_active , {
      is_popular : true,
     })
      .then((response: any) => {
        setCountryOptions(response.data.data || []);
      })
      .catch(() => {
        setCountryOptions([]);
      });
  }, []);

  // Arrow navigation handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - ITEMS_PER_PAGE, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + ITEMS_PER_PAGE, countryOptions.length - ITEMS_PER_PAGE)
    );
  };

  // Slice countries for current "page"
  const visibleCountries = countryOptions.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);

  return (
    <section className="min-h-screen bg-[#f5f9ff] flex flex-col items-center px-8 py-12">
      {/* Title */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-900">
          Find Popular Destination
        </h2>
        <div className="flex space-x-3">
          <button
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <ArrowLeft className="text-gray-700 w-5 h-5" />
          </button>
          <button
            className="p-2 bg-brand rounded-full shadow-md   transition"
            onClick={handleNext}
            disabled={currentIndex + ITEMS_PER_PAGE >= countryOptions.length}
          >
            <ArrowRight className="text-white w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8 w-full max-w-6xl">
        {visibleCountries.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <img
              src={WEB_URL + item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">{item.subtitle}</p>
              <p className="text-sm font-semibold text-gray-900">
                {item.rating ? `Rating: ${item.rating}` : ""}
              </p>
              <div className="flex justify-end">
                <button className="p-2 mt-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
