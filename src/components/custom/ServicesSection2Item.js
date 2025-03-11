"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { b_t_animation } from "@/lib/Data";

export function ServicesSection2Item({ title, description, img }) {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      variants={b_t_animation}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-6 gap-3"
    >
      <Image src={img} height={50} width={50} alt={title} />
      <h2 className="text-lg font-semibold ">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}
