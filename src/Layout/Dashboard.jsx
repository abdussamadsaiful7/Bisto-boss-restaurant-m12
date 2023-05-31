import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaBookmark, FaStackExchange, FaAlignJustify, FaShoppingBag, FaEnvelope, FaUtensils, FaUsers, FaBook, FaListUl } from 'react-icons/fa';
import useCart from '../Hooks/UseCart';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();

    //TODO: load data from the server to dynamic isAdmin based on Data.
  //  const isAdmin = true;
  const [isAdmin] = useAdmin();


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


                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/home' ><FaHome />ADMIN HOME</NavLink></li>
                                <li><NavLink to='/dashboard/addItems' ><FaUtensils/>ADD ITEMS</NavLink></li>
                                <li><NavLink to='/dashboard/manageItems' ><FaListUl />MANAGE ITEMS</NavLink></li>
                                <li><NavLink to='/dashboard/bookings'><FaBook/>MANAGE BOOKINGS</NavLink></li>
                                <li><NavLink to='/dashboard/allUsers'><FaUsers/>ALL USER</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to='/dashboard/home' ><FaHome />USER HOME</NavLink></li>
                                <li><NavLink to='/dashboard/reservation' ><FaCalendarAlt />RESERVATION</NavLink></li>
                                <li><NavLink to='/dashboard/history' ><FaWallet />PAYMENT HISTORY</NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/myCart'><FaShoppingCart />MY CART
                                        <span className="badge  badge-sm bg-blue-500 
                                             rounded-[60%]">+{cart?.length || 0}</span>
                                    </NavLink>
                                </li>
                                <li><NavLink to='/dashboard/review' ><FaStackExchange />ADD REVIEW</NavLink></li>
                                <li><NavLink to='/dashboard/booking'><FaBookmark />MY BOOKING</NavLink></li>
                            </>
                    }


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