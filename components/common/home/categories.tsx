import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Beach",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Temple",
    image:
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Iceberg",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Mountain",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Desert",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Forest",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
  },
];

const Categories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction:any) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] py-12 flex justify-center">
      <div className="w-[1170px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Categories</h2>
            <p className="text-gray-600 mt-2 max-w-xl">
              Here are lots of interesting destinations to visit, but don’t be
              confused—they’re already grouped by category.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="relative min-w-[200px] h-[300px] rounded-2xl overflow-hidden group flex-shrink-0"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
                <p className="text-lg font-medium">{cat.title}</p>
                <ArrowUpRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
