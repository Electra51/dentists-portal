import React from "react";

const SectionHeader = ({ icon: Icon, label, title, subtitle }) => {
  return (
    <div
      className={`${
        label === "Testimonials" ? "text-start" : "text-center"
      } mb-12"`}>
      {label && Icon && (
        <div className="inline-flex items-center gap-2 mb-2 px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full uppercase">
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </div>
      )}

      {title && (
        <h2 className="text-4xl font-bold text-gray-800 mb-2">{title}</h2>
      )}

      {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
