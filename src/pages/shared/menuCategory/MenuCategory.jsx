import React from 'react';
import MenuItem from '../menuitem/MenuItem';
import Cover from '../cover/Cover';

const MenuCategory = ({items, title, coverImg}) => {
    console.log(items)
    return (
        <div>
        {title && <Cover img={coverImg} title={"Our menu"} ></Cover> }
        <div className='grid grid-cols-2 gap-10' >
        {items.map(item => <MenuItem
         key={item._id}
         item={item}
         ></MenuItem>)}
         </div>

        </div>
    );
};

export default MenuCategory;