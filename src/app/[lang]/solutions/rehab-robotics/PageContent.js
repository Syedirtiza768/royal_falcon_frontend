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
          title={"Rehab Robotics"}
          description={
            "To elevate the patient recovery through advance robotic technologies"
          }
          border={"150px"}
        />
      </div>

      <LeftSection
        title={"Robotic Support for Rehabilitation"}
        description={
          "Our Robo Assist Rehab Program (RARP) is a work with our distinguished partners to develop cutting edge robotic assist technologies to support different type of rehabilitation programs. These systems provides targeted rehab programs, monitor the patients progress and recommends modifications to program to enhance the recovery in the best possible way."
        }
        image={"/images/solutions/rehab/rehab1.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={"Foundation"}
          description={
            "Overview of the different programs to support building up a full fledge robo assist rehab program."
          }
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
          All the patients rehab data will provide valuable information for the
          doctors and physiotherapists to monitor and adapt their programs to
          the patients progress. The programs has adapt to latest technologies
          such as VR and Metaverse to create interactive programs for the
          patients and also allowing them to have a immersive experience in
          their rehab journey without going through strenuous work and finding
          suitable outdoor locations.
        </p>

        <img
          src="/images/solutions/rehab/rehab3.png"
          alt=""
          className="w-[95%] md:w-[80%] object-cover mx-auto"
        />
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={"EXOMOTUS M4"}
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
          title={"CycleMotus"}
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
          title={"AnkleMotus"}
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
          title={"HandyRehab"}
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
      <CallToAction />
    </div>
  );
}
