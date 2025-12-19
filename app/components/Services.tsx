import React from 'react';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section className="relative py-16 px-8 overflow-hidden">
      {/* Decorative blue circle - left side */}
      <div className="absolute left-0 top-32 w-32 h-32 bg-[#2B9BF4] rounded-full -translate-x-1/2 z-0"></div>
      
      {/* Decorative black squiggle line */}
      <svg 
        className="absolute left-8 top-20 w-24 h-32 z-0" 
        viewBox="0 0 100 120" 
        fill="none"
      >
        <path 
          d="M 20 20 Q 10 40, 20 60 T 20 100" 
          stroke="#000000" 
          strokeWidth="2.5" 
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Titles */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-[#2B9BF4] tracking-wider mb-4">
            OUR SERVICES
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3D2817]">
            Services We Provide
          </h1>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <ServiceCard
            icon={
              <div className="w-12 h-12 bg-[#4ECDC4] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
            }
            title="Academic Support"
            description="We support students of B.Tech, Diploma, MBA, and other courses through: Expert-Led classes Study materials (soft and hard copies), e-resources, project and research guidance for UG, PG, and Ph.D. students."
          />

          <ServiceCard
            icon={
              <div className="w-12 h-12 bg-[#6B5FD8] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
            }
            title="Program & Initiatives"
            description="We promote self-employment through training programs, offer GATE/IES/UPSC coaching with quality resources, and run incubation centres in Mechanical, Civil, and Electrical Engineering to foster innovation."
          />

          <ServiceCard
            icon={
              <div className="w-12 h-12 bg-[#2B9BF4] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
            }
            title="Skill Development"
            description="We offer diverse skill development programs through MoUs with various organizations, focusing on: Communication, Leadership, Interpersonal, Creative Professional growth."
          />

          <ServiceCard
            icon={
              <div className="w-12 h-12 bg-[#4ECDC4] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
            }
            title="Empowerment Programs"
            description="We conduct: Women Empowerment, Special Education, Faculty Development, Certificate Courses."
          />
        </div>
      </div>
    </section>
  );
}
