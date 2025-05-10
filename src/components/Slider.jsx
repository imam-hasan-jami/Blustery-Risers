import React from 'react';

const Slider = () => {
    return (
        <div>
            <div className="carousel carousel-center rounded-b-box shadow-lg">
                <div className="carousel-item">
                    <img className='w-70 h-100 object-cover' src="https://i.ibb.co.com/N64qZPHH/profile-pic.jpg" alt="Profile Picture" />
                </div>
                <div className="carousel-item">
                    <img className='h-100' src="https://i.ibb.co.com/tPMKyLRH/group-photo-1.jpg" alt="Group Photo 1" />
                </div>
                
            </div>
        </div>
    );
};

export default Slider;