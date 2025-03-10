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

async function HomePage({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main className="min-h-screen">
      <Navbar dictionary={dictionary} />
      <Section2 dictionary={dictionary} />
      <Section3Slider />
      <ChairmanMessage />
      <CeoMessage />

      {/* Services */}
      <div>
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-primary mb-6">
          Services
        </h2>
        <ServicesSection />
      </div>

      <Footer />
      {/* <button>{dictionary.test}</button> */}
    </main>
  );
}

export default HomePage;
