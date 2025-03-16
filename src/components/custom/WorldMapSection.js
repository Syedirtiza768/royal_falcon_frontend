export default function WorldMapSection({
  heading1,
  data1,
  heading2,
  data2,
  heading3,
  data3,
  heading4,
  data4,
}) {
  return (
    <div className="bg-gradient-to-r from-black to-black/70 min-h-[400px] flex flex-col items-center justify-center px-4 py-10 text-[#c7a067]">
      <div className="container max-w-5xl mx-auto text-center">
        {/* Stats Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-20 lg:mb-10">
          {/* Experience */}
          <div className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl font-light">{data1}</div>
            <div className="text-sm mt-1">{heading1}</div>
          </div>

          {/* World Map */}
          <div className="flex  h-[150px] w-[300px] sm:h-[200px] sm:w-[400px]  lg:ml-[-50px]">
            <img
              src="/images/world-map2.gif"
              alt="World Map"
              className="opacity-80 h-full w-full"
            />
          </div>

          {/* Partnerships */}
          <div className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl font-light">{data2}</div>
            <div className="text-sm mt-1">{heading2}</div>
          </div>
        </div>

        {/* AI Scientists */}
        <div className="flex flex-col md:flex-row gap-7 items-center justify-center mt-6 sm:mt-10">
          <div className="flex flex-col items-center lg:ml-[100px]">
            <div className="text-4xl sm:text-5xl font-light">{data3}</div>
            <div className="text-sm mt-1">{heading3}</div>
          </div>
          <div className="flex flex-col items-center lg:ml-[100px]">
            <div className="text-4xl sm:text-5xl font-light">{data4}</div>
            <div className="text-sm mt-1">{heading4}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
