import React, { useState } from "react";
import Header from "./Header";
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
    <div className="w-100 h-100 d-flex flex-column justify-content-center">
      {isDrawerShown && <SideDrawer handleClose={handleClose} />}
      <Header handleShow={handleShow} />
      <main className="main__home">{children}</main>
    </div>
  );
};

export default Layout;
