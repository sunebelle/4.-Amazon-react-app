import Home from "./components/home/Home";
import { Switch, Route } from "react-router-dom";
import ProductItem from "./components/productItem/ProductItem";
import Checkout from "./components/checkout/Checkout";
import Layout from "./components/layout/Layout";
import { useCartContext } from "./useContext/CartContext";
import Login from "./components/login/Login";
import Payment from "./components/payment/Payment";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import Orders from "./components/orders/Orders";
import PrivateRoute from "./components/layout/PrivateRoute";
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
        {user ? (
          <Layout>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Layout>
        ) : (
          <Login />
        )}
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
