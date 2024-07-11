import React, { useState } from 'react';
import orderCover from '../../assets/img/shop/order.jpg'
import Cover from '../shared/cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../../components/sectionTitle/foodCard/FoodCard';
import OrderTab from './orderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = ['salad', 'pizza', 'Soup', 'dessert']
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  // console.log(initialIndex)
  const [tabIndex, SetTabIndex] = useState(initialIndex);
  // const [tabIndex, SetTabIndex] = useState(0);
  // console.log(category)
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
        Bangla-restaurant || Order Food
        </title>
        </Helmet>
        </div>

        <div>
        <Cover img={orderCover} title={"Order food"} ideas={'Would you like to try a dish?'} ></Cover>
        </div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => SetTabIndex(index)}>
  <TabList className='flex justify-center items-center mx-auto w-4/5 h-20  text-center uppercase font-semibold py-4  m-4'>
    <Tab >Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>dessert</Tab>
  </TabList>
  <TabPanel>
  <OrderTab items={salad} ></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza} ></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soup} ></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={dessert} ></OrderTab>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;