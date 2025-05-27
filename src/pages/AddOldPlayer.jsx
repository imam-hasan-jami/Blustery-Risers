import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';

const AddOldPlayer = () => {

    const { user } = use(AuthContext);

    const handleAddPlayer = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const newPlayer = Object.fromEntries(formData.entries());

        fetch("http://localhost:3000/oldPlayers", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newPlayer),
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert("Player added successfully");
                // form.reset();
            }
        })
        .catch(error => {
            console.error("Error adding plant:", error);
        });
    }

    return (
      <div className="px-10 lg:px-24">
        <div className="py-12 lg:p-12 text-center space-y-4">
          <h2 className={`font-bold text-3xl text-center text-neutral`}>
            Add Player
          </h2>
        </div>
        <form onSubmit={handleAddPlayer}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}>
              <label className={`label`}>Photo URL </label>
              <input
                name="photoURL"
                type="text"
                className="input w-full"
                placeholder="Photo URL"
                required
              />
            </fieldset>
            <fieldset className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}>
              <label className={`label`}>Player Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Plant Name"
                required
              />
            </fieldset>
            <fieldset className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}>
              <label className={`label`}>Player's Position:</label>
              <input
                name="position"
                type="text"
                className="input w-full"
                placeholder="Plant Name"
                required
              />
            </fieldset>
            <fieldset className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}>
              <label className={`label`}>Jersey Number</label>
              <input
                name="jerseyNumber"
                type="number"
                className="input w-full"
                placeholder="Plant Name"
                required
              />
            </fieldset>
            <fieldset className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}>
              <label className={`label`}>Player's School</label>
              <input
                name="school"
                type="text"
                className="input w-full"
                placeholder="Plant Name"
                required
              />
            </fieldset>
            <fieldset className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}>
              <label className={`label`}>Date of Birth:</label>
              <input
                name="dateOfBirth"
                className="input w-full text-gray-400"
                type="date"
                required
              />
            </fieldset>
            <fieldset className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}>
              <label className={`label`}>Player's Age</label>
              <input
                name="age"
                type="text"
                className="input w-full"
                placeholder="Plant Name"
                required
              />
            </fieldset>
            <fieldset className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}>
              <label className={`label`}>User Email:</label>
              <input
                name="useremail"
                type="email"
                className="input w-full text-gray-400"
                value={user?.email || ""}
                readOnly
              />
            </fieldset>
            <fieldset className={`fieldset rounded-box border p-4 bg-base-200 border-base-300`}>
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

          <div className='flex justify-center mb-15'>
            <input
              className="btn bg-green-600 text-white lg:w-2/12 mt-8"
              type="submit"
              value="Add Player"
            />
          </div>
        </form>
      </div>
    );
};

export default AddOldPlayer;