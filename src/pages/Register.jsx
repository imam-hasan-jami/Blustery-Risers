import React from 'react';

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
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