import React from 'react';
import Slider from '../components/Slider';
import AboutUs from '../components/AboutUs';
import Team from '../components/Team';
import PlayersContainer from '../components/PlayersContainer';


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
            <div>
                <Team />
            </div>
            <div>
                <PlayersContainer />
            </div>
        </div>
    );
};

export default Home;