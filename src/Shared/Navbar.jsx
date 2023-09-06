import React, {  useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, } from 'react-icons/fa';
import name from '../assets/Images/mahbub/logo.png'
import '../Pages/style.css'
import Container from './Container';







const Navbar = () => {
    
    const navbar = <>

        <Link className=' block px-2 rounded-md  shadow_bg  text-sm font-medium  transition  lg:my-0 my-3     '
            to='/'    >
            <button className='flex gap-1 justify-center mx-auto items-center p-2'>

                <li >Home</li>
            </button>

        </Link>

        <Link className=' px-2  block rounded-md  shadow_bg  text-sm font-medium  transition  lg:my-0 my-3     ' to='skill'    >
            <button className='flex gap-1 justify-center mx-auto  items-center p-2'>

                <li >Skills</li>
            </button>

        </Link>


        <Link className=' px-2 block rounded-md  shadow_bg  text-sm font-medium  transition  lg:my-0 my-3     ' to='projects'    >
            <button className='flex gap-1 justify-center mx-auto  items-center text-center p-2'>

                <li  className=''>Projects</li>
            </button>

        </Link>

        <Link className='px-2  block rounded-md  shadow_bg  text-sm font-medium  transition  lg:my-0 my-3     ' to='contact'    >
            <button className='flex gap-1 justify-center mx-auto  items-center p-2'>

                <li >Contact</li>
            </button>

        </Link>

        <Link className='px-2  block rounded-md  shadow_bg  text-sm font-medium  transition  lg:my-0 my-3     ' to='contact'    >
            <button className='flex gap-1 justify-center mx-auto  items-center p-2'>

                <li >Hire on Fiverr</li>
            </button>

        </Link>




















    </>
    const [open, setOpen] = useState(false);
    const [TrueOpen, setTrueOpen] = useState(false);









    return (
        <>

            <Container>



                <div className=" ">
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




                            </div>

                            {/* Mobile */}

                            <div className={`block lg:hidden   lg:col-span-3  absolute lg:static lg:w-auto top-0 left-0 overflow-hidden h-full lg:h-auto duration-500 full-back   lg:bg-[transparent] lg:p-0 z-50 ${open ? "w-full  p-5" : "w-0"}`}>

                                <div className='flex  justify-between'>
                                    <ul className='flex  mx-auto font-bold flex-col  '>

                                        {navbar}



                                    </ul>

                                    <FaTimes onClick={() => setOpen(!open)} className='w-[24px] h-[24px] text-[#FFFFFF]' />
                                </div>
                            </div>

                            <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <> </> : <FaBars className='w-[24px] h-[24px] text-[#FFFFFF]' />}</button>
                        </div>
                    </div>
                </div>
            </Container>
























        </>
    );
};

export default Navbar;