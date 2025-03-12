import { Navbar } from "@/components/custom/Navbar";
import Image from "next/image";
import { getDictionary } from "../dictionaries";
import Footer from "@/components/custom/Footer";

export default async function ChairmanMessage({ params }) {
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
              <div className="relative h-[350px] md:h-[400px] w-full overflow-hidden rounded-lg bg-gray-900">
                <Image
                  src="/images/chairman.png"
                  alt="Chairman"
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
                  We are shaping the future with a clear mission: to strengthen
                  the UAE&apos;s global leadership in the era of intelligent
                  technology. Guided by the nation&apos;s bold vision, we
                  pioneer solutions that redefine progress, security, and
                  sustainability.
                  <br />
                  <br />
                  As a national initiative, cutting-edge AI is transformed into
                  real-world impact, bridging visionary advancements with
                  scalable applications. Collaboration with global innovators,
                  the cultivation of Emirati talent, and a commitment to ethical
                  AI principles ensure that the UAE remains a beacon of
                  technological excellence. Every solution delivered enhances
                  economic resilience and accelerates the transition to a
                  knowledge-driven economy.
                  <br />
                  <br />
                  The future belongs to those who lead. This era of
                  transformation is not just to be embraced but shaped.
                  Together, limitless potential will be unlocked—where
                  technology empowers humanity, and progress serves generations
                  to come.
                </p>
              </div>

              <div className="pt-4">
                <p className="text-[#c19367] font-bold">CHAIRMAN</p>
                <h4 className="text-[15px] font-bold text-black">
                  His Highness Sheikh Mohammed bin Sultan bin Khalifa Al Nahyan
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
