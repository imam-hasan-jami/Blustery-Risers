import React from "react";
import CountUp from "react-countup";
import matchPlayed from '../../public/match-played.json';
import matchWon from '../../public/match-won.json';
import matchDrawn from '../../public/match-drawn.json';
import matchLost from '../../public/match-lost.json';
import Lottie from "lottie-react";

const MatchStat = () => {
  return (
    <div className="max-w-[380px] mx-auto lg:max-w-[1440px] my-20">
      <h1 className="text-3xl lg:text-[40px] font-bold lg:font-extrabold text-center mb-4">
        Our Match Stats
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-12">
        <div className="bg-yellow-50 flex flex-col items-center bg-white px-12 py-12 rounded-2xl shadow-lg">
          {/* <img className="w-15" src="" alt="" /> */}
          <Lottie animationData={matchPlayed} loop={true} style={{ width: '200px', height: '130px' }} />
          <CountUp
            className="text-[64px] font-extrabold"
            start={0}
            end={87}
            // suffix="+"
            duration={4}
            enableScrollSpy={true}
            scrollSpyDelay={500}
            scrollSpyOnce={true}
          >
            {({ countUpRef }) => (
              <span className="text-[64px] font-extrabold" ref={countUpRef} />
            )}
          </CountUp>
          <p className="text-2xl font-semibold">Match Played</p>
        </div>
        <div className="bg-yellow-50 flex flex-col items-center bg-white px-12 py-12 rounded-2xl shadow-lg">
          <Lottie animationData={matchWon} loop={true} style={{ width: '200px', height: '130px' }} />
          <CountUp
            className="text-[64px] font-extrabold"
            start={0}
            end={61}
            duration={4}
            enableScrollSpy={true}
            scrollSpyDelay={500}
            scrollSpyOnce={true}
          >
            {({ countUpRef }) => (
              <span className="text-[64px] font-extrabold" ref={countUpRef} />
            )}
          </CountUp>
          <p className="text-2xl font-semibold">Match Won</p>
        </div>
        <div className="bg-yellow-50 flex flex-col items-center bg-white px-12 py-12 rounded-2xl shadow-lg">
          <Lottie animationData={matchDrawn} loop={true} style={{ width: '200px', height: '130px' }} />
          <CountUp
            start={0}
            end={17}
            duration={4}
            enableScrollSpy={true}
            scrollSpyDelay={500}
            scrollSpyOnce={true}
          >
            {({ countUpRef }) => (
              <span className="text-[64px] font-extrabold" ref={countUpRef} />
            )}
          </CountUp>
          <p className="text-2xl font-semibold">Match Drawn</p>
        </div>
        <div className="bg-yellow-50 flex flex-col items-center bg-white px-12 py-12 rounded-2xl shadow-lg">
          <Lottie animationData={matchLost} loop={true} style={{ width: '200px', height: '130px' }} />
          <CountUp
            start={0}
            end={9}
            duration={4}
            enableScrollSpy={true}
            scrollSpyDelay={500}
            scrollSpyOnce={true}
          >
            {({ countUpRef }) => (
              <span className="text-[64px] font-extrabold" ref={countUpRef} />
            )}
          </CountUp>
          <p className="text-2xl font-semibold">Match Lost</p>
        </div>
      </div>
    </div>
  );
};

export default MatchStat;
