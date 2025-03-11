"use client";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { b_t_animation } from "@/lib/Data";
import SectionHeading from "./SectionHeading";
function WhoWeAreSection({ dictionary }) {
  return (
    <div className="lg:px-[80px] mt-[50px]">
      <SectionHeading title={"Who We Are"} description={""} border={"150px"} />
      <div className="mt-[40px] flex flex-col items-center justify-center">
        <motion.p
          initial="hide"
          whileInView="show"
          variants={b_t_animation}
          viewport={{ once: true }}
          className="text-[14px] text-center lg:w-[80%]"
        >
          {dictionary.section2Content}
        </motion.p>

        <motion.div
          initial="hide"
          whileInView="show"
          variants={b_t_animation}
          viewport={{ once: true }}
          className=" mx-auto  mt-[40px] transition-all duration-500"
        >
          <button className=" flex items-center justify-center gap-3 cursor-pointer hover:gap-6 text-black hover:text-primary transition-all duration-500">
            <span className="tracking-widest ">VIEW MORE</span>
            <MdArrowRightAlt className="text-primary text-[30px] transition-all duration-500" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default WhoWeAreSection;
