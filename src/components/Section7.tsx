import React from 'react';
import Image from 'next/image';

const LoremIpsumSection: React.FC = () => {
  return (
    <section className="w-full flex items-center pt-0 px-4 relative overflow-visible pr-10 mt-50">
      <div className="relative max-w-7.5xl w-full bg-[#f9f9f9]">
        <div className="hidden lg:block absolute -top-20 -left-5 z-10 ml-5">
          <Image alt="Motorcyclists" loading="lazy" width={550} height={550} decoding="async" data-nimg="1" className="object-cover border-white shadow-lg" style={{ color: 'transparent' }} src="/Sec7bike.svg" />
        </div>
        <div className="relative z-0 lg:ml-[50%] p-8">
          <p className="text-[#0546D2] mb-2 text-[24px] font-semibold">Lorem ipsum</p>
          <h2 className="text-[42px] font-[var(--font-roboto-condensed)] uppercase tracking-tight leading-tight mb-4">
            <span className="text-[#1959AC]">LOREM</span> IPSUM DOLOR SIT<br />AMET CONSECTETUR. ENIM<br />DONEC.
          </h2>
          <p className="font-[var(--font-inter)] text-base mb-6 text-[#222222] text-[18px]">
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6 text-[#222222] text-[20px] font-var(--font-inter)]">
            <p className="font-[var(--font-inter)] h-[48px]">Lorem Ipsum</p>
            <p className="font-[var(--font-inter)] h-[48px]">Lorem Ipsum</p>
            <p className="font-[var(--font-inter)] h-[48px]">Lorem Ipsum</p>
            <p className="font-[var(--font-inter)] h-[48px]">Lorem Ipsum</p>
            <p className="font-[var(--font-inter)] h-[48px]">Lorem Ipsum</p>
            <p className="font-[var(--font-inter)] h-[48px]">Lorem Ipsum</p>
          </div>
          <div className="mt-4">
            <a href="#" className="inline-flex items-center justify-center bg-[#1959AC] text-white px-6 py-2 rounded text-lg font-medium shadow">
              <span>Lorem ipsum</span><span className="ml-2">→</span>
            </a>
          </div>
        </div>
        <div className="max-w-7.5xl mx-auto pr-8 mt-12">
          <div className="w- h-3 pr-8 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]"></div>
        </div>
      </div>
    </section>
  );
};

export default LoremIpsumSection;
