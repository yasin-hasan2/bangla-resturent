// import React from 'react';
import { Helmet} from 'react-helmet-async';
import Cover from '../shared/cover/Cover'
import menuImg from '../../assets/img/menu/banner3.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import MenuCategory from '../shared/menuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
          <div>
          <Helmet>
          <title>
          Bangla-restaurant || Our Menu
          </title>
          </Helmet>
          </div>
          
           <div>
           <Cover img={menuImg} title={"our menu"} ></Cover>
           <SectionTitle 
           subHeading={"Don't miss"} heading={"today's offers"}
           >
           </SectionTitle>
           <div>
           <MenuCategory items={offered}></MenuCategory>
           <MenuCategory items={dessert} title={"Dessert"} ></MenuCategory>

           </div>
           </div>
           </div>
    );
};

export default Menu;