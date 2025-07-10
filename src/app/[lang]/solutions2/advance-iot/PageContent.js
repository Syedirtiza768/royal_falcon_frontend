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
          title={dictionary.AdvanceIotHeading}
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
            <p>{dictionary.AdvanceIotDescription}</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.AdvanceIotHeading2}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={dictionary.AdvanceIotHeading3}
        description={dictionary.AdvanceIotHeading3Description}
        image={"/images/solutions/others/SensorsAndDevices.png"}
      />

      <RightSection
        title={dictionary.AdvanceIotHeading4}
        description={dictionary.AdvanceIotHeading4Description}
        image={"/images/solutions/others/Connectivity.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.AdvanceIotHeading5}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={dictionary.AdvanceIotHeading6}
        description={dictionary.AdvanceIotHeading6Description}
        image={"/images/solutions/others/DataCollection.png"}
      />

      <RightSection
        title={dictionary.AdvanceIotHeading7}
        description={dictionary.AdvanceIotHeading7Description}
        image={"/images/solutions/others/Analytics.png"}
      />

      <LeftSection
        title={dictionary.AdvanceIotHeading8}
        description={dictionary.AdvanceIotHeading8Description}
        image={"/images/solutions/others/Storage.png"}
      />

      <RightSection
        title={dictionary.AdvanceIotHeading9}
        description={dictionary.AdvanceIotHeading9Description}
        image={"/images/solutions/others/Visualization.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.AdvanceIotHeading10}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={dictionary.AdvanceIotHeading11}
        description={dictionary.AdvanceIotHeading11Description}
        image={"/images/solutions/others/DataEncryption.png"}
      />

      <RightSection
        title={dictionary.AdvanceIotHeading12}
        description={dictionary.AdvanceIotHeading12Description}
        image={"/images/solutions/others/AccessControl.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.AdvanceIotHeading13}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={dictionary.AdvanceIotHeading14}
        description={dictionary.AdvanceIotHeading14Description}
        image={"/images/solutions/others/Interoperability.png"}
      />

      <RightSection
        title={dictionary.AdvanceIotHeading15}
        description={dictionary.AdvanceIotHeading15Description}
        image={"/images/solutions/others/Scalability.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.AdvanceIotHeading16}
          description={""}
          border={"100px"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard
          title={dictionary.AdvanceIotHeading16SubHeading1}
          description={dictionary.AdvanceIotHeading16SubHeading1Description}
          variant={"first"}
        />
        <SolutionsCard
          title={dictionary.AdvanceIotHeading16SubHeading2}
          description={dictionary.AdvanceIotHeading16SubHeading2Description}
          variant={"first"}
        />
        <SolutionsCard
          title={dictionary.AdvanceIotHeading16SubHeading3}
          description={dictionary.AdvanceIotHeading16SubHeading3Description}
          variant={"first"}
        />
      </div>

      <p className="text-center w-[90%] md:w-[60%] mx-auto my-[50px]">
        {dictionary.AdvanceIotHeading16Description}
      </p>
      {/* Call to Action */}
      <CallToAction dictionary={dictionary} />
    </div>
  );
}
