import Image from "next/image";
import Link from "next/link";
import SolutionsSectionContentItem from "./SolutionsSectionContentItem";

export default function SolutionsSectionContent() {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8 bg-white space-y-10">
      <SolutionsSectionContentItem
        title="Medical Robotics"
        description="Upwards partners with established and proven records partners to provide medical robotics solution to our customers. These medical assistants help the patients on their road to recovery in many different ways."
        link="#"
        img="/images/solutions1.png"
        direction="simple"
      />
      <SolutionsSectionContentItem
        title="Future Mobility"
        description="We have over 15 years experience in managing and operating public transportation systems. We are also at the fore-front of implementing the latest mobility solutions for our customers including EV charging system, EV transportation system and other mobility system like mobility pods and automous infrastructure."
        link="#"
        img="/images/solutions2.png"
        direction="reverse"
      />
      <SolutionsSectionContentItem
        title="Robo Dog"
        description="We custom-built robo dogs for our customer in their inspection and operational needs. We provide a centralized Robo Agents platform for command and control of their Robotic Fleet."
        link="#"
        img="/images/solutions3.png"
        direction="simple"
      />
      <SolutionsSectionContentItem
        title="Traffic Management Systems"
        description="Traffic Management System built upon our latest AI Agents Platform to identify different traffic conditions, vehicle profiles such as identify the vehicle license plate, traffic violations, etc to help cities in their urban planning, road planning and design new policies to cater to latest development in their city roads."
        link="#"
        img="/images/solutions4.png"
        direction="reverse"
      />
      <SolutionsSectionContentItem
        title="AI Agents"
        description="AI Agents Platform offer different business services and data analytics to support enterprises ever changing operational needs. The customized agents will perform different tasks as designed for the different domain."
        link="#"
        img="/images/solutions5.png"
        direction="simple"
      />
    </section>
  );
}
