import React from 'react';

const Team = () => {
    return (
        <div className='lg:w-10/12 lg:mx-auto mt-15 lg:mt-25'>
            <h1 className='text-4xl lg:text-5xl font-bold text-center'>Meet Our Team</h1>
            <div className='mt-6 lg:mt-10'>
                <h1 className='text-2xl lg:text-4xl font-bold font-grotesk'>Managers</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-4 gap-5 lg:gap-10'>
                    <div className='bg-base-300 rounded-lg shadow-lg'>
                        <img className='w-90 h-100 object-cover mx-auto my-4 lg:my-6 rounded-lg' src="https://i.ibb.co.com/MjqFrGp/manager-titash.jpg" alt="Manager 1" />
                        <h2 className='font-grotesk text-2xl lg:text-3xl font-bold text-center mt-2'>Kamruzzaman Titash</h2>
                        <p className='font-grotesk lg:text-xl text-gray-600 text-center mt-2 mb-5'>Manager</p>
                    </div>
                    <div className='bg-base-300 rounded-lg shadow-lg'>
                        <img className='w-90 h-100 object-cover mx-auto my-4 lg:my-6 rounded-lg' src="https://i.ibb.co/G3pP8yJj/manager-monjur.jpg" alt="Manager 2" />
                        <h2 className='font-grotesk text-2xl lg:text-3xl font-bold text-center mt-2'>Monzur Arafat</h2>
                        <p className='font-grotesk lg:text-xl text-gray-600 text-center mt-2 mb-5'>Manager</p>
                    </div>
                    {/* <div className='bg-base-300 rounded-lg shadow-lg'>
                        <img className='w-90 h-100 object-cover mx-auto my-4 lg:my-6 rounded-lg' src="https://i.ibb.co.com/1Jppk33m/manager-shihan.jpg" alt="Manager 3" />
                        <h2 className='font-grotesk text-2xl lg:text-3xl font-bold text-center mt-2'>Tahidul Shihan</h2>
                        <p className='font-grotesk lg:text-xl text-gray-600 text-center mt-2 mb-5'>Manager</p>
                    </div> */}
                </div>
            </div>
            {/* <div className='mt-15'>
                <h1 className='text-2xl font-bold font-grotesk'>Players</h1>
                <div className='grid grid-cols-1 mt-4 gap-5'>
                    <div className='bg-base-300 rounded-lg shadow-lg'>
                        <img className='w-90 h-100 object-cover mx-auto my-4 rounded-lg' src="https://i.ibb.co.com/MjqFrGp/manager-titash.jpg" alt="Manager 1" />
                        <h2 className='font-grotesk text-2xl font-bold text-center mt-2'>Player 1</h2>
                        <p className='font-grotesk text-gray-600 text-center mt-2 mb-5'>Goalkeeper</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Team;