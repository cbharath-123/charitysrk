import React, { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-[#F5F5F1] p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
      {/* Icon and Title Row */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#3D2817] flex-1">
          {title}
        </h3>
      </div>

      {/* Horizontal line */}
      <hr className="border-t-2 border-[#3D2817] w-12 mb-4" />

      {/* Description */}
      <p className="text-[rgba(58,23,0,0.5)] text-base leading-8">
        {description}
      </p>
    </div>
  );
}
