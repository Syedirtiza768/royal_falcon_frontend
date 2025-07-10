"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/custom/SectionHeading";
import ServicesSection from "@/components/custom/ServicesSection";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  Users,
  BarChart3,
  Lightbulb,
  Globe,
  Award,
} from "lucide-react";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import { b_t_animation } from "@/lib/Data";
import Image from "next/image";
import AnimatedHeading from "@/components/custom/AnimatedHeading";
import LeftSection from "../LeftSection";
import RightSection from "../RightSection";
import { SolutionsCard } from "../SolutionsCard";
import CallToAction from "../CallToAction";

export default function PageContent({ dictionary }) {
  return (
    <div className="flex flex-col min-h-screen mt-[120px]">
      {/* Hero Section */}
      <div className="px-[20px]  lg:px-[90px]">
        <SectionHeading
          title={dictionary.FutureMobilityHeading}
          description={""}
          border={"120px"}
        />
        <motion.div
          initial="hide"
          whileInView="show"
          variants={b_t_animation}
          viewport={{ once: true }}
          className="mt-[40px] flex flex-col items-center justify-center"
        >
          <div className="lg:w-[60%] mx-auto text-center mt-[-20px]">
            <p>{dictionary.FutureMobilityDescription}</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.FutureMobilityHeading2}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={dictionary.FutureMobilityHeading2Sub1}
        description={dictionary.FutureMobilityHeading2Sub1Description}
        image={"/images/solutions/others/Self-drivingCars.png"}
      />

      <RightSection
        title={dictionary.FutureMobilityHeading2Sub2}
        description={dictionary.FutureMobilityHeading2Sub2Description}
        image={"/images/solutions/others/AutonomousDrones.png"}
      />

      <LeftSection
        title={dictionary.FutureMobilityHeading2Sub3}
        description={dictionary.FutureMobilityHeading2Sub3Description}
        image={"/images/solutions/others/RoboticShuttles.png"}
      />

      <div className="mt-[50px]">
        <SectionHeading
          title={dictionary.FutureMobilityHeading3}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={dictionary.FutureMobilityHeading3Sub1}
        description={dictionary.FutureMobilityHeading3Sub1Description}
        image={"/images/solutions/others/ElectricVehicles(EVs).png"}
      />

      <RightSection
        title={dictionary.FutureMobilityHeading3Sub2}
        description={dictionary.FutureMobilityHeading3Sub2Description}
        image={"/images/solutions/others/RenewableEnergyIntegration.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.FutureMobilityHeading4}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={dictionary.FutureMobilityHeading4Sub1}
        description={dictionary.FutureMobilityHeading4Sub1Description}
        image={"/images/solutions/others/UnifiedPlatforms.png"}
      />

      <RightSection
        title={dictionary.FutureMobilityHeading4Sub2}
        description={dictionary.FutureMobilityHeading4Sub2Description}
        image={"/images/solutions/others/Real-timeAnalytics.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.FutureMobilityHeading5}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={dictionary.FutureMobilityHeading5Sub1}
        description={dictionary.FutureMobilityHeading5Sub1Description}
        image={"/images/solutions/others/AirTaxis.png"}
      />

      <RightSection
        title={dictionary.FutureMobilityHeading5Sub2}
        description={dictionary.FutureMobilityHeading5Sub2Description}
        image={"/images/solutions/others/CargoDrones.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.FutureMobilityHeading6}
          description={""}
          border={"100px"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard
          title={dictionary.FutureMobilityHeading6Sub1}
          description={dictionary.FutureMobilityHeading6Sub1Description}
          variant={"first"}
        />
        <SolutionsCard
          title={dictionary.FutureMobilityHeading6Sub2}
          description={dictionary.FutureMobilityHeading6Sub2Description}
          variant={"first"}
        />
        <SolutionsCard
          title={dictionary.FutureMobilityHeading6Sub3}
          description={dictionary.FutureMobilityHeading6Sub3Description}
          variant={"first"}
        />
        <SolutionsCard
          title={dictionary.FutureMobilityHeading6Sub4}
          description={dictionary.FutureMobilityHeading6Sub4Description}
          variant={"first"}
        />
      </div>

      <p className="text-center w-[90%] md:w-[60%] mx-auto my-[50px]">
        {dictionary.FutureMobilityHeading6Description}
      </p>
      {/* Call to Action */}
      <CallToAction dictionary={dictionary} />
    </div>
  );
}
