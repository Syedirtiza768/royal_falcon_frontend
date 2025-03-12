export const navItems = [
  {
    name: "Home",
    href: "#home",
    hasDropdown: false,
  },
  {
    name: "Solutions",
    href: "#solutions",
    hasDropdown: true,
    dropdownItems: [
      { name: "Solution1", href: "#" },
      { name: "Solution2", href: "#" },
      { name: "Solution3", href: "#" },
      { name: "Solution4", href: "#" },
    ],
  },
  {
    name: "About Us",
    href: "#about",
    hasDropdown: false,
  },
  {
    name: "Contact Us",
    href: "#contact",
    hasDropdown: false,
  },
];

export const b_t_animation = {
  hide: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const solutions = [
  {
    title: "AI Agents Platform",
    description:
      "Empowering businesses with intelligent, autonomous AI agents for next-gen automation.",
    //   Icon: FaTrafficLight,
    img: "/images/solution7.png",
  },

  {
    title: "Immersive Cooling Data Center",
    description:
      "Revolutionizing efficiency with cutting-edge immersive cooling technology for next-gen data centers.",
    //   Icon: AiFillRobot,
    img: "/images/solution1.png",
  },
  {
    title: "Humanoid Robot",
    description:
      "Bridging the gap between humans and technology with intelligent humanoid robotics.",
    //   Icon: FaCarSide,
    img: "/images/solution2.png",
  },
  {
    title: "Immigration & Law Enforcement",
    description:
      "Ensuring justice and security with expert immigration and law enforcement solutions.",
    //   Icon: GiRobotLeg,
    img: "/images/solution3.png",
  },
  {
    title: "IOT",
    description:
      "Connecting the world seamlessly with smart and innovative IoT solutions.",
    //   Icon: FaTrafficLight,
    img: "/images/solution4.png",
  },
  {
    title: "Medical Robotics",
    description:
      "Revolutionizing healthcare with precision-driven medical robotics.",
    //   Icon: FaTrafficLight,
    img: "/images/solution5.png",
  },
  {
    title: "Future Mobility",
    description:
      "Redefining the journey ahead with smart and sustainable future mobility solutions.",
    //   Icon: FaTrafficLight,
    img: "/images/solution6.png",
  },
  {
    title: "Robo Dog",
    description:
      "Experience the future of companionship with our intelligent and agile Robo Dog.",
    //   Icon: FaTrafficLight,
    img: "/images/solution8.png",
  },
  {
    title: "Traffic Management system",
    description:
      "Optimizing mobility with smart and efficient traffic management solutions.",
    //   Icon: FaTrafficLight,
    img: "/images/solution9.png",
  },
];
