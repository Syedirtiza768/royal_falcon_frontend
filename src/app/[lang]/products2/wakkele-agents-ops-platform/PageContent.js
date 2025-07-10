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
import { SolutionsCard2 } from "../SolutionsCard2";
import CallToAction from "../../solutions/CallToAction";

export default function PageContent({ dictionary }) {
  return (
    <div className="flex flex-col min-h-screen mt-[120px]">
      {/* Hero Section */}
      <div className="px-[20px]  lg:px-[90px]">
        <SectionHeading
          title={dictionary.WakkeleAgentsHeading}
          description={""}
          border={"320px"}
        />
        <motion.div
          initial="hide"
          whileInView="show"
          variants={b_t_animation}
          viewport={{ once: true }}
          className="mt-[40px] flex flex-col items-center justify-center"
        >
          <div className="lg:w-[60%] mx-auto text-center">
            <p>{dictionary.WakkeleAgentsDescription}</p>
          </div>
        </motion.div>
      </div>

      <img
        src="/images/products/test3.png"
        className="h-[300px] md:h-[500px] px-[20px] md:px-[100px] mt-[50px]  mx-auto"
        alt=""
      />

      <img
        src="/images/products/test4.png"
        className="h-[300px] md:h-[500px] px-[20px] md:px-[100px] mt-[50px] mx-auto"
        alt=""
      />

      <p className="w-[95%] md:w-[60%] mx-auto text-center mb-[50px]">
        {dictionary.WakkeleAgentsDescription2}
      </p>

      {/* Call to Action */}
      <CallToAction dictionary={dictionary} />
    </div>
  );
}
