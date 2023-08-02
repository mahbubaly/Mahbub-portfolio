import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaMale, FaPhoenixFramework, FaPodcast, } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { GiSkills } from 'react-icons/gi';
import { FaBlog } from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import name from '../assets/Images/mahbub/logo.png'
import '../Pages/style.css'








const Navbar = () => {

    const navbar = <>

        <Link activeClass='active' className=' block px-2 rounded-md  shadow_bg  text-sm font-medium  transition  lg:my-0 my-3     lg:text-lg'
            activeStyle={{
                color: 'white',

                borderBottom: '2px solid white',

            }} to='/' spy={true} smooth={true} offset={50} duration={500}   >
            <div className='flex gap-1 justify-center items-center p-2'>
                <li >Home</li>
                <FaHome lassName='text-black w-10 h-6' />
            </div>

        </Link>

        <Link activeClass='active' className=' px-2  block rounded-md  shadow_bg  text-sm font-medium  transition  lg:my-0 my-3     lg:text-lg' activeStyle={{
            color: 'white',
            borderBottom: '2px solid white',

        }} to='skill' spy={true} smooth={true} offset={50} duration={500}   >
            <div className='flex gap-1 justify-center items-center p-2'>
                <li >Skills</li>
                <GiSkills lassName='text-black w-10 h-6' />
            </div>

        </Link>


        <Link activeClass='active' className=' px-2 block rounded-md  shadow_bg  text-sm font-medium  transition  lg:my-0 my-3     lg:text-lg' activeStyle={{
            color: 'white',
            borderBottom: '2px solid white',

        }} to='projects' spy={true} smooth={true} offset={50} duration={500}   >
            <div className='flex gap-1 justify-center items-center p-2'>
                <li >Projects</li>
                <FaPodcast lassName='text-black w-10 h-6' />
            </div>

        </Link>

        <Link activeClass='active' className='px-2  block rounded-md  shadow_bg  text-sm font-medium  transition  lg:my-0 my-3     lg:text-lg' activeStyle={{
            color: 'white',
            borderBottom: '2px solid white',

        }} to='contact' spy={true} smooth={true} offset={50} duration={500}   >
            <div className='flex gap-1 justify-center items-center p-2'>
                <li >Contact</li>
                <IoIosContact lassName='text-black w-10 h-10' />
            </div>

        </Link>
        <Link activeClass='active' className=' px-2 block rounded-md  shadow_bg  text-sm font-medium  transition  lg:my-0 my-3     lg:text-lg' activeStyle={{
            color: 'white',
            borderBottom: '2px solid white',

        }} to='' spy={true} smooth={true} offset={50} duration={500}   >
            <div className='flex gap-1 justify-center items-center p-2'>

                <li>Blogs</li>
                <FaBlog lassName='text-black w-8 h-6' />

            </div>

        </Link>
















    </>
    const [open, setOpen] = useState(false)









    return (
        <>









            {/*             
            <div className="mx-auto  z-50 max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="/">
                            <span className="sr-only">Home</span>
                            <img className='w-[100px]  h-[100px]' src={name} alt="" />
                        </a>
                    </div>



                    <div className=" items-center gap-4 hidden lg:block">

                        <div className="sm:flex sm:gap-4 ">


                            <div className="">
                                <nav aria-label="Global">
                                    <ul className="flex items-center gap-6 text-sm">
                                        {navbar}
                                    </ul>
                                </nav>
                            </div>
                            <a
                                className="rounded-md  shadow_bg  px-5 py-2.5 text-sm font-medium text-white shadow"
                                href="https://www.fiverr.com/?force_buying_nav"
                            >
                                Hire on Fiverr
                            </a>
                        </div>


                        

                        <div className="block z-50 lg:z-0 md:hidden">
                            <button onClick={() => setOpen(!open)}
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>


                                <span>
                                    {
                                        open === true ? <RxCross2 className="h-6 w-6 text-[#32BEA5] swap-off fill-current" /> : <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    }
                                </span>

                                <div className={`${open ? 'bg-white right-0 top-16  p-4 w-44  right-14-0 pl-3 ' : '-bottom-96 -left-1/4'
                                    } absolute flex flex-col duration-500  gap-6 `}>


                                    <nav aria-label="Global">
                                        <ul className="block lg:hidden  gap-6 text-sm">
                                            {navbar}
                                        </ul>
                                    </nav>


                                </div>

                            </button>

                        </div>
                    </div>
                </div>
            </div> */}



            <div className="mx-auto  z-50 max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="/">
                            <span className="sr-only">Home</span>
                            <img className='w-[100px]  h-[100px]' src={name} alt="" />
                        </a>
                    </div>



                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4 ">

                            <div className="hidden lg:block">
                                <nav aria-label="Global">
                                    <ul className="flex items-center gap-6 text-sm">
                                        {navbar}
                                    </ul>
                                </nav>
                            </div>
                            <a
                                className="rounded-md lg:block hidden  shadow_bg  px-5 py-2.5 text-sm font-medium text-white shadow"
                                href="https://www.fiverr.com/?force_buying_nav"
                            >
                                Hire on Fiverr
                            </a>


                        </div>

                        <div className="block z-50 lg:z-0 md:hidden">
                            <button onClick={() => setOpen(!open)}
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>


                                <span>
                                    {
                                        open === true ? <RxCross2 className="h-5 w-5 text-black swap-off fill-current" /> : <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    }
                                </span>

                                <div className={`${open ? 'bg-black w-full right-0 top-16  p-4   right-14-0 pl-3 ' : '-bottom-96 -left-1/4'
                                    } absolute flex flex-col duration-500  gap-6 `}>


                                    <nav aria-label="Global">
                                        <ul className="block lg:hidden  gap-6 text-sm">
                                            {navbar}
                                        </ul>
                                    </nav>


                                </div>

                            </button>

                        </div>
                    </div>
                </div>
            </div>











        </>
    );
};

export default Navbar;