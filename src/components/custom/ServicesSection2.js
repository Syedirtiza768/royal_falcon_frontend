import { ServicesSection2Item } from "./ServicesSection2Item";
import { AiFillRobot } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import { GiRobotLeg } from "react-icons/gi";
import { FaTrafficLight } from "react-icons/fa";
import { MdOutlineSmartToy } from "react-icons/md";
import AnimatedHeading from "./AnimatedHeading";
import SectionHeading from "./SectionHeading";
import { solutions } from "@/lib/Data";

export default function ServicesSection2() {
  return (
    <div className="container mx-auto px-[20px]  lg:px-[50px] py-12">
      <SectionHeading
        title={"Solutions"}
        description={
          "These are some of our main solutions that we have developed for our customers. Get in touch with us and we will share our experience and designed a suitable solution for your needs."
        }
        border={"170px"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {solutions.map((item, index) => (
          <ServicesSection2Item
            key={index}
            title={item.title}
            description={item.description}
            // Icon={item.Icon}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}
