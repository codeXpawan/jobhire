import React from 'react';
import Image from 'next/image';

const TestimonialsSection: React.FC = () => {
  return (
    <div className=" mx-auto px-20 pt-4 pb-8 mb-12">
      <div className="text-[#0546D2] text-[24px] mb-4 font-semibold">
        <a href="#" className="hover:underline">
          Lorem ipsum dolor sit amet
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <div className="font-[var(--font-roboto-condensed)]">
            <h2 className="text-[32px] font-bold tracking-tight leading-tight mb-6">
              LOREM IPSUM DOLOR SIT<br />AMET CONSECTETUR. EU<br />ELIT.
            </h2>
          </div>
          <p className="font-[var(--font-inter)] text-lg mb-8">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare.
          </p>
          <div className="space-y-4">
            {[
              { title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.', description: 'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.' },
              { title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.', description: 'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.' },
              { title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.', description: 'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.' },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <Image alt="icon" loading="lazy" width={24} height={24} decoding="async" data-nimg="1" className="object-cover" style={{ color: 'transparent' }} src="/Sec3icon.svg" />
                </div>
                <div>
                  <h3 className="font-[var(--font-inter)] text-base mb-2 text-[20px] font-semibold">{item.title}</h3>
                  <p className="font-[var(--font-inter)] text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-[4/3] h-full">
            <Image
              alt="Two people talking"
              loading="lazy"
              decoding="async"
              width={800}
              height={600}
              data-nimg="fill"
              className="object-cover"
              style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
              src="/Sec3person.svg" // Make sure this image is in your public folder
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="h-3 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]"></div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
