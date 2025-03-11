"use client";
import React from "react";
import { motion } from "framer-motion";
import { b_t_animation } from "@/lib/Data";

function SectionHeading({ title, description, border }) {
  return (
    <motion.h2
      initial="hide"
      whileInView="show"
      variants={b_t_animation}
      viewport={{ once: true }}
      className="text-center text-2xl md:text-3xl font-semibold text-black mb-6 flex flex-col items-center justify-center gap-3"
    >
      <span>{title}</span>
      <span className={`h-[1px] bg-primary`} style={{ width: border }}></span>
      <p className="w-[95%] lg:w-[70%] text-[15px] font-light">{description}</p>
    </motion.h2>
  );
}

export default SectionHeading;
