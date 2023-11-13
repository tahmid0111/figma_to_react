import React from 'react';
import { FaBeer } from 'react-icons/fa';

const Subscribe = () => {
    return (
        <>
            <div className="subscribe-area container mx-auto text-center my-8 py-8">
                <p className='text-xl text-orange-500'>SUBSCRIBE</p>
                <h2 className='text-3xl font-bold w-2/6 ml-[35%] pt-4 pb-2'>Subscribe To Get The Latest News about Us</h2>
                <p className='text-base pb-8'>Please Drop Your Email Below To Get Daily Update About What We Do</p>
                <form>
                    <input type="text" placeholder='Enter Your Email Address' className='input bg-warning relative' />
                    <button className='subscribe-btn px-5 py-2 bg-orange-500 text-white rounded-lg absolute'>Subscribe</button>
                </form>
            </div>
        </>
    );
};

export default Subscribe;
