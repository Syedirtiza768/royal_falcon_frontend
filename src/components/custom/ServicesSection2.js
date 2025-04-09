import { ServicesSection2Item } from "./ServicesSection2Item";
import SectionHeading from "./SectionHeading";

export default function ServicesSection2({ dictionary }) {
  return (
    <div
      className="container mx-auto px-[20px]  lg:px-[50px] py-12"
      id="solution-section"
    >
      <SectionHeading
        title={dictionary.solutionsHeading}
        description={dictionary.solutionsDescription}
        border={"170px"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {dictionary.solutionsItems.map((item, index) => (
          <ServicesSection2Item
            key={index}
            id={item.id}
            title={item.title}
            description={item.description}
            // Icon={item.Icon}
            img={item.img}
            url={item.url}
            dictionary={dictionary}
          />
        ))}
      </div>
    </div>
  );
}
