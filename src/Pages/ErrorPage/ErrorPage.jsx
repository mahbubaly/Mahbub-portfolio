import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
           <Link className='mx-auto flex justify-center my-8 ' to='/'><button className='hover:underline btn btn-outline border-0 border-b-4 border-yellow-600 text-black hover:bg-yellow-600 hover:border-yellow-600'>Go back Home</button></Link>
        </div>
    );
};

export default ErrorPage;