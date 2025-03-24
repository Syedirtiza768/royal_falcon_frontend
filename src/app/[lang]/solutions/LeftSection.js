import AnimatedHeading from "@/components/custom/AnimatedHeading";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { b_t_animation } from "@/lib/Data";

function LeftSection({ title, description, image }) {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      variants={b_t_animation}
      viewport={{ once: true }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center mt-[50px] px-[20px] md:px-[100px]"
    >
      <div className="relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden order-2 lg:order-1">
        <Image
          src={image}
          alt="Vision illustration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      <div className="space-y-6 lg:pl-12 order-1 lg:order-2">
        <AnimatedHeading>
          <h1 className="text-xl md:text-3xl font-bold text-primary mb-1">
            {title}
          </h1>
        </AnimatedHeading>
        <div className="w-16 h-1 bg-primary"></div>
        <p className="whitespace-pre-line text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default LeftSection;
