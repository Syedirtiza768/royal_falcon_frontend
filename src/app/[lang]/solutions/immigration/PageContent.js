"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/custom/SectionHeading";
import { Users, BarChart3, Lightbulb } from "lucide-react";
import { b_t_animation } from "@/lib/Data";
import LeftSection from "../LeftSection";
import RightSection from "../RightSection";
import { SolutionsCard2 } from "../SolutionsCard2";
import CallToAction from "../CallToAction";

export default function PageContent({ dictionary }) {
  return (
    <div className="flex flex-col min-h-screen mt-[120px]">
      {/* Hero Section */}
      <div className="px-[20px]  lg:px-[90px]">
        <SectionHeading
          title={"E-visa and Immigration System"}
          description={""}
          border={"150px"}
        />
        <motion.div
          initial="hide"
          whileInView="show"
          variants={b_t_animation}
          viewport={{ once: true }}
          className="mt-[40px] flex flex-col items-center justify-center"
        >
          <div className="lg:w-[60%] mx-auto text-center">
            <p>
              Upwards e-Visa management is a essential to a modern, integrated
              border management system. It is key to enhancing both security and
              convenience for the visitors to the country. <br />
              <br /> e-Visa Management System is a full suite of
              service-oriented applications designed to securely manage visa
              applications and issue visas, eVisas, and residential permits.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="mt-[70px]">
        <SectionHeading
          title={"These applications are designed for use at"}
          description={""}
          border={"300px"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-[20px] md:mx-[100px]">
        <SolutionsCard2
          title="Visa Application Centers"
          description=""
          variant={"first"}
        />
        <SolutionsCard2 title="Embassies" description="" variant={"first"} />
        <SolutionsCard2 title="Consulates" description="" variant={"first"} />
        <SolutionsCard2
          title="Immigration and Border Control Counters"
          description=""
          variant={"first"}
        />
        <SolutionsCard2
          title="Other Visa-issuing Locations"
          description=""
          variant={"first"}
        />
      </div>
      <p className="text-center w-[90%] md:w-[60%] mx-auto mt-[30px] ">
        e-Visa Management System features a convenient visa web portal for a
        ease of use to begin the visa application procedure at home or on your
        mobile phone.
      </p>

      {/* Section 3 */}
      <LeftSection
        title={"Smart visa system "}
        description={
          "e-Visa Management System covers every step in the visa application procedure—from fee payment and appointment scheduling to background checks, registration of personal details, biometrics capture, and the printing of visas—everywhere in the world. \nFrom the full life cycle management module linking every step of an individual visa application, the software suite ensure a cohesive data source, enabling a secure and traceable end-to-end procedure. Empowering the authorities with a full overview of the immigrants entering the country and enhance the security checks for potential risk from this immigrants. \ne-Visa Management System forms an integral part of intelligent border control system. "
        }
        image={"/images/solutions/Smart-visa-system.png"}
      />

      <RightSection
        title={"Hardware Agnostic"}
        description={
          "All solutions are built hardware-agnostic to ensure independence from suppliers and provide the autonomy of the authorities to deploy on any server."
        }
        image={"/images/solutions/Hardware-Agnostic.png"}
      />

      <LeftSection
        title={"Agility to meet existing needs"}
        description={
          "The suite can be deployed to suit any configuration. \nThis software covers wide ranging deployment scenarios such as the customer’s choice of centralized or decentralized operations, outsourced or internally managed enrolment, and regional or central validation of visa applications.  \nThe modular design of our solutions allows them to be run separately without necessarily deploying the full suite.  \nTheir compliance with international standards enables easy integration into an existing system."
        }
        image={"/images/solutions/Agility-to-meet.png"}
      />

      <RightSection
        title={"Manufacturing and Industrial Operations"}
        description={
          "Smart Assembly Lines: These robots seamlessly integrate into manufacturing environments, performing tasks such as assembling intricate components and inspecting products with precision. \nHazardous Environment Handling: In industries like mining or chemical processing, humanoid robots operate safely in dangerous conditions, minimizing risks to human workers. \nEfficiency Optimization: With real-time data processing and adaptive capabilities, they optimize workflows, reduce downtime, and boost productivity. "
        }
        image={"/images/solutions/Manufacturing-and-Industrial-Operations.png"}
      />

      <LeftSection
        title={"Public Services and Customer Interaction"}
        description={
          "Hospitality and Retail: From greeting guests to providing personalized product recommendations, humanoid robots enhance customer experiences and streamline operations. \nSecurity and Surveillance: With capabilities such as facial recognition and behavioral analysis, they ensure safer public spaces by identifying potential threats in real-time. \nAdministrative Support: They handle routine tasks like data entry and document verification, allowing human employees to focus on more strategic responsibilities. "
        }
        image={"/images/solutions/Public-Services-and-Customer-Interaction.png"}
      />

      <RightSection
        title={"Why Humanoid Robotics Is Essential"}
        description={
          "Humanoid robots represent the perfect blend of human-like versatility and machine resilience. Their design allows them to interact naturally with people while performing tasks with unmatched efficiency. Powered by artificial intelligence, machine learning, and advanced engineering, these robots continuously learn, adapt, and improve, ensuring they remain a cornerstone of innovation."
        }
        image={"/images/solutions/Why-Humanoid-Robotics-Is-Essential.png"}
      />

      <LeftSection
        title={"The Future Beckons"}
        description={
          "Upwards robotics is not merely a tool but a testament to what humanity can achieve through creativity and determination. By embracing these advancements, Upwards support organizations across industries to usher in a future defined by possibility, progress, and prosperity. These robots are not replacing humans but empowering them—enabling us to focus on what truly matters while they handle the rest."
        }
        image={"/images/solutions/The-Future-Beckons.png"}
      />

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
