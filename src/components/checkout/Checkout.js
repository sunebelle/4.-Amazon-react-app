import { Card } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { CardBody, CardText, CardTitle, Col, Row, Button } from "reactstrap";
import { useCartContext } from "../../useContext/CartContext";
import CartItem from "./CartItem";
import "./Checkout.css";

const Checkout = () => {
  const [{ basket, totalAmount, user }, dispatch] = useCartContext();
  const [isCartShowed, setIsCartShowed] = useState(false);
  const history = useHistory();

  // console.log(user);

  const displayItem = basket.map((item) => {
    return <CartItem key={item.id} item={item} dispatch={dispatch} />;
  });

  useEffect(() => {
    if (basket.length === 0) {
      setIsCartShowed(false);
    } else {
      setIsCartShowed(true);
    }
  }, [basket, isCartShowed]);

  const emptyCart = (
    <Row>
      <Col className="w-100 h-100 text-center d-flex justify-content-center align-item-center pt-5">
        <Card className="empty__cart">
          <CardBody className="">
            <h3> Please add something to your cart </h3>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );

  const showCart = (
    <Row className="m-auto">
      <Col
        xs="12"
        md="8"
        className=" bg-white d-flex flex-column me-4 pb-4 justify-content-center my-4 "
      >
        {displayItem}
      </Col>
      <Col className="px-0">
        <Card>
          <CardBody>
            <div className="d-flex justify-content-between pb-2">
              <CardTitle tag="h6">Amount</CardTitle>
              <CardText tag="h6">${totalAmount.toFixed(2)}</CardText>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <CardTitle tag="h6">VAT</CardTitle>
              <CardText tag="h6">${(totalAmount * 0.1).toFixed(2)}</CardText>
            </div>
            <div className="d-flex justify-content-between">
              <CardTitle tag="h5">Total Amount</CardTitle>
              <CardText tag="h4">${(totalAmount * 1.1).toFixed(2)}</CardText>
            </div>
            <Button
              onClick={() => {
                if (user) {
                  history.push(`/checkout/${user.email}/payment`);
                } else {
                  history.push("/signin");
                }
              }}
              className="w-100"
            >
              Proceed
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );

  return (
    <div className="checkout_bg container-fluid">
      {isCartShowed ? showCart : emptyCart}
    </div>
  );
};

export default Checkout;
