import React from "react";

const videos = [
  {
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    alt: "Rick Astley - Never Gonna Give You Up",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
    alt: "PSY - GANGNAM STYLE",
    url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  },
  {
    thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
    alt: "Mark Ronson - Uptown Funk ft. Bruno Mars",
    url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
  },
  {
    thumbnail: "https://img.youtube.com/vi/L_jWHffIx5E/hqdefault.jpg",
    alt: "Coolio - Gangsta's Paradise",
    url: "https://www.youtube.com/watch?v=L_jWHffIx5E",
  },
  {
    thumbnail: "https://img.youtube.com/vi/fJ9rUzIMcZQ/hqdefault.jpg",
    alt: "Queen – Bohemian Rhapsody",
    url: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
  },
  {
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
    alt: "Luis Fonsi - Despacito ft. Daddy Yankee",
    url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
  },
  {
    thumbnail: "https://img.youtube.com/vi/OPf0YbXqDm0/hqdefault.jpg",
    alt: "Mark Ronson - Uptown Funk ft. Bruno Mars",
    url: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
  },
  {
    thumbnail: "https://img.youtube.com/vi/60ItHLz5WEA/hqdefault.jpg",
    alt: "Alan Walker - Faded",
    url: "https://www.youtube.com/watch?v=60ItHLz5WEA",
  },
  {
    thumbnail: "https://img.youtube.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
    alt: "Ed Sheeran - Perfect",
    url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
  },
  {
    thumbnail: "https://img.youtube.com/vi/CevxZvSJLk8/hqdefault.jpg",
    alt: "Katy Perry - Roar",
    url: "https://www.youtube.com/watch?v=CevxZvSJLk8",
  },
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
