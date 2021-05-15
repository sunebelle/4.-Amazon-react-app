import React from "react";
import Header from "../pages/Header";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main className="main__home">
        {children}
      </main>
    </div>
  );
};

export default Layout;
