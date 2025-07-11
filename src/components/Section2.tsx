import React from 'react';
import Image from 'next/image';

const Section2: React.FC = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-4">
      <div className="text-[#0546D2] text-lg sm:text-xl md:text-2xl mb-4 font-semibold">
        <a href="#" className="hover:underline">
          Lorem ipsum dolor sit
        </a>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 mb-8">
        <div className="w-full lg:w-1/2">
          <div className="font-[var(--font-roboto-condensed)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold uppercase tracking-tight leading-tight mb-4">
              LOREM IPSUM<br />DOLOR SIT AMET
            </h2>
          </div>
          <p className="font-[var(--font-inter)] text-sm sm:text-base md:text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
          </p>
          <div className="space-y-3 sm:space-y-4">
            {[
              { img: 'Sec2li1.svg', text: 'Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.' },
              { img: 'Sec2li2.svg', text: 'Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.' },
              { img: 'Sec2li3.svg', text: 'Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.' },
            ].map((item, index) => (
              <div key={index} className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <Image alt="Motorcycle related icon" loading="lazy" width={146} height={146} decoding="async" data-nimg="1" className="object-cover w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24" style={{ color: 'transparent' }} src={`/${item.img}`} />
                </div>
                <div className="flex items-center">
                  <p className="font-[var(--font-inter)] text-sm sm:text-base md:text-lg">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-[4/3] h-64 sm:h-80 md:h-96 lg:h-full min-h-[300px]">
            <Image
              alt="Motorcycles display"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              width={800}
              height={600}
              className="object-cover"
              style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
              src="/section2bike.svg" // Make sure this image is in your public folder
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-6 mt-6 mb-10">
        <a href="#" className="bg-[#1959AC] text-white px-3 sm:px-4 py-2 rounded text-sm sm:text-base md:text-lg font-bold flex items-center w-full sm:w-auto justify-center sm:justify-start">
          <span>Lorem ipsum</span><span className="ml-2">→</span>
        </a>
        <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
          <span className="mr-2">
            <Image alt="phone icon" width={24} height={24} decoding="async" data-nimg="1" className="object-cover w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'transparent' }} src="/Sec2phone.svg" />
          </span>
          <span className="text-[#043898] font-semibold text-sm sm:text-base">123456789</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-full h-2 sm:h-3 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]"></div>
      </div>
    </div>
  );
};

export default Section2;
