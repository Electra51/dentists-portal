import React, { useState } from "react";
import AppointmentHeader from "./AppointmentHeader";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentHeader
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}></AppointmentHeader>
      <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
    </div>
  );
};

export default Appointment;

// import React, { useState, useEffect } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Calendar,
//   Clock,
//   MapPin,
//   X,
// } from "lucide-react";

// // Mock data
// const mockAppointmentOptions = [
//   {
//     _id: "1",
//     problemName: "Teeth Orthodontics",
//     slots: [
//       "08:00 AM - 08:30 AM",
//       "08:30 AM - 09:00 AM",
//       "09:00 AM - 09:30 AM",
//       "09:30 AM - 10:00 AM",
//       "10:00 AM - 10:30 AM",
//       "10:30 AM - 11:00 AM",
//     ],
//   },
//   {
//     _id: "2",
//     problemName: "Cosmetic Dentistry",
//     slots: [
//       "08:30 AM - 09:00 AM",
//       "09:00 AM - 09:30 AM",
//       "09:30 AM - 10:00 AM",
//       "10:00 AM - 10:30 AM",
//       "10:30 AM - 11:00 AM",
//       "11:00 AM - 11:30 AM",
//     ],
//   },
//   {
//     _id: "3",
//     problemName: "Teeth Cleaning",
//     slots: ["10:00 AM - 10:30 AM"],
//   },
//   {
//     _id: "4",
//     problemName: "Cavity Protection",
//     slots: [
//       "09:00 AM - 09:30 AM",
//       "09:30 AM - 10:00 AM",
//       "10:00 AM - 10:30 AM",
//       "10:30 AM - 11:00 AM",
//       "11:00 AM - 11:30 AM",
//       "11:30 AM - 12:00 PM",
//     ],
//   },
//   {
//     _id: "5",
//     problemName: "Pediatric Dental",
//     slots: [
//       "11:00 AM - 11:30 AM",
//       "11:30 AM - 12:00 PM",
//       "12:00 PM - 12:30 PM",
//       "12:30 PM - 01:00 PM",
//       "01:00 PM - 01:30 PM",
//       "01:30 PM - 02:00 PM",
//     ],
//   },
//   {
//     _id: "6",
//     problemName: "Oral Surgery",
//     slots: [
//       "08:00 AM - 08:30 AM",
//       "08:30 AM - 09:00 AM",
//       "09:00 AM - 09:30 AM",
//       "09:30 AM - 10:00 AM",
//       "10:00 AM - 10:30 AM",
//       "10:30 AM - 11:00 AM",
//     ],
//   },
// ];

// // Calendar Component
// const AppointmentCalendar = ({ selectedDate, setSelectedDate }) => {
//   const [currentMonth, setCurrentMonth] = useState(new Date());

//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const daysInMonth = (date) => {
//     return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
//   };

//   const firstDayOfMonth = (date) => {
//     return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
//   };

//   const prevMonth = () => {
//     setCurrentMonth(
//       new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
//     );
//   };

//   const nextMonth = () => {
//     setCurrentMonth(
//       new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
//     );
//   };

//   const renderCalendar = () => {
//     const days = [];
//     const totalDays = daysInMonth(currentMonth);
//     const firstDay = firstDayOfMonth(currentMonth);

//     // Empty cells for days before month starts
//     for (let i = 0; i < firstDay; i++) {
//       days.push(<div key={`empty-${i}`} className="h-10"></div>);
//     }

//     // Days of the month
//     for (let day = 1; day <= totalDays; day++) {
//       const date = new Date(
//         currentMonth.getFullYear(),
//         currentMonth.getMonth(),
//         day
//       );
//       const isSelected = selectedDate.toDateString() === date.toDateString();
//       const isToday = new Date().toDateString() === date.toDateString();

//       days.push(
//         <button
//           key={day}
//           onClick={() => setSelectedDate(date)}
//           className={`h-10 w-10 rounded-lg flex items-center justify-center text-sm font-medium transition ${
//             isSelected
//               ? "bg-teal-500 text-white shadow-lg"
//               : isToday
//               ? "bg-teal-100 text-teal-700"
//               : "hover:bg-gray-100 text-gray-700"
//           }`}>
//           {day}
//         </button>
//       );
//     }

//     return days;
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h3 className="text-xl font-bold text-gray-800">
//           {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
//         </h3>
//         <div className="flex gap-2">
//           <button
//             onClick={prevMonth}
//             className="p-2 hover:bg-gray-100 rounded-lg transition">
//             <ChevronLeft className="w-5 h-5 text-gray-600" />
//           </button>
//           <button
//             onClick={nextMonth}
//             className="p-2 hover:bg-gray-100 rounded-lg transition">
//             <ChevronRight className="w-5 h-5 text-gray-600" />
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-7 gap-2 mb-2">
//         {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
//           <div
//             key={day}
//             className="h-10 flex items-center justify-center text-xs font-semibold text-gray-500">
//             {day}
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-7 gap-2">{renderCalendar()}</div>
//     </div>
//   );
// };

