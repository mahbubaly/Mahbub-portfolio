import React from 'react';
import '../Pages/Style.css'

const Footer = () => {
    return (
        <>

            <div className="bg-black lg:py-2 py-5 opacity-80 " 
            >

                <footer className='container mx-auto '>
                    <div
                        className=" px-6 lg:p-5 "
                    >
                     
                        <div className=' text-center text-[#726e6eb4] text-[14px] lg:text-[16px]  '>
                            <p>Copyright © 2023 - All right reserved by <a className='hover:underline' href="https://github.com/mahbubaly"> mahbubur Rahman</a></p>
                        </div>



                    </div>
                </footer>


            </div>


        </>
    );
};

export default Footer;