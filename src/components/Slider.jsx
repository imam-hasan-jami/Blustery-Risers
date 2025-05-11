import React from 'react';

const Slider = () => {
    return (
        <div>
            <div className="carousel carousel-center rounded-b-box shadow-lg">
                {/* <div className="carousel-item">
                    <img className='w-70 h-100 object-cover' src="https://i.ibb.co.com/N64qZPHH/profile-pic.jpg" alt="Profile Picture" />
                </div> */}
                <div className="carousel-item">
                    <img className='w-120 h-100 object-cover' src="https://i.ibb.co.com/4rjZPJF/flag.jpg" alt="Flag photo" />
                </div>
                <div className="carousel-item">
                    <img className='h-100' src="https://i.ibb.co.com/tPMKyLRH/group-photo-1.jpg" alt="Group Photo 1" />
                </div>
                <div className="carousel-item">
                    <img className='w-180 h-100 object-cover' src="https://i.ibb.co.com/d0kF76CD/group-photo-2.jpg" alt="Group Photo 2" />
                </div>
            </div>
        </div>
    );
};

export default Slider;