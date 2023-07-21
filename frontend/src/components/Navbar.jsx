import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut, reset } from "../features/AuthSlice";
import { logoBigData } from "../img";
import { IoLogOut, IoSettings } from "react-icons/io5";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logOut());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="shadow w-full bg-white fixed top-0">
      <div className="mx-auto max-w-[1100px] navbar bg-base-100">
        <div className="flex-1">
          <NavLink to="/" className="">
            <img alt="" src={logoBigData} width="112" height="28" />
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">            
            <li>
              <details>
                <summary>User</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <NavLink>
                      <IoSettings />
                      Settings
                    </NavLink>
                  </li>
                  <li>
                    <button onClick={logout}>
                      <IoLogOut />
                      Log Out
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
