import React from 'react';

const ServiceCard = ({ service }) => {
    const { icon, serviceName, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={icon} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{serviceName}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
};

export default ServiceCard;