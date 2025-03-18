"use client";
import Image from "next/image";
import React from "react";
import AnimatedHeading from "./AnimatedHeading";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { b_t_animation } from "@/lib/Data";

function VisionAndMissionSection({ dictionary }) {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden bg-background px-[20px] lg:px-[70px] mt-[20px]">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title={dictionary.visionMissionHeading}
          description={dictionary.visionMissionDescription}
          border={"170px"}
        />

        {/* Vision Section */}
        <motion.div
          initial="hide"
          whileInView="show"
          variants={b_t_animation}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center mt-[50px]"
        >
          <div className="relative h-[300px] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/images/vision.png"
              alt="Vision illustration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            {/* <div className="absolute bottom-0 left-0 p-6 text-white">
              <span className="text-sm font-medium uppercase tracking-wider">
                Innovative Solutions
              </span>
            </div> */}
          </div>

          <div className="space-y-6 lg:pl-12 order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm">
              {dictionary.visionTitle1}
            </div>

            <AnimatedHeading>
              <h1 className="text-xl md:text-3xl font-bold text-primary mb-1">
                {dictionary.visionTitle2}
              </h1>
            </AnimatedHeading>
            <div className="w-16 h-1 bg-primary"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {dictionary.visionDescription}
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial="hide"
          whileInView="show"
          variants={b_t_animation}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-6 lg:pr-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm">
              {dictionary.missionTitle1}
            </div>
            <AnimatedHeading>
              <h1 className="text-xl md:text-3xl font-bold text-primary mb-1">
                {dictionary.missionTitle2}
              </h1>
            </AnimatedHeading>
            <div className="w-16 h-1 bg-primary"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {dictionary.missionDescription}
            </p>
          </div>

          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/images/mission.png"
              alt="Mission illustration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            {/* <div className="absolute bottom-0 left-0 p-6 text-white">
              <span className="text-sm font-medium uppercase tracking-wider">
                Global Collaboration
              </span>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default VisionAndMissionSection;
