import { Navbar } from "@/components/custom/Navbar";
import Image from "next/image";
import { getDictionary } from "../dictionaries";
import Footer from "@/components/custom/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/custom/SectionHeading";
import AnimatedHeading from "@/components/custom/AnimatedHeading";
import VisionAndMissionSection from "@/components/custom/VisionAndMissionSection";

export default async function VisionAndMissionPage({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Navbar dictionary={dictionary} transparent={false} />
      <VisionAndMissionSection />
      <Footer />
    </>
  );
}
