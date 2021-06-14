import React from "react";
import { Container, Col, Row } from "reactstrap";

const BookGallery = () => {
  return (
    <Container className="bookgallery-bg">
      <Row>
        <Col>
          <h5>What will you discover?</h5>
          <p>Because Brian liked:</p>
          <p>Because Jane liked:</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BookGallery;
