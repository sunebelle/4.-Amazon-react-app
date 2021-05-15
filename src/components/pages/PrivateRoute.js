import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useCartContext } from "../../useContext/CartContext";

const PrivateRoute = ({
  component1: Component1,
  component2: Component2,
  ...rest
}) => {
  const [{ user }] = useCartContext();
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest} //path || exact
      render={() =>
        user ? (
          <Component1>
            <Component2 />
          </Component1>
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
