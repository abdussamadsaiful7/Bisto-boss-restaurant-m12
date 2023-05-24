import React from 'react';

const MenuItem = ({item}) => {
    const {name, price, image, recipe}= item;
    return (
        <div className='md:flex lg:mx-0 mx-5 space-x-10'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-28 h-28' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}--------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-600'>${price}</p>
        </div>
    );
};

export default MenuItem;