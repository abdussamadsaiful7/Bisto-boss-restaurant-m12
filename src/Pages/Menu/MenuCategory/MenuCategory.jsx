import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

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
        </div>
    );
};

export default MenuCategory;