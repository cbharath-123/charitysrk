import React from 'react';

export default function CharitySection() {
  return (
    <section className="relative bg-[#F3F2E7] w-full py-16 px-8 overflow-hidden">
      {/* Large blue geometric shapes on left and right edges */}
      <div className="absolute left-0 top-0 w-32 h-full bg-[#009EFF] transform -skew-x-12 -translate-x-16 z-0"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#009EFF] transform rotate-45 translate-x-48 translate-y-32 z-0"></div>
      
      {/* Light colored circle in top-left */}
      <div className="absolute top-8 left-16 w-32 h-32 bg-[#D4CDB7] rounded-full z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-sm font-bold text-[#2B9BF4] tracking-wider">
              CHARITY
            </p>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#3D2817] leading-tight">
              Giving help to those who need it
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Charity is the act of giving help to those in need of it. It is a humanitarian act.
            </p>
            
            <button suppressHydrationWarning className="bg-white border-2 border-[#2B9BF4] text-[#2B9BF4] hover:bg-[#2B9BF4] hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              MAKE A DONATION
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[500px]">
            {/* Squiggle line - top left of image */}
            <svg 
              className="absolute -top-8 left-8 w-32 h-32 z-10" 
              viewBox="0 0 120 120" 
              fill="none"
            >
              <path 
                d="M 20 60 Q 40 20, 60 60 T 100 60" 
                stroke="#000000" 
                strokeWidth="2.5" 
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Diagonal stripes - bottom left behind image */}
            <div className="absolute bottom-8 left-0 w-40 h-40 z-0">
              <div className="relative w-full h-full">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-full w-1 bg-black/40 transform -rotate-45"
                    style={{ left: `${i * 16}px` }}
                  />
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className="relative z-20 w-full h-full flex items-center justify-center">
              <div className="relative w-[400px] h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=600&fit=crop"
                  alt="Child in need"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
