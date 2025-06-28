import React from 'react';
import Image from 'next/image';

const RequestQuoteForm: React.FC = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-36 py-6 sm:py-8 md:py-10 lg:py-12">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[42px] font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 uppercase tracking-tight">
        REQUEST A QUOTE
      </h2>
      <form className="space-y-4 sm:space-y-5 md:space-y-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          <div>
            <label htmlFor="name" className="block text-sm sm:text-base mb-2 text-[#0E0D0D] font-medium">
              Name*
            </label>
            <input type="text" id="name" className="w-full p-3 sm:p-3.5 md:p-4 border rounded-lg transition-all duration-200 text-sm sm:text-base border-gray-300 bg-gray-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none" value="" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm sm:text-base mb-2 text-[#0E0D0D] font-medium">
              E-mail*
            </label>
            <input type="email" id="email" className="w-full p-3 sm:p-3.5 md:p-4 border rounded-lg transition-all duration-200 text-sm sm:text-base border-gray-300 bg-gray-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none" value="" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm sm:text-base mb-2 text-[#0E0D0D] font-medium">
              Phone Number*
            </label>
            <input type="tel" id="phone" className="w-full p-3 sm:p-3.5 md:p-4 border rounded-lg transition-all duration-200 text-sm sm:text-base border-gray-300 bg-gray-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none" value="" />
          </div>
          <div>
            <label htmlFor="timeFrame" className="block text-sm sm:text-base mb-2 text-[#0E0D0D] font-medium">
              Time Frame*
            </label>
            <div className="relative">
              <select id="timeFrame" className="w-full p-3 sm:p-3.5 md:p-4 border rounded-lg appearance-none transition-all duration-200 text-sm sm:text-base border-gray-300 bg-gray-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none cursor-pointer">
                <option value="" disabled selected>
                  Choose Time Frame
                </option>
                <option value="Urgent (1-2 weeks)">Urgent (1-2 weeks)</option>
                <option value="1 month">1 month</option>
                <option value="2-3 months">2-3 months</option>
                <option value="More than 3 months">More than 3 months</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <Image alt="Dropdown" loading="lazy" width={16} height={16} decoding="async" data-nimg="1" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" style={{ color: 'transparent' }} src="/drop.svg" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="size" className="block text-sm sm:text-base mb-2 text-[#0E0D0D] font-medium">
              Size*
            </label>
            <div className="relative">
              <select id="size" className="w-full p-3 sm:p-3.5 md:p-4 border rounded-lg appearance-none transition-all duration-200 text-sm sm:text-base border-gray-300 bg-gray-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none cursor-pointer">
                <option value="" disabled selected>
                  Choose Size
                </option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Custom">Custom</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <Image alt="Dropdown" loading="lazy" width={16} height={16} decoding="async" data-nimg="1" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" style={{ color: 'transparent' }} src="/drop.svg" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm sm:text-base mb-2 text-[#0E0D0D] font-medium">
              Quantity*
            </label>
            <div className="relative">
              <select id="quantity" className="w-full p-3 sm:p-3.5 md:p-4 border rounded-lg appearance-none transition-all duration-200 text-sm sm:text-base border-gray-300 bg-gray-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none cursor-pointer">
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
                <Image alt="Dropdown" loading="lazy" width={16} height={16} decoding="async" data-nimg="1" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" style={{ color: 'transparent' }} src="/drop.svg" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm sm:text-base mb-2 text-[#0E0D0D] font-medium">
            Please Describe Your Project*
          </label>
          <textarea id="description" rows={4} placeholder="Tell us about your project requirements, timeline, and any specific needs..." className="w-full p-3 sm:p-3.5 md:p-4 border rounded-lg transition-all duration-200 text-sm sm:text-base border-gray-300 bg-gray-50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none resize-vertical min-h-[120px]"></textarea>
        </div>
        <div className="text-center text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed px-4">
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
        <div className="flex justify-center mt-6 sm:mt-8">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg flex items-center justify-center min-w-[160px] sm:min-w-[200px] md:min-w-[220px] text-sm sm:text-base md:text-lg relative overflow-hidden font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0">
            Submit Request
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ml-2 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestQuoteForm;
