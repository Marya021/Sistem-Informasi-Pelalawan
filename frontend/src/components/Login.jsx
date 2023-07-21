import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/AuthSlice";
import { logoBigData } from "../img";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/admin");
    } 
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <form onSubmit={Auth} className="space-y-4 w-4/12 px-5 mx-auto">
      <div className="flex justify-center">
        <img src={logoBigData} alt="" className="w-[200px] mb-5"/>
      </div>
      {isError && <p className="has-text-centered">{message?.msg || "Invalid Email atau Password"}</p>}
      <h1 className="font-bold text-2xl ">Sign In</h1>
      <div className="space-y-2">
        <label className="font-semibold">Email</label>
        <div className="control">
          <input
            type="text"
            className="w-full outline-offset-0 p-2 outline-none outline outline-2 outline-gray-300 rounded-sm focus:outline-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your Username here.."
          />
        </div>
      </div>
      <div className="field space-y-2">
        <label className="font-semibold">Password</label>
        <div className="control">
          <input
            type="password"
            className="w-full outline-offset-0 p-2 outline-none outline outline-2 outline-gray-300 rounded-sm focus:outline-red-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type your Password here.."
          />
          <Link to="/dashboard" className="text-xs text-blue-500 hover:underline active:text-purple-900">
            Lupa Password?
          </Link>
        </div>
      </div>
      <div className="field mt-5 space-y-2">
        <button
          type="submit"
          className="btn w-full rounded-[3px] border-0 leading-none h-auto p-3 min-h-0 text-white font-bold bg-red-500 hover:bg-red-700"
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
        <Link
          to="/registrasi"
          className="btn w-full rounded-[3px] border-0 leading-none h-auto p-3 min-h-0 text-white font-bold bg-blue-500 hover:bg-blue-700"
        >
          Registrasi
        </Link>
      </div>
    </form>
  );
};

export default Login;
