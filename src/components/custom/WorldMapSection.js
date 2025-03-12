import { Button } from "@/components/ui/button";

export default function WorldMapSection() {
  return (
    <div className="bg-gradient-to-r from-amber-700 to-amber-500 min-h-[400px] flex flex-col items-center justify-center px-4 pt-[40px]  text-white">
      <div className="container max-w-5xl mx-auto text-center">
        {/* <h2 className="text-lg mb-2">World Map</h2> */}

        {/* <h1 className="text-4xl md:text-5xl font-light mb-10">World Map</h1> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-10">
          <div className="flex flex-col">
            <div className="text-5xl md:text-4xl font-light">20+ years</div>
            <div className="text-sm mt-1">Experience</div>
          </div>

          <div className="order-first md:order-none mb-8 md:mb-0 lg:h-[150px] lg:w-[300px] ">
            <img
              src="/images/world-map.png"
              alt="World Map"
              className="mx-auto  opacity-80 h-full w-full  "
            />
          </div>

          <div className="flex flex-col">
            <div className="text-5xl md:text-4xl font-light">35+</div>
            <div className="text-sm mt-1">Partnerships</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="flex flex-col">
            <div className="text-5xl md:text-4xl font-light">10+</div>
            <div className="text-sm mt-1">AI Scientists</div>
          </div>

          {/* <div className="flex flex-col">
            <div className="text-5xl md:text-4xl font-light">23+</div>
            <div className="text-sm mt-1">Applications</div>
          </div> */}
        </div>

        {/* <p className="text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          The upwards goes beyond being a data repository. It aims to make
          government data relevant and understandable to the public through the
          active use of charts and articles.
        </p> */}
      </div>
    </div>
  );
}
