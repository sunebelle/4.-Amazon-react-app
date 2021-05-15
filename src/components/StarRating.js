import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import StarRateIcon from "@material-ui/icons/StarRate";
import "./StarRating.css";
import { Avatar } from "@material-ui/core";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <Container className="themed-container bg-white py-4 mb-4 " fluid={true}>
      <Row className="user__rating">
        <Col className="col-md-2 ">
          <Avatar className="w-50 h-100" />
        </Col>
        <Col className="">
          {[...Array(5)].map((_, i) => {
            const ratingValue = i + 1;
            return (
              <label key={Math.random() * 30}>
                <input
                  type="radio"
                  name="rating"
                  className="input__starRating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <div
                  style={{
                    color: `${
                      ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                    }`,
                  }}
                >
                  <StarRateIcon
                    className="star"
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </div>
              </label>
            );
          })}
          <p className="pt-2 m-0">
            Placerat orci nulla pellentesque dignissim enim sit amet venenatis
            urna. Tincidunt lobortis feugiat vivamus at. Purus gravida quis
            blandit turpis cursus in hac habitasse platea. Lorem ipsum dolor sit
            amet consectetur adipiscing. Eget nullam non nisi est sit amet
            facilisis magna.
          </p>
        </Col>
        <hr />
      </Row>
    </Container>
  );
};

export default StarRating;
