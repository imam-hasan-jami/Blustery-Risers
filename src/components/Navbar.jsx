import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router";

const Navbar = () => {

    const links = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/">Fixture</NavLink>
            </li>
            <li>
                <NavLink to="/">Jersey</NavLink>
            </li>
            <li>
                <NavLink to="/">Achievements</NavLink>
            </li>
            <li>
                <NavLink to="/">Contact Us</NavLink>
            </li>
        </>
    )

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <HiMenuAlt1 size={25} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-md font-semibold">BLUSTERY RISERS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <img className="w-10" src="https://i.ibb.co.com/wFjq79n6/blustery-logo-black.png" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
