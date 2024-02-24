import React from 'react';
import img2 from '../../assets/Images/Projects/a11.png'
import img3 from '../../assets/Images/Projects/a10.png'
import img4 from '../../assets/Images/Projects/food.png'
import img5 from '../../assets/Images/Projects/appliedJon.png'
import img6 from '../../assets/Images/Projects/127.0.0.1_5500_index.html.png'
import img8 from '../../assets/Images/Projects/bistro.png'
import img7 from '../../assets/Images/Projects/a3.png'
import { FaGithub, FaLink } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ViewAllProjects = () => {
    return (
        <>

            <Helmet>
                <title> Mahbubu portfolio || All Projects</title>
            </Helmet>


            <div className='py-5 lg:py-[50px] opacity-80 bg-gradient-to-r from-black  to-red-900'>
                <div className='container mx-auto grid lg:px-[30px] px-5 gap-10 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 '>


                    <div className='text-purple-50 scroll-container rounded-[8px] border-2 p-3'>
                        <div

                            className="card lg:w-full w-80 ">
                            <div className='overflow-scroll content h-60  rounded-lg'  ><img className='object-contain h-fit  ' src={img8} alt="summer-training!" /></div>

                            <div className="card-body">
                                <h2 className="my-2 card-title">Bistro-boss</h2>

                                <div className='flex items-center justify-between'>
                                    <a href='https://github.com/mahbubaly/bistro-boss-res' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-[24px] h-[24px]' />
                                    </a>
                                    <a href='' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-[24px] h-[24px]' /></a>
                                    <a href='https://lucky-biscotti-f144d5.netlify.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-[24px] h-[24px]'></FaLink></a>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='text-white scroll-container rounded-[8px] border-2 p-3'>
                        <div

                            className="card lg:w-full w-80 ">
                            <div className='overflow-scroll content h-60  rounded-lg'  ><img className='object-contain h-fit   ' src={img2} alt="summer-training!" /></div>

                            <div className="card-body">
                                <h2 className="my-2 card-title">Toy-Shop</h2>

                                <div className='flex items-center justify-between'>
                                    <a href='https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-[24px] h-[24px]' />
                                    </a>
                                    <a href='https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-[24px] h-[24px]' /></a>
                                    <a href='https://car-toys-shop-dffea.web.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-[24px] h-[24px]'></FaLink></a>
                                </div>

                            </div>
                        </div>


                    </div>

                    <div className='text-white scroll-container rounded-[8px] border-2 p-3'>
                        <div

                            className="card lg:w-full w-80 ">
                            <div className='overflow-scroll content h-60  rounded-lg'  ><img className='object-contain h-fit   ' src={img4} alt="summer-training!" /></div>

                            <div className="card-body">
                                <h2 className="my-2 card-title">Cold Lucci</h2>

                                <div className='flex items-center justify-between'>
                                    <a href='https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-[24px] h-[24px]' />
                                    </a>
                                    <a href='' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-[24px] h-[24px]' /></a>
                                    <a href='https://creative-taffy-67b8e1.netlify.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-[24px] h-[24px]'></FaLink></a>
                                </div>

                            </div>
                        </div>


                    </div>

                    <div className='text-white scroll-container rounded-[8px] border-2 p-3'>
                        <div

                            className="card lg:w-full w-80 ">
                            <div className='overflow-scroll content h-60  rounded-lg'  ><img className='object-contain h-fit   ' src={img3} alt="summer-training!" /></div>

                            <div className="card-body">
                                <h2 className="my-2 card-title">Popular Chief</h2>

                                <div className='flex items-center justify-between'>
                                    <a href='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-[24px] h-[24px]' />
                                    </a>
                                    <a href='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-[24px] h-[24px]' /></a>
                                    <a href='https://lighthearted-chebakia-c574b6.netlify.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-[24px] h-[24px]'></FaLink></a>
                                </div>

                            </div>
                        </div>


                    </div>

                    <div className='text-white scroll-container rounded-[8px] border-2 p-3'>
                        <div

                            className="card lg:w-full w-80 ">
                            <div className='overflow-scroll content h-60   rounded-lg'  ><img className='object-contain h-fit  ' src={img5} alt="summer-training!" /></div>

                            <div className="card-body">
                                <h2 className="my-2 card-title ">Applied for Job</h2>

                                <div className='flex items-center justify-between'>
                                    <a href='https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-[24px] h-[24px]' />
                                    </a>
                                    <a href='' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-[24px] h-[24px]' /></a>
                                    <a href='https://strong-narwhal-e9bb7f.netlify.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-[24px] h-[24px]'></FaLink></a>
                                </div>

                            </div>
                        </div>


                    </div>

                    <div className='text-white scroll-container rounded-[8px]  border-2 p-3'>
                        <div

                            className="card lg:w-full w-80 ">
                            <div className='overflow-scroll content h-60  rounded-lg'  ><img className='object-contain h-fit  ' src={img6} alt="summer-training!" /></div>

                            <div className="card-body">
                                <h2 className="my-2 card-title">Sell-bikes</h2>

                                <div className='flex items-center justify-between'>
                                    <a href='https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-[24px] h-[24px]' />
                                    </a>
                                    <a href='https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-[24px] h-[24px]' /></a>
                                    <a href='https://summer-camp-d0cd9.web.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-[24px] h-[24px]'></FaLink></a>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline hover:bg-white text-white hover:border-none hover:text-black mt-2" onClick={() => window.my_modal_11.showModal()}>Explore more</button>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='text-white scroll-container rounded-[8px]  border-2 p-3'>
                        <div
                            data-aos=""

                            className="card lg:w-full w-80 ">
                            <div className='overflow-scroll content h-60  rounded-lg'  >
                                <img className='object-contain h-fit  ' src={img7} alt="" />
                            </div>

                            <div className="card-body">
                                <h2 className="my-2 card-title">Online-shop</h2>

                                <div className='flex items-center justify-between'>
                                    <a href='' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-[24px] h-[24px]' />
                                    </a>
                                    <a href='' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-[24px] h-[24px]' /></a>
                                    <a href='https://mahbubaly.github.io/bikes-seller-web/' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-[24px] h-[24px]'></FaLink></a>
                                </div>

                            </div>
                        </div>

                    </div>


                    <Link className='mx-auto flex justify-center my-8 ' to='/'><button className='hover:underline btn btn-outline border-0 border-b-4 border-yellow-600 text-white hover:bg-yellow-600 hover:border-yellow-600'>Go back Home</button></Link>

                </div>
            </div>


        </>
    );
};

export default ViewAllProjects;