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
          title={"Future Mobility"}
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
            <p>
              We design and implement innovative, sustainable, and efficient
              mobility solutions that address urbanization challenges, enhance
              connectivity, and reduce environmental impact.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={"Integration of Autonomous Vehicles:"}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={"Self-driving Cars"}
        description={
          "Develop AI-powered autonomous cars for safer and efficient road transportation."
        }
        image={"/images/solutions/others/Self-drivingCars.png"}
      />

      <RightSection
        title={"Autonomous Drones"}
        description={
          "Implement autonomous aerial systems for automated operations."
        }
        image={"/images/solutions/others/AutonomousDrones.png"}
      />

      <LeftSection
        title={"Robotic Shuttles"}
        description={
          "Deploy autonomous public transport shuttles for short-distance travel."
        }
        image={"/images/solutions/others/RoboticShuttles.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={"Electrification of Mobility"}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={"Electric Vehicles (EVs)"}
        description={
          "Accelerate EV adoption with improved battery technology and charging networks."
        }
        image={"/images/solutions/others/ElectricVehicles(EVs).png"}
      />

      <RightSection
        title={"Renewable Energy Integration"}
        description={
          "Power mobility solutions through renewable sources like solar and wind."
        }
        image={"/images/solutions/others/RenewableEnergyIntegration.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={"Mobility-as-a-Service (MaaS)"}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={"Unified Platforms"}
        description={
          "Create mobile applications that combine public, private, and shared transportation options for user convenience."
        }
        image={"/images/solutions/others/UnifiedPlatforms.png"}
      />

      <RightSection
        title={"Real-time Analytics"}
        description={
          "Enable predictive mobility planning based on data insights."
        }
        image={"/images/solutions/others/Real-timeAnalytics.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={"Urban Air Mobility (UAM):"}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={"Air Taxis"}
        description={
          "Develop electric vertical takeoff and landing (eVTOL) aircraft for intra-city travel."
        }
        image={"/images/solutions/others/AirTaxis.png"}
      />

      <RightSection
        title={"Cargo Drones"}
        description={
          "Innovate drone technologies for large-scale freight delivery."
        }
        image={"/images/solutions/others/CargoDrones.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading title={"Benefits"} description={""} border={"100px"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard
          title="Efficiency"
          description="Reduced travel times and streamlined transportation."
          variant={"first"}
        />
        <SolutionsCard
          title="Safety"
          description="Improved road safety through autonomous systems."
          variant={"first"}
        />
        <SolutionsCard
          title="Sustainability"
          description="Minimized ecological footprint with green mobility solutions."
          variant={"first"}
        />
        <SolutionsCard
          title="Accessibility"
          description="Better connectivity for underserved urban and rural areas."
          variant={"first"}
        />
      </div>

      <p className="text-center w-[90%] md:w-[60%] mx-auto my-[50px]">
        Upwards aims to revolutionize how people and goods move in the future,
        integrating cutting-edge technologies with environmental and social
        considerations.
      </p>
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
