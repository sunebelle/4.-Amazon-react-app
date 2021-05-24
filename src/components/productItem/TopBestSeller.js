import React from "react";
import { Container, Table } from "reactstrap";
import "./TopBestSeller.css";

const TopBestSeller = () => {
  return (
    <div className="top__bestSeller my-4">
      <Container className="themed-container" fluid={true}>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Sellers</th>
              <th>Product</th>
              <th>Overal rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Amazon</td>
              <td>Apples</td>
              <td className="star__color">{Array(4).fill("⭐")}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Ebay</td>
              <td>Mona Lisa's painting</td>
              <td className="star__color">{Array(5).fill("⭐")}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Alibaba</td>
              <td>Bitcoins</td>
              <td className="star__color">{Array(4).fill("⭐")}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TopBestSeller;
