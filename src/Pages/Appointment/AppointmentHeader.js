import React from 'react';
import banner from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';



const AppointmentHeader = ({ selectedDate, setSelectedDate }) => {


  return (
    <div className="hero min-h-max rounded-md p-10 my-6" style={{
      backgroundImage: `url("https://i.ibb.co/wNqKDzB/bg.png")`
    }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} alt="dentist-chair" className="lg:w-1/2 rounded-lg shadow-2xl ml-5" />
        <div>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={(selectedDate) => {
              if (selectedDate) {
                setSelectedDate(selectedDate)
              }
            }}
          />


        </div>
      </div>
    </div>
  );
};

export default AppointmentHeader;