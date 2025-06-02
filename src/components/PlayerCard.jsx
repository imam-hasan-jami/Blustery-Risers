import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { IoIosShirt } from "react-icons/io";

const PlayerCard = ({ player }) => {
  const {
    name,
    school,
    batch,
    photoURL,
    position,
    jerseyNumber,
    preferredFoot,
    dateOfBirth,
  } = player;

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

  const age = calculateAge(dateOfBirth);

  // return (
  //   <div>
  //     <div className="bg-base-300 rounded-lg shadow-lg py-4">
  //       <img
  //         className="w-90 h-100 object-cover mx-auto rounded-lg"
  //         src={photoURL}
  //         alt="Player photo"
  //       />
  //       <h2 className="font-grotesk text-2xl font-bold text-center mt-2">
  //         {name}
  //       </h2>
  //       <div className='items-center'>
  //         <p className="font-grotesk text-gray-600 text-center font-medium">
  //             {position}
  //         </p>
  //         {/* <p className="font-grotesk text-gray-600 text-center font-medium">
  //             Number: {jerseyNumber}
  //         </p>
  //         <p className="font-grotesk text-gray-600 text-center font-medium">
  //             School: {school}
  //         </p>
  //         <p className="font-grotesk text-gray-600 text-center font-medium">
  //             Batch: {batch}
  //         </p> */}
  //       </div>
  //       <div className='flex justify-center mt-4'>
  //         <Link to={`/player-details/${id}`} className="btn btn-neutral">
  //           View Details
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex items-center space-x-4">
          <div className="relative">
            <img
              src={photoURL}
              alt={name}
              className="w-20 h-20 rounded-full border-4 border-white/30 object-cover group-hover:scale-130 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 text-white">
            <h3 className="text-xl font-bold uppercase">{name}</h3>
            <p className="text-blue-100 font-medium">{school}</p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mt-2 ${getPositionColor(
                position
              )} bg-white/90`}
            >
              {position}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <p className="text-gray-500 text-sm">Batch</p>
            <p className="font-bold text-lg">{batch}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-sm">Age</p>
            <p className="font-bold text-lg">{age}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <IoIosShirt size={20} className="text-blue-600" />
              <span className="text-blue-600 font-semibold text-sm">
                Jersey
              </span>
            </div>
            <p className="text-2xl font-bold text-blue-700">#{jerseyNumber}</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
            <div className="flex items-center space-x-2 mb-2">
              <GiRunningShoe size={20} className="text-green-600" />
              <span className="text-green-600 font-semibold text-sm">Foot</span>
            </div>
            <p className={`text-lg font-bold capitalize text-green-700`}>
              {preferredFoot}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-200">
          <div className="flex items-center space-x-2 mb-2">
            <FaPhoneAlt className="text-indigo-600" />
            <span className="text-indigo-600 font-semibold text-sm">
              Contact
            </span>
          </div>
          <p className="text-lg font-bold text-indigo-700">
            {player.contactNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;