import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../../firebase";
import { useCartContext } from "../../useContext/CartContext";
import Order from "../Order";

const Orders = () => {
  const [{ user }] = useCartContext();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    // let isMounted = true;
    if (user) {
      db.collection("users")
        .doc(user && user.uid)
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
      // console.log(user);
    } else {
      setOrders([]);
    }
    // return () => {
    //   isMounted = false;
    // };
  }, [user]);
  // console.log(orders);

  return (
    <div className="container-fluid">
      <div className="py-1">
        {orders.length > 0 ? (
          <h1> Your orders</h1>
        ) : (
          <div className="empty__orders">
            <h1 className="p-4 text-center">
              Please checkout with discount today, it is awesome!
            </h1>
          </div>
        )}
      </div>
      {orders.length > 0 &&
        orders.map((order) => (
          <Order key={order.id} order={order} noOrder={order.id} />
        ))}
    </div>
  );
};

export default Orders;
