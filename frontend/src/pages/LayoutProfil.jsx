import React from "react";
import Navbar from "../components/Navbar";


const LayoutProfil = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="w-full">
          <div className="pt-[100px]  p-4 overflow-auto">
            <main className="">{children}</main>
          </div>
      </div>
    </React.Fragment>
  );
};

export default LayoutProfil;
