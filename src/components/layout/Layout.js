import React, { useState } from "react";
import Header from "../pages/Header";
import "./Layout.css";
import SideDrawer from "./SideDrawer";

const Layout = ({ children }) => {
  const [isDrawerShown, setIsDrawerShown] = useState(false);

  const handleShow = (e) => {
    setIsDrawerShown(true);
  };

  // console.log(isDrawerShown);
  const handleClose = () => {
    setIsDrawerShown(!isDrawerShown);
  };

  return (
    <div className="app">
      {isDrawerShown && <SideDrawer handleClose={handleClose} />}
      <Header handleShow={handleShow} />
      <main className="main__home">{children}</main>
    </div>
  );
};

export default Layout;
