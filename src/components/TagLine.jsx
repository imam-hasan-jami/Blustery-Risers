import React from 'react';
import Marquee from 'react-fast-marquee';

const TagLine = () => {
    return (
      <div className="bg-base-300 mt-10">
        <Marquee className="space-x-3" pauseOnHover={true} speed={60}>
          <p className="font-bold px-8">
            From The River, To The Sea, Palestine Will Be Free! Free Palestine 🇵🇸
          </p>
          <p className="font-bold px-8">
            From The River, To The Sea, Palestine Will Be Free! Free Palestine 🇵🇸
          </p>
          <p className="font-bold px-8">
            From The River, To The Sea, Palestine Will Be Free! Free Palestine 🇵🇸
          </p>
          <p className="font-bold px-8">
            From The River, To The Sea, Palestine Will Be Free! Free Palestine 🇵🇸
          </p>
          <p className="font-bold px-8">
            From The River, To The Sea, Palestine Will Be Free! Free Palestine 🇵🇸
          </p>
        </Marquee>
      </div>
    );
};

export default TagLine;