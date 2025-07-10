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
      <div className="px-[20px]  lg:px-[90px]">
        <SectionHeading
          title={dictionary.ImmigrationHeading}
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
              {dictionary.ImmigrationContent1} <br />
              <br /> {dictionary.ImmigrationContent2}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="mt-[70px]">
        <SectionHeading
          title={dictionary.ImmigrationHeading2}
          description={""}
          border={"300px"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard2
          title={dictionary.ImmigrationHeading2Title1}
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title={dictionary.ImmigrationHeading2Title2}
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title={dictionary.ImmigrationHeading2Title3}
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title={dictionary.ImmigrationHeading2Title4}
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title={dictionary.ImmigrationHeading2Title5}
          description=""
          variant={"first"}
        />
      </div>
      <p className="text-center w-[90%] md:w-[60%] mx-auto mt-[30px] ">
        {dictionary.ImmigrationHeading2Description}
      </p>

      {/* Section 3 */}
      <LeftSection
        title={dictionary.ImmigrationHeading3}
        description={dictionary.ImmigrationHeading3Description}
        image={"/images/solutions/Smart-visa-system.png"}
      />

      <RightSection
        title={dictionary.ImmigrationHeading4}
        description={dictionary.ImmigrationHeading4Description}
        image={"/images/solutions/Hardware-Agnostic.png"}
      />

      <LeftSection
        title={dictionary.ImmigrationHeading5}
        description={dictionary.ImmigrationHeading5Description}
        image={"/images/solutions/Agility-to-meet.png"}
      />

      <RightSection
        title={dictionary.ImmigrationHeading6}
        description={dictionary.ImmigrationHeading6Description}
        image={"/images/solutions/Manufacturing-and-Industrial-Operations.png"}
      />

      <LeftSection
        title={dictionary.ImmigrationHeading7}
        description={dictionary.ImmigrationHeading7Description}
        image={"/images/solutions/Public-Services-and-Customer-Interaction.png"}
      />

      <RightSection
        title={dictionary.ImmigrationHeading8}
        description={dictionary.ImmigrationHeading8Description}
        image={"/images/solutions/The-Future-Beckons.png"}
      />
      <div className="mt-[50px]"></div>
      {/* Call to Action */}
      <CallToAction dictionary={dictionary} />
    </div>
  );
}
