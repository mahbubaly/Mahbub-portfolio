import React from 'react';
import img1 from '../../assets/Images/Projects/A12.png'
import img2 from '../../assets/Images/Projects/a11.png'
import img3 from '../../assets/Images/Projects/a10.png'
import img4 from '../../assets/Images/Projects/food.png'
import img5 from '../../assets/Images/Projects/appliedJon.png'
import img6 from '../../assets/Images/Projects/127.0.0.1_5500_index.html.png'
import img7 from '../../assets/Images/Projects//a3.png'
import '../../Pages/Style.css'
import 'aos/dist/aos.css';
import { motion } from "framer-motion"
import { fadeIn } from './variants';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';


const Projects = () => {


    return (

        <>

            <Helmet>
                <title> Mahbubu portfolio | Projects</title>
            </Helmet>

            <section className='section' id='projects'>
                <div className='container mx-auto'>

                    <div>
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial={'hidden'}
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }}
                            className='flex-1 text-center'>
                            <div id='projects' className="py-10 text-center uppercase ">
                                <a className="font-bold lg:text-2xl pb-2 text-white border-b-4 rounded border-b-yellow-600"> My <span className='text-yellow-500 '>Projects</span></a>
                                <br />
                                <p className='text-white mt-4 '>Completed 30+ projects</p>
                            </div>


                        </motion.div>


                        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-12'>

                            <div className='text-white'>
                                <motion.div
                                    variants={fadeIn('right', 0.5)}
                                    initial={'hidden'}
                                    whileInView={'show'}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="card w-full glass">
                                    <div className='overflow-auto h-60  rounded-lg'  ><img className='object-contain h-fit p-3  ' src={img1} alt="summer-training!" /></div>

                                    <div className="card-body">
                                        <h2 className="card-title">Summer-camp</h2>

                                        <div className='flex items-center justify-between'>
                                            <a href='https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-8 h-8' />
                                            </a>
                                            <a href='https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-8 h-8' /></a>
                                            <a href='https://summer-camp-d0cd9.web.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-8 h-8'></FaLink></a>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary mt-2" onClick={() => window.my_modal_5.showModal()}>Explore more</button>
                                        </div>
                                    </div>
                                </motion.div>

                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <form method="dialog" className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">This is Popular Chefs And Foods web site.
                                            This is a single page web site
                                            Use this Site you can Choose Chef And Food.
                                            You see the many Chefs and every single Chef details .
                                            You can see the Chefs Recipes , Chefs Like , Chefs Experience and Number Of Recipes.
                                            You Also Create your Account And then Login this site .</p>
                                        <div className="modal-action">

                                            <button className="btn">Close</button>
                                        </div>
                                    </form>
                                </dialog>
                            </div>

                            <div className='text-white'>
                                <motion.div
                                    variants={fadeIn('right', 0.5)}
                                    initial={'hidden'}
                                    whileInView={'show'}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="card w-full glass">
                                    <div className='overflow-auto h-60  rounded-lg'  ><img className='object-contain h-fit p-3  ' src={img2} alt="summer-training!" /></div>

                                    <div className="card-body">
                                        <h2 className="card-title">Toy-Shop</h2>

                                        <div className='flex items-center justify-between'>
                                            <a href='https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-8 h-8' />
                                            </a>
                                            <a href='https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-8 h-8' /></a>
                                            <a href='https://car-toys-shop-dffea.web.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-8 h-8'></FaLink></a>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary mt-2" onClick={() => window.my_modal_5.showModal()}>Explore more</button>
                                        </div>
                                    </div>
                                </motion.div>

                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <form method="dialog" className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">This is Popular Chefs And Foods web site.
                                            This is a single page web site
                                            Use this Site you can Choose Chef And Food.
                                            You see the many Chefs and every single Chef details .
                                            You can see the Chefs Recipes , Chefs Like , Chefs Experience and Number Of Recipes.
                                            You Also Create your Account And then Login this site .</p>
                                        <div className="modal-action">

                                            <button className="btn">Close</button>
                                        </div>
                                    </form>
                                </dialog>
                            </div>

                            <div className='text-white'>
                                <motion.div
                                    variants={fadeIn('right', 0.5)}
                                    initial={'hidden'}
                                    whileInView={'show'}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="card w-full glass">
                                    <div className='overflow-auto h-60  rounded-lg'  ><img className='object-contain h-fit p-3  ' src={img4} alt="summer-training!" /></div>

                                    <div className="card-body">
                                        <h2 className="card-title">Cold Lucci</h2>

                                        <div className='flex items-center justify-between'>
                                            <a href='https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-8 h-8' />
                                            </a>
                                            <a href='' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-8 h-8' /></a>
                                            <a href='https://creative-taffy-67b8e1.netlify.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-8 h-8'></FaLink></a>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary mt-2" onClick={() => window.my_modal_5.showModal()}>Explore more</button>
                                        </div>
                                    </div>
                                </motion.div>

                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <form method="dialog" className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">This is Popular Chefs And Foods web site.
                                            This is a single page web site
                                            Use this Site you can Choose Chef And Food.
                                            You see the many Chefs and every single Chef details .
                                            You can see the Chefs Recipes , Chefs Like , Chefs Experience and Number Of Recipes.
                                            You Also Create your Account And then Login this site .</p>
                                        <div className="modal-action">

                                            <button className="btn">Close</button>
                                        </div>
                                    </form>
                                </dialog>
                            </div>

                        </div>

                        {/* 2 portion */}

                        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-12'>

                            <div className='text-white'>
                                <motion.div
                                    variants={fadeIn('right', 0.5)}
                                    initial={'hidden'}
                                    whileInView={'show'}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="card w-full glass">
                                    <div className='overflow-auto h-60  rounded-lg'  ><img className='object-contain h-fit p-3  ' src={img3} alt="summer-training!" /></div>

                                    <div className="card-body">
                                        <h2 className="card-title">Popular Chief</h2>

                                        <div className='flex items-center justify-between'>
                                            <a href='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-8 h-8' />
                                            </a>
                                            <a href='https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-8 h-8' /></a>
                                            <a href='https://lighthearted-chebakia-c574b6.netlify.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-8 h-8'></FaLink></a>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary mt-2" onClick={() => window.my_modal_5.showModal()}>Explore more</button>
                                        </div>
                                    </div>
                                </motion.div>

                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <form method="dialog" className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">This is Popular Chefs And Foods web site.
                                            This is a single page web site
                                            Use this Site you can Choose Chef And Food.
                                            You see the many Chefs and every single Chef details .
                                            You can see the Chefs Recipes , Chefs Like , Chefs Experience and Number Of Recipes.
                                            You Also Create your Account And then Login this site .</p>
                                        <div className="modal-action">

                                            <button className="btn">Close</button>
                                        </div>
                                    </form>
                                </dialog>
                            </div>

                            <div className='text-white'>
                                <motion.div
                                    variants={fadeIn('right', 0.5)}
                                    initial={'hidden'}
                                    whileInView={'show'}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="card w-full glass">
                                    <div className='overflow-auto h-60  rounded-lg'  ><img className='object-contain h-fit p-3  ' src={img5} alt="summer-training!" /></div>

                                    <div className="card-body">
                                        <h2 className="card-title">Applied for Job</h2>

                                        <div className='flex items-center justify-between'>
                                            <a href='https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-8 h-8' />
                                            </a>
                                            <a href='' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-8 h-8' /></a>
                                            <a href='https://strong-narwhal-e9bb7f.netlify.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-8 h-8'></FaLink></a>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary mt-2" onClick={() => window.my_modal_5.showModal()}>Explore more</button>
                                        </div>
                                    </div>
                                </motion.div>

                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <form method="dialog" className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">This is Popular Chefs And Foods web site.
                                            This is a single page web site
                                            Use this Site you can Choose Chef And Food.
                                            You see the many Chefs and every single Chef details .
                                            You can see the Chefs Recipes , Chefs Like , Chefs Experience and Number Of Recipes.
                                            You Also Create your Account And then Login this site .</p>
                                        <div className="modal-action">

                                            <button className="btn">Close</button>
                                        </div>
                                    </form>
                                </dialog>
                            </div>

                            <div className='text-white'>
                                <motion.div
                                    variants={fadeIn('right', 0.5)}
                                    initial={'hidden'}
                                    whileInView={'show'}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="card w-full glass">
                                    <div className='overflow-auto h-60  rounded-lg'  ><img className='object-contain h-fit p-3  ' src={img6} alt="summer-training!" /></div>

                                    <div className="card-body">
                                        <h2 className="card-title">Sell-bikes</h2>

                                        <div className='flex items-center justify-between'>
                                            <a href='https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-8 h-8' />
                                            </a>
                                            <a href='https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-mahbubaly' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-8 h-8' /></a>
                                            <a href='https://summer-camp-d0cd9.web.app' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-8 h-8'></FaLink></a>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary mt-2" onClick={() => window.my_modal_5.showModal()}>Explore more</button>
                                        </div>
                                    </div>
                                </motion.div>

                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <form method="dialog" className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">This is Popular Chefs And Foods web site.
                                            This is a single page web site
                                            Use this Site you can Choose Chef And Food.
                                            You see the many Chefs and every single Chef details .
                                            You can see the Chefs Recipes , Chefs Like , Chefs Experience and Number Of Recipes.
                                            You Also Create your Account And then Login this site .</p>
                                        <div className="modal-action">

                                            <button className="btn">Close</button>
                                        </div>
                                    </form>
                                </dialog>
                            </div>
                            <div className='text-white'>
                                <motion.div
                                    variants={fadeIn('right', 0.5)}
                                    initial={'hidden'}
                                    whileInView={'show'}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="card w-full glass">
                                    <div className='overflow-auto h-60  rounded-lg'  ><img className='object-contain h-fit p-3  ' src={img7} alt="summer-training!" /></div>

                                    <div className="card-body">
                                        <h2 className="card-title">Online-shop</h2>

                                        <div className='flex items-center justify-between'>
                                            <a href='' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Client Site Code">Client <FaGithub className='w-8 h-8' />
                                            </a>
                                            <a href='' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Server Site Code">Server <FaGithub className='w-8 h-8' /></a>
                                            <a href='https://mahbubaly.github.io/bikes-seller-web/' target='_blank' className='flex items-center gap-2 tooltip' data-tip="Live Site">Live <FaLink className='w-8 h-8'></FaLink></a>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary mt-2" onClick={() => window.my_modal_5.showModal()}>Explore more</button>
                                        </div>
                                    </div>
                                </motion.div>

                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <form method="dialog" className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">This is Popular Chefs And Foods web site.
                                            This is a single page web site
                                            Use this Site you can Choose Chef And Food.
                                            You see the many Chefs and every single Chef details .
                                            You can see the Chefs Recipes , Chefs Like , Chefs Experience and Number Of Recipes.
                                            You Also Create your Account And then Login this site .</p>
                                        <div className="modal-action">

                                            <button className="btn">Close</button>
                                        </div>
                                    </form>
                                </dialog>
                            </div>




                        </div>

                    </div>

                </div>
            </section>;
        </>
    );
};

export default Projects;