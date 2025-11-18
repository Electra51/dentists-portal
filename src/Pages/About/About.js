import React from "react";
import dentistImg from "../../assets/images/chair.png";
import doctorImg from "../../assets/images/doctor.png";

const About = () => {
  return (
    <div className="mt-20">
      <section className="bg-[#F8FBFF] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center">
            About Our Dental Care
          </h1>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Your smile is our priority. We provide high-quality dental care with
            modern technology, skilled doctors, and a comfortable environment.
          </p>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={dentistImg}
          alt="clinic"
          className="rounded-xl shadow-lg w-full"
        />

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Exceptional Care. Modern Techniques.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our clinic is dedicated to offering world-class dental care. From
            preventive dentistry to cosmetic procedures, our goal is to ensure
            every patient leaves with a brighter, healthier smile.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            With advanced equipment and experienced dental professionals, we
            focus on delivering painless and precise treatments tailored to each
            patient’s needs.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Make an Appointment
          </button>
        </div>
      </section>

      {/* Dentist Profile */}
      <section className="bg-[#F8FBFF] py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Meet Our Specialist
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Dr. John Doe is a certified dental surgeon with over 10+ years of
              experience. He is committed to providing painless, comfortable,
              and personalized treatments that help patients achieve their ideal
              smile.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">10+</h3>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">5000+</h3>
                <p className="text-gray-600 text-sm">Patients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">15+</h3>
                <p className="text-gray-600 text-sm">Special Treatments</p>
              </div>
            </div>
          </div>

          <img
            src={doctorImg}
            alt="doctor"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-8 bg-white shadow-md rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide high-quality, comfortable, and affordable dental care
              using modern technology and a patient-focused approach.
            </p>
          </div>

          <div className="p-8 bg-white shadow-md rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted dental care provider and create
              confident smiles for patients from all walks of life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
