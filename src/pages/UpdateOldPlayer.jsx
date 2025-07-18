import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { useLoaderData } from 'react-router';

const UpdateOldPlayer = () => {

    const { _id, photoURL, name, position, jerseyNumber, school, dateOfBirth, age, batch, preferredFoot } = useLoaderData();

    const { user } = use(AuthContext);

    const handleUpdatePlayer = (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const updatedPlayer = Object.fromEntries(formData.entries());

      fetch(`https://blustery-risers-server.vercel.app/oldPlayers/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedPlayer),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            alert("Player updated successfully!");
            // form.reset();
          }
        })
        .catch((error) => {
          console.error("Error updating plant:", error);
        });
    };

    return (
      <div className="px-10 lg:px-24">
        <div className="py-12 lg:p-12 text-center space-y-4">
          <h2 className={`font-bold text-3xl text-center text-neutral`}>
            Update Player
          </h2>
        </div>
        <form onSubmit={handleUpdatePlayer}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset
              className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}
            >
              <label className={`label`}>Photo URL </label>
              <input
                name="photoURL"
                type="text"
                className="input w-full"
                placeholder="Photo URL"
                defaultValue={photoURL}
                required
              />
            </fieldset>
            <fieldset
              className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}
            >
              <label className={`label`}>Player Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Player Name"
                defaultValue={name}
                required
              />
            </fieldset>
            <fieldset
              className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}
            >
              <label className={`label`}>Player's Position:</label>
              <input
                name="position"
                type="text"
                className="input w-full"
                placeholder="Player's Position"
                defaultValue={position}
                required
              />
            </fieldset>
            <fieldset
              className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}
            >
              <label className={`label`}>Jersey Number</label>
              <input
                name="jerseyNumber"
                type="number"
                className="input w-full"
                placeholder="Player's Jersey Number"
                defaultValue={jerseyNumber}
                required
              />
            </fieldset>
            <fieldset
              className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}
            >
              <label className={`label`}>Player's School</label>
              <input
                name="school"
                type="text"
                className="input w-full"
                placeholder="Player's School"
                defaultValue={school}
                required
              />
            </fieldset>
            <fieldset
              className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}
            >
              <label className={`label`}>Player's Batch</label>
              <input
                name="batch"
                type="text"
                className="input w-full"
                placeholder="Player's Batch"
                defaultValue={batch}
                required
              />
            </fieldset>
            <fieldset
              className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}
            >
              <label className={`label`}>Preferred Foot:</label>
              <select
                name="preferredFoot"
                defaultValue={preferredFoot}
                className="select w-full"
                required
              >
                <option value="">Select Preffered Foot</option>
                <option value="right">Right</option>
                <option value="left">Left</option>
                <option value="both">Both</option>
              </select>
            </fieldset>
            <fieldset
              className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}
            >
              <label className={`label`}>Date of Birth:</label>
              <input
                name="dateOfBirth"
                className="input w-full text-gray-400"
                type="date"
                defaultValue={dateOfBirth}
                required
              />
            </fieldset>
            <fieldset
              className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}
            >
              <label className={`label`}>Player's Age</label>
              <input
                name="age"
                type="text"
                className="input w-full"
                placeholder="Player's Age"
                defaultValue={age}
                required
              />
            </fieldset>
            <fieldset
              className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}
            >
              <label className={`label`}>User Email:</label>
              <input
                name="useremail"
                type="email"
                className="input w-full text-gray-400"
                value={user?.email || ""}
                readOnly
              />
            </fieldset>
            <fieldset
              className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}
            >
              <label className={`label`}>User Name:</label>
              <input
                name="username"
                type="text"
                className="input w-full text-gray-400"
                value={user?.name || ""}
                readOnly
              />
            </fieldset>
          </div>

          <div className="flex justify-center mb-15">
            <input
              className="btn bg-green-600 text-white lg:w-2/12 mt-8"
              type="submit"
              value="Update Player"
            />
          </div>
        </form>
      </div>
    );
};

export default UpdateOldPlayer;