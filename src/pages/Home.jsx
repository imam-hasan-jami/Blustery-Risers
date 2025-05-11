import React from 'react';
import Slider from '../components/Slider';
import AboutUs from '../components/AboutUs';
import Team from '../components/Team';
import TagLine from '../components/TagLine';
import PlayersContainer from '../components/PlayersContainer';
import ReviewsContainer from '../components/ReviewsContainer';
import JoinUs from '../components/JoinUs';


const Home = () => {
    return (
        <div>
            <div>
                <Slider />
            </div>
            <div>
                <TagLine />
            </div>
            <div>
                <AboutUs />
            </div>
            <div>
                {/* manager */}
                <Team />
            </div>
            <div>
                <PlayersContainer />
            </div>
            <div>
                <ReviewsContainer />
            </div>
            <div>
                <JoinUs />
            </div>
        </div>
    );
};

export default Home;