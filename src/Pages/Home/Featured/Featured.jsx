import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import featured from '../../../assets/home/featured.jpg'
import moment from 'moment';

const Featured = () => {
    return (
        <div className='md:mx-24 my-14  bg-fixed featured-item
          text-white'>
            <div className=' bg-black bg-opacity-40 w-full py-10'>
                <SectionTitle
                    subHeading={"Should Try"}
                    heading={'Featured items'}
                ></SectionTitle>
                <div className='lg:flex justify-center  items-center gap-10 pt-4  lg:px-10'>
                    <div>
                        <img className='w-[900px] h-52' src={featured} alt="" />
                    </div>
                    <div className='lg:px-20'>
                        <p className='text-md'>{moment().format("MMM Do YYYY")} </p>
                        <h2 className='uppercase'>WHERE CAN I GET SOME?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline uppercase btn-sm 
                border-b-4 
                border-l-0
                border-r-0
                border-t-0
                text-white
                my-4
                 ">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;