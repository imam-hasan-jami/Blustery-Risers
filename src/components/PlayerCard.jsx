import React from 'react';

const PlayerCard = ({ player }) => {

    const { id, name, photoURL, jerseyNumber, position, school, batch } = player;

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
            <p className="font-grotesk text-gray-600 text-center font-medium">
                Number: {jerseyNumber}
            </p>
            <p className="font-grotesk text-gray-600 text-center font-medium">
                School: {school}
            </p>
            <p className="font-grotesk text-gray-600 text-center font-medium">
                Batch: {batch}
            </p>
          </div>
          <div>
            <button className="btn btn-neutral mt-4 mx-auto block">
              View Details
            </button>
          </div>
        </div>
      </div>
    );
};

export default PlayerCard;