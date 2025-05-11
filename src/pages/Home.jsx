import React from 'react';
import Slider from '../components/Slider';
import TagLine from '../components/TagLine';
import AboutUs from '../components/AboutUs';

const Home = () => {
    return (
        <div>
            <div>
                <Slider />
            </div>
            {/* <div>
                <TagLine />
            </div> */}
            <div>
                <AboutUs />
            </div>
        </div>
    );
};

export default Home;