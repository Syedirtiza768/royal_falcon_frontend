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
  Users2,
  Car,
  CarFront,
  TrafficCone,
  ThermometerSun,
  ShieldAlert,
  Gauge,
  Moon,
  MoveHorizontal,
  CarFrontIcon,
  BadgeCheck,
  CarTaxiFront,
  BusIcon,
  Clock3,
  AlertTriangle,
  BarChart,
  TrainFrontTunnel,
  ShieldCheck,
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
          title={"Traffic Management System"}
          description={""}
          border={"150px"}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard
          icon={<Car className="h-10 w-10 text-primary" />}
          title="Traffic flow speed"
          description="The system automatically detects the flow speed of the road in real-time. The flow speed is the average speed of all vehicles, which can indicate traffic congestion."
          variant={"second"}
        />
        <SolutionsCard
          icon={<CarFront className="h-10 w-10 text-primary" />}
          title="Traffic flow density detection"
          description="This feature determines the flow’s density by dividing the number of vehicles by the average speed. This helps determine the vehicle density of each lane."
          variant={"second"}
        />
        <SolutionsCard
          icon={<TrafficCone className="h-10 w-10 text-primary" />}
          title="Traffic anomaly "
          description="The system reports any abnormal or unusual traffic situations like odd average speed (e.g., zero), traffic and pedestrian violations, objects left on the road, or anything disrupting normal traffic flow."
          variant={"second"}
        />

        <SolutionsCard
          icon={<ThermometerSun className="h-10 w-10 text-primary" />}
          title="Weather analyzer"
          description="This feature analyzes the weather in the radar area. It constantly measures temperature, wind speed and direction, humidity, rain, and visibility (light conditions, fog, dust, etc.)."
          variant={"second"}
        />
        <SolutionsCard
          icon={<ShieldAlert className="h-10 w-10 text-primary" />}
          title="Vandalism Detection"
          description="The system detects and immediately reports any attempts to damage the radar so that traffic authorities can take proper action."
          variant={"second"}
        />
        <SolutionsCard
          icon={<Gauge className="h-10 w-10 text-primary" />}
          title="Vehicle-based speed limits"
          description="Using night mode, Traffitix can accurately analyze live and recorded video streams, even in low-light conditions."
          variant={"second"}
        />

        <SolutionsCard
          icon={<Moon className="h-10 w-10 text-primary" />}
          title="Night mode"
          description="With the night mode feature, Traffitix can accurately analyze live and recorded video streams, even when captured in poor nighttime lighting."
          variant={"second"}
        />
        <SolutionsCard
          icon={<MoveHorizontal className="h-10 w-10 text-primary" />}
          title="Simultaneous dual-direction speed detection"
          description="The system detects the speeds of all vehicles in the video stream for both road directions simultaneously."
          variant={"second"}
        />
        <SolutionsCard
          icon={<CarFrontIcon className="h-10 w-10 text-primary" />}
          title="Speed detection for multiple vehicle orientations"
          description="The system detects the speeds of all vehicles in the video stream across different orientations."
          variant={"second"}
        />

        <SolutionsCard
          icon={<Moon className="h-10 w-10 text-primary" />}
          title="Night mode"
          description="With the night mode feature, Traffitix can accurately analyze live and recorded video streams, even when captured in poor nighttime lighting."
          variant={"second"}
        />
        <SolutionsCard
          icon={<BadgeCheck className="h-10 w-10 text-primary" />}
          title="License Plate Detection & Recognition"
          description="The system detects and recognizes vehicle license plates, ensuring better monitoring and law enforcement."
          variant={"second"}
        />
        <SolutionsCard
          icon={<BusIcon className="h-10 w-10 text-primary" />}
          title="Vehicle color, make & model detection"
          description="The system detects the color, make, and model of vehicles in the video stream."
          variant={"second"}
        />
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={"Business Benefits"}
          description={""}
          border={"150px"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px] mb-[50px]">
        <SolutionsCard2
          icon={<Clock3 className="h-10 w-10 text-white" />}
          title="Faster response time for detected accidents and road blockage."
          variant={"second"}
        />
        <SolutionsCard2
          icon={<AlertTriangle className="h-10 w-10 text-white" />}
          title="Instant alerting of critical violations."
          variant={"second"}
        />
        <SolutionsCard2
          icon={<BarChart className="h-10 w-10 text-white" />}
          title="AI-Powered analytics for data-driven traffic, road planning."
          variant={"second"}
        />
        <SolutionsCard2
          icon={<TrafficCone className="h-10 w-10 text-white" />}
          title=" Better informed traffic and road policy-making."
          variant={"second"}
        />
        <SolutionsCard2
          icon={<ShieldCheck className="h-10 w-10 text-white" />}
          title="Safer roads, cities, and municipalities."
          variant={"second"}
        />
      </div>

      {/* Call to Action */}
      {/* <CallToAction /> */}
    </div>
  );
}
