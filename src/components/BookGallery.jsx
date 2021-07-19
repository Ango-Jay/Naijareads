import React from "react";
import { Container, Col, Row } from "reactstrap";
import book from "../../public/assets/gr_bookgall.jpg";
import arrow from "../../public/assets/gr_arow.png";

const BookGallery = () => {
  return (
    <Container className="bookgallery-bg">
      <Row>
        <Col>
          <Container>
            <h5>What will you discover?</h5>
            <p>Because Brian liked:</p>
            <Row>
              <Col>
                <img className="m-2" src={book} alt="test book" />
                <img className="m-2" src={book} alt="test book" />
                <img className="m-2" src={book} alt="test book" />
                <img className="m-2" src={book} alt="test book" />
              </Col>
              <Col>
                <img className="m-2" src={arrow} alt="arrow" />
              </Col>
              <p>he discovered</p>
              <Col>
                <img className="m-2" src={book} alt="test book" />
              </Col>

              <p>Because Jane liked:</p>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default BookGallery;
