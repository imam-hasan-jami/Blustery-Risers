import React from 'react';
import { Link } from 'react-router';

const PlayerCard = ({ player }) => {

    const { id, name, photoURL, position } = player;

    return (
      <div>
        <div className="bg-base-300 rounded-lg shadow-lg py-4">
          <img
            className="w-90 h-100 object-cover mx-auto rounded-lg"
            src={photoURL}
            alt="Player photo"
          />
          <h2 className="font-grotesk text-2xl font-bold text-center mt-2">
            {name}
          </h2>
          <div className='items-center'>
            <p className="font-grotesk text-gray-600 text-center font-medium">
                {position}
            </p>
            {/* <p className="font-grotesk text-gray-600 text-center font-medium">
                Number: {jerseyNumber}
            </p>
            <p className="font-grotesk text-gray-600 text-center font-medium">
                School: {school}
            </p>
            <p className="font-grotesk text-gray-600 text-center font-medium">
                Batch: {batch}
            </p> */}
          </div>
          <div className='flex justify-center mt-4'>
            <Link to={`/player-details/${id}`} className="btn btn-neutral">
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
};

export default PlayerCard;