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
          title={dictionary.ImmersiveCoolingSystemHeading}
          description={""}
          border={"150px"}
        />
      </div>

      <LeftSection
        title={dictionary.ImmersiveCoolingSystemSubHeading1}
        description={dictionary.ImmersiveCoolingSystemSubHeading1Description}
        image={"/images/solutions/others/SubmergingComponents.jpg"}
      />

      <RightSection
        title={dictionary.ImmersiveCoolingSystemSubHeading2}
        description={dictionary.ImmersiveCoolingSystemSubHeading2Description}
        image={"/images/solutions/others/Single-phase_liquid_stays_liquid.jpg"}
      />

      <LeftSection
        title={dictionary.ImmersiveCoolingSystemSubHeading3}
        description={dictionary.ImmersiveCoolingSystemSubHeading3Description}
        image={
          "/images/solutions/others/Two-phase_ coolant_boils_to_remove_heat.jpg"
        }
      />

      {/*  Section 2 */}
      <div className="px-[20px]  lg:px-[90px] mt-[50px]">
        <SectionHeading
          title={dictionary.ImmersiveCoolingSystemHeading2}
          description={""}
          border={"150px"}
        />
      </div>

      <LeftSection
        title={dictionary.ImmersiveCoolingSystemHeading2SubHeading1}
        description={
          dictionary.ImmersiveCoolingSystemHeading2SubHeading1Description
        }
        image={"/images/solutions/others/CoolantSelection_.jpg"}
      />

      <RightSection
        title={dictionary.ImmersiveCoolingSystemHeading2SubHeading2}
        description={
          dictionary.ImmersiveCoolingSystemHeading2SubHeading2Description
        }
        image={"/images/solutions/others/HighEfficiencyHeatExchanger.jpg"}
      />

      <LeftSection
        title={dictionary.ImmersiveCoolingSystemHeading2SubHeading3}
        description={
          dictionary.ImmersiveCoolingSystemHeading2SubHeading3Description
        }
        image={"/images/solutions/others/PrecisionPumpSystem.jpg"}
      />

      <img
        src="/images/solutions/immersive-cooling/img1.png"
        className="mx-auto mt-[30px]"
        alt=""
      />

      {/* section 4 */}
      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.ImmersiveCoolingSystemHeading3}
          description={""}
          border={"300px"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6  mx-[20px] md:mx-[100px] mb-[50px]">
        <SolutionsCard
          title={dictionary.ImmersiveCoolingSystemHeading3SubHeading1}
          description={
            dictionary.ImmersiveCoolingSystemHeading3SubHeading1Description
          }
          variant={"second"}
        />
        <SolutionsCard
          title={dictionary.ImmersiveCoolingSystemHeading3SubHeading2}
          description={
            dictionary.ImmersiveCoolingSystemHeading3SubHeading2Description
          }
          variant={"second"}
        />
        <SolutionsCard
          title={dictionary.ImmersiveCoolingSystemHeading3SubHeading3}
          description={
            dictionary.ImmersiveCoolingSystemHeading3SubHeading3Description
          }
          variant={"second"}
        />
        <SolutionsCard
          title={dictionary.ImmersiveCoolingSystemHeading3SubHeading4}
          description={
            dictionary.ImmersiveCoolingSystemHeading3SubHeading4Description
          }
          variant={"second"}
        />
      </div>

      {/* Call to Action */}
      <CallToAction dictionary={dictionary} />
    </div>
  );
}
