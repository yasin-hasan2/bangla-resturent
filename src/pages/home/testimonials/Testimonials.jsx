import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/navigation';


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
//   console.log(reviews)
    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch(error => {
            console.error('Error fetching reviews:', error);
        });
    },[])
    return (
        <div className='my-20' >
            <SectionTitle
            subHeading={"What Our Client Say"}
            heading={"Testimonials"}
            >
            </SectionTitle>
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(review =><SwiperSlide
                key={review._id}
                >
                <div className='flex flex-col items-center mx-24 my-16' >
                <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
                <p className='py-8'>{review.details}</p>
                <h3 className='text-3xl text-orange-400' >{review.name}</h3>
                </div>
                </SwiperSlide>
        )
        }
      </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
