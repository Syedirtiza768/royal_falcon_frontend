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
import CallToAction from "../../solutions/CallToAction";

export default function PageContent({ dictionary }) {
  return (
    <div className="flex flex-col min-h-screen mt-[120px]">
      {/* Hero Section */}
      <div className="px-[20px]  lg:px-[90px]">
        <SectionHeading
          title={dictionary.LLMOpsApplianceHeading}
          description={dictionary.LLMOpsApplianceDescription}
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
              {dictionary.LLMOpsApplianceDescription2}
              <br />
              <br />
              {dictionary.LLMOpsApplianceDescription3}
            </p>
          </div>
        </motion.div>
      </div>

      {/* <div className="mt-[70px]">
        <SectionHeading
          title={"Key Features and Capabilities"}
          description={""}
          border={"300px"}
        />
      </div> */}

      <LeftSection
        title={dictionary.LLMOpsApplianceHeading2}
        description={dictionary.LLMOpsApplianceHeading2Description}
        image={"/images/products/llm1.webp"}
      />

      <RightSection
        title={dictionary.LLMOpsApplianceHeading3}
        description={dictionary.LLMOpsApplianceHeading3Description}
        image={"/images/products/llm2.webp"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.LLMOpsApplianceHeading4}
          description={""}
          border={"300px"}
        />
      </div>
      <img
        src="/images/products/test5.PNG"
        className="h-[300px] md:h-[500px] px-[20px] md:px-[100px] mt-[50px] md:w-[80%] mx-auto mb-[50px] object-contain"
        alt=""
      />
      {/* Call to Action */}
      <CallToAction dictionary={dictionary} />
    </div>
  );
}
