import React from "react";
import "./Home.css";
import CarouselHome from "../CarouselHome";
import Products from "../Products";
import TopHome from "../TopHome";
import DiscoverHome from "../DiscoverHome";

const Home = () => {
  return (
    <>
      {/* <div className="container-fluid"> */}
      <TopHome />
      <CarouselHome />
      <Products />
      <DiscoverHome title="Stuffed Animals & Toys under $10" />
    </>
  );
};

export default Home;
