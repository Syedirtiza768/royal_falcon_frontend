"use client";
import Image from "next/image";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { b_t_animation } from "@/lib/Data";

function WhoWeAreForPage({ dictionary }) {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden bg-background px-[20px] lg:px-[70px] mt-[20px]">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title={dictionary.whoWeAreHeading}
          description={""}
          border={"170px"}
        />

        <motion.div
          initial="hide"
          whileInView="show"
          variants={b_t_animation}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-6 lg:pr-12 order-2 md:order-1">
            <p>
              {dictionary.whoweArePara1}
              <br />
              <br />
              {dictionary.whoweArePara2}
              <br />
              <br />
              {dictionary.whoweArePara3}
            </p>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden order-1 md:order-2">
            <Image
              src="/images/about.webp"
              alt="Mission illustration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhoWeAreForPage;
