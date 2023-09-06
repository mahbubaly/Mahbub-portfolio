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
                <title> Mahbubu portfolio | Projects</title>
            </Helmet>

            <section className='section' id='projects'>


                <div className='' >

                    <div className='lg:ml-0 ml-[10%]' data-aos="fade-up"
                        data-aos-duration="3000"

                        data-aos-delay="50">
                        <div

                            className='flex-1 text-center'>
                            <div id='projects' className="py-10 text-center uppercase ">
                                <a className="font-bold lg:text-2xl pb-2 text-white border-b-4 rounded border-b-yellow-600"> My <span className='text-yellow-500 '>Projects</span></a>
                                <br />
                                <p className='text-white mt-4 '>Completed 35+ projects</p>
                            </div>


                        </div>


                        <div data-aos="fade-up"
                            data-aos-duration="3000"

                            data-aos-delay="50" className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-12'>

                            <div className='text-white   scroll-container rounded-[8px] border-2 p-[4px]'>
                                <div className="card  lg:w-auto w-[270px] mx-auto">
                                    <div className='overflow-scroll  content scroll-smooth h-60  rounded-lg'  >
                                        <img className=' mx-auto ' src={img2} alt="summer-training!" />
                                    </div>

                                    <div className="lg:px-5 mt-5">
                                        <h2 className=" card-title">E-commerce website</h2>

                                        <div className='flex mt-[15px]  pb-[30px] items-center justify-between'>
                                            <a href='' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-[24px] h-[24px]' />
                                            </a>
                                            <a href='' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-[24px] h-[24px]' /></a>
                                            <a href='https://xpeed-website.netlify.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-[24px] h-[24px]'></FaLink></a>
                                        </div>

                                    </div>
                                </div>


                            </div>


                            <div className='text-white   scroll-container rounded-[8px] border-2 p-[4px]'>
                                <div className="card  lg:w-auto w-[270px] mx-auto">
                                    <div className='overflow-scroll  content scroll-smooth h-60  rounded-lg'  >
                                        <img className=' ' src={img9} alt="summer-training!" />
                                    </div>

                                    <div className="lg:px-5 mt-5">
                                        <h2 className=" card-title">National admission</h2>

                                        <div className='flex mt-[15px]  pb-[30px] items-center justify-between'>
                                            <a href='https://github.com/mahbubaly/College_admission' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-[24px] h-[24px]' />
                                            </a>
                                            <a href='https://github.com/mahbubaly/admission-server' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-[24px] h-[24px]' /></a>
                                            <a href='https://college-admission.netlify.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-[24px] h-[24px]'></FaLink></a>
                                        </div>

                                    </div>
                                </div>


                            </div>


                            <div className='text-white   scroll-container rounded-[8px] border-2 p-[4px]'>
                                <div className="card  lg:w-auto w-[270px] mx-auto">
                                    <div className='overflow-scroll  content scroll-smooth h-60  rounded-lg'  >
                                        <img className=' ' src={img1} alt="summer-training!" />
                                    </div>

                                    <div className="lg:px-5 mt-5">
                                        <h2 className="my-2 card-title">Summer-camp</h2>

                                        <div className='flex mt-[15px]  pb-[30px]  items-center justify-between'>
                                            <a href='https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-[24px] h-[24px]' />
                                            </a>
                                            <a href='https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-[24px] h-[24px]' /></a>
                                            <a href='https://summer-camp-d0cd9.web.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-[24px] h-[24px]'></FaLink></a>
                                        </div>

                                    </div>
                                </div>


                            </div>











                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="3000"

                            data-aos-delay="50" className='' >




                            <Link to="/ViewAllProjects" className=' mx-auto flex justify-center my-8 ' >
                                <button className='hover:underline btn btn-outline border-0 border-b-4 border-yellow-600 text-white hover:bg-yellow-600 hover:border-yellow-600'>Go View All <BsArrowRight className='w-6 h-6 ' />
                                </button>

                            </Link>
                        </div>




                    </div>

                </div>
            </section>;
        </>
    );
};

export default Projects;