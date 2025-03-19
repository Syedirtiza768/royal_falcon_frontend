import { Navbar } from "@/components/custom/Navbar";
import Image from "next/image";
import Footer from "@/components/custom/Footer";
import ServicesSection2 from "@/components/custom/ServicesSection2";
import ProductsSection from "@/components/custom/ProductsSection";
import { getDictionary } from "../../dictionaries";
import Link from "next/link";

export default async function SolutionsDetailPage({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Navbar dictionary={dictionary} transparent={false} />

      <section className="w-full bg-white mt-[80px] px-[20px] lg:px-[100px]">
        <div className="h-[600px] flex items-center justify-center">
          <Link href={"/contact"} className="text-primary">
            Contact us for more information
          </Link>
        </div>
      </section>

      <Footer dictionary={dictionary} />
    </>
  );
}
