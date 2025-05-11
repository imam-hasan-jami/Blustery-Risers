import React from 'react';
import { Link } from 'react-router';

const PlayerDetailsCard = ({ player }) => {

    const { name, photoURL, jerseyNumber, position, school, batch, age, preferredFoot } = player;

    return (
        <div>
            <div className='bg-base-300 shadow-xl rounded-lg p-5'>
                <img className='rounded-lg' src={photoURL} alt="" />
                <h2 className='font-grotesk text-2xl font-bold mt-3'>Name: {name}</h2>
                <h2 className='font-grotesk text-lg font-semibold text-gray-600 mt-1'>Position: {position}</h2>
                <h2 className='font-grotesk text-lg font-semibold text-gray-600 mt-1'>Number: {jerseyNumber}</h2>
                <h2 className='font-grotesk text-lg font-semibold text-gray-600 mt-1'>School: {school}</h2>
                <h2 className='font-grotesk text-lg font-semibold text-gray-600 mt-1'>Batch: {batch}</h2>
                <h2 className='font-grotesk text-lg font-semibold text-gray-600 mt-1'>Age: {age}</h2>
                <h2 className='font-grotesk text-lg font-semibold text-gray-600 mt-1'>Preferred Foot: {preferredFoot}</h2>
            </div>
            <div className='flex justify-center mt-5'>
                <Link to="/" className='btn btn-neutral'>Back to Home</Link>
            </div>
        </div>
    );
};

export default PlayerDetailsCard;