import React from 'react';


const AppointmentOption = ({ option, setTreatments }) => {
    const { problemName, slots } = option;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="font-bold text-xl text-center text-primary">{problemName}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Please Try Another day'}</p>
                <p>{slots.length}{slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">

                    <label disabled={
                        slots.length === 0
                    }
                        htmlFor="booking-modal"
                        onClick={() => setTreatments(option)} className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;