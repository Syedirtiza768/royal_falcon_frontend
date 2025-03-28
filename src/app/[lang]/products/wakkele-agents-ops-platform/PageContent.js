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
import { SolutionsCard2 } from "../SolutionsCard2";

export default function PageContent({ dictionary }) {
  return (
    <div className="flex flex-col min-h-screen mt-[120px]">
      {/* Hero Section */}
      <div className="px-[20px]  lg:px-[90px]">
        <SectionHeading
          title={"WAKKELE – AGENTS OPS Platform"}
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
            <p>
              The Agents Ops platform allows the enterprise to custom built
              their own domain based knowledge agents to work on their company
              specific work tasks. These agents will integrate with LLM and RAG
              to allow easier interaction between employees and the customized
              agents.
            </p>
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
        With our powerful and versatile platform, it empowers the company to
        drive their workforce into the next digital evolution.
      </p>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
