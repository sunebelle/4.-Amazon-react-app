import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./TopHome.css";
import MenuIcon from "@material-ui/icons/Menu";

const TopHome = () => {
  return (
    // <div className="top__home">
    <Container className="themed-container top__home" fluid={true}>
      <ul className="list-inline top__homeLeft ">
        <li className="list-inline-item ">
          <Link to="/" className="text-decoration-none text-white pe-2">
            <span>
              <MenuIcon className="pb-1" />
            </span>
            All
          </Link>
        </li>
        <li className="list-inline-item pe-2">
          <Link to="/" className="text-decoration-none text-white">
            Today's Deals
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="/" className="text-decoration-none text-white pe-2">
            Customer Service
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="/" className="text-decoration-none text-white pe-2">
            Gift Cards
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="/" className="text-decoration-none text-white pe-2">
            Registry
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="/" className="text-decoration-none text-white">
            Sell
          </Link>
        </li>
      </ul>
      <div className="top__homeRight">
        <span>
          <Link to="/" className="text-decoration-none text-white">
            Amazon's response to COVID-19
          </Link>
        </span>
      </div>
      {/* </div> */}
    </Container>
  );
};

export default TopHome;
