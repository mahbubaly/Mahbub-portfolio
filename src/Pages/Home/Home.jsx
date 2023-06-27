import React from 'react';

import img from '../../assets/Images/mahbub/mahbub-pro-pic.jpg'
import resume from '../../assets/Images/mahbub/Resume of Mahbub.pdf'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import About from './AboutMe/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from '../Contact/Contact';
import Hired from '../Hired/Hired';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import { FaFacebook, FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';
import {  TbBrandFiverr } from 'react-icons/Tb';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-scroll';
// ..
AOS.init();



const Home = () => {
    const [text] = useTypewriter({
        words: ['I am frontend Developer Also', 'I am junior MERN Stack  web developer', 'I plan, strategise, manage and execute large-scale projects.', 'I write code and develop project', 'I can help your product get users and a product-market fit.',],
        loop: {},
        typeSpeed: 120,
        delaySpeed: 80
    })
    return (
        <>
            <div id='/' className='container mx-auto grid lg:grid-cols-2 grid-cols-1 justify-center p-6 gap-8 items-center pt-10'>
                <div data-aos="zoom-in-right"

                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">

                    <div className='space-y-4 text-yellow-600 lg:mt-0 mt-12'>
                        <h1 className='text-2xl font-bold' >Hi 👋, </h1>
                        <h1 className='text-2xl font-bold'>I'm Mahbub <br />

                            <span className='text-yellow-600 my-2' >  {text}</span>
                            <span style={{ color: '#CA8A04' }}>
                                <Cursor cursorStyle="!" />
                            </span>

                        </h1>


                        <div className='gap-6 flex'>
                            <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>    <button className='btn btn-outline text-white hover:bg-white hover:text-yellow-600 bg-yellow-600 border-dashed '>Get In touch</button></Link>


                            <button className='btn btn-outline  hover:border-none text-white hover:bg-yellow-700 duration-700 '><a href={resume} download>Download Resume</a>
                            </button>

                        </div>
                    </div>
                </div>

                <div>
                    <div data-aos="zoom-in-left"

                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out" className='grid grid-cols-12 gap-6 justify-center items-center'>
                        <div className='col-span-8'>
                            <abbr title="I am Mahbub , Current age 21!!">

                                <img
                                    className=' lg:ml-[20%] w-[400px] mt-20 shadow-2xl shadow-yellow-500 
                                    hover:shadow-red-400  box-border h-[400px] justify-center rounded-[50%]' src={img} alt="This is mahbub " />
                            </abbr>
                        </div>


                        <div className='text-primary   col-span-4 ml-10 lg:ml-20 gap-5 flex flex-col'>


                           
                            <a href="https://github.com/mahbubaly" target="_blank" rel="noreferrer" className="p-3 rounded-full lg:mt-16"><FaGithub className='w-10 h-10 ' />GitHub </a>
                            <a href="https://www.linkedin.com/in/mahbubur-rahman-2a3a7b248/" target="_blank" rel="noreferrer" className="p-3 rounded-full"><FaLinkedin className='w-10 h-10 my-1' />Linkedin </a>

                            <a href="https://stackoverflow.com/users/22107589/mahbubur-rahman" target="_blank" rel="noreferrer" className="p-3 rounded-full ">
                                <FaStackOverflow className='w-10 h-10 my-1' />StackOverflow
                            </a>
                            <a href="https://www.fiverr.com/mahbubalikhan10?up_rollout=true" target="_blank" rel="noreferrer" className="p-3 rounded-full">
                                <TbBrandFiverr className='w-10 h-10 my-1' />Fiverr
                            </a>
                            <a href="https://wa.link/0owvkh" target="_blank" rel="noreferrer" className="p-3 rounded-full"><BsWhatsapp className='w-10 h-10 my-1' />Whatsapp
                            </a>



                           


                        </div>
                    </div>






                </div>
            </div>


            <About />
            <Skills />

            <Projects />
            <Contact />
            <Hired />
        </>
    );
};

export default Home;