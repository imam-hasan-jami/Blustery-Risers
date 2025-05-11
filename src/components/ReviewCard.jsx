import React from 'react';

const ReviewCard = ({ review }) => {

    const { name, photoURL, figure, comment } = review;

    return (
      <div className="bg-linear-to-b from-gray-200 to-white p-8 pb-12 rounded-lg shadow-md mt-4 mb-5 border border-gray-200">
        <div className="flex flex-col justify-between items-center gap-2 mb-8">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-gray-300"
            src={photoURL}
            alt={name}
          />
          <h3 className="font-bold text-xl">{name}</h3>
          <p className="font-grotesk text-sm text-gray-500 font-light">{figure}</p>
        </div>
        <p className="font-grotesk text-gray-700">"{comment}"</p>
      </div>
    );
};

export default ReviewCard;