import React, { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-[#F5F5F1] rounded-xl p-8 flex flex-col justify-between min-h-[320px]">
      {/* Icon and Title */}
      <div>
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-[#3D2817]">
            {title}
          </h3>
        </div>

        {/* Horizontal line */}
        <hr className="border-t-2 border-[#3D2817] w-12 mb-4" />

        {/* Description */}
        <p className="text-[rgba(58,23,0,0.5)] text-base leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Learn More Button */}
      <button suppressHydrationWarning className="bg-[#6B5FD8] hover:bg-[#5a4ec7] text-white font-semibold px-6 py-3 rounded-lg transition-colors w-fit">
        LEARN MORE
      </button>
    </div>
  );
}
