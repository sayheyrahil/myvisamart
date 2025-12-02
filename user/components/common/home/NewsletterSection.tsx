import React from "react";
import { Send } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="w-full flex justify-center bg-[#f5f9ff] py-16 px-6">
      <div
        className="relative w-full max-w-5xl h-56 rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('./Frame1100377401.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-4 text-white px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Sign up to our newsletter
          </h2>
          <p className="text-sm sm:text-base text-gray-200 max-w-md">
            Receive travel news, updates, and many other things every week.
          </p>

          {/* Input box */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-md mt-3"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full m-1 transition"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
