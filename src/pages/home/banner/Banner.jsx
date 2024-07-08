// import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel  } from 'react-responsive-carousel';


import img1 from '../../../assets/img/home/01.jpg'
import img2 from '../../../assets/img/home/02.jpg'
import img3 from '../../../assets/img/home/03.jpg'
import img4 from '../../../assets/img/home/04.jpg'


const Banner = () => {
    return (
        <div>
        <Carousel  >
        <div>
            <img src={img1} />
        </div>
        <div>
            <img src={img2} />
        </div>
        <div>
            <img src={img3} />
            
        </div>
        <div>
            <img src={img4} />
            
        </div>
    </Carousel>
        </div>
    );
};

export default Banner;