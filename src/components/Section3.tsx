import React from 'react';
import Image from 'next/image';

const TestimonialsSection: React.FC = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-4 pb-8 mb-8 sm:mb-10 md:mb-12">
      <div className="text-[#0546D2] text-lg sm:text-xl md:text-2xl mb-4 font-semibold">
        <a href="#" className="hover:underline">
          Lorem ipsum dolor sit amet
        </a>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2">
          <div className="font-[var(--font-roboto-condensed)]">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold tracking-tight leading-tight mb-4 sm:mb-6">
              LOREM IPSUM DOLOR SIT<br />AMET CONSECTETUR. EU<br />ELIT.
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare.
          </p>
          <div className="space-y-3 sm:space-y-4">
            {[
              { title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.', description: 'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.' },
              { title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.', description: 'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.' },
              { title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.', description: 'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.' },
            ].map((item, index) => (
              <div key={index} className="flex gap-3 sm:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image alt="icon" loading="lazy" width={24} height={24} decoding="async" data-nimg="1" className="object-cover w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'transparent' }} src="/Sec3icon.svg" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-[20px] mb-1 sm:mb-2" style={{ fontFamily: 'var(--font-inter)' }}>{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg" style={{ fontFamily: 'var(--font-inter)' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-[4/3] h-64 sm:h-80 md:h-96 lg:h-full min-h-[300px]">
            <Image
              alt="Two people talking"
              loading="lazy"
              decoding="async"
              width={800}
              height={600}
              data-nimg="fill"
              className="object-cover rounded-lg"
              style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
              src="/Sec3person.svg" // Make sure this image is in your public folder
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-6 sm:mt-8 md:mt-10">
        <div className="h-2 sm:h-3 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]"></div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
