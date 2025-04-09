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
          title={dictionary.AiAgentsPlatformHeading}
          description={dictionary.AiAgentsPlatformHeadingSubTitle}
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
            <p>
              {dictionary.AiAgentsPlatformDescription1}
              <br /> <br />
              {dictionary.AiAgentsPlatformDescription2}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.AiAgentsPlatformHeading2}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={dictionary.AiAgentsPlatformHeading3}
        description={dictionary.AiAgentsPlatformHeading3Description}
        image={"/images/solutions/Intelligent-Talent-Acquisition.png"}
      />

      <RightSection
        title={dictionary.AiAgentsPlatformHeading4}
        description={dictionary.AiAgentsPlatformHeading4Description}
        image={"/images/solutions/Dynamic-Workforce-Planning.png"}
      />

      <LeftSection
        title={dictionary.AiAgentsPlatformHeading5}
        description={dictionary.AiAgentsPlatformHeading5Description}
        image={"/images/solutions/Personalized-Employee-Development.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.AiAgentsPlatformHeading6}
          description={""}
          border={"300px"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard
          title={dictionary.AiAgentsPlatformHeading6SubHeading1}
          description={
            dictionary.AiAgentsPlatformHeading6SubHeading1Description
          }
          variant={"first"}
        />
        <SolutionsCard
          title={dictionary.AiAgentsPlatformHeading6SubHeading2}
          description={
            dictionary.AiAgentsPlatformHeading6SubHeading2Description
          }
          variant={"first"}
        />
        <SolutionsCard
          title={dictionary.AiAgentsPlatformHeading6SubHeading3}
          description={
            dictionary.AiAgentsPlatformHeading6SubHeading3Description
          }
          variant={"first"}
        />
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.AiAgentsPlatformHeading7}
          description={dictionary.AiAgentsPlatformHeading7Description}
          border={"350px"}
        />
      </div>

      <p className="text-center w-[90%] md:w-[60%] mx-auto mb-[70px]">
        {dictionary.AiAgentsPlatformHeading7Description2}
      </p>
      {/* Call to Action */}
      <CallToAction dictionary={dictionary} />
    </div>
  );
}
