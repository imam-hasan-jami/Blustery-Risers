import React from 'react';
import { useLoaderData } from 'react-router';
import ReviewSlider from './ReviewSlider';

const ReviewsContainer = () => {
    const { reviews } = useLoaderData();

    return (
        <div className='mt-15'>
            <h1 className='font-grotesk font-bold text-2xl '>Acknowledgement from Legendary Figures</h1>
            <div>
                <ReviewSlider reviews={reviews} />
            </div>
        </div>
    );
};

export default ReviewsContainer;