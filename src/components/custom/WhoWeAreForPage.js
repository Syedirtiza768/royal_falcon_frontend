"use client";
import Image from "next/image";
import React from "react";
import AnimatedHeading from "./AnimatedHeading";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { b_t_animation } from "@/lib/Data";
import WhoWeAreSection from "./WhoWeAreSection";

function WhoWeAreForPage() {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden bg-background px-[20px] lg:px-[70px] mt-[20px]">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title={"Who We Are"}
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
              Upwards is a UAE national initiative and a technology company
              dedicated to developing cutting-edge solutions that address global
              challenges and drive sustainability. Our commitment to technology
              extends beyond mere innovation—we focus on creating impactful,
              future-ready solutions that make a real difference.
              <br />
              <br />
              Through its operating companies, Upwards delivers pioneering,
              competitive, and highly dependable products and systems to both
              public and private sector clients, generating substantial
              commercial and societal value.
              <br />
              <br />
              At Upwards, we embody the spirit of the falcon—rising with
              precision, focus, and resilience. Falcons do not just fly; they
              ascend with intent, just as we empower businesses to enhance their
              capabilities through advanced IT solutions. We believe that when
              technology is harnessed with purpose, it fuels progress, unlocks
              potential, and drives transformation. Aligned with this vision,
              Upwards actively supports the UAE&apos;s strategic agenda to
              embrace technology and artificial intelligence, positioning the
              nation as a global leader in innovation and excellence.
            </p>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden order-1 md:order-2">
            <Image
              src="/images/about.jpg"
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

export default WhoWeAreForPage;
