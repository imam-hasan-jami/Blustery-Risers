import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import PlayerCard from "./PlayerCard";

const PlayersContainer = () => {
  const { players } = useLoaderData();
  const [displayPlayers, setDisplayPlayers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
        setDisplayPlayers(players);
    } else {
        setDisplayPlayers(players.slice(0, 6));
    }
  },[players, showAll]);

  return (
    <div className="lg:w-10/12 lg:mx-auto mt-15 lg:mt-25">
      <h1 className="text-2xl lg:text-4xl font-bold font-grotesk">Players</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-5">
        {
            displayPlayers.map((player) => (
                <PlayerCard key={player.id} player={player} />
            ))
        }
      </div>
      <div className="flex items-center justify-center mt-4 lg:mt-12">
        <button
            type="submit"
            onClick={() => {
                setShowAll((prv) => !prv);
                if (showAll) {
                    window.scrollTo(0, 2500);
                }
            }}
            className="btn btn-neutral"
        >
            {showAll ? "View Less Players" : "View All Players"}
        </button>
      </div>
    </div>
  );
};

export default PlayersContainer;
