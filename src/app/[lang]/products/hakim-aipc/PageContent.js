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
          title={"HAKIM – AIPC"}
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
            <p>
              HAKIM, حكيم is meaning wise in Arabic world. It represents Upwards
              vision to provide wisdom to everyone in the world with the HAKIM
              AIPC. HAKIM is inbuilt with mult-modal AI algorithms and large
              language model to support intuitive interactions and new user
              experience. It runs these models locally and does not require any
              documents to be submitted to cloud before a detailed analysis can
              be generated.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-[70px]">
        <SectionHeading title={"Features"} description={""} border={"100px"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard2
          title="Bespoke Domain-based AI agentsVisa Application Centers"
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title="Support Arabic Language"
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title="Offline LLM based Agents"
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title="Inbuilt Multi-modal algorithms"
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title="Personalized automated process"
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
        <SectionHeading title={"Functions"} description={""} border={"100px"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard2
          title="AI-Powered Search"
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title="Multi-modal Document Reader / Chat"
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title="Smart Writing "
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title="Real-Time Translation"
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title="Business / Academic Research"
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title="Data Analytics"
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title="Code Generation"
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title="Information Recommendation"
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title="Intelligent & Sentiment Analysis"
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title="Customized Agents for Process Automation"
          description=""
          variant={"second"}
        />
        <SolutionsCard2
          title="Bespoke Domain Knowledge Graph"
          description=""
          variant={"second"}
        />
      </div>

      <div className="mt-[70px]">
        <SectionHeading title={"Benefits"} description={""} border={"100px"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px] mb-[50px]">
        <SolutionsCard2
          title="Improved stability on using multi-modals AI locally"
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title="Enhanced data security with local AI processing for analytics and content review"
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title="Improved productivity with custom built AI agents and domain-specific knowledge graph"
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title="Continuous AI performance with or without internet"
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title="Custom built laptop to suite multiple user profiles and operating environment"
          description=""
          variant={"first"}
        />
      </div>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
