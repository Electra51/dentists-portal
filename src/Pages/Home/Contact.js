// import React from 'react';
// import contact from '../../assets/images/appointment.png'

// const Contact = () => {
//   const handleContact = event => {
//     event.preventDefault();
//     const form = event.target;
//     const subject = form.subject.value;
//     const email = form.email.value;
//     const message = form.message.value;

//     // [3, 4, 5].map((value, i) => console.log(value))
//     const contacting = {
//       user: message,
//       email,
//       subject,
//     }
//     console.log(contacting)

//   }

//   return (
//     <div className="hero mt-20 rounded-md" style={{ background: `url(${contact})` }}>
//       <div className="hero-content text-center">
//         <div className="max-w-md">
//           <div className='h-[600px] flex justify-center items-center'>
//             <div className='w-96 p-5'>
//               <p className='text-primary'>Contact Us</p>
//               <h1 className='text-3xl text-white'>Stay connected with us</h1>
//               <form onSubmit={handleContact} className='grid grid-cols-1 gap-3 mt-10'>
//                 <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" />
//                 <input name="subject" type="text" placeholder="Subject" className="input w-full input-bordered" />
//                 <textarea className="textarea textarea-bordered w-full" name="message" placeholder="Your message"></textarea>
//                 <input className='btn btn-primary w-full text-white' type="submit" value="Submit" />
//               </form>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import {
  Mail,
  MessageSquare,
  Send,
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
} from "lucide-react";

const ContactInfo = ({ icon: Icon, title, info, subInfo }) => (
  <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group">
    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h4 className="text-white font-semibold mb-1">{title}</h4>
      <p className="text-white/90">{info}</p>
      {subInfo && <p className="text-white/70 text-sm mt-1">{subInfo}</p>}
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContact = () => {
    if (!formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    const contacting = {
      user: formData.message,
      email: formData.email,
      subject: formData.subject,
    };

    console.log(contacting);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ email: "", subject: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Dental Street, Suite 100",
      subInfo: "New York, NY 10001",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      subInfo: "Mon-Sat: 9AM - 6PM",
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "Monday - Saturday",
      subInfo: "9:00 AM - 6:00 PM",
    },
  ];

  return (
    <section className="relative py-20 px-4 my-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Section */}
          <div className="text-white">
            {/* Header */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Stay Connected With Us
              </h2>
              <p className="text-white/90 text-lg">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-10">
              {contactInfo.map((info, index) => (
                <ContactInfo key={index} {...info} />
              ))}
            </div>

            {/* Social proof */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-white/90 text-sm mb-3">
                ✨ Quick Response Time
              </p>
              <p className="text-white text-lg font-semibold">
                We typically respond within 24 hours
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and we'll be in touch
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleContact}
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy note */}
                <p className="text-center text-sm text-gray-500 mt-6">
                  🔒 Your information is safe and secure with us
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
