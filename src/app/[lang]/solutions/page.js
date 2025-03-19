import { Navbar } from "@/components/custom/Navbar";
import Image from "next/image";
import { getDictionary } from "../dictionaries";
import Footer from "@/components/custom/Footer";
import ServicesSection2 from "@/components/custom/ServicesSection2";

export default async function SolutionsPage({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Navbar dictionary={dictionary} transparent={false} />

      <section className="w-full bg-white mt-[80px] px-[20px] lg:px-[100px]">
        <ServicesSection2 dictionary={dictionary} />
      </section>

      <Footer dictionary={dictionary} />
    </>
  );
}
