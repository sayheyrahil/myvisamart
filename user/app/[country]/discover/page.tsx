"use client";

import React, { useEffect, useState } from "react";
import MasterPage from "@/components/layouts/master";
import { WEB_URL } from "@/utils/constants";
// Fix import: use named import if axiosInstance is not default export
import { axiosInstance } from "@/utils/axios-instance";
import { ENDPOINTS } from "@/utils/constants";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "420px",
  borderRadius: "16px",
  overflow: "hidden",
};

const center = {
  lat: 24.0, // Centered near Dubai
  lng: 54.0,
};

export default function Page() {
  const [countryOptions, setCountryOptions] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false); // <-- Add this line

  // Fetch country names for select options
  useEffect(() => {
    axiosInstance
      .post(ENDPOINTS.countries_active, {
        is_popular: true,
      })
      .then((response: any) => {
        setCountryOptions(response.data.data || []);
      })
      .catch(() => {
        setCountryOptions([]);
      });
  }, []);

  // Google Maps API loader
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  return (
    <div className="min-h-screen bg-[#F6FBFF]">
      <MasterPage title="MyVisaMart - Your Gateway to Hassle-Free Visa Applications">
        {/* Top search/filter bar */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center  py-8 px-5">
          <div className="bg-white rounded-xl shadow px-6 py-4 flex flex-wrap  gap-4 mt-8 ">
            <div className="flex flex-col">
              <label className="text-xs font-medium mb-1">From</label>
              <input
                type="text"
                placeholder="Search"
                className="border rounded px-3 py-2 w-60"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-medium mb-1">To</label>
              <input
                type="text"
                placeholder="Search"
                className="border rounded px-3 py-2 w-60"
              />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow px-6 py-4 flex flex-wrap  gap-4 mt-8 ">
            <div className="flex flex-col">
              <label className="text-xs font-medium mb-1">Departing</label>
              <input
                type="text"
                placeholder="DD-MM-YYYY"
                className="border rounded px-3 py-2 w-60"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-medium mb-1">Returning</label>
              <input
                type="text"
                placeholder="DD-MM-YYYY"
                className="border rounded px-3 py-2 w-60"
              />
            </div>
            <button
              className="bg-[#2D7FE4] text-white px-6 py-2 rounded font-semibold mt-6 md:mt-0"
              onClick={() => setModalOpen(true)}
            >
              Search
            </button>
          </div>
        </div>

        {/* Main content: country cards + map */}
        <div className="flex flex-col md:flex-row gap-8 my-10">
          {/* Left: Country cards */}
          <div className="flex-1 flex flex-col gap-6">
            {[...countryOptions]
              .sort(() => Math.random() - 0.5) // shuffle array
              .slice(0, 4) // pick max 5
              .map((country) => (
                <div
                  key={country.id}
                  className="bg-white rounded-xl shadow flex gap-4 p-4 items-center"
                >
                  <img
                    src={WEB_URL + country.image}
                    alt={country.name}
                    className="w-28 h-28 object-cover rounded-lg"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-lg">{country.name}</div>
                    <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                      <span>⏱ {country.visa_process_time}</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-gray-400 line-through mr-2">
                        ${country.amount}
                      </span>
                      <span className="text-[#2D7FE4] font-bold text-xl">
                        ${country.pay_later_amount}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* Right: Map with countrys/cards */}
          <div className="flex-1">
            <div
              className="relative bg-white rounded-xl shadow"
              style={{ width: "100%", height: "420px" }}
            >
              {/* Google Map with markers */}
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={5}
                >
                  {[...countryOptions]
                    .filter((country) => country.latitude && country.longitude)
                    .map((country, idx) => (
                      <Marker
                        key={country.id || idx}
                        position={{
                          lat: country.latitude,
                          lng: country.longitude,
                        }}
                        label={{
                          text: country.name,
                          className:
                            "bg-white rounded-full px-2 py-1 text-xs font-semibold shadow",
                        }}
                      />
                    ))}
                </GoogleMap>
              ) : (
                // Fallback image while map loads
                <img
                  src="/images/map-bg.png"
                  alt="Map"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  style={{ zIndex: 1 }}
                />
              )}
              {/* Mapbox logo */}
              <div className="absolute left-2 bottom-2 text-xs text-gray-400 z-10">
                Ⓜ mapbox
              </div>
            </div>
          </div>
        </div>
      </MasterPage>
    </div>
  );
}
