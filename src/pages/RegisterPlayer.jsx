import React from "react";
import { MdImage } from "react-icons/md";

const RegisterPlayer = () => {
  return (
    <div className="my-10">
      <h1 className="text-center font-bold text-3xl my-7">
        Player Registration
      </h1>

      <form>
        <fieldset className="fieldset grid grid-cols-2 gap-8 bg-base-200 border-base-300 rounded-box w-6/12 mx-auto border p-8">
          <div>
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Your Name"
              required
            />

            <label className="label mt-5">School</label>
            <input
              name="school"
              type="text"
              className="input"
              placeholder="Your School Name"
              required
            />

            <label className="label mt-5">Batch</label>
            <input
              name="batch"
              type="number"
              className="input"
              placeholder="Batch"
              required
            />

            <label className="label mt-5">Position</label>
            <select name="position" className="select" defaultValue="" required>
              <option value="" disabled>
                Select Your Position
              </option>
              <option value="Goalkeeper">Goalkeeper (GK)</option>
              <option value="Right Back">Right Back (RB)</option>
              <option value="Center Back">Center Back (CB)</option>
              <option value="Left Back">Left Back (LB)</option>
              <option value="Center Defensive Midfielder">
                Center Defensive Midfielder (CDM)
              </option>
              <option value="Center Midfielder">Center Midfielder (CM)</option>
              <option value="Center Attacking Midfielder">
                Center Attacking Midfielder (CAM)
              </option>
              <option value="Right Winger">Right Winger (RW)</option>
              <option value="Striker">Striker (ST)</option>
              <option value="Left Winger">Left Winger (LW)</option>
            </select>

            <label className="label mt-5">Jersey Number</label>
            <input
              name="jerseyNumber"
              type="number"
              className="input"
              placeholder="Your Jersey Number"
              required
            />

            <label className="label mt-5">Preferred Foot:</label>
            <select
              name="preferredFoot"
              className="select"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select Your Preffered Foot
              </option>
              <option value="right">Right</option>
              <option value="left">Left</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div>
            <label className="label">Date of Birth:</label>
            <input name="dateOfBirth" className="input" type="date" required />

            <label className="label mt-5">Contact Number</label>
            <input
              name="contactNumber"
              type="number"
              className="input"
              placeholder="Your Contact Number"
              required
            />

            <label className="label mt-5">Email Address</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Your Email Address (Optional)"
            />

            <label className="label mt-5">Upload your photo</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              <div className="flex justify-center items-center my-6">
                <MdImage size={50} />
              </div>
              <input type="file" className="file-input mt-6" />
            </div>
          </div>
        </fieldset>

        <div className="flex justify-center mt-6">
          <input
            className="btn bg-green-600 text-white"
            type="submit"
            value="Confirm Registration"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterPlayer;
