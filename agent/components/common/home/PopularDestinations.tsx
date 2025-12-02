import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const destinations = [
  {
    name: "United Arab Emirates",
    date: "18 Sep, 11:00 PM",
    image:
      "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Thailand",
    date: "18 Sep, 11:00 PM",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Switzerland",
    date: "18 Sep, 11:00 PM",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Vietnam",
    date: "18 Sep, 11:00 PM",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Indonesia",
    date: "18 Sep, 11:00 PM",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Oman",
    date: "18 Sep, 11:00 PM",
    image:
      "https://images.unsplash.com/photo-1614028674026-a65e5c404c77?auto=format&fit=crop&w=800&q=80",
  },
];

const PopularDestinations = () => {
  return (
    <section className="min-h-screen bg-[#f5f9ff] flex flex-col items-center px-8 py-12">
      {/* Title */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-900">
          Find Popular Destination
        </h2>

        <div className="flex space-x-3">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
            <ArrowLeft className="text-gray-700 w-5 h-5" />
          </button>
          <button className="p-2 bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition">
            <ArrowRight className="text-white w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">Get it on</p>
              <p className="text-sm font-semibold text-gray-900">
                {item.date}
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
