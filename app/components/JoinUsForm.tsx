'use client';

import React, { useState } from 'react';
import FormInput from './FormInput';

export default function JoinUsForm() {
  const [userType, setUserType] = useState<'students' | 'other'>('students');

  return (
    <section className="relative bg-[#E4EBF5] w-full py-16 px-8 overflow-hidden">
      {/* Blue circle decoration - top right */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#009EFF] rounded-full z-0"></div>
      
      {/* Black striped pattern decoration - bottom right */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full overflow-hidden z-0">
        <div className="relative w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-1.5 bg-black/40 transform rotate-45"
              style={{ left: `${i * 20}px` }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Titles */}
        <div className="text-center mb-8">
          <p className="text-sm font-bold text-[#2B9BF4] tracking-wider mb-4">
            JOIN US
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-8">
            Be the change.
          </h1>
        </div>

        {/* Radio Button Options */}
        <div className="flex justify-center gap-8 mb-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="userType"
              value="students"
              checked={userType === 'students'}
              onChange={(e) => setUserType(e.target.value as 'students')}
              className="w-5 h-5 border-2 border-black accent-black cursor-pointer"
            />
            <span className="font-semibold text-[#2C3E50]">Students</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="userType"
              value="other"
              checked={userType === 'other'}
              onChange={(e) => setUserType(e.target.value as 'other')}
              className="w-5 h-5 border-2 border-black accent-black cursor-pointer"
            />
            <span className="font-semibold text-[#2C3E50]">Other/Faculty</span>
          </label>
        </div>

        {/* Form Grid */}
        <form className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Row 1 */}
            <FormInput placeholder="First Name" />
            <FormInput placeholder="Last Name" />

            {/* Row 2 */}
            <div className="md:col-span-2">
              <FormInput placeholder="Email" type="email" />
            </div>

            {/* Row 3 */}
            <FormInput placeholder="Phone number" type="tel" />
            <div className="md:col-span-1"></div>

            {/* Row 4 */}
            <FormInput placeholder="Qualification" />
            <FormInput placeholder="Specialization" />

            {/* Row 5 */}
            <div className="md:col-span-2">
              <FormInput placeholder="College Name" />
            </div>

            {/* Row 6 */}
            <div className="md:col-span-2">
              <FormInput placeholder="Address" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
