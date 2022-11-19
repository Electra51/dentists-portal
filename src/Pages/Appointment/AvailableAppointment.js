import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';


const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatments, setTreatments] = useState(null);
    useEffect(() => {
        fetch('AppointmentOption.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div>
            <p className='text-center font-bold text-primary mt-12'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatments={setTreatments}></AppointmentOption>)
                }

            </div>
            {
                treatments &&
                <BookingModal
                    treatments={treatments}
                    selectedDate={selectedDate}
                    setTreatments={setTreatments}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;