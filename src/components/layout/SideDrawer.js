import React from "react";
import { Link } from "react-router-dom";
import Backdrop from "../UI/Backdrop";
import "./SideDrawer.css";
import logo from "../../assets/Amazon-01.png";
import { useCartContext } from "../../useContext/CartContext";
import { auth } from "../../firebase";

const SideDrawer = ({ handleClose }) => {
  const [{ user }] = useCartContext();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      <Backdrop handleClose={handleClose} />
      <div className="side__drawer open">
        <div className="main">
          <ul className="list-group">
            <li
              className="d-flex justify-content-center "
              onClick={handleClose}
            >
              <Link to="/" className="sideDrawer__logo">
                <img src={logo} alt="logo" />
              </Link>
            </li>
            <li
              className="ps-4 pb-3 font-weight-bold border__top"
              onClick={handleClose}
            >
              <Link
                to="/"
                className="nav__global__location text-decoration-none text-dark"
              >
                <span className="nav__line1"> Get started</span>
                <span className="nav__line2 font-weight-bold">Home page</span>
              </Link>
              <hr />
            </li>
            <li className="ps-4 pb-3 font-weight-bold " onClick={handleClose}>
              <Link
                to="/"
                className="nav__global__location text-decoration-none text-dark"
              >
                <span className="nav__line1"> Deliver to</span>
                <span className="nav__line2 font-weight-bold ">Vietnam</span>
              </Link>
              <hr />
            </li>
            <li className="ps-4 pb-3 font-weight-bold" onClick={handleClose}>
              <Link
                to={!user ? "/signin" : "/"}
                className="nav__account text-decoration-none text-dark "
              >
                <span onClick={handleAuth} className="nav__line1">
                  {user ? "Sign out" : "Hello, Sign in"}
                </span>
                <span className="nav__line2 font-weight-bold">
                  Account & List
                </span>
              </Link>
              <hr />
            </li>
            <li className="ps-4 pb-3 font-weight-bold " onClick={handleClose}>
              <Link
                to="/orders"
                className="nav__order text-decoration-none text-dark "
              >
                <span className="nav__line1">Returns</span>
                <span className="nav__line2 font-weight-bold">& Orders</span>
              </Link>
              <hr />
            </li>

            <li
              className="ps-4 pb-3 font-weight-bold border__bottom"
              onClick={handleClose}
            >
              <Link
                to="/checkout"
                className="nav__cart text-decoration-none text-dark "
              >
                <span className="nav__line1">Items</span>
                <span className="nav__line2 font-weight-bold">& Cart</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
