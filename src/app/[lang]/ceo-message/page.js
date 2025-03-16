import { Navbar } from "@/components/custom/Navbar";
import Image from "next/image";
import { getDictionary } from "../dictionaries";
import Footer from "@/components/custom/Footer";

export default async function CEOMessage({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Navbar dictionary={dictionary} transparent={false} />

      <section className="w-full bg-white py-16 md:py-24 mt-[50px] px-[20px] lg:px-[100px]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            {/* Image Column */}
            <div className="relative mx-auto w-full md:mx-0">
              <div className="relative h-[350px] md:h-[400px] lg:h-[550px] w-full overflow-hidden rounded-lg bg-gray-900">
                <Image
                  src="/images/ceo.png"
                  alt="CEO"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Message Column */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#c19367] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Driving the UAE&apos;s economic growth and national
                  development, we provide cutting-edge technology solutions that
                  accelerate digital transformation. Headquartered in Abu Dhabi,
                  our expertise spans AI infrastructure, AI agents, software,
                  Robotics, IoT solutions, and system integration
                  services—empowering industries in an increasingly digital
                  world. Our mission is to tackle global challenges, drive
                  sustainability, and enhance human well-being.
                  <br />
                  <br />
                  Collaboration is central to our approach. By partnering with
                  both public and private sector entities, we contribute to
                  pioneering projects that advance the UAE&apos;s strategic
                  goals. We specialize in delivering tailored, scalable
                  technology solutions that seamlessly integrate AI and IoT,
                  enhancing efficiency, productivity, and long-term resilience.
                  <br />
                  <br />
                  Beyond technology, we are committed to fostering the
                  UAE&apos;s entrepreneurial ecosystem. Through AI-driven
                  solutions and system integration expertise, we empower
                  businesses to unlock new opportunities while strengthening
                  technical capabilities through education and mentorship
                  programs. Our dedication extends to supporting key government
                  initiatives, shaping the nation&apos;s digital future, and
                  reinforcing its global leadership in technology and
                  innovation.
                </p>
              </div>

              <div className="pt-4">
                <p className="text-[#c19367] font-bold">CEO</p>
                <h4 className="text-[18px] font-bold text-black">
                  Abdullah Lei Shen
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
