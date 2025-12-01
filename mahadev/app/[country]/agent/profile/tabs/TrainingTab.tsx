import React from "react";

export default function TrainingTab() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-3xl font-semibold mb-10 text-[#101828]">Video Tutorials</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "How to apply for a visa?",
            thumb: "/video-placeholder.png",
          },
          {
            title: "How to load your wallet?",
            thumb: "/video-placeholder.png",
          },
          {
            title: "How to see your transactions?",
            thumb: "/video-placeholder.png",
          },
          {
            title: "How to create a support ticket?",
            thumb: "/video-placeholder.png",
          },
        ].map((video, i) => (
          <div key={i} className="flex flex-col items-start">
            <div className="w-full aspect-video bg-gray-200 rounded-2xl shadow relative overflow-hidden flex items-center justify-center">
              <img
                src={video.thumb}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <button
                className="z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white/80 hover:bg-white transition"
                aria-label="Play"
              >
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="16" fill="#fff" fillOpacity="0.7"/>
                  <polygon points="13,10 24,16 13,22" fill="#174ea6"/>
                </svg>
              </button>
            </div>
            <div className="mt-3 text-[#101828] text-base font-medium">{video.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
