import React from 'react';

const TestimonialCard = ({ reviews }) => {
    const { name, location, img, review } = reviews;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
                <p>{review}</p>
    <div className="card-actions flex justify-start items-center">
    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 avatar mt-5">
    <img src={img} alt="people" />
                    </div>
                    <div className='items-center justify-between align-middle gap-5'>
                        <h3 className='font-bold'>{name}</h3>
                        <p>{location}</p>

                    </div>
    </div>
  </div>
</div>
    );
};

export default TestimonialCard;