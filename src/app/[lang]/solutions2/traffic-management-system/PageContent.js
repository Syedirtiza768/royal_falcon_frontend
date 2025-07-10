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
          title={dictionary.TrafficManagementSystemHeading}
          description={""}
          border={"150px"}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard
          icon={<Car className="h-10 w-10 text-primary" />}
          title={dictionary.TrafficManagementSystemSubHeading1}
          description={dictionary.TrafficManagementSystemSubHeading1Description}
          variant={"second"}
        />
        <SolutionsCard
          icon={<CarFront className="h-10 w-10 text-primary" />}
          title={dictionary.TrafficManagementSystemSubHeading2}
          description={dictionary.TrafficManagementSystemSubHeading2Description}
          variant={"second"}
        />
        <SolutionsCard
          icon={<TrafficCone className="h-10 w-10 text-primary" />}
          title={dictionary.TrafficManagementSystemSubHeading3}
          description={dictionary.TrafficManagementSystemSubHeading3Description}
          variant={"second"}
        />

        <SolutionsCard
          icon={<ThermometerSun className="h-10 w-10 text-primary" />}
          title={dictionary.TrafficManagementSystemSubHeading4}
          description={dictionary.TrafficManagementSystemSubHeading4Description}
          variant={"second"}
        />
        <SolutionsCard
          icon={<ShieldAlert className="h-10 w-10 text-primary" />}
          title={dictionary.TrafficManagementSystemSubHeading5}
          description={dictionary.TrafficManagementSystemSubHeading5Description}
          variant={"second"}
        />
        <SolutionsCard
          icon={<Gauge className="h-10 w-10 text-primary" />}
          title={dictionary.TrafficManagementSystemSubHeading6}
          description={dictionary.TrafficManagementSystemSubHeading6Description}
          variant={"second"}
        />

        <SolutionsCard
          icon={<Moon className="h-10 w-10 text-primary" />}
          title={dictionary.TrafficManagementSystemSubHeading7}
          description={dictionary.TrafficManagementSystemSubHeading7Description}
          variant={"second"}
        />
        <SolutionsCard
          icon={<MoveHorizontal className="h-10 w-10 text-primary" />}
          title={dictionary.TrafficManagementSystemSubHeading8}
          description={dictionary.TrafficManagementSystemSubHeading8Description}
          variant={"second"}
        />
        <SolutionsCard
          icon={<CarFrontIcon className="h-10 w-10 text-primary" />}
          title={dictionary.TrafficManagementSystemSubHeading9}
          description={dictionary.TrafficManagementSystemSubHeading9Description}
          variant={"second"}
        />

        <SolutionsCard
          icon={<BadgeCheck className="h-10 w-10 text-primary" />}
          title={dictionary.TrafficManagementSystemSubHeading11}
          description={
            dictionary.TrafficManagementSystemSubHeading11Description
          }
          variant={"second"}
        />
        <SolutionsCard
          icon={<BusIcon className="h-10 w-10 text-primary" />}
          title={dictionary.TrafficManagementSystemSubHeading12}
          description={
            dictionary.TrafficManagementSystemSubHeading12Description
          }
          variant={"second"}
        />
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.TrafficManagementSystemHeading2}
          description={""}
          border={"150px"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px] mb-[50px]">
        <SolutionsCard2
          icon={<Clock3 className="h-10 w-10 text-white" />}
          title={dictionary.TrafficManagementSystemHeading2Sub1}
          variant={"second"}
        />
        <SolutionsCard2
          icon={<AlertTriangle className="h-10 w-10 text-white" />}
          title={dictionary.TrafficManagementSystemHeading2Sub2}
          variant={"second"}
        />
        <SolutionsCard2
          icon={<BarChart className="h-10 w-10 text-white" />}
          title={dictionary.TrafficManagementSystemHeading2Sub3}
          variant={"second"}
        />
        <SolutionsCard2
          icon={<TrafficCone className="h-10 w-10 text-white" />}
          title={dictionary.TrafficManagementSystemHeading2Sub4}
          variant={"second"}
        />
        <SolutionsCard2
          icon={<ShieldCheck className="h-10 w-10 text-white" />}
          title={dictionary.TrafficManagementSystemHeading2Sub5}
          variant={"second"}
        />
      </div>

      {/* Call to Action */}
      <CallToAction dictionary={dictionary} />
    </div>
  );
}
