import React from "react";
import { Link, useLoaderData } from "react-router";

const ManageOldSquad = () => {
  const players = useLoaderData();

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-5">Manage Old Squad</h2>
      <div className="overflow-x-auto">
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
                  <Link
                    to={`/old-player-details/${player._id}`}
                    className="btn btn-info w-full"
                  >
                    Details
                  </Link>
                  <button className="btn btn-neutral w-full">Edit</button>
                  <button className="btn btn-error w-full">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOldSquad;
