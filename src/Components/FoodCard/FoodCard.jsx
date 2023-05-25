import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className='shadow-2xl relative'>
            <img className='w-full h-64 mx-auto' src={image} alt="" />
            <div className='p-4'>
                <p className='bg-black text-white  top-4 rounded px-4 right-10  absolute'>${price}</p>
                <h2 className='text-lg font-bold'>{name}</h2>
                <p>{recipe}</p>
                <button className="btn btn-outline uppercase btn-sm 
                border-b-4 
                border-l-0
                border-r-0
                border-t-0
                bg-slate-200
                border-orange-400
                my-4">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default FoodCard;