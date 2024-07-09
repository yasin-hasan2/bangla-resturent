import React from 'react';
import MenuItem from '../menuitem/MenuItem';
import Cover from '../cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, img}) => {
    console.log(items)
    return (
        <div>
        {title && <Cover img={img} title={title} ></Cover> }
        <div className='grid grid-cols-2 gap-10 my-20' >
        {items.map(item => <MenuItem
         key={item._id}
         item={item}
         ></MenuItem>)}
         </div>
         <Link to={`/order/${title}`}  className='flex justify-center mb-20 '>
         <button className='btn btn-outline text-black ' >Order Your Favorite Food</button> 
         </Link>
         </div>
    );
};

export default MenuCategory;