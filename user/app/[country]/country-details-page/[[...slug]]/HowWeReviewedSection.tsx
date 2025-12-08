import React, { useState } from "react";

type Props = {
  sources?: string;
  history?: string;
};

const HowWeReviewedSection: React.FC<Props> = ({ sources, history }) => {
  const [tab, setTab] = useState<"sources" | "history">("sources");

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">How We Reviewed This Page</h2>
      <div className="flex items-center border-b mb-4">
        <button
          className={`flex items-center gap-2 px-4 py-2 border-b-2 transition ${
            tab === "sources"
              ? "border-brand text-brand font-semibold"
              : "border-transparent text-gray-500"
          }`}
          onClick={() => setTab("sources")}
        >
          <span className="material-icons-outlined text-lg">menu_book</span>
          SOURCES
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 border-b-2 transition ${
            tab === "history"
              ? "border-brand text-brand font-semibold"
              : "border-transparent text-gray-500"
          }`}
          onClick={() => setTab("history")}
        >
          <span className="material-icons-outlined text-lg">history</span>
          HISTORY
        </button>
      </div>
      <div>
        {tab === "sources" && (
          <div>
            <p className="mb-4 text-gray-700">
              Our experts continually monitor the official sources for any changes, and we update our articles when new information becomes available.
            </p>
            <div className="prose max-w-none">
              {/* Render sources as HTML or plain text */}
              {sources ? (
                <div dangerouslySetInnerHTML={{ __html: sources }} />
              ) : (
                <span className="text-gray-400">No sources provided.</span>
              )}
            </div>
          </div>
        )}
        {tab === "history" && (
          <div>
            {/* You can style this as a timeline or just render the HTML/history */}
            <div className="prose max-w-none">
              {history ? (
                <div dangerouslySetInnerHTML={{ __html: history }} />
              ) : (
                <span className="text-gray-400">No history provided.</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HowWeReviewedSection;
