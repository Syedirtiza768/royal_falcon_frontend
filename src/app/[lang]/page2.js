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
import OurValuesSection from "@/components/custom/OurValuesSection";
import PartnersMarquee from "@/components/custom/PartnersSlider";
import Link from "next/link";

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
      <ServicesSection dictionary={dictionary} />

      {/* World Map Section */}
      {/* <div className="mt-[50px]">
        <SectionHeading
          title={dictionary.worldMapHeadingHomePage}
          description={""}
          border={"170px"}
        />
        <WorldMapSection
          heading1={dictionary.worldMapHeading1}
          data1={dictionary.worldMapData1}
          heading2={dictionary.worldMapHeading2}
          data2={dictionary.worldMapData2}
          heading3={dictionary.worldMapHeading3}
          data3={dictionary.worldMapData3}
          heading4={dictionary.worldMapHeading4}
          data4={dictionary.worldMapData4}
        />
      </div> */}

      {/* Solutions */}
      <ServicesSection2 dictionary={dictionary} />

      {/* Our Values */}
      {/* <OurValuesSection dictionary={dictionary} /> */}

      {/* News */}
      {/* <div className="lg:px-[100px]" id="newsSection">
        <SectionHeading
          title={dictionary.newsHeading}
          description={dictionary.newsDescription}
          border={"170px"}
        />
        <NewsSectionContent dictionary={dictionary} lang={lang} />
      </div> */}

      {/* Partners  */}
      <div
        className="py-5 mb-[50px] mx-[20px] lg:mx-[130px]"
        id="partnersSection"
      >
        <SectionHeading
          title={dictionary.partnersHeading}
          description={""}
          border={"170px"}
        />
        <PartnersMarquee />
      </div>

      {/* Contact */}
      <div className="lg:px-[100px]" id="contactSection">
        <SectionHeading
          title={dictionary.contactHeading}
          description={dictionary.contactDescription}
          border={"170px"}
        />
        <ContactSection dictionary={dictionary} />
      </div>

      <Footer dictionary={dictionary} />
      {/* <button>{dictionary.test}</button> */}
    </main>
  );
}

export default HomePage;
