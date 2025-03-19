import { ServicesSection2Item } from "./ServicesSection2Item";
import SectionHeading from "./SectionHeading";
import Link from "next/link";

export default function ProductsSection({ dictionary }) {
  return (
    <div
      className="container mx-auto px-[20px]  lg:px-[50px] py-12"
      id="solution-section"
    >
      <SectionHeading
        title={dictionary.productsHeading}
        description={""}
        border={"170px"}
      />
      <div className="h-[400px] flex items-center justify-center">
        <Link href={"/contact"} className="text-primary">
          Contact us for more information
        </Link>
      </div>
    </div>
  );
}
