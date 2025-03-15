import Image from "next/image";
import ServicesSectionItemCard from "./ServicesSectionItemCard";
import { services } from "@/lib/Data";

export default function ServicesSectionItem() {
  return (
    <section className="w-full  ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {services.map((card, index) => (
            <ServicesSectionItemCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
