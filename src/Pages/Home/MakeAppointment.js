import React, { useState } from "react";
import { Calendar, Clock, User, CheckCircle, X } from "lucide-react";
import doctor from "../../assets/images/doctor.png";
import appointmentBg from "../../assets/images/appointment.png";
import PrimaryButton from "../../Components/PrimaryButton";

const MakeAppointment = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const services = [
    "General Checkup",
    "Teeth Cleaning",
    "Cavity Filling",
    "Dental Implants",
    "Teeth Whitening",
    "Root Canal",
    "Orthodontics",
    "Emergency Care",
  ];

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    return maxDate.toISOString().split("T")[0];
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!selectedDate) newErrors.date = "Please select a date";
    if (!selectedTime) newErrors.time = "Please select a time slot";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Appointment Details:", {
        ...formData,
        date: selectedDate,
        time: selectedTime,
      });

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        setShowBookingForm(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setSelectedDate("");
        setSelectedTime("");
      }, 3000);
    }
  };

  return (
    <>
      <section
        className="max-w-7xl mx-auto rounded-md mt-20 lg:mt-32"
        style={{ background: `url(${appointmentBg})` }}>
        <div className="">
          <div className="flex lg:flex-row items-center">
            <img
              src={doctor}
              alt="doctor"
              className="-mt-32 hidden lg:block lg:w-1/2 lg:h-[80vh]"
            />
            <div className="p-12">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Book Your Visit
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Make an Appointment <br />
                  <span className="text-white/90">Today</span>
                </h2>

                <p className="text-white/90 text-lg leading-relaxed mb-4">
                  Schedule your dental appointment with ease. Our experienced
                  team is ready to provide you with exceptional care in a
                  comfortable environment. Whether it's a routine checkup or a
                  specific treatment, we're here to help you achieve optimal
                  oral health.
                </p>

                <PrimaryButton
                  onClick={() => setShowBookingForm(true)}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5" />
                  Book Appointment Now
                </PrimaryButton>

                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-white/80 text-sm mb-2">
                    Available Monday - Saturday, 9AM - 6PM
                  </p>
                  <p className="text-white font-semibold text-lg">
                    📞 +880-1234-567890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showBookingForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-t-2xl flex items-center justify-between sticky top-0 z-10">
              <div>
                <h3 className="text-2xl font-bold">Book Your Appointment</h3>
                <p className="text-teal-100 text-sm mt-1">
                  Fill in the details below to schedule your visit
                </p>
              </div>
              <button
                onClick={() => setShowBookingForm(false)}
                className="hover:bg-teal-700 p-2 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <User className="w-5 h-5 text-teal-500" />
                  Personal Information
                </h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+880 1234-567890"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
                        errors.service ? "border-red-500" : "border-gray-300"
                      }`}>
                      <option value="">Choose a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.service}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-teal-500" />
                  Select Date & Time
                </h4>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      if (errors.date)
                        setErrors((prev) => ({ ...prev, date: "" }));
                    }}
                    min={getMinDate()}
                    max={getMaxDate()}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all ${
                      errors.date ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Available Time Slots *
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {timeSlots.map((time, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          setSelectedTime(time);
                          if (errors.time)
                            setErrors((prev) => ({ ...prev, time: "" }));
                        }}
                        className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                          selectedTime === time
                            ? "bg-teal-500 text-white border-teal-500 scale-105 shadow-lg"
                            : "bg-white text-gray-700 border-gray-300 hover:border-teal-300 hover:bg-teal-50"
                        }`}>
                        <Clock className="w-4 h-4 mx-auto mb-1" />
                        {time}
                      </button>
                    ))}
                  </div>
                  {errors.time && (
                    <p className="text-red-500 text-xs mt-2">{errors.time}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any specific concerns or requirements?"
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"></textarea>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowBookingForm(false)}
                  className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all">
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 px-6 py-4 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Confirm Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center animate-scaleIn">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Appointment Confirmed!
            </h3>
            <p className="text-gray-600 mb-4">
              Your appointment has been successfully scheduled for{" "}
              <span className="font-semibold text-teal-600">
                {selectedDate}
              </span>{" "}
              at{" "}
              <span className="font-semibold text-teal-600">
                {selectedTime}
              </span>
            </p>
            <p className="text-sm text-gray-500">
              We've sent a confirmation email to{" "}
              <span className="font-medium">{formData.email}</span>
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
      `}</style>
    </>
  );
};

export default MakeAppointment;
