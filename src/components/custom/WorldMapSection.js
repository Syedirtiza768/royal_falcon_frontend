import { Button } from "@/components/ui/button";

export default function WorldMapSection() {
  return (
    <div className="bg-gradient-to-r from-amber-700 to-amber-500 min-h-screen flex flex-col items-center justify-center px-4 py-16 text-white">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-lg mb-2">Open Data Portal</h2>

        <h1 className="text-4xl md:text-5xl font-light mb-10">
          Data for the public
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-10">
          <div className="flex flex-col">
            <div className="text-5xl md:text-6xl font-light">2991</div>
            <div className="text-sm mt-1">Data Set</div>
          </div>

          <div className="order-first md:order-none mb-8 md:mb-0 h-[250px] w-[500px] ">
            <img
              src="/images/world-map.png"
              alt="World Map"
              className="mx-auto  opacity-80 h-full w-full ml-[-50px] "
            />
          </div>

          <div className="flex flex-col">
            <div className="text-5xl md:text-6xl font-light">5796</div>
            <div className="text-sm mt-1">Data Resource</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="flex flex-col">
            <div className="text-5xl md:text-6xl font-light">50</div>
            <div className="text-sm mt-1">Organization</div>
          </div>

          <div className="flex flex-col">
            <div className="text-5xl md:text-6xl font-light">23</div>
            <div className="text-sm mt-1">Application</div>
          </div>
        </div>

        <p className="text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          The upwards goes beyond being a data repository. It aims to make
          government data relevant and understandable to the public through the
          active use of charts and articles.
        </p>
      </div>
    </div>
  );
}
