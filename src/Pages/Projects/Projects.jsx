import React from 'react';
import img1 from '../../assets/Images/Projects/A12.png'
import img2 from '../../assets/Images/Projects/e-com.png'
import img9 from '../../assets/Images/Projects/9.png'
import '../../Pages/Style.css'
import 'aos/dist/aos.css';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';


const Projects = () => {


    return (

        <>

            <Helmet>
                <title>  Mahbubu portfolio | Projects</title>
            </Helmet>

            <div className='lg:pb-[50px] opacity-80 bg-gradient-to-r from-black  to-red-900'>
                <section className='section container mx-auto ' id='projects'>


                    <div className='' >

                        <div className='lg:ml-0 ml-[10%]' >
                            <div

                                className='flex-1 text-center'>
                                <div id='projects' className="py-10 text-center uppercase ">
                                    <a className="font-bold lg:text-2xl pb-2 text-white border-b-4 rounded border-b-yellow-600"> My <span className='text-yellow-500 '>Projects</span></a>
                                    <br />
                                    <p className='text-white mt-4 '>Completed 80+ projects</p>
                                </div>


                            </div>

                            <h1 className='underline text-[20px] text-yellow-50'>Recent projects...</h1>


                            <div className='grid gap-10  lg:mr-0 mr-5 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-[10px]'>

                                <Link to='https://xpeed-website.netlify.app' className='text-white    scroll-container rounded-[8px] border-2 p-[4px]'>
                                    <div className="card  lg:w-auto   mx-auto">
                                        <div className='overflow-scroll  content scroll-smooth h-60  rounded-lg'  >
                                            <img className=' mx-auto lg:w-auto ' src={img2} alt="summer-training!" />
                                        </div>

                                        <div className="lg:px-5 px-4 mt-5">
                                            <h2 className="lg:text-[20px] text-[18px]  card-title">E-commerce website</h2>

                                            <div className='flex mt-[15px]  pb-[30px] items-center justify-between'>
                                                <a href='' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-[24px] h-[24px]' />
                                                </a>
                                                <a href='' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-[24px] h-[24px]' /></a>
                                                <a href='https://xpeed-website.netlify.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-[24px] h-[24px]'></FaLink></a>
                                            </div>

                                        </div>
                                    </div>


                                </Link>


                                <Link to='https://college-admission.netlify.app' className='text-white   scroll-container rounded-[8px] border-2 p-[4px]'>
                                    <div className="card  lg:w-auto  mx-auto">
                                        <div className='overflow-scroll  content scroll-smooth h-60  rounded-lg'  >
                                            <img className=' ' src={img9} alt="summer-training!" />
                                        </div>

                                        <div className="lg:px-5 px-4 mt-5">
                                            <h2 className="lg:text-[20px] text-[18px]  card-title">National admission</h2>

                                            <div className='flex mt-[15px]  pb-[30px] items-center justify-between'>
                                                <a href='https://github.com/mahbubaly/College_admission' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-[24px] h-[24px]' />
                                                </a>
                                                <a href='https://github.com/mahbubaly/admission-server' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-[24px] h-[24px]' /></a>
                                                <a href='https://college-admission.netlify.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-[24px] h-[24px]'></FaLink></a>
                                            </div>

                                        </div>
                                    </div>


                                </Link>


                                <Link to='https://summer-camp-d0cd9.web.app' className='text-white   scroll-container rounded-[8px] border-2 p-[4px]'>
                                    <div className="card  lg:w-auto  mx-auto">
                                        <div className='overflow-scroll  content scroll-smooth h-60  rounded-lg'  >
                                            <img className=' ' src={img1} alt="summer-training!" />
                                        </div>

                                        <div className="lg:px-5 px-4 mt-5">
                                            <h2 className="my-2 lg:text-[20px] text-[18px] card-title">Summer-camp</h2>

                                            <div className='flex mt-[15px]  pb-[30px]  items-center justify-between'>
                                                <a href='https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-[24px] h-[24px]' />
                                                </a>
                                                <a href='https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-[24px] h-[24px]' /></a>
                                                <a href='https://summer-camp-d0cd9.web.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-[24px] h-[24px]'></FaLink></a>
                                            </div>

                                        </div>
                                    </div>


                                </Link>











                            </div>

                            <div className='' >




                                <Link to="/ViewAllProjects" className=' mx-auto flex justify-center my-8 ' >
                                    <button className='hover:underline btn btn-outline border-0 border-b-4 border-yellow-600 text-white bg-yellow-600 hover:border-yellow-600'>Go View All Projects <BsArrowRight className='w-6 h-6 ' />
                                    </button>

                                </Link>
                            </div>




                        </div>

                    </div>
                </section>;
            </div>
        </>
    );
};

export default Projects;