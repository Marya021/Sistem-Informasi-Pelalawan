import React from "react";


const LayoutLog = ({ children }) => {
  return (
    <React.Fragment>
      <section
        className="bg-cover bg-center h-screen w-full flex items-center">
          <main className="w-full flex h-full items-center">{children}</main>
      </section>
    </React.Fragment>
  );
};

export default LayoutLog;
