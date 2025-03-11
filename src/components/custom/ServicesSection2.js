import { ServicesSection2Item } from "./ServicesSection2Item";
import { AiFillRobot } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import { GiRobotLeg } from "react-icons/gi";
import { FaTrafficLight } from "react-icons/fa";
import { MdOutlineSmartToy } from "react-icons/md";
import AnimatedHeading from "./AnimatedHeading";
import SectionHeading from "./SectionHeading";

export default function ServicesSection2() {
  const techItems = [
    {
      title: "Medical Robotics",
      description:
        "Advanced robotic systems enhancing surgical precision and patient care through automated procedures and AI-assisted diagnostics.",
      //   Icon: AiFillRobot,
      img: "/images/solution1.png",
    },
    {
      title: "Future Mobility",
      description:
        "Next-generation transportation solutions combining autonomous vehicles and sustainable energy for efficient, eco-friendly movement.",
      //   Icon: FaCarSide,
      img: "/images/solution2.png",
    },
    {
      title: "Robo Dog",
      description:
        "Versatile quadruped robots designed for diverse applications from industrial inspection to security and companionship.",
      //   Icon: GiRobotLeg,
      img: "/images/solution3.png",
    },
    {
      title: "Traffic Management Systems",
      description:
        "Smart infrastructure utilizing real-time data analytics to optimize traffic flow, reduce congestion and enhance urban mobility.",
      //   Icon: FaTrafficLight,
      img: "/images/solution4.png",
    },
    {
      title: "AI Agents",
      description:
        "Intelligent software entities that perform complex tasks, make decisions, and adapt to changing environments with minimal human intervention.",
      //   Icon: MdOutlineSmartToy,
      img: "/images/solution5.png",
    },
  ];

  return (
    <div className="container mx-auto px-[20px]  lg:px-[50px] py-12">
      <SectionHeading
        title={"Solutions"}
        description={
          "These are some of our main solutions that we have developed for our customers. Get in touch with us and we will share our experience and designed a suitable solution for your needs."
        }
        border={"170px"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techItems.map((item, index) => (
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
