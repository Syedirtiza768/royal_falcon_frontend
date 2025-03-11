import ServicesSectionItem from "./ServicesSectionItem";

export default function ServicesSection() {
  return (
    <section className="w-full py-5 px-4 md:px-6 lg:px-8">
      {/* <h2 className="text-center text-2xl md:text-3xl font-semibold text-black mb-6 flex flex-col items-center justify-center gap-3">
        <span>Services</span>
        <span className="h-[1px] w-[80px] bg-primary"></span>
      </h2> */}
      <div className="">
        <ServicesSectionItem />
      </div>
    </section>
  );
}
