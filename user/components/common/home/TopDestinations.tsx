import React from "react";
import { useCallback, useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

 import { WEB_URL } from "@/utils/constants";
// Fix import: use named import if axiosInstance is not default export
import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";
  

const filters = [
  "Asia",
  "Africa",
  "North America",
  "South America",
  "Antarctica",
  "Europe",
  "Australia",
];

const TopDestinations = () => {
  const [countryOptions, setCountryOptions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<string>(""); // Track selected continent
  const ITEMS_PER_PAGE = 6;

  // Fetch countries when filter changes
  React.useEffect(() => {
    const payload: any = {   };
    if (selectedFilter) {
      payload.continent = selectedFilter;
    }
    axiosInstance.post(ENDPOINTS.countries_active, payload)
      .then((response: any) => {
        setCountryOptions(response.data.data || []);
        setCurrentIndex(0); // Reset slider on filter change
      })
      .catch(() => {
        setCountryOptions([]);
      });
  }, [selectedFilter]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - ITEMS_PER_PAGE, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + ITEMS_PER_PAGE, countryOptions.length - ITEMS_PER_PAGE)
    );
  };

  const visibleCountries = countryOptions.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);

  return (
    <section className="min-h-screen bg-[#f5f9ff] flex flex-col items-center px-8 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          Top Destinations
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Sost Brilliant reasons Entrada should be your one-stop-shop!
        </p>
      </div>
       {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((filter, index) => (
           <button
            key={index}
            className={`px-5 py-2 border text-brand rounded-full transition ${selectedFilter === filter ? "bg-brand text-white" : "bg-white "
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Slider Controls */}
      <div className="flex justify-end w-full max-w-6xl mb-4">
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

      {/* Destination Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {visibleCountries.length === 0 ? (
          <div className="col-span-3 text-center text-gray-500 py-12">
            No data found.
          </div>
        ) : (
          visibleCountries.map((dest, index) => (
            <Link
              key={index}
              href={`/country-details-page/${dest.slug}`}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 block"
            >
              <img
                src={WEB_URL + dest.image}
                alt={dest.name}
                className="w-full h-64 object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Rating */}
              <div className="absolute top-3 left-3 bg-white/80 text-gray-900 text-sm font-semibold px-2 py-1 rounded-md backdrop-blur-sm">
                {dest.rating}
              </div>
              {/* Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{dest.name}</h3>
                <p className="text-sm text-gray-200">{dest.subtitle}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default TopDestinations;
