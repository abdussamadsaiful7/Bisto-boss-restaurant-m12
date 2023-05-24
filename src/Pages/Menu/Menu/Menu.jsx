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
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
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
                    <div className='text-center mb-10'>
                        <button className="btn btn-outline uppercase btn-sm 
                border-b-4 
                border-l-0
                border-r-0
                border-t-0
                my-4
                 ">ORDER YOUR FAVORITE FOOD
                        </button>

                    </div>
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
                <div className='text-center mb-10'>
                    <button className="btn btn-outline uppercase btn-sm 
                border-b-4 
                border-l-0
                border-r-0
                border-t-0
                my-4
                 ">ORDER YOUR FAVORITE FOOD
                    </button>

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
                <div className='text-center mb-10'>
                    <button className="btn btn-outline uppercase btn-sm 
                border-b-4 
                border-l-0
                border-r-0
                border-t-0
                my-4
                 ">ORDER YOUR FAVORITE FOOD
                    </button>

                </div>
            </div>


            <div className='md:mx-24'>
                {/* salads menu items */}
                <div>
                    <MenuCategory
                        items={salads}
                        title="salad"
                        img={saladImg}
                    ></MenuCategory>
                </div>
                <div className='text-center mb-10'>
                    <button className="btn btn-outline uppercase btn-sm 
                border-b-4 
                border-l-0
                border-r-0
                border-t-0
                my-4
                 ">ORDER YOUR FAVORITE FOOD
                    </button>

                </div>
            </div>


            <div className='md:mx-24'>
                {/* soups menu items */}
                <div>
                    <MenuCategory
                        items={soups}
                        title="soups"
                        img={soupImg}
                    ></MenuCategory>
                </div>
                <div className='text-center mb-10'>
                    <button className="btn btn-outline uppercase btn-sm 
                border-b-4 
                border-l-0
                border-r-0
                border-t-0
                my-4
                 ">ORDER YOUR FAVORITE FOOD
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Menu;