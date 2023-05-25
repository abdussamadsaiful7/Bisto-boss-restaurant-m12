import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {
                title &&
                <Cover
                    img={img}
                    title={title}
                    subTitle="would you like to try a dish?"
                ></Cover>
            }
            <div className=' grid md:grid-cols-2  mb-10 gap-4 mt-16'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center mb-10'>
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline uppercase btn-sm 
                        border-b-4 
                        border-l-0
                        border-r-0
                        border-t-0
                        my-4">
                        ORDER YOUR FAVORITE FOOD
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default MenuCategory;