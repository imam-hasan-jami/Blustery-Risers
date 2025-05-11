import React from 'react';
import { Link } from 'react-router';

const PlayerDetailsCard = ({ player }) => {

    const { name, photoURL, jerseyNumber, position, school, batch, age, preferredFoot } = player;

    return (
        <div>
            <h1 className='font-bold text-2xl lg:text-4xl lg:text-center mb-3 lg:mb-8 mt-5 lg:mt-10'>Player Details</h1>
            <div className='bg-base-300 shadow-xl rounded-lg p-5 lg:hidden'>
                <img className='rounded-lg' src={photoURL} alt="" />
                <h2 className='font-grotesk text-2xl font-bold mt-3'>Name: {name}</h2>
                <h2 className='font-grotesk text-lg font-semibold text-gray-600 mt-1'>Position: {position}</h2>
                <h2 className='font-grotesk text-lg font-semibold text-gray-600 mt-1'>Number: {jerseyNumber}</h2>
                <h2 className='font-grotesk text-lg font-semibold text-gray-600 mt-1'>School: {school}</h2>
                <h2 className='font-grotesk text-lg font-semibold text-gray-600 mt-1'>Batch: {batch}</h2>
                <h2 className='font-grotesk text-lg font-semibold text-gray-600 mt-1'>Age: {age}</h2>
                <h2 className='font-grotesk text-lg font-semibold text-gray-600 mt-1'>Preferred Foot: {preferredFoot}</h2>
            </div>
            <div className='w-6/12 mx-auto bg-base-300 shadow-xl rounded-lg p-5 hidden lg:block'>
                <div className='flex gap-8'>
                    <img className='w-100 rounded-lg' src={photoURL} alt="" />
                    <div className='space-y-3'>
                        <h2 className='font-grotesk text-3xl font-bold mt-3'>Name: {name}</h2>
                        <h2 className='font-grotesk text-xl font-semibold text-gray-600 mt-1'>Position: {position}</h2>
                        <h2 className='font-grotesk text-xl font-semibold text-gray-600 mt-1'>Number: {jerseyNumber}</h2>
                        <h2 className='font-grotesk text-xl font-semibold text-gray-600 mt-1'>School: {school}</h2>
                        <h2 className='font-grotesk text-xl font-semibold text-gray-600 mt-1'>Batch: {batch}</h2>
                        <h2 className='font-grotesk text-xl font-semibold text-gray-600 mt-1'>Age: {age}</h2>
                        <h2 className='font-grotesk text-xl font-semibold text-gray-600 mt-1'>Preferred Foot: {preferredFoot}</h2>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <Link to="/" className='btn btn-neutral'>Back to Home</Link>
            </div>
        </div>
    );
};

export default PlayerDetailsCard;