import React from 'react';
import banner from '../../assets/images/chair.png';
import PrimaryButton from '../../Components/PrimaryButton';

const AppointmentHeader = () => {
    return (
        <div className="hero min-h-max rounded-md p-10" style={{ 
            backgroundImage: `url("https://i.ibb.co/wNqKDzB/bg.png")` 
          }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} alt="dentist-chair" className="lg:w-1/2 rounded-lg shadow-2xl " />
          <div>
            <h1 className="text-4xl font-bold">Your New Smile <br /> Starts Here</h1>
            <p className="py-6">Find a dentist near you on this website. Check your local dentist's opening times, services, facilities, reviews and ratings. And  also easily schedule an appointment at home.</p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    );
};

export default AppointmentHeader;