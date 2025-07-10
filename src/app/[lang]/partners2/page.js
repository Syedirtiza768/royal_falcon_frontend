import { Navbar } from "@/components/custom/Navbar";
import Image from "next/image";
import { getDictionary } from "../dictionaries";
import Footer from "@/components/custom/Footer";
import SectionHeading from "@/components/custom/SectionHeading";
import { partners } from "@/lib/Data";

export default async function PartnersPage({ params }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Navbar dictionary={dictionary} transparent={false} />

      <div className="container mx-auto py-12 px-[20px] md:px-6 lg:px-[100px] mt-[70px]">
        <SectionHeading
          title={dictionary.partnersHeading}
          description={""}
          border={"70px"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content - Below image on small screens, Left on large screens */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="space-y-4 text-muted-foreground">
              <p>{dictionary.partnersPageContent1}</p>
              <p>{dictionary.partnersPageContent2}</p>
            </div>
          </div>

          {/* Image - On top in small screens, Right in large screens */}
          <div className="relative h-[300px] w-full overflow-hidden order-1 md:order-2">
            <Image
              src="/images/partners/main.jpg"
              alt="Chairman"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>

        {/* Showing all partners */}
        <div className="mt-[50px]">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partners.map((i) => (
              <div
                className="md:w-[150px] md:h-[150px] overflow-hidden group bg-gray-200 p-3 "
                key={i.img}
              >
                <Image
                  src={i.img}
                  alt="Bosch Logo"
                  width={150}
                  height={150}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer dictionary={dictionary} />
    </>
  );
}
