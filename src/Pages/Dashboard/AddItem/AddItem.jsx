import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { FaUtensils } from 'react-icons/fa';

const AddItem = () => {
    return (
        <div className='w-full h-full md:py-10'>
            <SectionTitle subHeading={"What's new"} heading={'Add an item'}>
            </SectionTitle>
            <Helmet>
                <title>Bistro Boss | Add an Item</title>
            </Helmet>

            <div className='py-10 bg-gray-300 my-10 mx-20  px-10 md:px-0'>
                <form>
                    <div className="form-control w-3/4 md:mx-auto">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name*</span>
                        </label>
                        <input type="text" placeholder="Recipe Name" className="input input-bordered w-full
                     rounded-sm" />
                    </div>
                    <div className='md:flex items-center md:space-x-4 md:px-[90px]'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Category*</span>
                            </label>
                            <select className="select select-bordered rounded-sm ">
                                <option disabled selected>Select Category</option>
                                <option>Salad</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Dessert</option>
                                <option>Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="text" placeholder="Price" className="input input-bordered w-full 
                        rounded-sm  max-w-xs" />
                        </div>
                    </div>
                    <div className="form-control w-3/4  md:mx-auto">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Details*</span>
                        </label>
                        <textarea className="textarea textarea-bordered rounded-sm  h-24" placeholder="Recipe Details"></textarea>
                    </div>

                    <input type="file" className="file-input my-6 rounded-none w-full max-w-xs md:ml-[90px]" />

                    <div className='flex items-center 
                 bg-yellow-500 border-none rounded-none btn btn-primary w-36  md:ml-[90px]'>
                        <input type="submit" value="Add Item" /> <FaUtensils />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddItem;