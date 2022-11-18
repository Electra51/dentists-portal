import React from 'react';

const InfoCard = ({ card }) => {
    const { description, infoName ,bgClass, icon} = card;
    return (
        <div className={`card text-white p-6 md:card-side shadow-xl ${bgClass}`}>
        <figure> <img src={icon} alt="" /> </figure>
        <div className="card-body ">
          <h2 className="card-title">{infoName}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
};

export default InfoCard;