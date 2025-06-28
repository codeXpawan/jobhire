import React from 'react';

const JoinSunHarvesters: React.FC = () => {
  return (
    <section className="w-full bg-blue-500 py-16 flex flex-col items-center text-white px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center" style={{ opacity: 1, transform: 'none' }}>
        Join other Sun Harvesters
      </h2>
      <p className="mt-4 max-w-2xl text-center text-gray-200">
        Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
      </p>
      <div className="relative w-full max-w-screen-2xl mt-8">
        <div className="relative" role="region" aria-roledescription="carousel">
          <div className="overflow-hidden">
            <div className="flex -ml-4 items-center">
              {/* Slide 1 */}
              <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="border bg-white text-black p-6 rounded-xl shadow-md">
                  <div className="p-6 pt-0 flex flex-col my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bolt w-8 h-8 text-blue-500">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                    <p className="mt-4 text-black/90">
                      Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod.
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">J</span>
                      </span>
                      <span className="font-medium">Jane Cooper</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="border bg-white text-black p-6 rounded-xl shadow-md">
                  <div className="p-6 pt-0 flex flex-col my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-8 h-8 text-yellow-500">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <p className="mt-4 text-black/90">
                      Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque.
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">R</span>
                      </span>
                      <span className="font-medium">Ralph Edwards</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="border bg-white text-black p-6 rounded-xl shadow-md">
                  <div className="p-6 pt-0 flex flex-col my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-castle w-8 h-8 text-indigo-500">
                      <path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"></path>
                      <path d="M18 11V4H6v7"></path>
                      <path d="M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"></path>
                      <path d="M22 11V9"></path>
                      <path d="M2 11V9"></path>
                      <path d="M6 4V2"></path>
                      <path d="M18 4V2"></path>
                      <path d="M10 4V2"></path>
                      <path d="M14 4V2"></path>
                    </svg>
                    <p className="mt-4 text-black/90">
                      Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium.
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">C</span>
                      </span>
                      <span className="font-medium">Courtney Henry</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 4 */}
              <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="border bg-white text-black p-6 rounded-xl shadow-md">
                  <div className="p-6 pt-0 flex flex-col my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info w-8 h-8 text-blue-400">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                    <p className="mt-4 text-black/90">
                      Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet.
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">C</span>
                      </span>
                      <span className="font-medium">Cameron Williamson</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md text-gray-800" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left h-4 w-4">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            <span className="sr-only">Previous slide</span>
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md text-gray-800" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            <span className="sr-only">Next slide</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinSunHarvesters;
