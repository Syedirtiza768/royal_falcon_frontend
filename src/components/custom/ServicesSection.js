export default function ServicesSection() {
  return (
    <section className="w-full py-5 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {/* CUSTOMIZATION */}
        <div className="border border-gray-300 rounded p-6 h-full flex flex-col">
          <h3 className="text-lg font-semibold uppercase mb-3 text-gray-800">
            CUSTOMIZATION
          </h3>
          <p className="text-sm text-gray-600">
            We are well verse in latest advance technologies to design bespoke
            hardware solutions and bespoke agents for our customers.
          </p>
        </div>

        {/* PROGRAM MANAGEMENT */}
        <div className="border border-gray-300 rounded p-6 h-full flex flex-col">
          <h3 className="text-lg font-semibold uppercase mb-3 text-gray-800">
            PROGRAM MANAGEMENT
          </h3>
          <p className="text-sm text-gray-600">
            Our expert team have delivered national and city-scale programs and
            are your best candidates to support your implementation.
          </p>
        </div>

        {/* IMPLEMENTATION */}
        <div className="border border-gray-300 rounded p-6 h-full flex flex-col">
          <h3 className="text-lg font-semibold uppercase mb-3 text-gray-800">
            IMPLEMENTATION
          </h3>
          <p className="text-sm text-gray-600">
            Through our vast partner networks we have successfully delivered
            multiple national projects and will continue to deliver for your
            projects.
          </p>
        </div>

        {/* CONSULTING */}
        <div className="border border-gray-300 rounded p-6 h-full flex flex-col">
          <h3 className="text-lg font-semibold uppercase mb-3 text-gray-800">
            CONSULTING
          </h3>
          <p className="text-sm text-gray-600">
            Our diverse expertise in domains such as Security, Command Center,
            Traffic Management, Public Transport and Comms Network will
            provided.
          </p>
        </div>
      </div>
    </section>
  );
}
