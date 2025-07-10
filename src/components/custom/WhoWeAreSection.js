"use client";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { b_t_animation } from "@/lib/Data";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import Image from "next/image"; // Import Image component for better image handling

function WhoWeAreSection({ dictionary }) {
  return (
    <section className="px-5 md:px-10 lg:px-20 py-16 bg-white overflow-hidden">
      <div className="container mx-auto">
        <SectionHeading
          title={dictionary.whoWeAreHeadingHomePage}
          description={""} // Assuming description is intentionally empty for this section
          border={"150px"} // Keep border if it's a specific design element
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial="hide"
            whileInView="show"
            variants={b_t_animation}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[450px] lg:h-[550px] rounded-none shadow-xl overflow-hidden"
          >
            <Image
              src="/images/home/about1.jpg" // Replace with a professional image
              alt="Professional team collaborating"
              layout="fill"
              objectFit="cover"
              className="transition-transform  duration-500 hover:scale-105" // Subtle hover effect
            />
            {/* Optional: Overlay for branding or effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial="hide"
            whileInView="show"
            variants={b_t_animation}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 leading-relaxed">
              {/* Optional sub-heading or rephrase the main paragraph start */}
              {dictionary.whoWeAreHomePage.split(".")[0]}.{" "}
              {/* Take the first sentence as a sub-heading */}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {/* Rest of the paragraph */}
              {dictionary.whoWeAreHomePage.split(".").slice(1).join(".")}.
            </p>

            <Link
              href={"/who-we-are"}
              className="group flex items-center gap-3 w-fit text-primary font-semibold text-lg hover:text-primary-dark transition-all duration-300"
            >
              <span className="tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
                {dictionary.whoWeAreButtonTextHomePage}
              </span>
              <MdArrowRightAlt className="text-2xl transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
