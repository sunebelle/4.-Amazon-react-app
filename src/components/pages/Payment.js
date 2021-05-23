import React, { useEffect, useState } from "react";
import { useCartContext } from "../../useContext/CartContext";
import "./Payment.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "../../axios";
import { useHistory } from "react-router";
import { db } from "../../firebase";
const Payment = () => {
  const [{ user, basket, totalAmount }, dispatch] = useCartContext();
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  // const [checkedDelivery, setCheckedDelivery] = useState({selectedOption: ""})

  useEffect(() => {
    const getClientSecret = async () => {
      const res = await axios.post(
        `/payments/create?total=${(totalAmount * 1.1).toFixed(2) * 100}`
      );
      // console.log(res);
      setClientSecret(res.data.clientSecret);
    };
    getClientSecret();
  }, [totalAmount, basket]);

  // console.log("the client secret is ", clientSecret);
  const handleChange = (e) => {
    // select the value from checked radio button
  };

  const handleCardChange = (e) => {
    setError(e.error && e.error.message);
    setDisabled(e.empty);
  };
  const handleSubmit = (e) => {
    // console.log(clientSecret);
    e.preventDefault();
    setProcessing(true);
    try {
      stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })
        .then((result) => {
          const {
            error,
            paymentIntent: { id, amount, created },
          } = result;
          if (error) {
            setError(error.message);
          } else {
            db.collection("users")
              .doc(user && user.uid)
              .collection("orders")
              .doc(id)
              .set({
                basket,
                amount,
                created,
              });
            setSucceeded(true);
            setError(null);
          }
          setProcessing(false);
          history.replace("/orders");
          dispatch({ type: "ORDER" });
        });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return (
    <div className="container-fluid payment__page">
      <div className="payment__main">
        <div className="payment__section">
          <h4>Delivery Address</h4>
          <p>{user && user.email}</p>
          <p>Address: 123A Test Street, District 1, HCM City, VN </p>
          <p> Time: Weekday && Working hours</p>
        </div>
        <div className="payment__section">
          <h4> Delivery method</h4>
          <div className="payment__checkbox">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                onChange={handleChange}
                value=""
                name="flexRadioDelivery"
                id="flexRadioDelivery1"
                checked
              />
              <label className="form-check-label" htmlFor="flexRadioDelivery1">
                AmazonPremium
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                onChange={handleChange}
                value=""
                name="flexRadioDelivery"
                id="flexRadioDelivery2"
              />
              <label className="form-check-label" htmlFor="flexRadioDelivery2">
                Express
              </label>
            </div>
          </div>
        </div>
        <div className="payment__section">
          <h4> Payment method</h4>
          <div className="payment__checkbox">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                onChange={handleChange}
                value=""
                id="flexRadioPayment1"
                name="flexRadioPayment"
              />
              <label className="form-check-label" htmlFor="flexRadioPayment1">
                Cash on delivery
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                onChange={handleChange}
                value=""
                name="flexRadioPayment"
                id="flexRadioPayment2"
              />
              <label className="form-check-label" htmlFor="flexRadioPayment2">
                Internet banking
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                onChange={handleChange}
                value=""
                name="flexRadioPayment"
                id="flexRadioPayment3"
                checked
              />
              <label className="form-check-label" htmlFor="flexRadioPayment3">
                Credit / Debit Card
              </label>
              <div className="py-2 ">
                <CardElement onChange={handleCardChange} />
                {error && <p className="text-danger m-0">{error}</p>}
              </div>
            </div>
          </div>
        </div>
        <div className=" py-4 text-center">
          <form onSubmit={handleSubmit}>
            {processing ? (
              <div className="loader " />
            ) : (
              <button
                type="submit"
                disabled={processing || disabled || succeeded}
                className="btn btn-success btn-lg payment__btn"
              >
                Pay Now
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
