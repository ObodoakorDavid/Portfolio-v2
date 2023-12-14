import React from "react";
import Navbar from "../components/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div className=" bg-gray-2">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default RootLayout;
