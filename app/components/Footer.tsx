import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Contact Information Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Phone Section */}
        <div className="bg-[#EAE9DA] p-8 flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-[#2B9BF4]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Phone</p>
            <p className="text-base font-semibold text-[#3D2817]">
              +91 93916 44227 / 095503 15713
            </p>
          </div>
        </div>

        {/* Email Section */}
        <div className="bg-[#E3E1CB] p-8 flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-[#2B9BF4]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Email</p>
            <p className="text-base font-semibold text-[#3D2817]">
              Srksocietys@gmail.com
            </p>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-[#CBC8AD] p-8 flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-[#2B9BF4]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Address</p>
            <p className="text-base font-semibold text-[#3D2817]">
              12345 Street<br />bole, Addis Ababa
            </p>
          </div>
        </div>
      </div>

      {/* Main Blue Footer Section */}
      <div className="bg-[#009EFF] py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 - Logo */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                SRKE<br />Society
              </h2>
            </div>

            {/* Column 2 - Menu */}
            <div>
              <h3 className="text-white font-bold uppercase mb-4 text-sm">
                MENU
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-white hover:text-gray-200 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white hover:text-gray-200 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-white hover:text-gray-200 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#join" className="text-white hover:text-gray-200 transition-colors">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Get In Touch */}
            <div>
              <h3 className="text-white font-bold uppercase mb-4 text-sm">
                GET IN TOUCH
              </h3>
              <a href="#contact" className="text-white hover:text-gray-200 transition-colors">
                Contact Us
              </a>
            </div>

            {/* Column 4 - Reach Out To Us */}
            <div>
              <h3 className="text-white font-bold mb-4 text-sm">
                Reach Out To Us
              </h3>
              <form className="space-y-3">
                <input
                  suppressHydrationWarning
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  suppressHydrationWarning
                  type="submit"
                  className="w-full bg-[#E63946] hover:bg-[#d62a37] text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Donate
                </button>
                <p className="text-xs text-white/80">
                  Your email is safe with us, we don't spam.
                </p>
              </form>
            </div>
          </div>

          {/* Copyright and Links */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              Copyright © Sai Radha Krishna Educational Society 2015
            </p>
            <div className="flex gap-6">
              <a href="#terms" className="text-white hover:text-gray-200 transition-colors text-sm">
                Terms of Use
              </a>
              <a href="#privacy" className="text-white hover:text-gray-200 transition-colors text-sm">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
