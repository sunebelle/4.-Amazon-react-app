import React from "react";
import Product from "./Product";
import "./Products.css";
import productsData from "./ProductData";
import { Container, Row } from "reactstrap";

const Products = () => {
  return (
    <div className="products container-fluid">
      <Container className="themed-container p-0" fluid={true}>
        <Row>
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
      </Container>
    </div>
  );
};

export default Products;
