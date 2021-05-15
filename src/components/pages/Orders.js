import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../../firebase";
import { useCartContext } from "../../useContext/CartContext";
import Order from "../Order";

const Orders = () => {
  const [{ user }] = useCartContext();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  // console.log(orders);

  return (
    <div className="container-fluid">
      <div className="py-1">
        <h1> Your orders</h1>
      </div>
      {orders.length > 0 &&
        orders.map((order) => (
          <Order key={order.id} order={order} noOrder={order.id} />
        ))}
    </div>
  );
};

export default Orders;
