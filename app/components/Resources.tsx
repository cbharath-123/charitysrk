import React from 'react';

export default function Resources() {
  return (
    <section className="relative bg-[#F3F2E7] w-full py-16 px-8">
      {/* Decorative striped header at top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#2B9BF4] overflow-hidden">
        <div className="relative w-full h-full flex">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-full bg-black/60 transform -skew-x-45"
              style={{ marginLeft: '8px' }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8">
        {/* Section Titles */}
        <div className="mb-12">
          <p className="text-sm font-bold text-[#2B9BF4] tracking-wider mb-4">
            LINKS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3D2817]">
            Resources
          </h1>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=500&fit=crop"
                alt="Volunteer planting"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-center text-gray-600 mt-4 italic">Volunteer</p>
          </div>

          {/* Right Column - Resource Links */}
          <div className="w-full space-y-4">
            <div className="bg-[#E8CD9C] p-6 rounded-lg border-b-2 border-white">
              <h3 className="font-[family-name:var(--font-playfair)] text-[25px] font-bold text-[#252A34] mb-3">
                NPTEL(Mtls/Videos)
              </h3>
              <a 
                href="http://www.nptel.iitm.ac.in" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-montserrat)] text-base font-bold text-[#333333] hover:text-[#2B9BF4] transition-colors"
              >
                www.nptel.iitm.ac.in
              </a>
            </div>

            <div className="bg-[#E8CD9C] p-6 rounded-lg border-b-2 border-white">
              <h3 className="font-[family-name:var(--font-playfair)] text-[25px] font-bold text-[#252A34] mb-3">
                Vatual Labs
              </h3>
              <a 
                href="http://www.vlabs.ac.in/" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-montserrat)] text-base font-bold text-[#333333] hover:text-[#2B9BF4] transition-colors"
              >
                http://www.vlabs.ac.in/
              </a>
            </div>

            <div className="bg-[#E8CD9C] p-6 rounded-lg border-b-2 border-white">
              <h3 className="font-[family-name:var(--font-playfair)] text-[25px] font-bold text-[#252A34] mb-3">
                Abdulkalam
              </h3>
              <a 
                href="http://abdulkalam-----www.abdulkalam.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-montserrat)] text-base font-bold text-[#333333] hover:text-[#2B9BF4] transition-colors"
              >
                http://abdulkalam-----www.abdulkalam.com/
              </a>
            </div>

            <div className="bg-[#E8CD9C] p-6 rounded-lg">
              <h3 className="font-[family-name:var(--font-playfair)] text-[25px] font-bold text-[#252A34] mb-3">
                Jobs/Other Mtls(Sakshieducation)
              </h3>
              <a 
                href="http://www.sakshieducation.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-montserrat)] text-base font-bold text-[#333333] hover:text-[#2B9BF4] transition-colors"
              >
                http://www.sakshieducation.com/
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
