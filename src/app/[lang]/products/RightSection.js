import AnimatedHeading from "@/components/custom/AnimatedHeading";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { b_t_animation } from "@/lib/Data";

function RightSection({ title, description, image }) {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      variants={b_t_animation}
      viewport={{ once: true }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center  px-[20px] md:px-[100px]"
    >
      <div className="space-y-6 lg:pr-12">
        <AnimatedHeading>
          <h1 className="text-xl md:text-3xl font-bold text-primary mb-1">
            {title}
          </h1>
        </AnimatedHeading>
        <div className="w-16 h-1 bg-primary"></div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt="Mission illustration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
    </motion.div>
  );
}

export default RightSection;
