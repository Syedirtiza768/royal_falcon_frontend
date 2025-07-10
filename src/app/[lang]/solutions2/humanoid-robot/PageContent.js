"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/custom/SectionHeading";
import { Users, BarChart3, Lightbulb } from "lucide-react";
import { b_t_animation } from "@/lib/Data";
import LeftSection from "../LeftSection";
import RightSection from "../RightSection";
import { SolutionsCard2 } from "../SolutionsCard2";
import CallToAction from "../CallToAction";

export default function PageContent({ dictionary }) {
  return (
    <div className="flex flex-col min-h-screen mt-[120px]">
      {/* Hero Section */}
      <div className="px-[20px]  lg:px-[90px] mb-[30px]">
        <SectionHeading
          title={dictionary.HumanoidRobotHeading1}
          description={""}
          border={"150px"}
        />
      </div>

      <RightSection
        title={dictionary.HumanoidRobotHeading2}
        description={dictionary.HumanoidRobotHeading2Description}
        image={
          "/images/solutions/Redefining-Possibilities-Humanoid-Robotics.png"
        }
      />

      <LeftSection
        title={dictionary.HumanoidRobotHeading3}
        description={dictionary.HumanoidRobotHeading3Description}
        image={"/images/solutions/Healthcare-and-Rehabilitatio.png"}
      />

      <RightSection
        title={dictionary.HumanoidRobotHeading4}
        description={dictionary.HumanoidRobotHeading4Description}
        image={"/images/solutions/Why-Humanoid-Robotics-Is-Essential.png"}
      />

      <div className="mb-[50px]"></div>

      {/* Call to Action */}
      <CallToAction dictionary={dictionary} />
    </div>
  );
}
