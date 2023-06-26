import React, { useEffect, useState } from 'react';
import sun from '../assets/Images/Themes/sun.jpg';
import moon from '../assets/Images/Themes/mode_dark_icon.png';
import { Link, NavLink } from 'react-router-dom';





const Navbar = () => {

    const navbar = <>

        <NavLink className={({ isActive, isPending }) =>

            isPending
                ? ""
                : isActive
                    ? "text-yellow-600 underline font-semibold"
                    : " hover:text-yellow-600  text-yellow-500   font-semibold"
        } to='/'><li>Home</li></NavLink>




        <NavLink className={({ isActive, isPending }) =>

            isPending
                ? ""
                : isActive
                    ? "text-yellow-600 underline font-semibold  "
                    : " hover:text-yellow-600 text-yellow-500    font-semibold"
        } to='/skill'><li>My Skills</li></NavLink>
        <NavLink className={({ isActive, isPending }) =>

            isPending
                ? ""
                : isActive
                    ? "text-yellow-600 underline font-semibold"
                    : " hover:text-yellow-600 text-yellow-500   font-semibold"
        } to='/works'><li>My Works</li></NavLink>
        <NavLink className={({ isActive, isPending }) =>

            isPending
                ? ""
                : isActive
                    ? "text-yellow-600 underline font-semibold"
                    : " hover:text-yellow-600  text-yellow-500  font-semibold"
        } to='/contact'>
            <li>Contact</li>
        </NavLink>

        <NavLink className={({ isActive, isPending }) =>

            isPending
                ? ""
                : isActive
                    ? "text-yellow-600 underline font-semibold"
                    : " hover:text-yellow-600 text-yellow-500    font-semibold"
        } to='/projects'>
            <li>Hired Me</li>
        </NavLink>



    </>




    return (
        <>


            <div className="navbar  shadow-2xl lg:p-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>


                        <ul tabIndex={0} className="menu menu-sm gap-4 dropdown-content mt-3 z-[1] p-4 shadow bg-gradient-to-r from-sky-500 to-black rounded-box ">
                            {navbar}
                        </ul>
                    </div>
                    <div className='lg:ml-0 ml-[100%]'>
                        <Link to='/'> <a className="   w-full  font-bold lg:text-2xl text-white"> Mahbubur <span className='text-yellow-500 italic'>Rahman</span></a></Link>
                    </div>
                </div>



                {/* Large */}

                <div className="navbar-end hidden lg:flex  gap-6 text-xl">
                    <ul className="flex gap-7  px-1">
                        {navbar}
                    </ul>
                </div>


            </div>




        </>
    );
};

export default Navbar;