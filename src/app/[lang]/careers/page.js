import { Navbar } from "@/components/custom/Navbar";
import Image from "next/image";
import { getDictionary } from "../dictionaries";
import Footer from "@/components/custom/Footer";
import ServicesSection2 from "@/components/custom/ServicesSection2";
import ProductsSection from "@/components/custom/ProductsSection";
import CareerForm from "@/components/custom/CareerForm";

export default async function CareersPage({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Navbar dictionary={dictionary} transparent={false} />

      <section className="w-full bg-white mt-[80px] px-[20px] lg:px-[100px]">
        <div className="container mx-auto py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">
              {dictionary.CareersHeading}
            </h1>
            <p className="text-muted-foreground mb-8">
              {dictionary.CareersDescription}
            </p>
            <CareerForm dictionary={dictionary} />
          </div>
        </div>
      </section>

      <Footer dictionary={dictionary} />
    </>
  );
}
