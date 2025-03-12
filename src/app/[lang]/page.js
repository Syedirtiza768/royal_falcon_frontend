import { Navbar } from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";
import { getDictionary } from "./dictionaries";
import Section2 from "@/components/custom/Section2";
import Section3Slider from "@/components/custom/Section3Slider";
import Footer from "@/components/custom/Footer";
import ChairmanMessage from "@/components/custom/ChairManMessage";
import CeoMessage from "@/components/custom/CeoMessage";
import AnimatedHeading from "@/components/custom/AnimatedHeading";
import ServicesSection from "@/components/custom/ServicesSection";
import SolutionsSectionContent from "@/components/custom/SolutionsSectionContent";
import NewsSectionContent from "@/components/custom/NewsSectionContent";
import ContactSection from "@/components/custom/ContactSection";
import { MdArrowRightAlt } from "react-icons/md";
import WhoWeAreSection from "@/components/custom/WhoWeAreSection";
import SectionHeading from "@/components/custom/SectionHeading";
import ServicesSection2 from "@/components/custom/ServicesSection2";
import WorldMapSection from "@/components/custom/WorldMapSection";

async function HomePage({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const b_t_animation = {
    hide: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <main className="min-h-screen">
      <Navbar dictionary={dictionary} transparent={true} />
      <Section2 dictionary={dictionary} />
      {/* <Section3Slider /> */}

      {/* Who We Are Section */}
      <WhoWeAreSection dictionary={dictionary} />

      {/* Services Section */}
      <ServicesSection />

      {/* World Map Section */}
      <div className="mt-[50px]">
        <WorldMapSection />
      </div>

      {/* Solutions */}
      <ServicesSection2 />

      {/* News */}
      <div className="lg:px-[100px]">
        <SectionHeading
          title={"News"}
          description={"Check the valuable insights"}
          border={"170px"}
        />
        <NewsSectionContent />
      </div>

      {/* <ChairmanMessage /> */}
      {/* <CeoMessage /> */}

      {/* Contact */}
      <div className="lg:px-[100px]">
        <SectionHeading
          title={"Contact Us"}
          description={"Lets Connect"}
          border={"170px"}
        />
        <ContactSection />
      </div>

      <Footer />
      {/* <button>{dictionary.test}</button> */}
    </main>
  );
}

export default HomePage;
