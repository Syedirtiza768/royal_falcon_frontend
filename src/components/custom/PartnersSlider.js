import Marquee from "react-fast-marquee";
import Image from "next/image";
import { partners } from "@/lib/Data";

const PartnersMarquee = () => {
  return (
    <div className="">
      <Marquee speed={50} pauseOnHover={true} gradient={false}>
        {partners.map((i, index) => (
          <div
            key={index}
            className="w-[150px] h-[150px] mx-4  p-3 flex items-center justify-center rounded-lg shadow-lg"
          >
            <Image
              src={i.img}
              alt="Partner Logo"
              width={150}
              height={150}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default PartnersMarquee;
