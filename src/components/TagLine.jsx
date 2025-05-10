import React from 'react';
import Marquee from 'react-fast-marquee';

const TagLine = () => {
    return (
      <div className="bg-base-300 mt-3">
        <Marquee className="space-x-3" pauseOnHover={true} speed={50}>
          <p className="font-bold">
            Welcome to the official website of CZS Blustery Risers
          </p>
        </Marquee>
      </div>
    );
};

export default TagLine;