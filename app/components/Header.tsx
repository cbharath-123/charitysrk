import React from 'react';

export default function Header() {
  return (
    <nav className="w-full px-8 py-6 flex items-center justify-between">
      {/* Logo on the left */}
      <div className="text-2xl font-bold text-gray-800">
        SRKE Society
      </div>

      {/* Navigation links in the middle */}
      <div className="flex gap-8">
        <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
          About
        </a>
        <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">
          Services
        </a>
        <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">
          Features
        </a>
        <a href="#gallery" className="text-gray-700 hover:text-gray-900 transition-colors">
          Gallery
        </a>
        <a href="#join" className="text-gray-700 hover:text-gray-900 transition-colors">
          Join Us
        </a>
      </div>

      {/* Contact button on the right */}
      <button suppressHydrationWarning className="px-6 py-2 border-2 border-gray-700 rounded-lg text-gray-700 hover:bg-gray-700 hover:text-white transition-colors">
        CONTACT
      </button>
    </nav>
  );
}
