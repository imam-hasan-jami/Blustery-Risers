import React from 'react';

const AboutUs = () => {
    return (
      <div className="flex flex-col items-center justify-center mt-15">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className='text-lg font-medium'>to the official website of Blustery Risers</p>
        <div className='bg-base-300 mt-5 px-4 py-4 rounded-lg shadow-lg'>
            <img className='rounded-lg' src="https://i.ibb.co.com/N64qZPHH/profile-pic.jpg" alt="" />
            <p className='font-grotesk text-lg font-medium text-gray-700 mt-4'>We are an amateur football team proudly based at Comilla Zilla School, representing the spirit and camaraderie of CZS Batch-18. Through dedication, teamwork, and passion for the game, we continue to uphold the legacy of our batch while fostering sportsmanship and community bonds.</p>
        </div>
      </div>
    );
};

export default AboutUs;