import { Navbar } from "@/components/custom/Navbar";
import { getDictionary } from "../dictionaries";
import Footer from "@/components/custom/Footer";
import SectionHeading from "@/components/custom/SectionHeading";
import ContactSection from "@/components/custom/ContactSection";

export default async function ChairmanMessage({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Navbar dictionary={dictionary} transparent={false} />

      <section className="w-full bg-white py-16 md:py-24 mt-[50px] px-[20px] lg:px-[100px]">
        <div className="lg:px-[100px]" id="contactSection">
          <SectionHeading
            title={dictionary.contactHeading}
            description={dictionary.contactDescription}
            border={"170px"}
          />
          <ContactSection dictionary={dictionary} />
        </div>
      </section>

      <Footer dictionary={dictionary} />
    </>
  );
}
