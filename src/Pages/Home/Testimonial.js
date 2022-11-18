import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {


    const reviewsData = [
        {
            id: 1,
            name: 'WIN SON HERR',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
            location: 'California',
            img: people1
        },
        {
            id: 2,
            name: 'BSH SEN',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
            location: 'California',
            img: people2
        },
        {
            id: 3,
            name: 'JOHN MALL',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
            location: 'California',
            img: people3
        }
    ]


    return (
        <section className='mt-16'>
            <div className='flex justify-between p-5'>

                <div>
                    <h2 className='text-xl font-bold text-info'>Testimonial</h2>
                    <p className='text-4xl text-accent'>What Our Patients Says</p>
                </div>
                <figure className='w-24 lg:w-48'><img src={quote} alt="" /></figure>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 justify-center'>
                {
                    reviewsData.map(review => <TestimonialCard
                        key={review.id}
                        reviews={review}
                    ></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;