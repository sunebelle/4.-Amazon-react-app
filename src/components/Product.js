import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import StarRateIcon from "@material-ui/icons/StarRate";

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Col,
  CardSubtitle,
} from "reactstrap";

const Product = ({ title, id, img, star }) => {
  return (
    <Col xs="6" sm="4" lg="3" className="product">
      <Card>
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardImg
            top
            width="100%"
            height="100%"
            className="card__image"
            src={img}
            alt={title}
          />
          <CardSubtitle className="d-flex justify-content-start pt-2">
            {Array(star)
              .fill()
              .map((_, i) => (
                <span className="star__color" key={Math.random() * 10}>
                  <StarRateIcon />
                </span>
              ))}
          </CardSubtitle>
          <CardTitle tag="h5" className="py-1 ">
            <Link to={`/products/${id}`} className="text-decoration-none">
              <small className="nav__line1">Shop now</small>
            </Link>
          </CardTitle>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Product;
