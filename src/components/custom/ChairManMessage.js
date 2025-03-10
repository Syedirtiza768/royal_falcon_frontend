import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ChairmanMessage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-sm font-medium uppercase tracking-wider text-primary">
              From the Chairman
            </h4>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Leading with Vision and Purpose
            </h1>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p>
              At Upwards, we are architects of the future. Our mission is clear:
              to empower the UAE&apos;s global leadership in the age of
              intelligent technology. Inspired by our nation&apos;s unwavering
              vision, we are pioneering solutions that redefine progress,
              security, and sustainability.
              <br />
              As a narional initiatvie, Upwards bridges visionary AI
              advancements with scalable, real-world applications. We
              collaborate with global leaders, nurture Emirati talent, and
              uphold ethical AI frameworks to ensure the UAE remains a
              lighthouse of technological excellence. Every solution we deliver
              strengthens our nation&apos;s economic resilience and accelerates
              its journey toward a knowledge-driven economy.
              <br />
              The future belongs to those who dare to lead. At Upwards, we are
              committed to ensuring that the UAE not only embraces this era of
              transformation but shapes its trajectory. Together, we will unlock
              limitless possibilities—where technology elevates humanity, and
              progress serves generations to come.
              <br />
              His Highness Sheikh Mohamed Bin Sultan Bin Khalifa Al Nahyan
              <br />
              Also picture about Abu Dhabi you can change to a video with
              history and modern UAE style or other photo about Louvre Abu Dhabi
              and city view.
            </p>
          </div>

          {/* <div className="pt-2">
            <div className="flex flex-col space-y-1">
              <span className="font-semibold text-lg">Jonathan Harrington</span>
              <span className="text-muted-foreground">Chairman & CEO</span>
            </div>

            <div className="mt-6">
              <Button className="group">
                Read Annual Report
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div> */}
        </div>

        <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
          <Image
            src="/images/ceo.jpg"
            alt="Chairman"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
