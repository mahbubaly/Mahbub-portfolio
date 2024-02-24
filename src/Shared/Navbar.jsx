import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, } from 'react-icons/fa';
import name from '../assets/Images/mahbub/logo.png'
import '../Pages/style.css'
import img3 from '../../src/assets/Images/mahbub/My 1.png'
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import resume from '../assets/Images/mahbub/Resume of Mahbub.pdf'






const Navbar = () => {

    const navbar = <>

        <Link className=' block px-2 hover:text-[#ff064b]  rounded-md  shadow_bg  text-[16px] font-medium  transition  lg:my-0 my-3 '
            to='/'    >
            <button className='flex gap-1 justify-center mx-auto items-center p-2'>

                <li >Home</li>
            </button>

        </Link>

        <Link className=' px-2 hover:text-[#ff064b]   block rounded-md  shadow_bg  text-[16px] font-medium  transition  lg:my-0 my-3     ' to='skill'    >
            <button className='flex gap-1 justify-center mx-auto  items-center p-2'>

                <li >Skill</li>
            </button>

        </Link>


        <Link className=' px-2 hover:text-[#ff064b]  block rounded-md  shadow_bg  text-[16px] font-medium  transition  lg:my-0 my-3  ' to='projects'    >
            <button className='flex gap-1 justify-center mx-auto  items-center text-center p-2'>

                <li className=''>Projects</li>
            </button>

        </Link>

        <Link className='px-2 hover:text-[#ff064b]    block rounded-md  shadow_bg  text-[16px] font-medium  transition  lg:my-0 my-3  ' to='contact'    >
            <button className='flex gap-1 justify-center mx-auto  items-center p-2'>

                <li >Contact</li>
            </button>

        </Link>





















    </>
    const [open, setOpen] = useState(false);
    const [TrueOpen, setTrueOpen] = useState(false);






    const [text] = useTypewriter({
        words: ['I am frontend Developer Also', 'I am junior MERN Stack  web developer', 'I plan, strategise, manage and execute large-scale projects.', 'I write code and develop project', 'I can help your product get users and a product-market fit.',],
        loop: {},
        typeSpeed: 200,
        delaySpeed: 80
    })


    return (


        <>




            <div className='navBack pt-5'>

                <div className=" container mx-auto ">
                    <div className="flex h-16 items-center justify-between">
                        <div className="md:flex md:items-center md:gap-12">
                            <a className="block text-teal-600" href="/">
                                <span className="sr-only">Home</span>
                                <img className='w-[100px]  h-[100px]' src={name} alt="" />
                            </a>
                        </div>



                        <div className="flex items-center gap-4 p-5 lg:p-0">
                            <div className="sm:flex sm:gap-4 ">

                                <div className="hidden lg:block">
                                    <nav aria-label="Global">
                                        <ul className="flex items-center gap-6 text-[16px]">
                                            {navbar}
                                        </ul>
                                    </nav>
                                </div>




                            </div>

                            {/* Mobile */}

                            <div className={`block lg:hidden   lg:col-span-3  absolute lg:static lg:w-auto top-0 left-0 overflow-hidden h-full lg:h-auto duration-500 navBack   lg:bg-[transparent] lg:p-0 z-50 ${open ? "w-[85%]  p-5" : "w-0"}`}>

                                <div className='flex  justify-between pl-[40px]'>
                                    <ul className='flex  mx-auto font-bold flex-col  '>

                                        {navbar}



                                    </ul>

                                    <FaTimes onClick={() => setOpen(!open)} className='w-[24px] h-[24px] text-[#FFFFFF]' />
                                </div>
                            </div>

                            <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <> </> : <FaBars className='w-[24px] h-[24px] text-[#FFFFFF]' />}</button>
                        </div>
                    </div>

                    {/* Banner */}

                    <div className='pb-[300px]'>

                        <div id='/' className=' mx-auto flex flex-col  p-6 gap-8  pt-10'>

                            <div className='flex justify-center items-center ml-0 lg:ml-[185px]'>
                                <div  className='lg:grid grid-cols-12 gap-6 justify-center items-center'>
                                    <div className='col-span-8 flex justify-center md:justify-start lg:justify-center'>
                                        <abbr title="I am Mahbub , Current age 22!!">

                                            <img
                                                className='  w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] shadow-2xl shadow-white box-border  justify-center rounded-[50%] ' src={img3} alt="This is mahbub " />
                                        </abbr>
                                    </div>



                                </div>






                            </div>


                            <div className='ml-0 lg:mt-[70px] lg:ml-[200px]' >

                                <div className='space-y-4 justify-start text-white lg:z-0 z-30 lg:mt-0 '>
                                    <h1 className='lg:text-2xl text-[20px] font-bold ' >Hi 👋, </h1>
                                    <h1 className='lg:text-2xl text-[20px] font-bold'>I'm Mahbub <br />

                                        <span className='text-white lg:text-2xl text-[20px] my-2' >  {text}</span>
                                        <span style={{ color: 'red' }}>
                                            <Cursor cursorStyle="!" />
                                        </span>

                                    </h1>


                                    <div className='gap-6 flex'>
                                        <Link to='contact' spy={true} smooth={true} offset={50}>    <button className='btn btn-outline text-white hover:bg-[#ff064b] hover:text-white bg-[#d81e53dc]  '>Get In touch</button></Link>


                                        <button className='btn btn-outline  hover:border-none text-white hover:bg-[#ff064b] hover:text-white  '><a href={resume} download>Check Resume</a>
                                        </button>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>



                



            </div>

























        </>
    );
};

export default Navbar;