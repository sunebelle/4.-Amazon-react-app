import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import CartProvider from "./useContext/CartContext";
import { initialState, reducer } from "./useContext/reducer";

ReactDOM.render(
  <Router>
    <CartProvider initialState={initialState} reducer={reducer}>
      <App />
    </CartProvider>
  </Router>,
  document.getElementById("root")
);
