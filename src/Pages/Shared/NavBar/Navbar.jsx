import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import { useEffect } from 'react';
import useCart from '../../../Hooks/UseCart';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart]= useCart();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.log(error);
            })
    }


    const navOptions = <>
        <div className='lg:flex items-end justify-end px-6 font-bold'>
            <li><Link to='/'>HOME</Link></li>
            <li><a>DASHBOARD</a></li>
            <li><Link to='/menu'>OUR MENU</Link></li>
            <li><Link to='/order/salad'>ORDER</Link></li>
            <li>
                <Link className='relative mr-4' to='/dashboard/myCart'>
                      <span className='text-3xl'><FaShoppingCart/></span>
                        <span className="badge  badge-sm bg-blue-500 absolute 
                        right-0 left-10 top-0 rounded-[60%]">+{cart?.length || 0}</span>
                </Link>
            </li>

            {
                user ? <>
                    <li><Link className='btn btn-outline btn-error'
                        onClick={handleLogout}>LOGOUT</Link></li>
                    <div className="avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                        <div className="w-10 ml-4 rounded-full 
                         ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                </>
                    :
                    <>
                        <li><Link to='/login'>LOGIN</Link></li>
                    </>
            }

        </div>

    </>
    return (

        <div className="navbar fixed z-10 bg-opacity-40  bg-black lg:px-14 py-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {navOptions}
                    </ul>
                </div>
                <h1> <span className='text-3xl font-semibold text-center text-white'>
                    Bistro Boss </span> <br /><span className="text-md spaced-text text-white"> Restaurant</span></h1>
            </div>
            <div className="navbar-end hidden lg:flex text-white">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
        </div>

    );
};

export default Navbar;