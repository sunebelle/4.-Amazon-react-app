import React, { useEffect, useState } from "react";
import logo from "../../assets/logo3.jpg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Header.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../useContext/CartContext";
import { auth } from "../../firebase";

const Header = () => {
  const [animation, setAnimation] = useState(false);
  const [{ basket, user }] = useCartContext();

  const numberOfProduct = basket.reduce(
    (accumulator, product) => accumulator + product.amount,
    0
  );
  useEffect(() => {
    if (basket.length > 0) {
      setAnimation(true);
    }
    const timer = setTimeout(() => setAnimation(false), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [basket]);

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  const animatedBasket = `nav__line1 ps-2 ${animation && "bum"}`;
  return (
    <header className="header container-fluid">
      <div>
        <Link to="/" className="nav__logo">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <Link
          to="/"
          className="nav__global__location text-decoration-none text-white"
        >
          <span className="nav__line1"> Deliver to</span>
          <span className="nav__line2 font-weight-bold">Vietnam</span>
        </Link>
      </div>
      <div className="nav__search">
        <input type="text" className="search__Input" />
        <span className="search__icon">
          <SearchIcon />
        </span>
      </div>
      <div className="nav__language">
        <span className="nav__line1">EN</span>
        <ExpandMoreIcon />
      </div>
      <div>
        <Link
          // to={!user && "/signin"}
          to={!user ? "/signin" : "/"}
          className="nav__account text-decoration-none text-white"
        >
          <span onClick={handleAuth} className="nav__line1">
            {user ? "Sign out" : "Hello, Sign in"}
          </span>
          <span className="nav__line2 font-weight-bold">Account & List</span>
        </Link>
      </div>
      <div>
        <Link
          to="/orders"
          className="nav__order text-decoration-none text-white"
        >
          <span className="nav__line1">Returns</span>
          <span className="nav__line2 font-weight-bold">& Orders</span>
        </Link>
      </div>
      <div>
        <Link
          to="/checkout"
          className="nav__cart text-decoration-none text-white "
        >
          <span className={animatedBasket}>{numberOfProduct}</span>
          {/* <span className="nav__line1 ps-2">{numberOfProduct}</span> */}
          <span className="nav__line2 font-weight-bold">
            <ShoppingCartIcon />
            Cart
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
