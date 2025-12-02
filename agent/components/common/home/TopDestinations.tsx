import React from "react";

const destinations = [
  {
    name: "Vietnam",
    subtitle: "Waterfall",
    rating: "3.5",
    image:
      "https://images.unsplash.com/photo-1528756514091-dee5ecaa3278?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Vietnam",
    subtitle: "Waterfall",
    rating: "3.5",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Vietnam",
    subtitle: "Waterfall",
    rating: "3.5",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Vietnam",
    subtitle: "Waterfall",
    rating: "3.5",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Vietnam",
    subtitle: "Waterfall",
    rating: "3.5",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Vietnam",
    subtitle: "Waterfall",
    rating: "3.5",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80",
  },
];

const filters = ["London", "Bangkok", "England", "Singapore", "Italy"];

const TopDestinations = () => {
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
            className="px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Destination Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
              index === 2 ? "lg:col-span-2" : ""
            }`}
          >
            <img
              src={dest.image}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDestinations;
