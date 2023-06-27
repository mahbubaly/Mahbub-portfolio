import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaFacebook, FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';
import {  TbBrandFiverr } from 'react-icons/Tb';
import { BsWhatsapp } from 'react-icons/bs';


const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qie4of8', 'template_go6z5r9', form.current, '-IZ0vYiwrNrv3dpz5')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'You Message is send successfully Thank You!!',
                    showConfirmButton: false,
                    timer: 1500
                })

            }, (error) => {
                console.log(error.text);
            });
    };




    return (
        <>
            <div id='contact' className='container mx-auto my-32'>

                <h1 className='border-b-4 border-purple-700 w-[20%] text-center mx-auto my-10 text-2xl p-4 text-yellow-400 font-bold'> Contact Me  </h1>


                <div className='grid grid-cols-2 gap-7 '>

                    <div className="text-primary p-9 flex justify-around">

                        <div>
                            <a href="https://www.facebook.com/mahbubali72" target="_blank" rel="noreferrer" className="p-3 rounded-full "> <FaFacebook className='w-10 h-10 mb-2' />Facebook </a>
                            <a href="" target="_blank" rel="noreferrer" className="p-3 rounded-full "><FaTwitter className='w-10 h-10 my-3' />Twitter </a>
                            <a href="https://github.com/mahbubaly" target="_blank" rel="noreferrer" className="p-3 rounded-full social"><FaGithub className='w-10 h-10 mb-2' />GitHub </a>
                            <a href="https://www.linkedin.com/in/mahbubur-rahman-2a3a7b248/" target="_blank" rel="noreferrer" className="p-3 rounded-full"><FaLinkedin className='w-10 h-10 my-3' />Linkedin </a>
                        </div>
                        <div>
                            <a href="https://stackoverflow.com/users/22107589/mahbubur-rahman" target="_blank" rel="noreferrer" className="p-3 rounded-full "><FaStackOverflow className='w-10 h-10 my-3' />StackOverflow </a>
                            <a href="https://www.fiverr.com/mahbubalikhan10?up_rollout=true" target="_blank" rel="noreferrer" className="p-3 rounded-full"><TbBrandFiverr className='w-10 h-10 my-3' />Fiverr </a>
                            <a href="https://wa.link/0owvkh" target="_blank" rel="noreferrer" className="p-3 rounded-full"><BsWhatsapp className='w-10 h-10 my-3' />Whatsapp </a>
                        </div>

                    </div>


                    <div className=" p-[0px] border-none" data-aos="fade-up" id="contact">
                        <div className="wrapper flex flex-col p-5 md:p-10">
                            <form className="w-full text-white" ref={form} onSubmit={sendEmail} >
                                <input required type="text" name='user_name' className="input text-white " placeholder="Enter your name here" />
                                <input required type="email" name='user_email' className="input my-5 text-white outline-none" placeholder="Enter your email here" />
                                <input required type="text" name='user_phone' className="input mb-5 text-[#ffffff73] outline-none" placeholder="Enter your phone number" />

                                <textarea name="message" cols="30" rows="8" className="input outline-none" placeholder="Write details here"></textarea>
                                <button className="px-3 btn bg-gradient-to-r from-yellow-500 to-purple-600 border-none hover:shadow-2xl active:bg-[#ffffff73] py-2 w-24 text-white  rounded-lg mt-4">Send</button>
                            </form>





                        </div>
                    </div>




                </div>
            </div>
        </>
    );
};

export default Contact;