import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../../Components/PrimaryButton';
const About = () => {
    return (
        <div className="hero min-h-max rounded-md p-10 mt-28" >
        <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-14">
          
          <div>
            <h1 className="text-4xl font-bold">Exceptional Dental Care, <br /> on Your Terms</h1>
            <p className="py-6">Filling most cavities is a quick procedure. You'll likely be numbed, which can last for a few hours after the filling is over. It usually takes about an hour to finish up, and then it's good as new! You might feel pressure while they're working, but it shouldn't be painful.</p>
            <PrimaryButton>About Us</PrimaryButton>
                </div>
                <img src={treatment} alt="dentist-chair" className="lg:w-1/2 rounded-lg shadow-2xl " />
        </div>
      </div>
    );
};

export default About;