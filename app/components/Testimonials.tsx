'use client';

import React, { useState } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Education is not learning facts not training of mind to think",
      author: "Albert Einstein",
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
      ]
    }
  ];

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="relative bg-[#F3F2E7] w-full py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Titles */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-[#2B9BF4] tracking-wider mb-4">
            INSPIRATION
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3D2817]">
            What Our Leaders Say
          </h1>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-12 pt-20">
          {/* Large Quotation Mark Icon */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <svg className="w-20 h-20 text-[#2B9BF4]" fill="currentColor" viewBox="0 0 100 100">
              <text x="50" y="75" fontSize="80" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="bold">
                "
              </text>
            </svg>
          </div>

          {/* Quote Text */}
          <p className="text-center text-2xl font-bold text-[#3D2817] mb-8 leading-relaxed">
            {currentTestimonial.quote}
          </p>

          {/* Decorative Line */}
          <div className="w-16 h-1 bg-[#3D2817] mx-auto mb-8"></div>

          {/* Author Images */}
          <div className="flex justify-center gap-3 mb-4">
            {currentTestimonial.images.map((img, idx) => (
              <div key={idx} className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                <img 
                  src={img}
                  alt={`Leader ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Author Name */}
          <p className="text-center text-lg font-bold text-[#3D2817]">
            {currentTestimonial.author}
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
            className="w-12 h-12 rounded-full border-2 border-[#2B9BF4] text-[#2B9BF4] flex items-center justify-center hover:bg-[#2B9BF4] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={() => setCurrentSlide(Math.min(testimonials.length - 1, currentSlide + 1))}
            disabled={currentSlide === testimonials.length - 1}
            className="w-12 h-12 rounded-full border-2 border-[#2B9BF4] text-[#2B9BF4] flex items-center justify-center hover:bg-[#2B9BF4] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
