import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../Hooks/UseCart';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(AuthContext);
    const [ ,refetch]= useCart();

    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (it) => {
        console.log(it);
        if (user && user.email){
            const cartItem = {itemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(cartItem)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch(); //refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'At first login, please!',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state: {from: location}})
                }
            })
        }
    }
    return (
        <div className='shadow-2xl relative'>
            <img className='w-full h-64 mx-auto' src={image} alt="" />
            <div className='p-4'>
                <p className='bg-black text-white  top-4 rounded px-4 right-10  absolute'>${price}</p>
                <h2 className='text-lg font-bold'>{name}</h2>
                <p>{recipe}</p>
                <button onClick={() => handleAddToCart(item)} className="btn btn-outline uppercase btn-sm 
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