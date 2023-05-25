import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../Components/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='md:mx-20 my-20'>
            <SectionTitle
                subHeading="What Our Clients Say"
                heading="TESTIMONIALS"
            >
            </SectionTitle>

            <p className='my-10 flex flex-col items-center text-4xl font-extrabold'><FaQuoteLeft/></p>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review =>
                        <SwiperSlide
                            key={review._id}
                        >
                            <div className='mx-20 text-center my-10'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                    className='mx-auto'
                                />
                                <p>{review.details}</p>
                                <h3 className='text-xl text-orange-400'>{review.name}</h3>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;