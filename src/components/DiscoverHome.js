import { Card, CardContent } from "@material-ui/core";
import React from "react";
import { CardBody, CardImg, CardTitle, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./DiscoverHome.css";
import items from "./DiscoverData";
const DiscoverHome = ({ title }) => {
  const discoverImg = items.map((item) => {
    return (
      <Link key={item.id} to={`/products/${item.id}`}>
        <CardImg className="discover__img" src={item.img} />
      </Link>
    );
  });
  return (
    <Container className="themed-container discover__home" fluid={true}>
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            {title}
            <small>
              <Link className="text-decoration-none  ps-2" to="/">
                shop now
              </Link>
            </small>
          </CardTitle>
          <CardContent className="discover__content m-0 p-0">
            {discoverImg}
          </CardContent>
        </CardBody>
      </Card>
    </Container>
  );
};

export default DiscoverHome;
