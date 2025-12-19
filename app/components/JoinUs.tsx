import React from 'react';

export default function JoinUs() {
  return (
    <section className="relative bg-[#009EFF] w-full py-16 px-8 overflow-hidden">
      {/* Decorative diagonal stripes pattern */}
      <div className="absolute top-0 right-1/3 w-96 h-full">
        <div className="relative w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-1 bg-black/30 transform rotate-45"
              style={{ left: `${i * 25}px` }}
            />
          ))}
        </div>
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        {/* Left side - Title */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Join Us
          </h2>
        </div>

        {/* Right side - Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button suppressHydrationWarning className="bg-white text-[#009EFF] hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2">
            BECOME VOLUNTEER
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </button>

          <button suppressHydrationWarning className="bg-white text-[#E63946] hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2">
            DONATE NOW
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
