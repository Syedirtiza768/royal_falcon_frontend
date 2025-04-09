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
          title={dictionary.RehabRoboticsHeading}
          description={dictionary.RehabRoboticsDescription}
          border={"150px"}
        />
      </div>

      <LeftSection
        title={dictionary.RehabRoboticsHeading2}
        description={dictionary.RehabRoboticsHeading2Description}
        image={"/images/solutions/rehab/rehab1.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.RehabRoboticsHeading3}
          description={dictionary.RehabRoboticsHeading3Description}
          border={"100px"}
        />
      </div>

      <div>
        <img
          src="/images/solutions/rehab/rehab2.png"
          alt=""
          className="w-[95%] md:w-[80%] object-cover mx-auto"
        />
        <p className="text-center w-[90%] md:w-[60%] mx-auto  mt-[50px] ">
          {dictionary.RehabRoboticsHeading3Description2}
        </p>

        <img
          src="/images/solutions/rehab/rehab3.png"
          alt=""
          className="w-[95%] md:w-[80%] object-cover mx-auto"
        />
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.RehabRoboticsHeading4}
          description={""}
          border={"100px"}
        />
      </div>

      <div>
        <img
          src="/images/solutions/rehab/rehab4.png"
          alt=""
          className="w-[95%] md:w-[80%] object-contain mx-auto h-[500px]"
        />
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.RehabRoboticsHeading5}
          description={""}
          border={"100px"}
        />
      </div>

      <div>
        <img
          src="/images/solutions/rehab/rehab5.png"
          alt=""
          className="w-[95%] md:w-[80%] object-contain mx-auto h-[500px]"
        />
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.RehabRoboticsHeading6}
          description={""}
          border={"100px"}
        />
      </div>

      <div>
        <img
          src="/images/solutions/rehab/rehab6.png"
          alt=""
          className="w-[95%] md:w-[80%] object-contain mx-auto h-[500px]"
        />
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.RehabRoboticsHeading7}
          description={""}
          border={"100px"}
        />
      </div>

      <div>
        <img
          src="/images/solutions/rehab/rehab7.png"
          alt=""
          className="w-[95%] md:w-[80%] object-contain mx-auto h-[800px] mb-[50px]"
        />
      </div>

      {/* Call to Action */}
      <CallToAction dictionary={dictionary} />
    </div>
  );
}
