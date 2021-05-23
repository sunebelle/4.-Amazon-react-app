import React from "react";
import Product from "../Product";
import "./Products.css";
import productsData from "../ProductData";
import { Row } from "reactstrap";

const Products = () => {
  return (
    <div className="products container-fluid">
      <Row className="d-flex justify-content-center">
        {productsData.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            img={product.img}
            id={product.id}
            star={product.star}
          />
        ))}
      </Row>
    </div>
  );
};

export default Products;
