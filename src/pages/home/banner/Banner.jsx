import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/img/home/01.jpg'
import img2 from '../../../assets/img/home/02.jpg'
import img3 from '../../../assets/img/home/03.jpg'
import img4 from '../../../assets/img/home/04.jpg'


const Banner = () => {
    return (
        <div>
        <Carousel>
        <div>
            <img src={img1} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={img2} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={img3} />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
        </div>
    );
};

export default Banner;