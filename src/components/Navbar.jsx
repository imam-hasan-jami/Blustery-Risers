import React, { use } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthContext";

const Navbar = () => {

  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logged out successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

    const links = (
      <>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-neutral text-white p-2 rounded-sm" : "p-2"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fixture"
            className={({ isActive }) =>
              isActive ? "bg-neutral text-white p-2 rounded-sm" : "p-2"
            }
          >
            Fixture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jersey"
            className={({ isActive }) =>
              isActive ? "bg-neutral text-white p-2 rounded-sm" : "p-2"
            }
          >
            Jersey
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/achievements"
            className={({ isActive }) =>
              isActive ? "bg-neutral text-white p-2 rounded-sm" : "p-2"
            }
          >
            Achievements
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/old-squad"
            className={({ isActive }) =>
              isActive ? "bg-neutral text-white p-2 rounded-sm" : "p-2"
            }
          >
            Old Squad
          </NavLink>
        </li>
      </>
    );

  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-20">
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
            {user?.email ? (
              <>
                <li>
                  <NavLink
                    to="/add-old-player"
                    className={({ isActive }) =>
                      isActive ? "bg-neutral text-white p-2 rounded-sm" : "p-2"
                    }
                  >
                    Add Old Player
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/manage-old-squad"
                    className={({ isActive }) =>
                      isActive ? "bg-neutral text-white p-2 rounded-sm" : "p-2"
                    }
                  >
                    Manage Old Squad
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <Link
          to="/"
          className="text-md lg:text-2xl font-semibold lg:font-bold lg:ml-4"
        >
          BLUSTERY RISERS
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/">
          {user?.email ? (
            <>
              <span className="text-[10px]">{user.email}</span>
              <div className="flex justify-end">
                <button
                  onClick={handleLogout}
                  className="btn bg-red-500 text-white"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <img
              className="w-10 mr-4"
              src="https://i.ibb.co.com/wFjq79n6/blustery-logo-black.png"
              alt=""
            />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
