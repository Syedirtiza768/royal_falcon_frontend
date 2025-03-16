"use client";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { b_t_animation } from "@/lib/Data";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
function WhoWeAreSection({ dictionary }) {
  return (
    <div className="px-[20px]  lg:px-[90px] mt-[50px]">
      <SectionHeading
        title={dictionary.whoWeAreHeadingHomePage}
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
          <p>{dictionary.whoWeAreHomePage}</p>
        </div>

        <div className=" mx-auto  mt-[40px] transition-all duration-500">
          <Link
            href={"/who-we-are"}
            className=" flex items-center justify-center gap-3 cursor-pointer hover:gap-6 text-black hover:text-primary transition-all duration-500"
          >
            <span className="tracking-widest ">
              {dictionary.whoWeAreButtonTextHomePage}
            </span>
            <MdArrowRightAlt className="text-primary text-[30px] transition-all duration-500" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default WhoWeAreSection;
