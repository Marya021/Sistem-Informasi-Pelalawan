import React from "react";
import Navbar from "../components/Navbar";
import SiderBar from "../components/SiderBar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex pt-[80px] w-full fixed top-0 ">
          <SiderBar />
          <div className="w-10/12 shadow p-4 overflow-auto h-[88vh]">
            <main className="h-screen">{children}</main>
          </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
