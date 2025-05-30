import React from "react";
import CountUp from "react-countup";

const MatchStat = () => {
  return (
    <div className="max-w-[380px] mx-auto lg:max-w-[1440px] my-20">
      <h1 className="text-3xl lg:text-[40px] font-bold lg:font-extrabold text-center mb-4">
        Our Match Stats
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-12">
        <div className="flex flex-col items-center bg-white px-12 py-10 rounded-2xl">
          <img className="w-15" src="" alt="" />
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
        <div className="flex flex-col items-center bg-white px-12 py-10 rounded-2xl">
          <img className="w-15" src="" alt="" />
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
        <div className="flex flex-col items-center bg-white px-12 py-10 rounded-2xl">
          <img className="w-15" src="" alt="" />
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
        <div className="flex flex-col items-center bg-white px-12 py-10 rounded-2xl">
          <img className="w-15" src="" alt="" />
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
