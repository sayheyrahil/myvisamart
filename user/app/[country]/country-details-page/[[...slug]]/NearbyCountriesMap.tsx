import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import SectionHeading from "@/components/tools/SectionHeading";

const containerStyle = {
  width: "100%",
  height: "350px",
  borderRadius: "16px",
  overflow: "hidden",
};

const center = {
  lat: 24.0, // Centered near Dubai
  lng: 54.0,
};

export default function NearbyCountriesMap({
  countries,
  name,
}: {
  countries: any[];
  name: string;
}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "", // Set your API key in .env
  });

  return (
    <div className="my-10">
      <div className="mb-4">
        <SectionHeading>Nearby countries to {name}</SectionHeading>
      </div>

      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
          {countries.map(
            (country, idx) =>
              country.latitude &&
              country.longitude && (
                <Marker
                  key={country.id || idx}
                  position={{ lat: country.latitude, lng: country.longitude }}
                  label={{
                    text: country.name,
                    className:
                      "bg-white rounded-full px-2 py-1 text-xs font-semibold shadow",
                  }}
                />
              )
          )}
        </GoogleMap>
      )}
    </div>
  );
}
