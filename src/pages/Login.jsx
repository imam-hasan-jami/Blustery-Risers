import React from 'react';
import { Link } from 'react-router';

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
    <div className="flex justify-center min-h-[calc(100vh-220px)] items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Admin Login
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            //   onChange={(e) => setEmail(e.target.value)}
              required
            />
            {/* passowrd  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            {/* <div>
              <Link to={`/auth/forget-password?email=${encodeURIComponent(email)}`} className="link link-hover">Forgot password?</Link>
            </div> */}

            {/* {error && (
              <p className="text-red-500 text-xs font-semibold text-center mt-3">
                {error}
              </p>
            )} */}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;