import React from 'react';

const Navbar = () => {
    const navOptions = <>
        <div className='lg:flex items-end justify-end px-6 font-bold'>
            <li><a>HOME</a></li>
            <li><a>CONTACT US</a></li>
            <li><a>DASHBOARD</a></li>
            <li><a>OUR MENU</a></li>
            <li><a>OUR SHOP</a></li>
            <li><a>SIGN OUT</a></li>
            {/* <li><a>SIGN IN</a></li> */}
        </div>

    </>
    return (

        <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black lg:px-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {navOptions}
                    </ul>
                </div>
                <h1> <span className='text-3xl font-semibold text-center'>
                    Bistro Boss </span> <br /><span className="text-md spaced-text"> Restaurant</span></h1>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
        </div>

    );
};

export default Navbar;