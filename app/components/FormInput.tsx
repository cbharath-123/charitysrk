import React from 'react';

interface FormInputProps {
  placeholder: string;
  type?: string;
  className?: string;
}

export default function FormInput({ placeholder, type = 'text', className = '' }: FormInputProps) {
  return (
    <input
      suppressHydrationWarning
      type={type}
      placeholder={placeholder}
      className={`w-full bg-white rounded-xl px-6 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B9BF4] transition-all ${className}`}
    />
  );
}
