import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaBookmark, FaStackExchange, FaAlignJustify, FaShoppingBag, FaEnvelope } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu px-10 py-14 w-80 bg-[#D1A054] text-base-content">

                    <div className='text-center pb-2 font-bold'>
                        <h1 className='text-2xl '>BISTRO BOSS</h1>
                        <p className='text-md spaced-text'>Restaurant</p>
                    </div>

                    <li><NavLink to='/dashboard/home' ><FaHome />USER HOME</NavLink></li>
                    <li><NavLink to='/dashboard/reservation' ><FaCalendarAlt />RESERVATION</NavLink></li>
                    <li><NavLink to='/dashboard/history' ><FaWallet />PAYMENT HISTORY</NavLink></li>
                    <li><NavLink to='/dashboard/myCart'><FaShoppingCart />MY CART</NavLink></li>
                    <li><NavLink to='/dashboard/review' ><FaStackExchange />ADD REVIEW</NavLink></li>
                    <li><NavLink to='/dashboard/booking'><FaBookmark />MY BOOKING</NavLink></li>
                    <div className='divider'></div>
                    <li><NavLink to='/'><FaHome />HOME</NavLink></li>
                    <li><NavLink to='/menu'><FaAlignJustify />MENU</NavLink></li>
                    <li><NavLink to='/order/salad'><FaShoppingBag />ORDER</NavLink></li>
                    <li><NavLink to='/dashboard/contact'><FaEnvelope />CONTACT</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;