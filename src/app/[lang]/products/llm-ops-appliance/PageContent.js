"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/custom/SectionHeading";
import ServicesSection from "@/components/custom/ServicesSection";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  Users,
  BarChart3,
  Lightbulb,
  Globe,
  Award,
} from "lucide-react";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import { b_t_animation } from "@/lib/Data";
import Image from "next/image";
import AnimatedHeading from "@/components/custom/AnimatedHeading";
import LeftSection from "../LeftSection";
import RightSection from "../RightSection";
import { SolutionsCard } from "../SolutionsCard";
import CallToAction from "../CallToAction";

export default function PageContent({ dictionary }) {
  return (
    <div className="flex flex-col min-h-screen mt-[120px]">
      {/* Hero Section */}
      <div className="px-[20px]  lg:px-[90px]">
        <SectionHeading
          title={"LLMOps Appliance"}
          description={
            "Large Language Model, Text-to-Image Model, All-in-one Appliance"
          }
          border={"150px"}
        />
        <motion.div
          initial="hide"
          whileInView="show"
          variants={b_t_animation}
          viewport={{ once: true }}
          className="mt-[40px] flex flex-col items-center justify-center"
        >
          <div className="lg:w-[60%] mx-auto text-center">
            <p>
              LLMOps, Upwards&apos;s enterprise-level platform, manages the full
              lifecycle of large language models. It enables enterprises to
              implement these models into production and business processes in
              an agile, efficient, and closed-loop manner. The platform
              optimizes the entire workflow, including: corpus access and
              development, prompt engineering, model training, knowledge
              extraction and fusion, model management, application and agent
              development, operation and maintenance, monitoring and continuous
              improvement of business outcomes.
              <br />
              <br />
              LLMOps supports the latest large language models such as
              Phi-4-14B, Gemma-3-27B, Llama-3.3-70B-Instruct, DeepSeek-R1-671B,
              text-to-image models like Stable-Diffusion-3.5-Large, embedding
              models like Jina-Embeddings-v3, reranker models like
              Jina-Reranker-v2-Base-Multilingual, and more from Hugging Face. It
              leverages GenAI&apos;s strengths in natural language processing,
              efficient training and inference, and high-precision AI reasoning.
            </p>
          </div>
        </motion.div>
      </div>

      {/* <div className="mt-[70px]">
        <SectionHeading
          title={"Key Features and Capabilities"}
          description={""}
          border={"300px"}
        />
      </div> */}

      <LeftSection
        title={"TxData-LM Hardware Platform"}
        description={
          "This platform supports the high computational demands of GenAI model training. It provides GPU-accelerated training for various LLM algorithms through optimized software and hardware engineering. We offer customizable packages tailored to customers’ needs and budgets."
        }
        image={"/images/solutions/Intelligent-Talent-Acquisitionnnn.png"}
      />

      <RightSection
        title={"High-Speed InfiniBand 400G Switch"}
        description={
          "Housed in a 1U standard chassis, each 400G IB switch delivers 64 NDR 400Gb/s InfiniBand ports. A single switch offers 51.2 Tb/s of aggregate bidirectional throughput and a packet forwarding rate exceeding 66.5 billion packets per second (BPPS). Supporting the latest NDR technology, it provides high-speed, low-latency, and scalable solutions."
        }
        image={"/images/solutions/Dynamic-Workforce-Planninggg.png"}
      />

      <div className="mt-[70px]">
        <SectionHeading
          title={"Architecture"}
          description={""}
          border={"300px"}
        />
      </div>
      <img
        src="/images/products/test5.PNG"
        className="h-[300px] md:h-[500px] px-[20px] md:px-[100px] mt-[50px] md:w-[80%] mx-auto mb-[50px] object-contain"
        alt=""
      />
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
