import { Navbar } from "@/components/custom/Navbar";
import Image from "next/image";
import Footer from "@/components/custom/Footer";
import ServicesSection2 from "@/components/custom/ServicesSection2";
import ProductsSection from "@/components/custom/ProductsSection";
import { getDictionary } from "../../dictionaries";
import Link from "next/link";
import WhoWeAreForPage from "@/components/custom/WhoWeAreForPage";
import PageContent from "./PageContent";

export default async function LLMProductsPage({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Navbar dictionary={dictionary} transparent={false} />
      <PageContent dictionary={dictionary} />
      <Footer dictionary={dictionary} />
    </>
  );
}
