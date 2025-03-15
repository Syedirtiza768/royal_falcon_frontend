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
      <SectionHeading title={"Who We Are"} description={""} border={"150px"} />
      <motion.div
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        viewport={{ once: true }}
        className="mt-[40px] flex flex-col items-center justify-center"
      >
        <div className="lg:w-[60%] mx-auto text-center">
          {/* <h2 className="font-bold text-primary">Vision</h2>
          <p className="text-[16px] whitespace-pre-line text-center  ">
            Drive the agentic revolution.
          </p>
          <br />
          <h2 className="font-bold text-primary">Mission</h2>
          <p className="text-[16px] whitespace-pre-line text-center  ">
            Adapt Adopt and Adept.
          </p>

          <br />
          <h2 className="font-bold text-primary">Strategy</h2>
          <p className="text-[16px] whitespace-pre-line text-center  ">
            Integration of AI-driven capabilities, optimize business operations
            and empower new decision-making abilities
          </p> */}

          <p>
            Upwards is a UAE national initiative and a technology company
            dedicated to developing cutting-edge solutions that address global
            challenges and drive sustainability. Our commitment to technology
            extends beyond mere innovation—we focus on creating impactful,
            future-ready solutions that make a real difference.
            <br />
            <br />
            Through its operating companies, Upwards delivers pioneering,
            competitive, and highly dependable products and systems to both
            public and private sector clients, generating substantial commercial
            and societal value
            <br />
            <br />
          </p>
        </div>

        <div className=" mx-auto  mt-[40px] transition-all duration-500">
          <Link
            href={"/who-we-are"}
            className=" flex items-center justify-center gap-3 cursor-pointer hover:gap-6 text-black hover:text-primary transition-all duration-500"
          >
            <span className="tracking-widest ">VIEW MORE</span>
            <MdArrowRightAlt className="text-primary text-[30px] transition-all duration-500" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default WhoWeAreSection;
