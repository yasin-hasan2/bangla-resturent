import React from 'react';

const MenuItem = ({item}) => {
    const { name, image, price,recipe } = item;
    return (
        <div className='lg:w-[80%] mx-auto lg:flex items-center gap-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[100px] h-[100px]' src={image} alt="" />
            <div>
            <h3 className='font-semibold'> {name}---------</h3>
            <p> {recipe} </p>
            </div>
            <p className='text-yellow-600' >${price}</p>
        </div>
    );
};

export default MenuItem;