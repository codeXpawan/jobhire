import React from 'react';
import Image from 'next/image';

const DownloadAppSection: React.FC = () => {
  return (
    <div className="max-w-8xl mx-auto my-12 md:my-24 px-4 sm:px-8 md:px-16 lg:px-25 bg-[#F3F3F3] py-12 md:py-20 overflow-hidden rounded-lg">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
        <div className="w-full md:w-1/2">
          <div className="text-[#0546D2] text-xl sm:text-[24px] mb-2 font-semibold">
            Lorem Ipsum
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-[var(--font-roboto-condensed)] text-[#222222] mb-4">
            Lorem Ipsum Dolor<br className="hidden sm:block" />Sit Amet
          </h2>
          <p className="text-[#222222] mb-6 sm:mb-8 font-[var(--font-inter)] text-base sm:text-lg md:text-[18px]">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <div tabIndex={0}>
              <Image alt="Get it on Google Play" loading="lazy" width={130} height={44} decoding="async" data-nImage="1" className="object-contain w-[120px] sm:w-[150px]" style={{ color: 'transparent' }} src="/googleplay.svg" />
            </div>
            <div tabIndex={0}>
              <Image alt="Download on the App Store" loading="lazy" width={117} height={40} decoding="async" data-nImage="1" className="object-contain w-[108px] sm:w-[135px]" style={{ color: 'transparent' }} src="/applestore.svg" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-full aspect-[3/2] max-w-md mx-auto">
            <Image alt="Hand holding smartphone" decoding="async" data-nImage="fill" className="object-contain" width={500} height={500} style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} src="/handmobile.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;
