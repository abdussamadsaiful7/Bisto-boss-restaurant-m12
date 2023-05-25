import React, { useState } from 'react';
import orderImg from '../../../assets/order/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soups', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex)

    const [menu] = useMenu();
    console.log(category)
    const salads = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')


    return (
        <div>
            <Helmet>
                <title>Bistro | order food</title>
            </Helmet>
            <Cover
                img={orderImg}
                title="Order Food"
            ></Cover>
            <div className='text-center my-10'>
                <Tabs defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
                    <TabList>
                        <Tab>SALADS</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>

                    <TabPanel>
                        <OrderTab items={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={soups}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;