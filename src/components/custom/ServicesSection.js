import ServicesSectionItem from "./ServicesSectionItem";

export default function ServicesSection({ dictionary }) {
  return (
    <section className="w-full py-5 px-[20px] md:px-6 lg:px-[90px] mt-[50px]">
      <div className="w-full ">
        <ServicesSectionItem dictionary={dictionary} />
      </div>
    </section>
  );
}
