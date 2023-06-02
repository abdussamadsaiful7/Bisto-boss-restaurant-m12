import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutFrom from './CheckoutFrom';
import useCart from '../../../Hooks/UseCart';

//TODO: provide publishable key,
const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway)
const Payment = () => {
    const [cart]=useCart();
    const total = cart.reduce((sum, item => sum + item.price), 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-[84%]'>
            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>
            <SectionTitle
                subHeading={"Please provide"}
                heading={"Payment"} >
            </SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutFrom price={price}></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default Payment;