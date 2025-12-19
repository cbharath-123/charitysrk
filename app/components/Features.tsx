import React from 'react';
import FeatureCard from './FeatureCard';

export default function Features() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Titles */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-[#2B9BF4] tracking-wider mb-4">
            OUR FEATURES
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3D2817]">
            Lets come together to make a differnce
          </h1>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FeatureCard
            icon={
              <div className="w-12 h-12 bg-[#4ECDC4] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
            }
            title="Our Mission"
            description="To empower students through education, innovation, and holistic development."
          />

          <FeatureCard
            icon={
              <div className="w-12 h-12 bg-[#6B5FD8] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
            }
            title="Our Vision"
            description="To inspire young minds and build a better, knowledge-driven future."
          />

          <FeatureCard
            icon={
              <div className="w-12 h-12 bg-[#2B9BF4] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            }
            title="Our Values"
            description="Integrity, inclusivity, and commitment to excellence in every initiative."
          />
        </div>
      </div>
    </section>
  );
}
