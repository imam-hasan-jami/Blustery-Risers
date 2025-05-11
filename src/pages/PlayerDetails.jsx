import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import PlayerDetailsCard from '../components/PlayerDetailsCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LowerFooter from '../components/LowerFooter';

const PlayerDetails = () => {

    const playerData = useLoaderData();
    const { id } = useParams();
    const [player, setPlayer] = useState({});

    useEffect(() => {
      const playerDetails = playerData.find((player) => player.id == id);
      setPlayer(playerDetails);
    }, [playerData, id]);

    return (
      <div className='mt-5'>
        <PlayerDetailsCard player={player} />
      </div>
    );
};

export default PlayerDetails;