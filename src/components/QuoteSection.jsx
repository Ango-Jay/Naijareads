import React from "react";
import { Container, Row, Col } from "reactstrap";
import QuoteBlock from "./QuoteBlock";

const QuoteSection = () => {
  return (
    <Container className="section_left">
      <Row>
        <Col lg="12" xs="12" md="12" sm="12">
          <h2>Quotes</h2>
        </Col>
        <Col>
          <QuoteBlock />
        </Col>
        <Col className="search-links">
          <p>Best quotes</p>
          <p>Love quotes</p>
          <p>Inspirational quotes</p>
          <p>Funny quotes</p>
          <p>Motivational quotes</p>
          <p>Life quotes</p>
          <p>Friends quotes</p>
          <p>Positive quotes</p>
          <p>More quotes</p>
        </Col>
      </Row>
    </Container>
  );
};

export default QuoteSection;
