import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

const OldSquad = () => {
  const players = useLoaderData();
  const [oldPlayers, setOldPlayers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setOldPlayers(players);
    } else {
      setOldPlayers(players.slice(0, 6));
    }
  }, [players, showAll]);

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center my-5">Old Squad</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-5">
        {oldPlayers.map((player) => (
          <div key={player._id} className="bg-base-300 rounded-lg shadow-lg py-4">
            <img
              className="w-90 h-100 object-cover mx-auto rounded-lg"
              src={player.photoURL}
              alt="Player photo"
            />
            <h2 className="font-grotesk text-2xl font-bold text-center mt-2">
              {player.name}
            </h2>
            <div className="items-center">
              <p className="font-grotesk text-gray-600 text-center font-medium">
                {player.position}
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <Link
                to={`/player-details/${player._id}`}
                className="btn btn-neutral"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-4 lg:mt-12">
        <button
            type="submit"
            onClick={() => {
                setShowAll((prv) => !prv);
            }}
            className="btn btn-neutral"
        >
            {showAll ? "View Less Players" : "View All Players"}
        </button>
      </div>
    </div>
  );
};

export default OldSquad;
