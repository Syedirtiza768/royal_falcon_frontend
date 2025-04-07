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
          title={"AI Agents Platform – Wakale"}
          description={"Transforming the Future of Workforce Management"}
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
              In an era defined by rapid technological advancements,
              organizations are continuously seeking innovative solutions to
              stay competitive and agile. The AI Agents Platform emerges as the
              revolutionary answer to workforce challenges, empowering companies
              to redefine their operations, enhance productivity, and elevate
              employee experiences. <br /> <br />
              At its core, the AI Agents Platform is more than just a tool—its a
              comprehensive solution designed to transform workforce management
              from reactive to proactive. Leveraging state-of-the-art artificial
              intelligence, this platform provides companies with an
              unprecedented ability to optimize their human resources, align
              talent with business objectives, and build a future-ready
              workforce.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={"Key Features and Capabilities"}
          description={""}
          border={"300px"}
        />
      </div>

      <LeftSection
        title={"Intelligent Talent Acquisition"}
        description={
          "Say goodbye to traditional, time-consuming recruitment processes. The AI Agents Platform uses advanced algorithms to empower the employees in the organization with customized agents to help them in providing more value to their work. For example, the contract review agent can help the procurement team to do the first level review on the contract provided by supplier before finalizing a version for the legal team."
        }
        image={"/images/solutions/Intelligent-Talent-Acquisition.png"}
      />

      <RightSection
        title={"Dynamic Workforce Planning"}
        description={
          "With real-time analytics and predictive insights, the platform enables organizations to anticipate workforce needs and allocate customized agents efficiently to different teams. This ensures teams are always equipped to handle current and future challenges. The teams are also able to custom made the agents at their fingertips without support from suppliers and have quick workforce enhancement with lower turnaround time."
        }
        image={"/images/solutions/Dynamic-Workforce-Planning.png"}
      />

      <LeftSection
        title={"Personalized Employee Development"}
        description={
          "Employees are the backbone of any organization, and the AI Agents Platform ensures their potential is nurtured. By analysing individual performance and learning preferences, the AI Agents Platform recommends tailored training programs and career development opportunities."
        }
        image={"/images/solutions/Personalized-Employee-Development.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={"Enhanced Employee Engagement"}
          description={""}
          border={"300px"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard
          title="Dynamic Goal Setting"
          description="Employees can set and adjust personal and team goals with the assistance of AI, ensuring their objectives remain aligned with organizational priorities."
          variant={"first"}
        />
        <SolutionsCard
          title="Wellness Monitoring"
          description="The platform identifies signs of burnout or stress and provides personalized resources and recommendations for maintaining a healthy work-life balance."
          variant={"first"}
        />
        <SolutionsCard
          title="Recognition Programs"
          description="AI-driven rewards systems ensure that employees are consistently acknowledged for their contributions, fostering motivation and satisfaction"
          variant={"first"}
        />
      </div>

      <div className="mt-[70px]">
        <SectionHeading
          title={"Seamless Remote and Hybrid Work Solutions"}
          description={
            "In today's evolving workplace landscape, the AI Agents Platform ensures smooth communication, collaboration, and performance management across distributed teams."
          }
          border={"350px"}
        />
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard
          title="Adaptable Role Management"
          description="Whether it's onboarding new hires or promoting seasoned professionals, the platform adapts to meet the unique requirements of every employee, ensuring smooth transitions and growth."
          variant={"second"}
        />
        <SolutionsCard
          title="Multilingual and Cultural Adaptability"
          description="AI capabilities accommodate diverse languages and cultural contexts, ensuring inclusivity across global teams."
          variant={"second"}
        />
      </div> */}

      <p className="text-center w-[90%] md:w-[60%] mx-auto mb-[70px]">
        With these advanced features, the AI Agents Platform is a
        game-changer—amplifying productivity across the entire organization
        while empowering every individual employee to thrive. It is not just
        about working smarter; it is about working better, together.
      </p>
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
