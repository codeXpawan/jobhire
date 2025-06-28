import Image from "next/image";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <div className="">
      <div className="flex items-center justify-between h-screen">
        <div className="w-1/2 px-20">
          <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet</h1>
          <p className="mt-4 text-lg">Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque. Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse. </p>
          <div className="mt-12">
            <div className="flex h-[47px] items-center gap-4">
              <input type="text" className="border border-[#C3C3C3] h-full rounded-[6px]"/>
              <button type="submit"><svg width="168" height="87" viewBox="0 0 168 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2596_1329)">
                <rect x="20.3145" y="16" width="127" height="47" rx="5" fill="#1959AC"/>
                <path d="M51.1806 36.7283C51.138 36.2987 50.9551 35.9648 50.6319 35.7269C50.3088 35.489 49.8702 35.37 49.3162 35.37C48.9398 35.37 48.622 35.4233 48.3627 35.5298C48.1035 35.6328 47.9047 35.7766 47.7662 35.9613C47.6312 36.146 47.5637 36.3555 47.5637 36.5898C47.5566 36.7852 47.5975 36.9556 47.6863 37.1012C47.7786 37.2468 47.9047 37.3729 48.0645 37.4794C48.2243 37.5824 48.4089 37.6729 48.6184 37.7511C48.8279 37.8256 49.0517 37.8896 49.2896 37.9428L50.2697 38.1772C50.7456 38.2837 51.1824 38.4258 51.5801 38.6033C51.9778 38.7809 52.3223 38.9993 52.6135 39.2585C52.9047 39.5178 53.1301 39.8232 53.29 40.1747C53.4533 40.5263 53.5368 40.9293 53.5403 41.3839C53.5368 42.0515 53.3663 42.6303 53.0289 43.1204C52.6951 43.6069 52.2122 43.9851 51.5801 44.255C50.9515 44.5213 50.1934 44.6545 49.3056 44.6545C48.4249 44.6545 47.6578 44.5195 47.0044 44.2496C46.3546 43.9798 45.8468 43.5803 45.481 43.0511C45.1188 42.5185 44.9288 41.8597 44.911 41.0749H47.1429C47.1678 41.4407 47.2725 41.7461 47.4572 41.9911C47.6454 42.2326 47.8958 42.4155 48.2083 42.5398C48.5243 42.6605 48.8812 42.7209 49.2789 42.7209C49.6696 42.7209 50.0087 42.6641 50.2963 42.5504C50.5875 42.4368 50.813 42.2788 50.9728 42.0763C51.1326 41.8739 51.2125 41.6413 51.2125 41.3786C51.2125 41.1335 51.1397 40.9276 50.9941 40.7607C50.8521 40.5937 50.6426 40.4517 50.3656 40.3345C50.0922 40.2173 49.7566 40.1108 49.3588 40.0149L48.171 39.7166C47.2512 39.4929 46.525 39.1431 45.9924 38.6673C45.4597 38.1914 45.1951 37.5504 45.1987 36.7443C45.1951 36.0838 45.3709 35.5067 45.726 35.0131C46.0847 34.5195 46.5765 34.1342 47.2015 33.8572C47.8265 33.5803 48.5368 33.4418 49.3322 33.4418C50.1419 33.4418 50.8485 33.5803 51.4522 33.8572C52.0595 34.1342 52.5318 34.5195 52.8691 35.0131C53.2065 35.5067 53.3805 36.0785 53.3912 36.7283H51.1806ZM60.2959 41.0163V36.3182H62.5651V44.5H60.3865V43.0138H60.3012C60.1166 43.4933 59.8094 43.8786 59.3797 44.1697C58.9536 44.4609 58.4333 44.6065 57.819 44.6065C57.2721 44.6065 56.7909 44.4822 56.3754 44.2337C55.96 43.9851 55.635 43.6317 55.4007 43.1737C55.1698 42.7156 55.0526 42.1669 55.0491 41.5277V36.3182H57.3183V41.1229C57.3218 41.6058 57.4514 41.9876 57.7071 42.2681C57.9628 42.5487 58.3055 42.6889 58.7352 42.6889C59.0086 42.6889 59.2643 42.6268 59.5022 42.5025C59.7401 42.3746 59.9319 42.1864 60.0775 41.9379C60.2267 41.6893 60.2994 41.3821 60.2959 41.0163ZM64.4228 44.5V33.5909H66.6919V37.6925H66.7612C66.8606 37.4723 67.0044 37.2486 67.1926 37.0213C67.3844 36.7905 67.633 36.5987 67.9384 36.446C68.2473 36.2898 68.6309 36.2116 69.089 36.2116C69.6855 36.2116 70.236 36.3679 70.7402 36.6804C71.2445 36.9893 71.6475 37.4563 71.9494 38.0813C72.2512 38.7028 72.4022 39.4822 72.4022 40.4197C72.4022 41.3324 72.2548 42.103 71.9601 42.7315C71.6689 43.3565 71.2711 43.8306 70.7669 44.1538C70.2662 44.4734 69.7051 44.6332 69.0836 44.6332C68.6433 44.6332 68.2686 44.5604 67.9597 44.4148C67.6543 44.2692 67.4039 44.0863 67.2086 43.8661C67.0133 43.6424 66.8642 43.4169 66.7612 43.1896H66.66V44.5H64.4228ZM66.644 40.4091C66.644 40.8956 66.7115 41.32 66.8464 41.6822C66.9814 42.0444 67.1767 42.3267 67.4324 42.5291C67.688 42.728 67.9988 42.8274 68.3645 42.8274C68.7338 42.8274 69.0463 42.7262 69.302 42.5238C69.5577 42.3178 69.7512 42.0337 69.8826 41.6715C70.0176 41.3058 70.085 40.8849 70.085 40.4091C70.085 39.9368 70.0194 39.5213 69.888 39.1626C69.7566 38.804 69.563 38.5234 69.3074 38.321C69.0517 38.1186 68.7374 38.0174 68.3645 38.0174C67.9952 38.0174 67.6827 38.1151 67.427 38.3104C67.1749 38.5057 66.9814 38.7827 66.8464 39.1413C66.7115 39.5 66.644 39.9226 66.644 40.4091ZM73.9163 44.5V36.3182H76.0789V37.7617H76.1748C76.3453 37.2823 76.6294 36.9041 77.0271 36.6271C77.4248 36.3501 77.9007 36.2116 78.4546 36.2116C79.0157 36.2116 79.4933 36.3519 79.8875 36.6325C80.2817 36.9094 80.5445 37.2859 80.6759 37.7617H80.7611C80.928 37.293 81.2298 36.9183 81.6666 36.6378C82.107 36.3537 82.6272 36.2116 83.2274 36.2116C83.9909 36.2116 84.6105 36.4549 85.0864 36.9414C85.5658 37.4244 85.8055 38.1097 85.8055 38.9975V44.5H83.5416V39.445C83.5416 38.9904 83.4209 38.6495 83.1794 38.4222C82.9379 38.195 82.6361 38.0813 82.2739 38.0813C81.8619 38.0813 81.5406 38.2127 81.3097 38.4755C81.0789 38.7347 80.9635 39.0774 80.9635 39.5036V44.5H78.7636V39.397C78.7636 38.9957 78.6482 38.6761 78.4173 38.4382C78.1901 38.2003 77.89 38.0813 77.5171 38.0813C77.265 38.0813 77.0377 38.1452 76.8353 38.2731C76.6365 38.3974 76.4784 38.5732 76.3612 38.8004C76.2441 39.0241 76.1855 39.2869 76.1855 39.5888V44.5H73.9163ZM87.5979 44.5V36.3182H89.8671V44.5H87.5979ZM88.7378 35.2635C88.4005 35.2635 88.1111 35.1516 87.8696 34.9279C87.6317 34.7006 87.5127 34.429 87.5127 34.1129C87.5127 33.8004 87.6317 33.5323 87.8696 33.3086C88.1111 33.0813 88.4005 32.9677 88.7378 32.9677C89.0752 32.9677 89.3628 33.0813 89.6008 33.3086C89.8422 33.5323 89.963 33.8004 89.963 34.1129C89.963 34.429 89.8422 34.7006 89.6008 34.9279C89.3628 35.1516 89.0752 35.2635 88.7378 35.2635ZM96.0368 36.3182V38.0227H91.1096V36.3182H96.0368ZM92.2282 34.358H94.4973V41.9858C94.4973 42.1953 94.5293 42.3587 94.5932 42.4759C94.6571 42.5895 94.7459 42.6694 94.8596 42.7156C94.9767 42.7617 95.1117 42.7848 95.2644 42.7848C95.3709 42.7848 95.4775 42.7759 95.584 42.7582C95.6905 42.7369 95.7722 42.7209 95.829 42.7102L96.1859 44.3988C96.0723 44.4343 95.9125 44.4751 95.7065 44.5213C95.5005 44.571 95.2502 44.6012 94.9554 44.6119C94.4086 44.6332 93.9292 44.5604 93.5172 44.3935C93.1088 44.2266 92.791 43.9673 92.5637 43.6158C92.3365 43.2642 92.2246 42.8203 92.2282 42.2841V34.358Z" fill="white"/>
                <path d="M124.022 40.2071C124.412 39.8166 124.412 39.1834 124.022 38.7929L117.658 32.4289C117.267 32.0384 116.634 32.0384 116.243 32.4289C115.853 32.8195 115.853 33.4526 116.243 33.8431L121.9 39.5L116.243 45.1569C115.853 45.5474 115.853 46.1805 116.243 46.5711C116.634 46.9616 117.267 46.9616 117.658 46.5711L124.022 40.2071ZM107.314 40.5H123.314V38.5H107.314V40.5Z" fill="white"/>
                </g>
                <defs>
                <filter id="filter0_d_2596_1329" x="0.314453" y="0" width="167" height="87" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2596_1329"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2596_1329" result="shape"/>
                </filter>
                </defs>
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2 mt-4 ">
              <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="29" rx="14.5" fill="#155ADA"/>
                <path d="M9 13.5L14 18.5L21 10.5" stroke="white" strokeWidth="2"/>
              </svg>

              <p>No credit card required!</p>
            </div>
          </div>
        </div>
        <div className="relative w-1/2 h-full ">
        <Image 
          src={"bike.svg"} 
          alt={"bike-image"} 
          width={932} 
          height={932}  
          style={{
            position: "absolute",
            height: "85%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: "cover",
            color: "transparent"
          }}
        />
        <div className="absolute bottom-36 w-full h-6 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)]"></div>
        </div>

      </div>
      <Section2 />
      <Section3 />
       <div className="relative w-full h-screen overflow-hidden mb-16 sm:mb-20 md:mb-24">
        <div className="absolute inset-0">
          <Image
            alt="Motorcyclist in rain"
            decoding="async"
            data-nimg="fill"
            width={100}
            height={100}
            className="object-cover brightness-75 hover:brightness-70 transition-all duration-700"
            src="/banner.svg" // Make sure this image is in your public folder
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
          />
        </div>
        <div className="absolute top-4 sm:top-6 left-4 sm:left-8 md:left-14 bg-white px-4 sm:px-8 py-1 sm:py-2 font-extrabold text-xl sm:text-2xl md:text-[32px]">
          LOGO
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 mt-15 z-10">
          <h2 className="text-white text-2xl sm:text-3xl md:text-[42px] lg:text-5xl font-[var(--font-roboto-condensed)] mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-xl md:max-w-4xl uppercase tracking-tight">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
          </h2>
          <div className="max-w-xs sm:max-w-lg md:max-w-3xl space-y-3 sm:space-y-4">
            <p className="text-white text-sm sm:text-base md:text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed.
            </p>
            <p className="text-white text-sm sm:text-base md:text-[18px] hidden sm:block">
              Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae.
            </p>
          </div>
          <button className="bg-transparent hover:bg-white text-white hover:text-black border-2 border-white px-6 py-2 mt-6 sm:mt-8 font-medium text-sm sm:text-base transition-colors duration-300 hidden sm:block rounded-md">
            Lorem Ipsum <span className="ml-2">→</span>
          </button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 pointer-events-none"></div>
      </div>
      <section className="py-8 sm:py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
              LOREM IPSUM DOLOR SIT AMET<br className="hidden sm:block" />CONSECTETUR. COMMODO LEO AMET.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Brand Logos Section - You'll need to map through an array of logos */}
            {['Hero.svg', 'honda.svg', 'Bajaj.svg', 'tvs.svg', 'royal.svg', 'yamaha.svg', 'ktm.svg', 'ather.svg', 'ola.svg', 'revolt.svg', 'ultra.svg', 'tork.svg'].map((src, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="relative group cursor-pointer transition-all duration-300 p-4">
                  <Image
                    alt="Brand Logo"
                    loading="lazy"
                    width={index === 0 ? 86 : index === 1 ? 121 : index === 2 ? 160 : index === 3 ? 222 : index === 4 ? 238 : index === 5 ? 173 : index === 6 ? 136 : index === 7 ? 205 : index === 8 ? 185 : index === 9 ? 167 : index === 10 ? 287 : 101}
                    height={index === 0 ? 97 : index === 1 ? 97 : index === 2 ? 90 : index === 3 ? 62 : index === 4 ? 58 : index === 5 ? 60 : index === 6 ? 53 : index === 7 ? 74 : index === 8 ? 92 : index === 9 ? 83 : index === 10 ? 61 : 143}
                    decoding="async"
                    data-nimg="1"
                    className="h-8 sm:h-10 md:h-12 object-contain transition-all duration-300"
                    style={{ color: 'transparent' }}
                    src={`/${src}`} // Make sure these images are in your public folder
                  />
                  <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" mx-auto px-4 sm:px-20 py-8 sm:py-12 relative">
        <div className="text-[#0546D2] mb-2">
          <a href="#" className="text-xl sm:text-2xl md:text-[24px] font-semibold hover:underline">
            Lorem ipsum dolor sit amet
          </a>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold uppercase mb-2 sm:mb-4">LOREM IPSUM DOLOR SIT</h1>
        <p className="text-gray-700 mb-8 sm:mb-12 max-w-3xl text-base sm:text-lg">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Card Components - You'll need to map through an array of card data */}
          {[
            { img: 'architecture.svg', title: 'Lorem ipsum dolor sit amet consectetur.', description: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.' },
            { img: 'buddha.svg', title: 'Lorem ipsum dolor sit amet consectetur.', description: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.' },
            { img: 'women.svg', title: 'Lorem ipsum dolor sit amet consectetur.', description: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.' },
            { img: 'orange.svg', title: 'Lorem ipsum dolor sit amet consectetur.', description: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.' },
          ].map((card, index) => (
            <div key={index} className="card border border-[#F1F0F0] rounded-2xl mb-6 md:mb-12 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <div className="relative w-full h-40 sm:h-48 mb-4">
                <Image
                  width={500}
                  height={300}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="rounded-b-none rounded-t-2xl object-cover"
                  style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
                  src={`/${card.img}`} // Make sure these images are in your public folder
                />
              </div>
              <div className="px-6 sm:px-10 py-4 mb-6 sm:mb-10">
                <h3 className="font-medium text-base sm:text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-8">{card.description}</p>
                <a href="#" className="text-[#0546D2] text-sm md:text-[16px] inline-block underline underline-offset-2 transition-colors duration-300 hover:text-blue-700">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[607px] overflow-hidden mb-16 sm:mb-20 md:mb-24">
        <div className="absolute inset-0">
          <Image
            width={100}
            height={100}
            alt="Motorcyclist in rain"
            decoding="async"
            data-nimg="fill"
            className="object-cover brightness-75 hover:brightness-70 transition-all duration-700"
            src="/music.svg" // Make sure this image is in your public folder
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
          />
        </div>
        <div className="absolute top-4 sm:top-6 left-4 sm:left-8 md:left-14 bg-white px-4 sm:px-8 py-1 sm:py-2 font-extrabold text-xl sm:text-2xl md:text-[32px]">
          LOGO
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 z-10">
          <h2 className="text-white text-2xl sm:text-3xl md:text-[42px] lg:text-5xl font-[var(--font-roboto-condensed)] font-bold mb-4 sm:mb-8 md:mb-8 max-w-xs sm:max-w-xl md:max-w-4xl uppercase tracking-tight my-20">
            dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur. Quis adipiscing
          </h2>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 pointer-events-none"></div>
      </div>
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <section className="max-w-7xl mx-auto bg-[#FFFFFF99] my-12 sm:my-16 md:my-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-[var(--font-roboto-condensed)] mb-4 sm:mb-6 tracking-tight">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
            <div className="flex flex-wrap sm:flex-nowrap mb-4 sm:mb-6 border rounded-md overflow-hidden shadow-sm">
              <button className="flex-1 py-2 sm:py-3 px-3 sm:px-4 bg-[#F1F5F9] text-[#222222] font-medium text-sm sm:text-base">
                Research
              </button>
              <button className="flex-1 py-2 sm:py-3 px-3 sm:px-4 bg-white text-[#222222] font-medium text-sm sm:text-base border-x">
                Plan
              </button>
              <button className="flex-1 py-2 sm:py-3 px-3 sm:px-4 bg-[#F9F9F9] text-[#222222] font-medium text-sm sm:text-base">
                Design
              </button>
            </div>
            <p className="text-[#222222] text-base sm:text-[18px] leading-relaxed mb-4 sm:mb-6 font-[var(--font-inter)]">
              Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
            </p>
            <a href="#" className="inline-flex items-center text-[#0546D2] font-medium">
              Check tools<span className="ml-2"><Image alt="arrow" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'transparent' }} src="/arrowicon.svg" /></span>
            </a>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <div className="relative w-full aspect-[16/9] overflow-hidden shadow-md">
              <Image
                alt="Handshake"
                loading="lazy"
                width={600}
                height={406}
                decoding="async"
                data-nimg="1"
                className="object-cover w-full h-full"
                style={{ color: 'transparent' }}
                src="/handshake.svg" // Make sure this image is in your public folder
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto bg-[#FFFFFF99] mt-12 sm:mt-16 md:mt-24 py-6 sm:py-8 md:py-10 relative overflow-visible px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center pt-0 relative overflow-visible">
          <div className="relative w-full bg-[#f9f9f9] shadow-sm">
            <div className="relative z-0 p-4 sm:p-6 md:p-8 mb-16 sm:mb-20 md:mb-40 lg:mr-[50%]">
              <div>
                <h2 className="text-[#1959AC] text-2xl sm:text-3xl md:text-[42px] font-[var(--font-roboto-condensed)] uppercase tracking-tight leading-tight mb-4 sm:mb-6">
                  LOREM IPSUM DOLOR SIT<br className="hidden sm:block" />AMET CONSECTETUR.<br className="hidden sm:block" />DIGNISSIM TELLUS.
                </h2>
                <p className="text-[#222222] text-base sm:text-lg mb-6 sm:mb-8 font-[var(--font-inter)]">
                  Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. Massa in facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
                </p>
                <a href="#" className="bg-[#1959AC] text-white px-4 py-2 rounded text-lg font-medium inline-flex items-center">
                  <span>Lorem ipsum</span><span className="ml-2">→</span>
                </a>
              </div>
            </div>
            <div className="hidden lg:block absolute -top-10 -right-5 z-10 mr-5">
              <Image alt="Motorcyclists" loading="lazy" width={550} height={550} decoding="async" data-nimg="1" className="object-cover border-white shadow-lg" style={{ color: 'transparent' }} src="/dealer.svg" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative mx-auto lg:ml-3 mt-10">
          <div className="absolute -top-20 sm:-top-30 md:-top-40 right-0 left-0 lg:left-auto lg:right-4 xl:right-35 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0">
            <div className="bg-white p-4 sm:p-6 shadow-md relative">
              <div className="absolute top-4 right-4">
                <Image alt="Pin icon" loading="lazy" width={24} height={24} decoding="async" data-nimg="1" className="object-contain" style={{ color: 'transparent' }} src="/push.svg" />
              </div>
              <h3 className="font-bold text-lg mb-4">Lorem ipsum dolor sit</h3>
              <div>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.</p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.</p>
                <p className="text-gray-700 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultrices lectus viverra pharetra commodo.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 sm:mt-16 md:mt-10">
          <div className="h-3 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] mr-0 sm:mr-24 md:mr-40 lg:mr-56"></div>
        </div>
      </section>
      <section className="py-8 sm:py-12 px-4 max-w-7xl mx-auto mt-40 sm:mt-40 md:mt-40">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-[28px] sm:text-[32px] md:text-[42px] font-bold mb-4 sm:mb-6">LOREM IPSUM DOLOR SIT AMET</h1>
          <p className="text-gray-700 max-w-4xl mx-auto text-[14px] sm:text-[16px] md:text-[18px] px-2">
            Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.
          </p>
        </header>
        <div className="relative flex flex-col md:flex-row items-start mt-6 sm:mt-10">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <Image alt="Artist portrait" width={680} height={412} decoding="async" data-nimg="1" className="max-w-full h-auto rounded-sm" style={{ color: 'transparent' }} src="/artist.svg" />
          </div>
          <div className="w-full md:w-[45%] lg:w-[40%] bg-white p-6 sm:p-8 shadow-lg mt-6 md:mt-0 md:absolute md:right-30 lg:right-30 md:top-24 lg:top-20 xl:top-20 max-w-full transition-shadow duration-300" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
            <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-gray-800 mb-3 sm:mb-4">Artist &amp; Investor</h2>
            <p className="text-gray-600 mb-5 sm:mb-6 text-[14px] sm:text-[16px] md:text-[18px]">
              Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisi quis est ...
            </p>
            <a href="#" className="text-blue-600 flex items-center font-medium text-sm md:text-base">
              Read Full Story<svg className="h-5 w-5 ml-2 transition-transform duration-300" style={{ transform: 'translateX(0)' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>
      </section>
      <FaqSection/>
       <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden mb-12 md:mb-24 mt-10 md:mt-30">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 lg:px-8">
          <div className="bg-[#DBDBDB] px-4 sm:px-6 py-1 sm:py-2 font-bold text-center mb-4 sm:mb-6 md:mb-8 text-xl sm:text-2xl md:text-[32px]">
            LOGO
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold mb-3 sm:mb-4 md:mb-6 uppercase max-w-4xl px-2">
            LOREM IPSUM DOLOR SIT AMET <br className="hidden sm:inline" />CONSECTETUR. DUI.
          </h2>
          <p className="text-sm sm:text-base mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl px-2">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>
          <a href="#" className="inline-flex items-center bg-[#1959AC] text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded text-base sm:text-lg">
            <span>Loerum Ipsum</span><span className="ml-1 sm:ml-2">→</span>
          </a>
        </div>
      </div>
      <footer className="flex px-10 py-10 justify-between h-[546px] bg-[#171E2B] text-white">
        <svg width="156" height="60" viewBox="0 0 156 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="156" height="60" fill="#DBDBDB"/>
          <path d="M34.2614 41.5V18.2273H39.8864V36.9318H49.5682V41.5H34.2614ZM72.8998 29.8636C72.8998 32.4242 72.4073 34.5947 71.4225 36.375C70.4377 38.1553 69.1043 39.5076 67.4225 40.4318C65.7483 41.3561 63.8695 41.8182 61.7861 41.8182C59.6952 41.8182 57.8127 41.3523 56.1384 40.4205C54.4642 39.4886 53.1346 38.1364 52.1498 36.3636C51.1725 34.5833 50.6839 32.4167 50.6839 29.8636C50.6839 27.303 51.1725 25.1326 52.1498 23.3523C53.1346 21.572 54.4642 20.2197 56.1384 19.2955C57.8127 18.3712 59.6952 17.9091 61.7861 17.9091C63.8695 17.9091 65.7483 18.3712 67.4225 19.2955C69.1043 20.2197 70.4377 21.572 71.4225 23.3523C72.4073 25.1326 72.8998 27.303 72.8998 29.8636ZM67.1498 29.8636C67.1498 28.3485 66.9339 27.0682 66.502 26.0227C66.0778 24.9773 65.4642 24.1856 64.6611 23.6477C63.8657 23.1098 62.9073 22.8409 61.7861 22.8409C60.6725 22.8409 59.7142 23.1098 58.9111 23.6477C58.1081 24.1856 57.4907 24.9773 57.0589 26.0227C56.6346 27.0682 56.4225 28.3485 56.4225 29.8636C56.4225 31.3788 56.6346 32.6591 57.0589 33.7045C57.4907 34.75 58.1081 35.5417 58.9111 36.0795C59.7142 36.6174 60.6725 36.8864 61.7861 36.8864C62.9073 36.8864 63.8657 36.6174 64.6611 36.0795C65.4642 35.5417 66.0778 34.75 66.502 33.7045C66.9339 32.6591 67.1498 31.3788 67.1498 29.8636ZM90.8166 25.8295C90.6878 25.3523 90.4984 24.9318 90.2484 24.5682C89.9984 24.197 89.6916 23.8826 89.328 23.625C88.9643 23.3674 88.5477 23.1742 88.078 23.0455C87.6083 22.9091 87.0931 22.8409 86.5325 22.8409C85.4037 22.8409 84.4264 23.1136 83.6007 23.6591C82.7825 24.2045 82.1499 25 81.703 26.0455C81.256 27.0833 81.0325 28.3447 81.0325 29.8295C81.0325 31.322 81.2484 32.5947 81.6802 33.6477C82.112 34.7008 82.737 35.5038 83.5552 36.0568C84.3734 36.6098 85.3658 36.8864 86.5325 36.8864C87.5628 36.8864 88.434 36.7197 89.1461 36.3864C89.8658 36.0455 90.4113 35.5644 90.7825 34.9432C91.1537 34.322 91.3393 33.5909 91.3393 32.75L92.3848 32.875H86.7257V28.7727H96.7598V31.8523C96.7598 33.9356 96.3166 35.7197 95.4302 37.2045C94.5514 38.6894 93.3393 39.8295 91.7939 40.625C90.256 41.4205 88.487 41.8182 86.487 41.8182C84.2673 41.8182 82.3166 41.3371 80.6348 40.375C78.953 39.4129 77.6423 38.0417 76.703 36.2614C75.7636 34.4735 75.2939 32.3523 75.2939 29.8977C75.2939 27.9886 75.578 26.2955 76.1461 24.8182C76.7143 23.3333 77.506 22.0758 78.5211 21.0455C79.5439 20.0152 80.7257 19.2348 82.0666 18.7045C83.4151 18.1742 84.8658 17.9091 86.4189 17.9091C87.7673 17.9091 89.0211 18.1023 90.1802 18.4886C91.3469 18.875 92.3772 19.4205 93.2711 20.125C94.1727 20.8295 94.9037 21.6667 95.4643 22.6364C96.0249 23.6061 96.3734 24.6705 96.5098 25.8295H90.8166ZM121.401 29.8636C121.401 32.4242 120.909 34.5947 119.924 36.375C118.939 38.1553 117.606 39.5076 115.924 40.4318C114.25 41.3561 112.371 41.8182 110.287 41.8182C108.196 41.8182 106.314 41.3523 104.64 40.4205C102.965 39.4886 101.636 38.1364 100.651 36.3636C99.6738 34.5833 99.1851 32.4167 99.1851 29.8636C99.1851 27.303 99.6738 25.1326 100.651 23.3523C101.636 21.572 102.965 20.2197 104.64 19.2955C106.314 18.3712 108.196 17.9091 110.287 17.9091C112.371 17.9091 114.25 18.3712 115.924 19.2955C117.606 20.2197 118.939 21.572 119.924 23.3523C120.909 25.1326 121.401 27.303 121.401 29.8636ZM115.651 29.8636C115.651 28.3485 115.435 27.0682 115.003 26.0227C114.579 24.9773 113.965 24.1856 113.162 23.6477C112.367 23.1098 111.409 22.8409 110.287 22.8409C109.174 22.8409 108.215 23.1098 107.412 23.6477C106.609 24.1856 105.992 24.9773 105.56 26.0227C105.136 27.0682 104.924 28.3485 104.924 29.8636C104.924 31.3788 105.136 32.6591 105.56 33.7045C105.992 34.75 106.609 35.5417 107.412 36.0795C108.215 36.6174 109.174 36.8864 110.287 36.8864C111.409 36.8864 112.367 36.6174 113.162 36.0795C113.965 35.5417 114.579 34.75 115.003 33.7045C115.435 32.6591 115.651 31.3788 115.651 29.8636Z" fill="black"/>
        </svg>
        <div className="flex px-7 gap-28 mt-10 mr-40">
          <div className="flex flex-col mt-10">
            <p className="font-bold">Lorem Ipsum</p>
              <div className="mt-6 flex flex-col gap-4">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              </div>
          </div>
          <div className="flex flex-col mt-10">
            <p className="font-bold">Lorem Ipsum</p>
              <div className="mt-6 flex flex-col gap-4">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              </div>
          </div>
          <div className="flex flex-col mt-10">
            <p className="font-bold">Lorem Ipsum</p>
              <div className="mt-6 flex flex-col gap-4">
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              </div>
          </div>
          <div className="flex flex-col mt-10">
            <p className="font-bold">Lorem Ipsum</p>
              <div className="mt-6 flex flex-col gap-4">
              <p>Lorem Ipsum</p>
              </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
