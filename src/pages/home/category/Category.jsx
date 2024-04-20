import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/img/home/slide1.jpg'
import slide2 from '../../../assets/img/home/slide2.jpg'
import slide3 from '../../../assets/img/home/slide3.jpg'
import slide4 from '../../../assets/img/home/slide4.jpg'
import slide5 from '../../../assets/img/home/slide5.jpg'
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
// import slide6 from '../../../assets/img/home/slide6.jpg'

const Category = () => {
    return (
        <div>
        <section>
        <SectionTitle
        subHeading={"from 11:00 am to 10:00 pm "}
        heading={"order online"}
        >
        </SectionTitle>



        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper m-24"
      >
        <SwiperSlide> <img src={slide1} alt=''/>
        <h3 className='text-3xl uppercase text-center -m-16 text-white'>salat</h3>
        </SwiperSlide>
        <SwiperSlide> <img src={slide2} alt=''/>
        <h3 className='text-3xl uppercase text-center -m-16 text-white' >faty</h3>
        </SwiperSlide>
        <SwiperSlide> <img src={slide3} alt=''/>
        <h3 className='text-3xl uppercase text-center -m-16 text-white' >sup</h3>
        </SwiperSlide>
        <SwiperSlide> <img src={slide4} alt=''/> 
        <h3 className='text-3xl uppercase text-center -m-16 text-white' >dejart</h3>
         </SwiperSlide>
        <SwiperSlide> <img src={slide5} alt=''/>
        
        </SwiperSlide>

      </Swiper>
        </section>
        </div>
    );
};

export default Category;
        // <h3 className='text-4xl uppercase text-center -m-16 text-white' >salat</h3>
        // <h3 className='text-4xl uppercase text-center -m-16 text-white' >dejart</h3>
        // <h3 className='text-4xl uppercase text-center -m-16 text-white' >sup</h3>
        //  <h3 className='text-4xl uppercase text-center -m-16 text-white' >salat</h3> 
