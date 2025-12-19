import React from 'react';

export default function Gallery() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Titles */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-[#2B9BF4] tracking-wider mb-4">
            OUR GALLERY
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3D2817]">
            Watch Our Gallery
          </h1>
        </div>

        {/* Masonry Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 max-w-6xl mx-auto">
          {/* Image 1 - Audience (left side, spans 2 rows) */}
          <div className="col-span-1 row-span-2 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=600&fit=crop"
              alt="Audience at event"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Image 2 - Main central video (spans 2 columns, 2 rows) */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-lg relative group">
            <img 
              src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop"
              alt="Children learning"
              className="w-full h-full object-cover"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-20 h-20 bg-[#2B9BF4] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Image 3 - Woman speaking (right side, spans 2 rows) */}
          <div className="col-span-1 row-span-2 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop"
              alt="Woman presenting"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Image 4 - Girl in field */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop"
              alt="Child in community"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Image 5 - Planting trees */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop"
              alt="Environmental activity"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Image 6 - Crowd/gathering */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop"
              alt="Community gathering"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Image 7 - Children studying */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop"
              alt="Students learning"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Explore All Button */}
        <div className="text-center mt-8">
          <button suppressHydrationWarning className="bg-white border-2 border-[#6B5FD8] text-[#6B5FD8] hover:bg-[#6B5FD8] hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            EXPLORE ALL
          </button>
        </div>
      </div>
    </section>
  );
}
