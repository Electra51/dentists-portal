import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import PrimaryButton from "../../Components/PrimaryButton";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer comprehensive dental care including teeth examinations, cavity filling, dental implants, teeth whitening, orthodontics, root canal treatment, and preventive care. Our experienced team uses the latest technology to ensure the best outcomes.",
    },
    {
      question: "How often should I visit the dentist?",
      answer:
        "We recommend visiting the dentist every 6 months for regular check-ups and cleanings. However, if you have specific dental issues or concerns, more frequent visits may be necessary. Regular visits help prevent serious problems and maintain optimal oral health.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major dental insurance plans. Our team will work with your insurance provider to maximize your benefits. We also offer flexible payment plans for treatments not covered by insurance. Contact us to verify your specific insurance coverage.",
    },
    {
      question: "What should I do in a dental emergency?",
      answer:
        "For dental emergencies, contact us immediately at +880 1234-56789. We provide emergency dental services for issues like severe toothaches, broken teeth, knocked-out teeth, or lost fillings. If it's after hours, we have an emergency hotline available.",
    },
    {
      question: "Is teeth whitening safe?",
      answer:
        "Yes, professional teeth whitening is safe when performed by our trained dental professionals. We use approved whitening agents and follow strict safety protocols. The procedure is minimally invasive and provides excellent results that can last for years with proper care.",
    },
    {
      question: "How long does a typical appointment take?",
      answer:
        "A routine check-up and cleaning typically takes 45-60 minutes. More complex procedures like fillings or root canals may require 1-2 hours. We always provide estimated appointment times when you book and strive to stay on schedule.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our dental services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-gray-50">
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-teal-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed border-l-4 border-teal-400 pl-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <PrimaryButton>Contact Us</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
