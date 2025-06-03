import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { FaPhoneAlt } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { IoIosShirt } from "react-icons/io";

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

  const getPositionColor = (position) => {
    switch (position.toLowerCase()) {
      case "right winger":
      case "striker":
      case "left winger":
        return "bg-red-100 text-red-800 border-red-200";
      case "center defensive midfielder":
      case "center midfielder":
      case "center attacking midfielder":
        return "bg-green-100 text-green-800 border-green-200";
      case "right back":
      case "center back":
      case "left back":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "goalkeeper":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const calculateAge = (dob) => {
    if (!dob) return "N/A";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-3xl font-bold text-center my-5">Old Squad</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-5">
        {oldPlayers.map((player) => (
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-yellow-400 overflow-hidden group">
                <div className="bg-gradient-to-t from-amber-300 to-yellow-300 p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 flex items-center space-x-6">
                    <div className="relative">
                      <img
                        src={player.photoURL}
                        alt={player.name}
                        className="w-20 h-20 rounded-full border-4 border-yellow-300 object-cover group-hover:scale-130 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 text-yellow-800">
                      <h3 className="text-xl font-bold uppercase">{player.name}</h3>
                      <p className="font-medium">{player.school}</p>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mt-2 ${getPositionColor(
                          player.position
                        )} bg-white/90`}
                      >
                        {player.position}
                      </span>
                    </div>
                  </div>
                </div>
          
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-yellow-800 text-sm">Batch</p>
                      <p className="text-yellow-800 font-bold text-lg">{player.batch}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-yellow-800 text-sm">Age</p>
                      <p className="text-yellow-800 font-bold text-lg">{calculateAge(player.dateOfBirth)}</p>
                    </div>
                  </div>
          
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-b from-amber-300 to-yellow-300 p-4 rounded-xl border border-yellow-500">
                      <div className="flex items-center space-x-2 mb-2">
                        <IoIosShirt size={20} className="text-yellow-800" />
                        <span className="text-yellow-800 font-semibold text-sm">
                          Jersey
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-yellow-800">#{player.jerseyNumber}</p>
                    </div>
          
                    <div className="bg-gradient-to-b from-amber-300 to-yellow-300 p-4 rounded-xl border border-yellow-500">
                      <div className="flex items-center space-x-2 mb-2">
                        <GiRunningShoe size={20} className="text-yellow-800" />
                        <span className="text-yellow-800 font-semibold text-sm">Foot</span>
                      </div>
                      <p className={`text-lg font-bold capitalize text-yellow-800`}>
                        {player.preferredFoot}
                      </p>
                    </div>
                  </div>
          
                  <div className="bg-gradient-to-r from-amber-300 to-yellow-300 p-4 rounded-xl border border-yellow-500">
                    <div className="flex items-center space-x-2 mb-2">
                      <FaPhoneAlt className="text-yellow-800" />
                      <span className="text-yellow-800 font-semibold text-sm">
                        Contact
                      </span>
                    </div>
                    <p className="text-lg font-bold text-yellow-800">
                      {player.contactNumber}
                    </p>
                  </div>
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
