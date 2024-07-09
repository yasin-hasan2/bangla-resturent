// import React from 'react';
import { Helmet} from 'react-helmet-async';
import Cover from '../shared/cover/Cover'
import menuImg from '../../assets/img/menu/banner3.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import MenuCategory from '../shared/menuCategory/MenuCategory';
import dessertImg from '../../assets/img/menu/dessert-bg.jpeg'
import soupImg from '../../assets/img/menu/soup-bg.jpg'
import saladImg from '../../assets/img/menu/salad-bg.jpg'
import pizzaImg from '../../assets/img/menu/pizza-bg.jpg'

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
           <Cover img={menuImg} title={"our menu"} ideas={'Would you like to try a dish?'}  ></Cover>
           <SectionTitle 
           subHeading={"Don't miss"} heading={"today's offers"}
           >
           </SectionTitle>
           <div >
           <MenuCategory items={offered}></MenuCategory>
           <MenuCategory items={dessert} title={"Dessert"} img={dessertImg} ></MenuCategory>
           <MenuCategory items={pizza} title={"pizza"} img={pizzaImg} ></MenuCategory>
           <MenuCategory items={salad} title={"salad"} img={saladImg} ></MenuCategory>
           <MenuCategory items={soup} title={"soup"} img={soupImg} ></MenuCategory>

           </div>
           </div>
           </div>
    );
};

export default Menu;