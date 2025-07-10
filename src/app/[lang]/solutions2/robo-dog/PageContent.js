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
          title={dictionary.RobodogHeading}
          description={""}
          border={"150px"}
        />
        <motion.div
          initial="hide"
          whileInView="show"
          variants={b_t_animation}
          viewport={{ once: true }}
          className="mt-[40px] flex flex-col items-center justify-center"
        >
          <div className="lg:w-[60%] mx-auto text-center">
            <p>{dictionary.RobodogDescription}</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.RobodogHeading2}
          description={""}
          border={"400px"}
        />
      </div>

      <LeftSection
        title={dictionary.RobodogHeading2Sub1}
        description={dictionary.RobodogHeading2Sub1Description}
        image={"/images/solutions/others/AdvancedSurveillance.jpg"}
      />

      <RightSection
        title={dictionary.RobodogHeading2Sub2}
        description={dictionary.RobodogHeading2Sub2Description}
        image={"/images/solutions/others/CrowdControlAssistance.jpg"}
      />

      <LeftSection
        title={dictionary.RobodogHeading2Sub3}
        description={dictionary.RobodogHeading2Sub3Description}
        image={"/images/solutions/others/EvidenceCollection.jpg"}
      />

      {/* Section 3 starts */}
      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.RobodogHeading3}
          description={""}
          border={"400px"}
        />
      </div>

      <LeftSection
        title={dictionary.RobodogHeading3Sub1}
        description={dictionary.RobodogHeading3Sub1Description}
        image={"/images/solutions/others/ReconnaissanceMissions.png"}
      />

      <RightSection
        title={dictionary.RobodogHeading3Sub2}
        description={dictionary.RobodogHeading3Sub2Description}
        image={"/images/solutions/others/robodog1.png"}
      />

      <LeftSection
        title={dictionary.RobodogHeading3Sub3}
        description={dictionary.RobodogHeading3Sub3Description}
        image={"/images/solutions/others/SearchAndRescueOperations.png"}
      />

      {/* Section 4 starts */}
      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.RobodogHeading4}
          description={""}
          border={"400px"}
        />
      </div>

      <LeftSection
        title={dictionary.RobodogHeading4Sub1}
        description={dictionary.RobodogHeading4Sub1Description}
        image={"/images/solutions/others/robodog2.png"}
      />

      <RightSection
        title={dictionary.RobodogHeading4Sub2}
        description={dictionary.RobodogHeading4Sub2Description}
        image={"/images/solutions/others/EvidenceCollection.jpg"}
      />

      <LeftSection
        title={dictionary.RobodogHeading4Sub3}
        description={dictionary.RobodogHeading4Sub3Description}
        image={"/images/solutions/others/MedicalSupplyDelivery.jpg"}
      />

      {/* Section 5 */}
      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.RobodogHeading5}
          description={""}
          border={"300px"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard
          title={dictionary.RobodogHeading5Sub1}
          description={dictionary.RobodogHeading5Sub1Description}
          variant={"second"}
        />
        <SolutionsCard
          title={dictionary.RobodogHeading5Sub2}
          description={dictionary.RobodogHeading5Sub2Description}
          variant={"second"}
        />
        <SolutionsCard
          title={dictionary.RobodogHeading5Sub3}
          description={dictionary.RobodogHeading5Sub3Description}
          variant={"second"}
        />
      </div>

      <p className="text-center w-[90%] md:w-[60%] mx-auto my-[70px]">
        {dictionary.RobodogHeading5Description}
      </p>
      {/* Call to Action */}
      <CallToAction dictionary={dictionary} />
    </div>
  );
}
