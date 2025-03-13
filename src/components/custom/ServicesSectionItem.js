import Image from "next/image";
import ServicesSectionItemCard from "./ServicesSectionItemCard";

const cards = [
  {
    title: "CONSULTING",
    description:
      "Our diverse expertise in domains such as Security, Command Center, Traffic Management, Public Transport and Comms Network will provided.",
    imageSrc: "/images/services/service1.png",
  },
  {
    title: "CUSTOMIZATION",
    description:
      "We are well verse in latest advance technologies to design bespoke hardware solutions and bespoke agents for our customers.",
    imageSrc: "/images/services/service2.png",
  },
  {
    title: "PROGRAM MANAGEMENT",
    description:
      "Our expert team have delivered national and city-scale programs and are your best candidates to support your implementation.",
    imageSrc: "/images/services/service3.png",
  },
  {
    title: "IMPLEMENTATION",
    description:
      "Through our vast partner networks we have successfully delivered multiple national projects and will continue to deliver for your projects.",
    imageSrc: "/images/services/service4.png",
  },
];

export default function ServicesSectionItem() {
  return (
    <section className="w-full  ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {cards.map((card, index) => (
            <ServicesSectionItemCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
