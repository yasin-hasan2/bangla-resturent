import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import featuredImg from '../../assets/img/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className='featured-Item bg-fixed text-white pt-8 my-20 '>
            <SectionTitle subHeading={"check it out"} heading={"Featured item"} ></SectionTitle>
        
            <div className='md:flex justify-center py-20 pt-12 px-36' >
            <div>
            <img src={featuredImg} alt="" /></div>
            <div className='md:ml-10'>
            <p>March 20, 2023
           </p>
           <p className='uppercase'> WHERE CAN I GET SOME?</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
           <button className='btn btn-outline' >Order Now</button> 
           </div>
            </div>
            
            </div>
    );
};

export default Featured;