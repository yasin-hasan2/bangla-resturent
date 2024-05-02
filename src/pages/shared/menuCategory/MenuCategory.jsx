import React from 'react';
import MenuItem from '../menuitem/MenuItem';
import Cover from '../cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, img}) => {
    console.log(items)
    return (
        <div>
        {title && <Cover img={img} title={title} ></Cover> }
        <div className='grid grid-cols-2 gap-10' >
        {items.map(item => <MenuItem
         key={item._id}
         item={item}
         ></MenuItem>)}
         </div>
         <Link to={`/order/${title}`} >
         <button className='btn btn-outline' >Order Now</button> 
         </Link>
         </div>
    );
};

export default MenuCategory;