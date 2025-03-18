"use client";
import { baseUrl } from "@/EndPoints";
import { b_t_animation } from "@/lib/Data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NewsSectionItem({ news }) {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      variants={b_t_animation}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
    >
      <Link href={"news/" + news.documentId}>
        {/* Image Container */}
        <div className="relative h-48 w-full">
          <Image
            src={baseUrl + news.Image[0].url || "/placeholder.svg"}
            alt={""}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 ">
            {news.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}

export default NewsSectionItem;
