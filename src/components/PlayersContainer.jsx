import React from "react";
import { useLoaderData } from "react-router";
import PlayerCard from "./PlayerCard";

const PlayersContainer = () => {
  const players = useLoaderData();

  return (
    <div className="mt-15">
      <h1 className="text-2xl font-bold font-grotesk">Players</h1>
      <div className="grid grid-cols-1 mt-4 gap-5">
        {
            players.map((player) => (
                <PlayerCard key={player.id} player={player} />
            ))
        }
      </div>
    </div>
  );
};

export default PlayersContainer;
