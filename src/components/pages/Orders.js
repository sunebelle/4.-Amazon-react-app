import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../../firebase";
import { useCartContext } from "../../useContext/CartContext";
import Order from "../Order";
import discountImg from "../../assets/discount.jpg"

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
    <div className="container-fluid order__main">
      <div className="py-1 order__card text-center text-primary">
        {orders.length > 0 ? (
          <h1> Your orders</h1>
        ) : (
          <div className="empty__orders">
            <h3 className="p-4 text-center mb-5 h-100">
              Please checkout with discount today, it is awesome!
            </h3>
            <img className="w-100 h-100" src={discountImg} alt="discount-img" />
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
