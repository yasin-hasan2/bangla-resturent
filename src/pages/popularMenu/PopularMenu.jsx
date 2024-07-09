import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
// import { data } from 'autoprefixer';
import MenuItem from '../shared/menuitem/MenuItem';
import useMenu from '../../hooks/useMenu';
import { Link } from 'react-router-dom';


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const soup = menu.filter(item => item.category === 'soup');
    // const salad = menu.filter(item => item.category === 'salad');
    // const pizza = menu.filter(item => item.category === 'pizza');
    // const offered = menu.filter(item => item.category === 'offered');
    // const [menu, setMenu] = useState([]);
    // console.log(menu)
    //  useEffect( () =>{
    //     fetch('/menu.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     }
           
    // )
    
    // .catch(error => {
    //     console.error('Error fetching menu:', error);
    // });
    //  },[])
    return (
        <div>
            <section className='mb-12 ' >
            <SectionTitle
            heading={"From Our Menu"}
            subHeading={"popular items"}
            ></SectionTitle>
            </section>
            <div className='grid grid-cols-2 gap-10   w-4/5 mx-auto' >
           {popular.map(item => <MenuItem
            key={item._id}
            item={item}
            ></MenuItem>)}
            </div>
            <div>
            <Link to="/menu" >
            <button className=' w-60 mx-auto text-black flex justify-center mt-12 btn btn-outline'>
            View Full Menu
            </button>
            </Link>
            </div>

        </div>
    );
};

// {menu.map(item => <MenuItem
//     key={_id}
//     item={item}
//     ></MenuItem>)}

export default PopularMenu;