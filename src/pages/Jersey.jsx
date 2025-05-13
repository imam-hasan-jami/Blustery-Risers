import React from 'react';
import { RiMessengerLine } from 'react-icons/ri';

const Jersey = () => {
    return (
        <div className='mt-8'>
            <h1 className='font-grotesk text-3xl text-center font-semibold'>Official Jersey for <br /> CZS Super Cup 2025</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10'>
                <div className='bg-base-300 flex flex-col justify-center items-center gap-5 px-4 py-7 rounded-lg shadow-lg'>
                    <img src="https://i.ibb.co/VcswjYDV/main-kit.jpg" alt="Main Kit" />
                    <h2 className='font-grotesk text-2xl text-center font-medium'>Main Kit</h2>
                </div>
                <div className='bg-base-300 flex flex-col justify-center items-center gap-5 px-4 py-7 rounded-lg shadow-lg'>
                    <img src="https://i.ibb.co/0yvc5nFQ/gk-kit.jpg" alt="Gk Kit" />
                    <h2 className='font-grotesk text-2xl text-center font-medium'>Goalkeeper Kit</h2>
                </div>
            </div>

            <div className='mt-10'>
                <p className='font-grotesk text-xl font-medium'>If you wish to purchase the jersey or have any inquiries, please contact the following accounts.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10'>
                <div className='bg-base-300 flex flex-col justify-center items-center px-4 py-7 rounded-lg shadow-lg'>
                    <img className='bg-white border-black w-15 h-15 object-cover rounded-full' src="https://i.ibb.co/N64qZPHH/profile-pic.jpg" alt="Blustery Logo" />
                    <h2 className='font-grotesk text-xl font-medium mt-2'>Blustery Risers</h2>
                    <a className='btn bg-[#1A77F2] text-white border-[#005fd8] mt-6' href="https://www.facebook.com/blusteryrisers" target='_blank'> <RiMessengerLine size={20} /> Send Message</a>
                </div>
                <div className='bg-base-300 flex flex-col justify-center items-center px-4 py-7 rounded-lg shadow-lg'>
                    <img className='bg-white border-black w-15 h-15 object-cover rounded-full' src="https://i.ibb.co/n8LKFrG8/jisan-anondo.jpg" alt="Jisan DP" />
                    <h2 className='font-grotesk text-xl font-medium mt-2'>Jisan Anondo</h2>
                    <a className='btn bg-[#1A77F2] text-white border-[#005fd8] mt-6' href="https://www.facebook.com/jisan.anondo.3" target='_blank'> <RiMessengerLine size={20} /> Send Message</a>
                </div>
                <div className='bg-base-300 flex flex-col justify-center items-center px-4 py-7 rounded-lg shadow-lg'>
                    <img className='bg-white border-black w-15 h-15 object-cover rounded-full' src="https://i.ibb.co/b5dW39Fy/titash.jpg" alt="Titash DP" />
                    <h2 className='font-grotesk text-xl font-medium mt-2'>MD. Kamruzzaman Titash</h2>
                    <a className='btn bg-[#1A77F2] text-white border-[#005fd8] mt-6' href="https://www.facebook.com/titash786" target='_blank'> <RiMessengerLine size={20} /> Send Message</a>
                </div>
            </div>
            
            {/* <img className='rounded-lg shadow-lg' src="https://i.ibb.co.com/Swyk3wCJ/jersey-1.jpg" alt="" />
            <p className='font-grotesk text-lg text-gray-600 font-semibold mt-5'>Keep your eyes on our <a className='font-grotesk text-primary underline' href="https://www.facebook.com/BlusteryRisers" target="_blank">official facebook page</a> for the jersey reveal of the CZS Super Cup 2025!</p> */}
        </div>
    );
};

export default Jersey;