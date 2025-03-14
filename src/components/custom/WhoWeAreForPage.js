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
              Upwards is a UAE national initiative and a leading technology
              company based in Abu Dhabi, dedicated to driving digital
              transformation for governments and enterprises. Backed by local
              entities and agencies, we leverage our team of experienced experts
              to deliver cutting-edge solutions.
              <br />
              <br />
              As an innovation-driven company, we provide end-to-end support for
              your digital transformation journey through advanced AI agents,
              robotics technology, IoT, software development, AI infrastructure,
              and a flexible business model tailored to your needs.
              <br />
              <br />
              With over 20 years of experience in both local and international
              markets, our team is well-equipped to tackle complex challenges
              and deliver impactful solutions.
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
