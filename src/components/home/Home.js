import React from "react";
import "./Home.css";
import CarouselHome from "./CarouselHome";
import Products from "./products/Products";
import TopHome from "./TopHome";
import DiscoverHome from "./DiscoverHome";

const Home = () => {
  return (
    <div className="d-flex flex-column">
      <TopHome />
      <CarouselHome />
      <Products />
      <DiscoverHome title="Stuffed Animals & Toys under $10" />
    </div>
  );
};

export default Home;
