"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { b_t_animation, newsData } from "@/lib/Data";

export default function NewsSectionContent({ dictionary }) {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dictionary.newsItems.map((blog, index) => (
            <motion.div
              initial="hide"
              whileInView="show"
              variants={b_t_animation}
              viewport={{ once: true }}
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <Link href={"news/" + blog.id}>
                {/* Image Container */}
                <div className="relative h-48 w-full">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 ">
                    {blog.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
