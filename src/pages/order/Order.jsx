import React, { useState } from 'react';
import orderCover from '../../assets/img/shop/order.jpg'
import Cover from '../shared/cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../../components/sectionTitle/foodCard/FoodCard';
import OrderTab from './orderTab/OrderTab';

const Order = () => {
    const [tabIndex, SetTabIndex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
        <div>
        <Cover img={orderCover} title={"Order food"} ></Cover>
        </div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => SetTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
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