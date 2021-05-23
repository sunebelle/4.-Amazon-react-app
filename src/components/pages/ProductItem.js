import React, { useState } from "react";
import { useParams } from "react-router";
import { Col, Container, Row, ButtonToggle } from "reactstrap";
import Products from "../ProductData";
import DiscoverData from "../DiscoverData";
import StarRateIcon from "@material-ui/icons/StarRate";
import DiscoverHome from "../DiscoverHome";
import TopBestSeller from "../TopBestSeller";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import "./ProductItem.css";
import StarRating from "../StarRating";
import { useCartContext } from "../../useContext/CartContext";

const ProductItem = () => {
  const [amount, setAmount] = useState(1);
  const params = useParams();
  const [{ basket }, dispatch] = useCartContext();
  const getProduct = Products.concat(DiscoverData).find(
    (product) => product.id === params.id
  );
  const handleMinus = () => {
    setAmount(amount - 1);
  };
  const handleAdd = () => {
    setAmount(amount + 1);
  };

  if (basket.length > 0) {
  } // => no warning console.log
  const { title, description, price, img, star, id } = getProduct;
  const handleOrder = () => {
    const item = {
      title,
      id,
      img,
      price,
      amount,
    };
    dispatch({ type: "ADD", item });
  };
  return (
    <>
      <div key={id} className="container-fluid pt-4">
        <Container className="themed-container bg-white py-4" fluid={true}>
          <Row>
            <Col md="6 d-flex align-item-center justify-content-center m-auto ">
              <div className="product__img">
                <img className="w-100 h-100" src={img} alt={title} />
              </div>
            </Col>
            <Col md="6 d-flex align-item-center justify-content-center m-auto">
              <div className="d-flex flex-column product__card justify-content-center align-item-center  ">
                <div className="top__product ">
                  <div className="d-flex justify-content-between">
                    <h3 className="m-0"> {title} </h3>
                    <span>
                      <FavoriteIcon className="me-1" />
                      <ShareIcon />
                    </span>
                  </div>
                  {Array(star)
                    .fill()
                    .map((_, i) => (
                      <span className="star__color" key={Math.random() * 20}>
                        <StarRateIcon />
                      </span>
                    ))}
                </div>
                <div className="middle__product py-2">
                  <h2> {`$${price.toFixed(2)}`}</h2>
                </div>
                <div className="bottom__product ">
                  <p className="m-0"> Quantity</p>
                  <span>
                    <button disabled={amount <= 1} onClick={handleMinus}>
                      -
                    </button>
                    <span className="px-2">{amount}</span>
                    <button onClick={handleAdd}>+</button>
                  </span>
                  <div>
                    <ButtonToggle
                      onClick={handleOrder}
                      className="btn-lg w-100 my-4"
                      color="danger"
                    >
                      Order
                    </ButtonToggle>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <p className="pt-4 "> {description}</p>
          </Row>
        </Container>
        <TopBestSeller />
        <StarRating />
      </div>
      <DiscoverHome title="Similar Products" />
    </>
  );
};

export default ProductItem;
