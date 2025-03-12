"use client";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { b_t_animation } from "@/lib/Data";
import SectionHeading from "./SectionHeading";
function WhoWeAreSection({ dictionary }) {
  return (
    <div className="px-[20px]  lg:px-[90px] mt-[50px]">
      <SectionHeading title={"Who We Are"} description={""} border={"150px"} />
      <motion.div
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        viewport={{ once: true }}
        className="mt-[40px] flex flex-col items-center justify-center"
      >
        <div className="lg:w-[60%] mx-auto">
          <p className="text-[16px] whitespace-pre-line text-center  ">
            <span className="font-bold">{dictionary.vision}</span>
            {dictionary.visionContent}
          </p>
          <br />
          <p className="text-[16px] whitespace-pre-line text-center  ">
            <span className="font-bold">{dictionary.mission}</span>
            {dictionary.missionContent}
          </p>
          <br />
          <p className="text-[16px] whitespace-pre-line text-center  ">
            {/* <span className="font-bold">{dictionary.story}</span> */}
            {dictionary.storyContent}
          </p>
        </div>

        <div className=" mx-auto  mt-[40px] transition-all duration-500">
          <button className=" flex items-center justify-center gap-3 cursor-pointer hover:gap-6 text-black hover:text-primary transition-all duration-500">
            <span className="tracking-widest ">VIEW MORE</span>
            <MdArrowRightAlt className="text-primary text-[30px] transition-all duration-500" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default WhoWeAreSection;
