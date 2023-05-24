import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] =useMenu();
    const popular = menu.filter(item=>item.category === "popular")
    return (
        <section className='mb-14 mt-10'>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            >
            </SectionTitle>

            <div className=' grid md:grid-cols-2 md:mx-24 mt-10 gap-4'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline uppercase btn-sm 
                border-b-4 
                border-l-0
                border-r-0
                border-t-0
                my-4
                 ">VIEW FULL MENU
                </button>

            </div>
        </section>

    );
};

export default PopularMenu;