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
          title={"Humanoid Robot"}
          description={""}
          border={"150px"}
        />
        {/* <motion.div
          initial="hide"
          whileInView="show"
          variants={b_t_animation}
          viewport={{ once: true }}
          className="mt-[40px] flex flex-col items-center justify-center"
        >
          <div className="lg:w-[60%] mx-auto text-center">
            <p>
              Upwards e-Visa management is a essential to a modern, integrated
              border management system. It is key to enhancing both security and
              convenience for the visitors to the country. <br />
              <br /> e-Visa Management System is a full suite of
              service-oriented applications designed to securely manage visa
              applications and issue visas, eVisas, and residential permits.
            </p>
          </div>
        </motion.div> */}
      </div>

      <RightSection
        title={
          "Redefining Possibilities: Humanoid Robotics as the Future of Innovation"
        }
        description={
          "In an age of boundless technological progress, humanoid robotics stands at the forefront of transformation—bridging the gap between human ingenuity and machine precision. Our advanced systems built with our partners, modelled after the human form, are more than mere technological marvels; they are powerful solutions poised to revolutionize industries and redefine human-machine interaction. A Multifaceted Solution for a New Era"
        }
        image={
          "/images/solutions/Redefining-Possibilities-Humanoid-Robotics.png"
        }
      />

      <LeftSection
        title={"Healthcare and Rehabilitation"}
        description={
          "Patient Care Assistance: Humanoid robots excel in performing routine tasks such as monitoring vitals, administering medications, and assisting patients with mobility—enabling healthcare professionals to focus on critical care. \nTherapeutic Applications: Through personalized interaction and adaptive support, they serve as companions for patients undergoing physical or psychological rehabilitation, fostering faster recovery and improved well-being. \nSurgical Precision: Equipped with advanced sensors and AI-driven algorithms, humanoid robots assist surgeons with complex procedures, enhancing accuracy and reducing risks. "
        }
        image={"/images/solutions/Healthcare-and-Rehabilitatio.png"}
      />

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
