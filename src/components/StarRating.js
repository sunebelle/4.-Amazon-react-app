import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import StarRateIcon from "@material-ui/icons/StarRate";
import "./StarRating.css";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const classes = useStyles();
  return (
    <Container className="themed-container bg-white py-4 mb-4 " fluid={true}>
      <Row className="user__rating">
        <Col sm="2 d-flex justify-content-center align-item-center m-auto orange">
          <Avatar className={classes.orange}>N</Avatar>
        </Col>
        <Col>
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
      </Row>
    </Container>
  );
};

export default StarRating;
