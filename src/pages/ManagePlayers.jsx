import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const ManagePlayers = () => {

    const initialPlayers = useLoaderData();
    const [players, setPlayers] = useState(initialPlayers);

    const handleDelete = (_id) => {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this player?"
      );
      if (confirmDelete) {
        fetch(`https://blustery-risers-server.vercel.app/players/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              alert("Player deleted successfully!");

              setPlayers(players.filter((player) => player._id !== _id));
            }
          })
          .catch((error) => {
            console.error("Error deleting player:", error);
          });
      }
    };

    return (
      <div>
        <h2 className="text-3xl font-bold text-center my-5">
          Manage Players
        </h2>
        <div className="overflow-x-auto w-11/12 mx-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Sl</th>
                <th>Name</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {players.map((player, index) => (
                <tr key={player._id}>
                  <th>{index + 1}</th>
                  <td className="font-medium">{player.name}</td>
                  <td>{player.position}</td>
                  <td className="flex flex-col lg:flex-row items-center gap-2">
                    {/* <Link
                      to={`/old-player-details/${player._id}`}
                      className="btn btn-info"
                    >
                      Details
                    </Link> */}
                    <Link
                      to={`/update-player/${player._id}`}
                      className="btn btn-neutral"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(player._id)}
                      className="btn btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManagePlayers;