import React from 'react';
import img1 from '../../assets/Images/Projects/A12.png'

import img8 from '../../assets/Images/Projects/bistro.png'
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

                            <div className='text-white scroll-container border-2 p-3'>
                                <div

                                    className="card lg:w-full w-80 ">
                                    <div className='overflow-scroll content h-60  rounded-lg'  >
                                        <img className='object-contain ' src={img9} alt="summer-training!" />
                                    </div>

                                    <div className="card-body">
                                        <h2 className="my-2 card-title">National admission </h2>

                                        <div className='flex items-center justify-between'>
                                            <a href='https://github.com/mahbubaly/College_admission' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-8 h-8' />
                                            </a>
                                            <a href='https://github.com/mahbubaly/admission-server' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-8 h-8' /></a>
                                            <a href='https://college-admission.netlify.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-8 h-8'></FaLink></a>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-outline hover:bg-white text-white hover:border-none hover:text-black mt-2" onClick={() => window.my_modal_1.showModal()}>Explore more</button>
                                        </div>
                                    </div>
                                </div>

                                <dialog id="my_modal_1" className="modal">
                                    <form method="dialog" className="modal-box bg-black text-white w-11/12 max-w-5xl">
                                        <h3 className="font-bold text-lg">National College</h3>
                                        <p className="py-4">This is a national College web site.
                                            This is a single page web site
                                            Use this Site you can Choose any college and can get admit.
                                            You see the the information of any university before that you have to log in first. Check details and get admit . For applied you have to fill up from . Which take some information about you. For more information visit the website.
                                        </p>

                                        <div className="modal-action">
                                            {/* if there is a button, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </div>
                                    </form>
                                </dialog>
                            </div>
                            <div className='text-white scroll-container  border-2 p-3'>
                                <div

                                    className="card lg:w-full w-80 ">
                                    <div className='overflow-scroll content h-60  rounded-lg'  >
                                        <img className='object-contain ' src={img1} alt="summer-training!" />
                                    </div>

                                    <div className="card-body">
                                        <h2 className="my-2 card-title">Summer-camp</h2>

                                        <div className='flex items-center justify-between'>
                                            <a href='https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-8 h-8' />
                                            </a>
                                            <a href='https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-8 h-8' /></a>
                                            <a href='https://summer-camp-d0cd9.web.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-8 h-8'></FaLink></a>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-outline hover:bg-white text-white hover:border-none hover:text-black mt-2" onClick={() => window.my_modal_5.showModal()}>Explore more</button>
                                        </div>
                                    </div>
                                </div>

                                <dialog id="my_modal_5" className="modal">
                                    <form method="dialog" className="modal-box bg-black text-white w-11/12 max-w-5xl">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">This is Popular Chefs And Foods web site.
                                            This is a single page web site
                                            Use this Site you can Choose Chef And Food.
                                            You see the many Chefs and every single Chef details .
                                            You can see the Chefs Recipes , Chefs Like , Chefs Experience and Number Of Recipes.
                                            You Also Create your Account And then Login this site .</p>

                                        <div className="modal-action">
                                            {/* if there is a button, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </div>
                                    </form>
                                </dialog>
                            </div>

                            <div className='text-white scroll-container  border-2 p-3'>
                                <div

                                    className="card lg:w-full w-80 ">
                                    <div className='overflow-scroll content h-60  rounded-lg'  ><img className='object-contain h-fit  ' src={img8} alt="summer-training!" /></div>

                                    <div className="card-body">
                                        <h2 className="my-2 card-title">Bistro-boss</h2>

                                        <div className='flex items-center justify-between'>
                                            <a href='https://github.com/mahbubaly/bistro-boss-res' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-8 h-8' />
                                            </a>
                                            <a href='' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-8 h-8' /></a>
                                            <a href='https://lucky-biscotti-f144d5.netlify.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-8 h-8'></FaLink></a>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-outline hover:bg-white text-white hover:border-none hover:text-black mt-2" onClick={() => window.my_modal_6.showModal()}>Explore more</button>
                                        </div>
                                    </div>
                                </div>
                                <dialog id="my_modal_6" className="modal">
                                    <form method="dialog" className="modal-box bg-black text-white w-11/12 max-w-5xl">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">This is Popular Chefs And Foods web site.
                                            This is a single page web site
                                            Use this Site you can Choose Chef And Food.
                                            You see the many Chefs and every single Chef details .
                                            You can see the Chefs Recipes , Chefs Like , Chefs Experience and Number Of Recipes.
                                            You Also Create your Account And then Login this site .</p>

                                        <div className="modal-action">
                                            {/* if there is a button, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </div>
                                    </form>
                                </dialog>
                            </div>

                           

                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="3000"

                            data-aos-delay="50" >
                            <Link to="/ViewAllProjects" className='btn bg-black text-white w-[20%] flex mx-auto items-center text-xl mt-8' > <button>View All </button> <BsArrowRight />  </Link>
                        </div>




                    </div>

                </div>
            </section>;
        </>
    );
};

export default Projects;