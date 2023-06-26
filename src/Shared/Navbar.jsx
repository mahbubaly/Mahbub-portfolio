import React, { useEffect, useState } from 'react';
import sun from '../assets/Images/Themes/sun.jpg';
import moon from '../assets/Images/Themes/mode_dark_icon.png';
import { Link, NavLink } from 'react-router-dom';




const Navbar = () => {

    const navbar = <>
        <div className='flex  gap-6 text-xl'>
            <NavLink className={({ isActive, isPending }) =>

                isPending
                    ? ""
                    : isActive
                        ? "text-yellow-600 underline font-semibold"
                        : " hover:text-yellow-600     font-semibold"
            } to='/'>Home</NavLink>




            <NavLink className={({ isActive, isPending }) =>

                isPending
                    ? ""
                    : isActive
                        ? "text-yellow-600 underline font-semibold  "
                        : " hover:text-yellow-600     font-semibold"
            } to='/education'>Education</NavLink>
            <NavLink className={({ isActive, isPending }) =>

                isPending
                    ? ""
                    : isActive
                        ? "text-yellow-600 underline font-semibold"
                        : " hover:text-yellow-600    font-semibold"
            } to='/accomplishments'>Accomplishments</NavLink>
            <NavLink className={({ isActive, isPending }) =>

                isPending
                    ? ""
                    : isActive
                        ? "text-yellow-600 underline font-semibold"
                        : " hover:text-yellow-600    font-semibold"
            } to='/contact'>
                Contact
            </NavLink>

            <NavLink className={({ isActive, isPending }) =>

                isPending
                    ? ""
                    : isActive
                        ? "text-yellow-600 underline font-semibold"
                        : " hover:text-yellow-600     font-semibold"
            } to='/projects'>
                My projects
            </NavLink>
        </div>


    </>




    return (
        <>


            <div className="navbar bg-base-100 shadow-2xl lg:p-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>


                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box ">
                            {navbar}
                        </ul>
                    </div>
                    <Link to='/'> <a className="  w-full  font-bold text-2xl">Mahbubur <span className='text-yellow-500 italic'>Rahman</span></a></Link>
                </div>



                {/* Large */}

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>


            </div>




        </>
    );
};

export default Navbar;