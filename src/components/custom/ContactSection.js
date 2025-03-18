import ContactSectionForm from "./ContactSectionForm";

export default function ContactSection({ dictionary }) {
  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#C08B67]">
                {" "}
                {dictionary.contactHeadingText1}{" "}
              </span>
              <span className="text-[#1B3B48]">
                {dictionary.contactHeadingText2}
              </span>
              <br />
              <span className="text-[#1B3B48]">
                {dictionary.contactHeadingText3}{" "}
              </span>
              <span className="text-[#C08B67]">
                {dictionary.contactHeadingText4}
              </span>
            </h2>
            <p className="text-gray-600 max-w-xl">
              {dictionary.contactHeadingPara1}
              <span className="font-bold">
                {dictionary.contactHeadingPara2}
              </span>
              {dictionary.contactHeadingPara3}
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <ContactSectionForm dictionary={dictionary} />
        </div>
      </div>
    </section>
  );
}
