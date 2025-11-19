import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceData = [
    {
      id: 1,
      serviceName: "Fluoride Treatment",
      description:
        "Fluoride treatments are a great way to prevent more cavities in patients who are already prone to them.",
      icon: fluoride,
    },
    {
      id: 2,
      serviceName: "Cavity Filling",
      description:
        "A cavity filling is when the dentist fills the opening in your tooth with some kind of material.",
      icon: cavity,
    },
    {
      id: 3,
      serviceName: "Teeth Whitening",
      description:
        "Teeth Whitening is a quick and painless in-office whitening system that provides dramatic results",
      icon: whitening,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto rounded-md p-6 mt-32">
      <div className="text-center">
        <div className="inline-block mb-4">
          <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full uppercase tracking-wider">
            Our Services
          </span>
        </div>
        <h2 className="text-4xl md:text-[43px] font-bold text-accent mb-1.5">
          Services We Provide
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Comprehensive dental care solutions tailored to your needs
        </p>

        <div className="flex justify-center mt-6">
          <div className="w-24 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full"></div>
        </div>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {serviceData.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
