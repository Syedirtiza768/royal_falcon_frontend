export default function WorldMapSection() {
  return (
    <div className="bg-gradient-to-r from-amber-700 to-amber-500 min-h-[400px] flex flex-col items-center justify-center px-4 py-10 text-white">
      <div className="container max-w-5xl mx-auto text-center">
        {/* Stats Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-20 lg:mb-10">
          {/* Experience */}
          <div className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl font-light">20+ years</div>
            <div className="text-sm mt-1">Experience</div>
          </div>

          {/* World Map */}
          <div className="flex  h-[150px] w-[300px] sm:h-[200px] sm:w-[400px]  lg:ml-[-50px]">
            <img
              src="/images/world-map.gif"
              alt="World Map"
              className="opacity-80 h-full w-full"
            />
          </div>

          {/* Partnerships */}
          <div className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl font-light">35+</div>
            <div className="text-sm mt-1">Partnerships</div>
          </div>
        </div>

        {/* AI Scientists */}
        <div className="flex items-center justify-center mt-6 sm:mt-10">
          <div className="flex flex-col items-center lg:ml-[100px]">
            <div className="text-4xl sm:text-5xl font-light">10+</div>
            <div className="text-sm mt-1">AI Scientists</div>
          </div>
        </div>
      </div>
    </div>
  );
}
