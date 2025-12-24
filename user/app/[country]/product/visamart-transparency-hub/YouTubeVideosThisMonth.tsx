import React from "react";

const videos = [
  {
    thumbnail: "/videos/video1.jpg",
    alt: "Video 1",
    url: "https://youtube.com/watch?v=video1",
  },
  {
    thumbnail: "/videos/video2.jpg",
    alt: "Video 2",
    url: "https://youtube.com/watch?v=video2",
  },
  {
    thumbnail: "/videos/video3.jpg",
    alt: "Video 3",
    url: "https://youtube.com/watch?v=video3",
  },
  // Add more as needed
];

export default function YouTubeVideosThisMonth() {
  return (
    <div className="bg-[#F7FAFC] py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
        YouTube Videos<br />Released This Month
      </h2>
      <div className="flex gap-6 overflow-x-auto pb-2">
        {videos.map((video, idx) => (
          <a
            key={idx}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block flex-shrink-0"
            style={{ width: 240, height: 180 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow">
              <img
                src={video.thumbnail}
                alt={video.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-40 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.7" />
                    <polygon points="13,11 23,16 13,21" fill="#18181B" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
