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

async function HomePage({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-screen">
      <Navbar dictionary={dictionary} />
      <Section2 dictionary={dictionary} />
      <Section3Slider />

      {/* Services */}
      <div className="lg:px-[80px]">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-primary mb-6">
          Services
        </h2>
        <ServicesSection />
      </div>

      {/* Solutions */}
      <div className="lg:px-[100px]">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-primary mb-6">
          Solutions
        </h2>
        <p className="text-center lg:w-[60%] mx-auto">
          These are some of our main solutions that we have developed for our
          customers. Get in touch with us and we will share our experience and
          designed a suitable solution for your needs.
        </p>
        <SolutionsSectionContent />
      </div>

      {/* News */}
      <div className="lg:px-[100px]">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-primary mb-6">
          News
        </h2>
        <p className="text-center lg:w-[60%] mx-auto">
          Check the valuable insights
        </p>
        <NewsSectionContent />
      </div>

      <ChairmanMessage />
      <CeoMessage />

      {/* Contact */}
      <div className="lg:px-[100px]">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-primary mb-6">
          Contact Us
        </h2>
        <p className="text-center lg:w-[60%] mx-auto">Let&apos;s Connect</p>
        <ContactSection />
      </div>

      <Footer />
      {/* <button>{dictionary.test}</button> */}
    </main>
  );
}

export default HomePage;
