import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { FaUtensils } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_upload_token;

const AddItem = () => {
    const [axiosSecure] = UseAxiosSecure()
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
      
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url,{
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imgResponse=>{
            console.log();
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image: imgURL}
                console.log(newItem)
                axiosSecure.post('/menu', newItem)
                .then(data=>{
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added Successfully!',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })


    };
    return (
        <div className=' w-[84%] md:mx-10'>
            <Helmet>
                <title>Bistro Boss | Add an Item</title>
            </Helmet>
            <SectionTitle subHeading={"What's new"} heading={'Add an item'}>
            </SectionTitle>
            <div className='py-10 md:h-3/4 bg-gray-300 my-10  px-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control md:w-[84%] ">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name*</span>
                        </label>
                        <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 80 })} 
                         className="input input-bordered w-full rounded-sm" />
                    </div>
                    <div className='md:flex  md:w-[84%] md:space-x-8 '>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-semibold">Category*</span>
                            </label>
                            <select defaultValue="Select category" {...register("category", { required: true })}
                             className="select select-bordered rounded-sm ">
                                <option disabled >Select category</option>
                                <option>Salad</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Dessert</option>
                                <option>Drinks</option>
                            </select>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="text" placeholder="Price" 
                            {...register("price", { required: true })}
                            className="input input-bordered w-full rounded-sm"/>
                        </div>
                    </div>
                    <div className="form-control md:w-[84%] ">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Details*</span>
                        </label>
                        <textarea className="textarea textarea-bordered rounded-sm h-24" 
                        {...register("recipe", { required: true })}
                        placeholder="Recipe Details"></textarea>
                    </div>

                    <input type="file"  {...register("image", { required: true })}
                     className="file-input my-6 rounded-none w-full max-w-xs " />

                    <div className='flex items-center 
                 bg-yellow-500 border-none rounded-none btn btn-primary w-36  '>
                        <input type="submit" value="Add Item" /> <FaUtensils />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddItem;