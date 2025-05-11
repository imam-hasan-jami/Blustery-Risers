import React from 'react';
import { useLoaderData } from 'react-router';
import ReviewSlider from './ReviewSlider';

const ReviewsContainer = () => {
    const { reviews } = useLoaderData();

    return (
        <div className='mt-15 lg:mt-25'>
            <h1 className='font-grotesk font-bold text-2xl lg:text-4xl'>Acknowledgement from Legendary Figures</h1>
            <div>
                <ReviewSlider reviews={reviews} />
            </div>
        </div>
    );
};

export default ReviewsContainer;