import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CeoMessage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
          <Image
            src="/images/ceo2.jpg"
            alt="Chairman"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-sm font-medium uppercase tracking-wider text-primary">
              From the CEO
            </h4>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Leading with Vision and Purpose
            </h1>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p>
              At Upwards, we are proud to contribute to the UAE&apos;s dynamic
              economy and national development through our cutting-edge
              technology solutions. Based in Abu Dhabi, we specialize in
              delivering AI infrastructure, AI agents and software, IoT
              solutions, and system integration services. These solutions are
              designed to help both large corporates and SMEs thrive in an
              increasingly digital world.
              <br />
              Collaboration is central to our approach. We work closely with
              both public and private sector partners to support innovative
              projects that have a strong developmental impact on the UAE&apos;s
              growth. Our focus is on providing tailored, scalable technology
              solutions that help businesses integrate the latest advancements
              in AI and IoT, driving efficiency, productivity, and
              future-proofing their operations.
              <br />
              In addition, we are committed to fostering the UAE&apos;s
              entrepreneurial ecosystem. Through our AI-powered solutions and
              system integration expertise, we empower businesses to unlock new
              opportunities. We also offer educational programs and mentoring
              services to advance technical capabilities and promote innovation
              across sectors. At Upwards, we are dedicated to driving the
              UAE&apos;s digital transformation and supporting key government
              projects that shape the future of the nation.
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
      </div>
    </div>
  );
}
