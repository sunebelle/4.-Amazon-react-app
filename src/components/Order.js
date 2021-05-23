import React from "react";
import "./Order.css";
import moment from "moment";

const Order = ({ order, noOrder }) => {
  const {
    data: { amount, basket, created },
  } = order;

  const itemOrders = basket.map((item) => {
    const { title, price, amount, id } = item;
    return (
      <div key={id} className="d-flex  justify-content-between">
        <ul className="list-group list-group-flush">
          <li className="list-group-item ps-0">
            <h6 className="m-0"> {title} </h6>
          </li>
        </ul>
        <div>
          <span className="pt-2">
            <p className="d-inline pe-4"> ${price.toFixed(2)}</p>
          </span>
          <span>X</span>
          <span> {amount}</span>
        </div>
      </div>
    );
  });
  return (
    <div className="order__card">
      <div className="header__card">
        <h4>{noOrder}</h4>
        <span className="font-italic">
          {moment.unix(created).format("MMMM Do YYYY, h:mma")}{" "}
        </span>
      </div>
      {itemOrders}
      <div className="footer__card text-right">
        <p className="font-weight-bold m-0">
          Total Amount: {(amount / 100).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Order;
