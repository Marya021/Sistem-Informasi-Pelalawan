import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logOut, reset } from "../features/AuthSlice";

const SiderBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(logOut());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="w-2/12 shadow h-screen overflow-auto">
      <aside className="p-4 space-y-4">
        <p className="font-semibold text-xl">Upload</p>
        <ul className="space-y-4">
          {/* <li>
            <NavLink className="flex items-center" to="/dashboard">
              <IoHome className="mr-2"/>
              Dashboard
            </NavLink>
          </li> */}
          <li>
            <NavLink className="flex items-center" to="/products">
              <IoPricetag className="mr-2"/>
              Upload FIle
            </NavLink>
          </li>
          <li>
            <NavLink className="flex items-center" to="/warga">
              <IoPricetag className="mr-2"/>
              Form Warga
            </NavLink>
          </li>
          {/* <li>
            <NavLink className="flex items-center" to="/stunten">
              <IoPricetag className="mr-2"/>
              Stunten
            </NavLink>
          </li> */}
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="font-semibold text-xl mb-4">Admin</p>
            <ul className="space-y-4">
              <li>
                <NavLink className="flex items-center" to="/users">
                  <IoPerson className="mr-2"/>
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        <p className="font-semibold text-xl">Settings</p>
        <ul className="space-y-4">
          <li>
            <button onClick={logout} className="flex btn border-0 items-center w-full text-left bg-red-500 text-white hover:bg-red-700">
              <IoLogOut  />
              Log Out
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default SiderBar;
