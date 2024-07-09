import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({img, title, ideas}) => {
    return (
        <div>
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
    <div className="hero h-[500px]" >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-white">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold uppercase "> {title} </h1>
        <p className="mb-5"> {ideas} </p>
      </div>
    </div>
  </div>
    </Parallax>
        
      
        </div>
    );
};

export default Cover;