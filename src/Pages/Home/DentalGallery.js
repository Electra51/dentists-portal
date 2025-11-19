import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PrimaryButton from "../../Components/PrimaryButton";
import { Link } from "react-router-dom";

const DentalGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
      title: "Modern Reception Area",
      category: "Facility",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop",
      title: "Treatment Room",
      category: "Facility",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop",
      title: "Advanced Equipment",
      category: "Technology",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop",
      title: "Dental Consultation",
      category: "Services",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&h=600&fit=crop",
      title: "Sterilization Area",
      category: "Safety",
    },
    {
      id: 6,
      url: "https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FpdGluZyUyMHJvb218ZW58MHx8MHx8fDA%3D",
      title: "Waiting Lounge",
      category: "Facility",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
      title: "Dental Instruments",
      category: "Technology",
    },
    {
      id: 8,
      url: "https://plus.unsplash.com/premium_photo-1661775601929-8c775187bea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGF0aWVudCUyMENhcmV8ZW58MHx8MHx8fDA%3D",
      title: "Patient Care",
      category: "Services",
    },
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[prevIndex]);
  };

  const goToNext = () => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Our Dental Office
          </h2>
          <p className="text-gray-600 text-lg">
            Take a virtual tour of our state-of-the-art facility
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image)}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square">
              {/* Image */}
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-semibold mb-1">{image.title}</p>
                  <span className="inline-block bg-teal-500 text-xs px-2 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-4 border-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-teal-400 transition-colors z-10">
              <X className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 text-white hover:text-teal-400 transition-colors z-10">
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 text-white hover:text-teal-400 transition-colors z-10">
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[90vh] w-full">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="mt-4 text-center">
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {selectedImage.title}
                </h3>
                <span className="inline-block bg-teal-500 text-white text-sm px-4 py-1 rounded-full">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4 text-lg">
            Want to visit us in person?
          </p>
          <Link to={"/appointment"}>
            <PrimaryButton>Schedule a Visit</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DentalGallery;
