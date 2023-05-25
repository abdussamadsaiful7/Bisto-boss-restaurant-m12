import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title="our menu"
                subTitle="would you like to try a dish?"
            ></Cover>

            <div>
                {/* main cover */}
                <SectionTitle
                    subHeading={"Don't miss"}
                    heading="Today's offer"
                ></SectionTitle>
                <div className='md:mx-24'>
                    {/* offered menu items */}
                    <MenuCategory items={offered}></MenuCategory>
                </div>
            </div>

            <div className='md:mx-24'>
                {/* desserts menu items */}
                <div>
                    <MenuCategory
                        items={desserts}
                        title="Dessert"
                        img={dessertImg}
                    ></MenuCategory>
                </div>
            </div>

            <div className='md:mx-24'>
                {/* pizza menu items */}
                <div>
                    <MenuCategory
                        items={pizza}
                        title="pizza"
                        img={pizzaImg}
                    ></MenuCategory>
                </div>
            </div>


            <div className='md:mx-24'>
                {/* salads menu items */}
                <div>
                    <MenuCategory
                        items={salad}
                        title="salad"
                        img={saladImg}
                    ></MenuCategory>
                </div>
            </div>


            <div className='md:mx-24'>
                {/* soups menu items */}
                <div>
                    <MenuCategory
                        items={soup}
                        title="soups"
                        img={soupImg}
                    ></MenuCategory>
                </div>
            </div>
        </div>
    );
};

export default Menu;