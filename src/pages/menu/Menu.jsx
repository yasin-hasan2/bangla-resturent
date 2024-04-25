// import React from 'react';
import { Helmet} from 'react-helmet-async';
import Cover from '../shared/cover/Cover'
import menuImg from '../../assets/img/menu/banner3.jpg'

const Menu = () => {
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
           </div>
           </div>
    );
};

export default Menu;