// // Appointment Option Card
// const AppointmentCard = ({ option, setTreatments }) => {
//   const { problemName, slots } = option;

//   return (
//     <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition">
//           {problemName}
//         </h3>

//         <div className="flex items-center gap-2 text-gray-600 mb-2">
//           <Clock className="w-4 h-4 text-teal-500" />
//           <p className="text-sm">
//             {slots.length > 0 ? slots[0] : "Please Try Another day"}
//           </p>
//         </div>

//         <div className="flex items-center gap-2 mb-4">
//           <Calendar className="w-4 h-4 text-teal-500" />
//           <p className="text-sm text-gray-600">
//             {slots.length} {slots.length > 1 ? "spaces" : "space"} available
//           </p>
//         </div>

//         <button
//           disabled={slots.length === 0}
//           onClick={() => setTreatments(option)}
//           className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
//             slots.length === 0
//               ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//               : "bg-teal-500 text-white hover:bg-teal-600 shadow-md hover:shadow-lg"
//           }`}>
//           Book Appointment
//         </button>
//       </div>
//     </div>
//   );
// };

// // Booking Modal
// const BookingModal = ({ treatments, selectedDate, setTreatments }) => {
//   if (!treatments) return null;

//   const { problemName, slots } = treatments;
//   const formatDate = (date) => {
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   const handleBooking = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const booking = {
//       appointmentDate: formatDate(selectedDate),
//       treatment: problemName,
//       patient: formData.get("name"),
//       slot: formData.get("slot"),
//       email: formData.get("email"),
//       phone: formData.get("phone"),
//     };
//     console.log(booking);
//     alert("Appointment booked successfully!");
//     setTreatments(null);
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
//           <h3 className="text-2xl font-bold text-gray-800">{problemName}</h3>
//           <button
//             onClick={() => setTreatments(null)}
//             className="p-2 hover:bg-gray-100 rounded-lg transition">
//             <X className="w-5 h-5 text-gray-600" />
//           </button>
//         </div>

//         <div className="p-6">
//           <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
//             <div className="flex items-center gap-2 text-teal-700">
//               <Calendar className="w-5 h-5" />
//               <p className="font-medium">{formatDate(selectedDate)}</p>
//             </div>
//           </div>

//           <div onSubmit={handleBooking}>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Available Time Slots
//                 </label>
//                 <select
//                   name="slot"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
//                   {slots.map((slot, i) => (
//                     <option key={i} value={slot}>
//                       {slot}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   placeholder="Enter your full name"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   placeholder="your.email@example.com"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   required
//                   placeholder="+1 (555) 000-0000"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 />
//               </div>

//               <button
//                 onClick={handleBooking}
//                 className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg mt-6">
//                 Confirm Booking
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Component
// export default function AppointmentPage() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [appointmentOptions, setAppointmentOptions] = useState([]);
//   const [treatments, setTreatments] = useState(null);

//   useEffect(() => {
//     // Simulate API call
//     setAppointmentOptions(mockAppointmentOptions);
//   }, []);

//   const formatDate = (date) => {
//     return date.toLocaleDateString("en-US", {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50">
//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid lg:grid-cols-3 gap-8 mb-12">
//           {/* Calendar Section */}
//           <div className="lg:col-span-1">
//             <AppointmentCalendar
//               selectedDate={selectedDate}
//               setSelectedDate={setSelectedDate}
//             />

//             {/* Dental Chair Image */}
//             <div className="mt-6 rounded-2xl overflow-hidden shadow-lg">
//               <img
//                 src="https://i.ibb.co/wNqKDzB/bg.png"
//                 alt="Dental Chair"
//                 className="w-full h-64 object-cover"
//               />
//             </div>
//           </div>

//           {/* Available Slots Info */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="bg-teal-100 p-3 rounded-lg">
//                   <Calendar className="w-6 h-6 text-teal-600" />
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     Available Appointments
//                   </h2>
//                   <p className="text-teal-600 font-medium">
//                     {formatDate(selectedDate)}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Appointment Cards Grid */}
//             <div className="grid md:grid-cols-2 gap-6">
//               {appointmentOptions.map((option) => (
//                 <AppointmentCard
//                   key={option._id}
//                   option={option}
//                   setTreatments={setTreatments}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Booking Modal */}
//       {treatments && (
//         <BookingModal
//           treatments={treatments}
//           selectedDate={selectedDate}
//           setTreatments={setTreatments}
//         />
//       )}
//     </div>
//   );
// }
