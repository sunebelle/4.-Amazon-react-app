import Home from "./components/pages/Home";
import { Switch, Route } from "react-router-dom";
import ProductItem from "./components/pages/ProductItem";
import Checkout from "./components/pages/Checkout";
import Layout from "./components/layout/Layout";
import { useCartContext } from "./useContext/CartContext";
import Login from "./components/pages/Login";
import Payment from "./components/pages/Payment";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import Orders from "./components/pages/Orders";
import PrivateRoute from "./components/pages/PrivateRoute";
//https://stripe.com/docs/stripe-js/react
const promise = loadStripe(
  "pk_test_51IpVl7ISddT88IiKcyDnXAkMkNLhBMLkfJFClUln1gKnbY2F9AfwyygAs8ir6Xhq3uGGPXZLRUF9PhQl1VEJejxo003KEPL6C7"
);
const App = () => {
  const [{ user }, dispatch] = useCartContext();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      // console.log("the user is", userAuth);
      if (userAuth) {
        // User is signed in.
        dispatch({ type: "ADD_USER", user: userAuth });
      } else {
        // No user is signed in.
        dispatch({ type: "ADD_USER", user: null });
      }
    });
  }, [user, dispatch]);

  return (
    <Switch>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/" exact>
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path="/products/:id">
        <Layout>
          <ProductItem />
        </Layout>
      </Route>
      <Route path="/checkout" exact>
        <Layout>
          <Checkout />
        </Layout>
      </Route>
      <Route path="/checkout/:user/payment">
        <Layout>
          {user ? (
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          ) : (
            <Home />
          )}
        </Layout>
      </Route>
      <PrivateRoute
        path="/orders"
        exact
        component1={Layout}
        component2={Orders}
      />
      <Route path="*">
        <Layout>
          <Home />
        </Layout>
      </Route>
    </Switch>
  );
};

export default App;
