import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';

const Register = () => {

    const { createUser } = use(AuthContext);

    const handleRegister = (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);

      const { email, password, ...restFormData } = Object.fromEntries(
        formData.entries()
      );

      createUser(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          
          const userProfile = {
            email,
            ...restFormData,
            creationTime: result.user?.metadata?.creationTime,
            lastSignInTime: result.user?.metadata?.lastSignInTime,
          };

          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userProfile),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                alert("User registered successfully");
              }
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    };

    return (
    <div className="flex justify-center min-h-[calc(100vh-220px)] items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password  */}
            <label className="label">Password</label>
            <div className="flex">
              <input
                name="password"
                type='password'
                className="input"
                placeholder="Password"
                pattern="^(?=.*[A-Z])(?=.*[a-z]).{6,}$"
                required
              />
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;