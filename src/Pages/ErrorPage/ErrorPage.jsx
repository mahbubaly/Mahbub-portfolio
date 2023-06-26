import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import img from '../../assets/Images/ErrorPage/ErrorPage-removebg-preview.png'
const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <>


            <div className='py-8'>
                <div className='flex justify-center text-center text-xl'>
                    <div>
                        <img className='w-[400px] h-[400px]' src={img} alt="" />

                        <div className='text-white'>
                            <h1>Oops!</h1>
                            <p>Sorry, an unexpected error has occurred.</p>
                            <p>
                                <i>{error.statusText || error.message}</i>
                            </p>
                        </div>
                    </div>
                </div>

                <Link className='mx-auto flex justify-center my-8 ' to='/'><button className='hover:underline btn btn-outline border-0 border-b-4 border-yellow-600 text-white hover:bg-yellow-600 hover:border-yellow-600'>Go back Home</button></Link>
            </div>
        </>
    );
};

export default ErrorPage;