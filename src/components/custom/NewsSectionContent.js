"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { b_t_animation, newsData } from "@/lib/Data";
import useSWR from "swr";
import { baseUrl, getAllNewsAPI } from "@/EndPoints";
import NewsSectionItem from "./NewsSectionItem";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function NewsSectionContent({ dictionary, lang }) {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/news-collections?populate=*&locale=${lang}`,
    fetcher
  );

  const latestNews = data?.data
    ? [...data.data] // Create a shallow copy to avoid mutating the original array
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .slice(0, 3)
    : []; // Return an empty array if data is undefined

  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNews.map((news, index) => (
            <NewsSectionItem key={index} news={news} />
          ))}
        </div>
      </div>
    </section>
  );
}
