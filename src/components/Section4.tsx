import React from 'react';
import Image from 'next/image';

const RequestQuoteForm: React.FC = () => {
  return (
    <div className="w-full mx-auto px-3 sm:px-6 lg:px-36 py-6 sm:py-8 lg:py-10">
      <h2 className="text-center text-2xl sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10">
        REQUEST A QUOTE
      </h2>
      <form className="space-y-3 sm:space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          <div>
            <label htmlFor="name" className="block text-xs sm:text-sm mb-1 text-[#0E0D0D]">
              Name*
            </label>
            <input type="text" id="name" className="w-full p-2 sm:p-2.5 border rounded transition-all text-sm sm:text-base border-gray-300 bg-gray-100" value="" />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm mb-1 text-[#0E0D0D]">
              E-mail*
            </label>
            <input type="email" id="email" className="w-full p-2 sm:p-2.5 border rounded transition-all text-sm sm:text-base border-gray-300 bg-gray-100" value="" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs sm:text-sm mb-1 text-[#0E0D0D]">
              Phone Number*
            </label>
            <input type="tel" id="phone" className="w-full p-2 sm:p-2.5 border rounded transition-all text-sm sm:text-base border-gray-300 bg-gray-100" value="" />
          </div>
          <div>
            <label htmlFor="timeFrame" className="block text-xs sm:text-sm mb-1 text-[#0E0D0D]">
              Time Frame*
            </label>
            <div className="relative">
              <select id="timeFrame" className="w-full p-2 sm:p-2.5 border rounded appearance-none transition-all text-sm sm:text-base border-gray-300 bg-gray-100">
                <option value="" disabled selected>
                  Choose Time Frame
                </option>
                <option value="Urgent (1-2 weeks)">Urgent (1-2 weeks)</option>
                <option value="1 month">1 month</option>
                <option value="2-3 months">2-3 months</option>
                <option value="More than 3 months">More than 3 months</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <Image alt="Dropdown" loading="lazy" width={16} height={16} decoding="async" data-nimg="1" className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'transparent' }} src="/drop.svg" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="size" className="block text-xs sm:text-sm mb-1 text-[#0E0D0D]">
              Size*
            </label>
            <div className="relative">
              <select id="size" className="w-full p-2 sm:p-2.5 border rounded appearance-none transition-all text-sm sm:text-base border-gray-300 bg-gray-100">
                <option value="" disabled selected>
                  Choose Size
                </option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Custom">Custom</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <Image alt="Dropdown" loading="lazy" width={16} height={16} decoding="async" data-nimg="1" className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'transparent' }} src="/drop.svg" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="quantity" className="block text-xs sm:text-sm mb-1 text-[#0E0D0D]">
              Quantity*
            </label>
            <div className="relative">
              <select id="quantity" className="w-full p-2 sm:p-2.5 border rounded appearance-none transition-all text-sm sm:text-base border-gray-300 bg-gray-100">
                <option value="" disabled selected>
                  Choose Quantity
                </option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-100">51-100</option>
                <option value="101-500">101-500</option>
                <option value="500+">500+</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <Image alt="Dropdown" loading="lazy" width={16} height={16} decoding="async" data-nimg="1" className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'transparent' }} src="/drop.svg" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-xs sm:text-sm mb-1 text-[#0E0D0D]">
            Please Describe Your Project*
          </label>
          <textarea id="description" rows={4} placeholder="Tell us about your project requirements" className="w-full p-2 sm:p-2.5 border rounded transition-all text-sm sm:text-base border-gray-300 bg-gray-100"></textarea>
        </div>
        <div className="text-center text-xs sm:text-sm text-gray-600">
          By submitting this form you agree to our{' '}
          <a href="#" className="underline text-blue-600 hover:text-blue-800 transition-colors">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="underline text-blue-600 hover:text-blue-800 transition-colors">
            Privacy Policy
          </a>
          .
        </div>
        <div className="flex justify-center mt-2 sm:mt-4">
          <button type="submit" className="bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md flex items-center justify-center min-w-[140px] sm:min-w-[180px] text-sm sm:text-base relative overflow-hidden font-bold">
            Loerum Ipsum
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestQuoteForm;
