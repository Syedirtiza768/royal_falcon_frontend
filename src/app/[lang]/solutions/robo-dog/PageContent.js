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
          title={"Robo Dog – Woof"}
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
              In the ever-evolving landscape of security operations, technology
              continues to pave the way for smarter, safer, and more efficient
              solutions. Among these innovations, robotic dogs have emerged as
              transformative tools, redefining how security agencies tackle
              challenges ranging from surveillance to emergency response.
              Engineered for versatility and precision, these robotic companions
              offer capabilities far beyond the limits of traditional methods.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={"Law Enforcement Agencies"}
          description={""}
          border={"400px"}
        />
      </div>

      <LeftSection
        title={"Advanced Surveillance"}
        description={
          "Equipped with high-definition cameras, thermal imaging, and night vision, robotic dogs can conduct surveillance in hard-to-access areas, providing real-time data to officers while minimizing human risk."
        }
        image={"/images/solutions/robodog/Upwards1.jpg"}
      />

      <RightSection
        title={"Crowd Control Assistance"}
        description={
          "Robotic dogs can help monitor and manage crowds during public events, ensuring smooth operations with their non-threatening yet authoritative presence."
        }
        image={"/images/solutions/robodog/Upwards2.jpg"}
      />

      <LeftSection
        title={"Evidence Collection"}
        description={
          "With precise sensors, they can assist in gathering forensic evidence, preserving scenes of investigation while avoiding contamination."
        }
        image={"/images/solutions/robodog/Upwards3.jpg"}
      />

      {/* Section 3 starts */}
      <div className="mt-[70px]">
        <SectionHeading
          title={"Defense Agencies"}
          description={""}
          border={"400px"}
        />
      </div>

      <LeftSection
        title={"Reconnaissance Missions"}
        description={
          "These robotic allies can navigate hostile or unpredictable terrain, scouting enemy positions and gathering critical intelligence without endangering soldiers."
        }
        image={"/images/solutions/robodog/Upwards4.jpg"}
      />

      <RightSection
        title={"Explosive Detection and Disposal"}
        description={
          "Outfitted with specialized detectors and manipulation tools, robotic dogs can identify and neutralize explosive threats efficiently and safely"
        }
        image={"/images/solutions/robodog/Upwards5.jpg"}
      />

      <LeftSection
        title={"Search and Rescue Operations"}
        description={
          "In combat zones or disaster-stricken areas, robotic dogs can locate and assist in evacuating injured personnel under extreme conditions"
        }
        image={"/images/solutions/robodog/Upwards6.jpg"}
      />

      {/* Section 4 starts */}
      <div className="mt-[70px]">
        <SectionHeading
          title={"Disaster Management and Emergency Services"}
          description={""}
          border={"400px"}
        />
      </div>

      <LeftSection
        title={"Search and Rescue"}
        description={
          "During natural disasters, robotic dogs equipped with life-detection sensors can locate trapped individuals with exceptional accuracy, even under rubble or debris."
        }
        image={"/images/solutions/robodog/Upwards7.jpg"}
      />

      <RightSection
        title={"Hazardous Environment Exploration"}
        description={
          "In scenarios involving chemical spills, radiation, or unstable structures, robotic dogs can assess danger zones and deliver critical information for informed decision-making."
        }
        image={"/images/solutions/robodog/Upwards8.jpg"}
      />

      <LeftSection
        title={"Medical Supply Delivery"}
        description={
          "Their ability to navigate complex terrain allows them to deliver medical supplies to inaccessible locations swiftly."
        }
        image={"/images/solutions/robodog/Upwards1.jpg"}
      />

      {/* Section 5 */}
      <div className="mt-[70px]">
        <SectionHeading
          title={"Why Robotic Dogs Are Indispensable"}
          description={""}
          border={"300px"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard
          title="Unparalleled Mobility"
          description="Designed to mimic the agility and stability of a real canine, robotic dogs can traverse diverse environments, from rocky terrains to urban landscapes."
          variant={"second"}
        />
        <SolutionsCard
          title="AI-Powered Intelligence"
          description=" Advanced machine learning algorithms enable them to adapt to scenarios, make split-second decisions, and collaborate seamlessly with human teams."
          variant={"second"}
        />
        <SolutionsCard
          title="Cost-Efficiency and Durability"
          description="Built to withstand harsh conditions, they reduce long-term operational costs while maximizing reliability."
          variant={"second"}
        />
      </div>

      <p className="text-center w-[90%] md:w-[60%] mx-auto my-[70px]">
        Robotic dogs represent more than a technological achievement—they
        symbolize a commitment to protecting lives, property, and national
        interests. As security agencies embrace these groundbreaking companions,
        they unlock new possibilities for proactive, innovative, and humane
        solutions to complex challenges.
      </p>
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
