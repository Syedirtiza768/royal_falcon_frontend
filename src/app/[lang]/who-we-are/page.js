import { Navbar } from "@/components/custom/Navbar";
import Image from "next/image";
import { getDictionary } from "../dictionaries";
import Footer from "@/components/custom/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/custom/SectionHeading";
import AnimatedHeading from "@/components/custom/AnimatedHeading";
import VisionAndMissionSection from "@/components/custom/VisionAndMissionSection";
import WhoWeAreSection from "@/components/custom/WhoWeAreSection";
import WhoWeAreForPage from "@/components/custom/WhoWeAreForPage";

export default async function WhoWeAre({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Navbar dictionary={dictionary} transparent={false} />
      <WhoWeAreForPage />
      <Footer />
    </>
  );
}
