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
          title={dictionary.HakimAipcHeading}
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
            <p>{dictionary.HakimAipcDescription}</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.HakimAipcHeading2}
          description={""}
          border={"100px"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard2
          title={dictionary.HakimAipcHeading2Sub1}
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading2Sub2}
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading2Sub3}
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading2Sub4}
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading2Sub5}
          description=""
          variant={"first"}
        />
      </div>

      <img
        src="/images/products/test2.png"
        className="h-[300px] md:h-[500px] px-[20px] md:px-[100px] mt-[50px] md:w-[80%] mx-auto"
        alt=""
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.HakimAipcHeading3}
          description={""}
          border={"100px"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard2
          title={dictionary.HakimAipcHeading3Sub1}
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading3Sub2}
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading3Sub3}
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading3Sub4}
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading3Sub5}
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading3Sub6}
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading3Sub7}
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading3Sub8}
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading3Sub9}
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading3Sub10}
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading3Sub11}
          description=""
          variant={"second"}
        />
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.HakimAipcHeading4}
          description={""}
          border={"100px"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px] mb-[50px]">
        <SolutionsCard2
          title={dictionary.HakimAipcHeading4Sub1}
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading4Sub2}
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading4Sub3}
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading4Sub4}
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title={dictionary.HakimAipcHeading4Sub5}
          description=""
          variant={"first"}
        />
      </div>

      {/* Call to Action */}
      <CallToAction dictionary={dictionary} />
    </div>
  );
}
