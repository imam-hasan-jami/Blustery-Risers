import Lottie from "lottie-react";
import React, { useState } from "react";
import { MdImage } from "react-icons/md";
import checkMark from "../assets/check-mark.json";
import loadingSpinner from "../assets/loading-spinner.json";
import Swal from "sweetalert2";

const RegisterPlayer = () => {
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [photoURL, setPhotoURL] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddPlayer(e);
    handleGoogleSpreadsheet(e);
  };

  const handleAddPlayer = (e) => {
    // e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const newPlayer = Object.fromEntries(formData.entries());

    newPlayer.photoURL = photoURL;

    // console.log("New Player Data:", newPlayer);

    fetch("https://blustery-risers-server.vercel.app/players", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Player registered successfully!",
            showConfirmButton: false,
            timer: 2000,
          });

          form.reset();
          setPhotoUploaded(false);
          setPhotoURL("");
        //   console.log("Player registered successfully:", data);
        }
      })
      .catch((error) => {
        console.error("Error registering player:", error);
      });
  };

  const handleGoogleSpreadsheet = (e) => {
    const url = import.meta.env.VITE_GOOGLE_SHEET_URL;
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: `formType=players&Name=${encodeURIComponent(
        e.target.name.value
      )}&School=${encodeURIComponent(
        e.target.school.value
      )}&Batch=${encodeURIComponent(
        e.target.batch.value
      )}&Position=${encodeURIComponent(
        e.target.position.value
      )}&JerseyNumber=${encodeURIComponent(
        e.target.jerseyNumber.value
      )}&PreferredFoot=${encodeURIComponent(
        e.target.preferredFoot.value
      )}&DateOfBirth=${encodeURIComponent(
        e.target.dateOfBirth.value
      )}&ContactNumber=${encodeURIComponent(
        e.target.contactNumber.value
      )}&Email=${encodeURIComponent(
        e.target.email.value
      )}&PhotoURL=${encodeURIComponent(photoURL)}`,
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        // alert("Data submitted successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    setUploadingPhoto(true);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "blustery_risers_player_registration");
    data.append("cloud_name", "dmutxr6xq");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dmutxr6xq/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const uploadedPhotoURL = await res.json();
    // console.log(uploadedPhotoURL.url);
    setPhotoURL(uploadedPhotoURL.url);
    setPhotoUploaded(true);
    setUploadingPhoto(false);
    e.target.value = "";
  };

  return (
    <div className="my-10">
      <h1 className="text-center font-bold text-3xl my-7">
        Player Registration
      </h1>

      <form onSubmit={handleFormSubmit}>
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
                Select Your Preferred Foot
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

            {/* <input type="hidden" name="FormType" value="players" /> */}

            <label className="label mt-5">Upload your photo</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              <div className="flex justify-center items-center my-6">
                {uploadingPhoto ? (
                  <Lottie
                    animationData={loadingSpinner}
                    loop={true}
                    style={{ height: "53px", width: "53px" }}
                  />
                ) : photoUploaded ? (
                  <Lottie
                    animationData={checkMark}
                    loop={false}
                    style={{ height: "50px", width: "50px" }}
                  />
                ) : (
                  <MdImage size={50} />
                )}
                {/* <MdImage size={50} /> */}
              </div>
              <input
                onChange={handleFileUpload}
                type="file"
                className="file-input mt-6"
              />
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
