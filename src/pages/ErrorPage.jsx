import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <p className="text-2xl text-neutral font-semibold">OOPS...</p>
      <h1 className="text-[180px] text-neutral font-bold mt-[-40px]">404</h1>
      <h1 className="text-[40px] text-neutral font-bold mt-[-30px]">
        Page Not Found
      </h1>
      <Link to={"/"}>
        <button className="btn bg-neutral text-white px-5 py-3 mt-14">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
