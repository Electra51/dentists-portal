import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            serviceName: 'Fluoride Treatment',
            description: 'Fluoride treatments are a great way to prevent more cavities in patients who are already prone to them.',
            icon: fluoride,
            
        },
        {
            id: 2,
            serviceName: 'Cavity Filling',
            description: 'A cavity filling is when the dentist fills the opening in your tooth with some kind of material.',
            icon: cavity,
           
        },
        {
            id: 3,
            serviceName: 'Teeth Whitening',
            description: 'Teeth Whitening is a quick and painless in-office whitening system that provides dramatic results',
            icon: whitening,
           
        }
    ]
    return (
        <div>
            <div className='text-center mt-28'>
                <p className='text-xl font-bold text-primary uppercase'>OUR SERVICES</p>
                <h1 className='text-3xl text-accent'>Services We Provide</h1>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {

                    serviceData.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
      </div>
    );
};

export default Services;