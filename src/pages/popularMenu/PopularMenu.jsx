import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
// import { data } from 'autoprefixer';
import MenuItem from '../shared/menuitem/MenuItem';


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    console.log(menu)
     useEffect( () =>{
        fetch('/menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        }
           
    )
    
    .catch(error => {
        console.error('Error fetching menu:', error);
    });
     },[])
    return (
        <div>
            <section className='mb-12' >
            <SectionTitle
            heading={"From Our Menu"}
            subHeading={"popular items"}
            ></SectionTitle>
            </section>
            <div className='grid grid-cols-2 gap-10' >
           {menu.map(item => <MenuItem
            key={menu._id}
            item={item}
            ></MenuItem>)}
            </div>

        </div>
    );
};

// {menu.map(item => <MenuItem
//     key={_id}
//     item={item}
//     ></MenuItem>)}

export default PopularMenu;