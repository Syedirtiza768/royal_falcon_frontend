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
          title={"Advance IOT"}
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
              Our Advance IOT solution a scalable, efficient, and sustainable
              IoT system that enhances urban living by optimizing resources,
              improving service delivery, and fostering latest technologies.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={"IoT Infrastructure"}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={"Sensors and Devices"}
        description={
          "Deploy intelligent sensors for real-time data collection across transportation, energy, waste management, flood detection, air quality monitoring and public safety."
        }
        image={"/images/solutions/Intelligent-Talent-Acquisitionnnnn.png"}
      />

      <RightSection
        title={"Connectivity"}
        description={
          "Utilize 5G networks, LORA and edge computing for seamless communication and low latency."
        }
        image={"/images/solutions/Dynamic-Workforce-Planningggg.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={"Data Management"}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={"Data Collection"}
        description={
          "Gather data from IoT devices to monitor urban operations."
        }
        image={"/images/solutions/Intelligent-Talent-Acquisitionnnnn.png"}
      />

      <RightSection
        title={"Analytics"}
        description={
          "Employ AI and machine learning to analyze data for actionable insights."
        }
        image={"/images/solutions/Dynamic-Workforce-Planningggg.png"}
      />

      <LeftSection
        title={"Storage"}
        description={
          "Use latest storage technologies for scalable and secure data storage."
        }
        image={"/images/solutions/Intelligent-Talent-Acquisitionnnnn.png"}
      />

      <RightSection
        title={"Visualization"}
        description={
          "Use latest digital twin technologies to visualize the real world data and to provide simulation of future scenarios."
        }
        image={"/images/solutions/Dynamic-Workforce-Planningggg.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={"Security and Privacy"}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={"Data Encryption"}
        description={
          "Secure communication between devices with strong encryption technologies and blockchain."
        }
        image={"/images/solutions/Intelligent-Talent-Acquisitionnnnn.png"}
      />

      <RightSection
        title={"Access Control"}
        description={
          "Robust authentication mechanisms to protect sensitive information."
        }
        image={"/images/solutions/Dynamic-Workforce-Planningggg.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={"Integration"}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={"Interoperability"}
        description={
          "Our systems integrate seamlessly with existing urban infrastructure."
        }
        image={"/images/solutions/Intelligent-Talent-Acquisitionnnnn.png"}
      />

      <RightSection
        title={"Scalability"}
        description={"Our system can adapt to growing urban demands."}
        image={"/images/solutions/Dynamic-Workforce-Planningggg.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading title={"Benefits"} description={""} border={"100px"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard
          title="Efficiency"
          description="Streamlined operations reduce resource wastage and operational costs."
          variant={"first"}
        />
        <SolutionsCard
          title="Sustainability"
          description="IoT solutions promote eco-friendly practices and reduce environmental impact."
          variant={"first"}
        />
        <SolutionsCard
          title="Quality of Life"
          description="Enhanced services improve convenience and safety for residents."
          variant={"first"}
        />
      </div>

      <p className="text-center w-[90%] md:w-[60%] mx-auto my-[50px]">
        Our Advance IoT solution enhance latest smart city solutions and help to
        improve the quality of life of the people.
      </p>
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
