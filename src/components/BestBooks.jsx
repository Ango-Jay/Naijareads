import React from "react";
import { Container, Row, Col } from "reactstrap";
import bestbooks from "../../public/assets/awardsgr.png";

const BestBooks = () => {
  return (
    <Container className="section_left">
      <Row>
        <Col lg="12" xs="12" md="12" sm="12">
          <h2>Goodreads Choice Awards: The Best Books 2020</h2>
        </Col>
        <Col className="mt-5">
          <img src={bestbooks} alt="best books" />
        </Col>
        <Col className="search-links">
          <p>Best Books 2020</p>
          <p>Best Fiction</p>
          <p>Best Mystery and Thriller</p>
          <p>Best Historical Fiction</p>
          <p>Best Fantasy</p>
          <p>Best Romance</p>
          <p>Best Science Fiction</p>
        </Col>
        <Col className="search-links">
          <p>Best History and Biography</p>
          <p>Best Science and Technology</p>
          <p>Best Food and Cookbooks</p>
          <p>Best Graphic Novels and Comics</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BestBooks;
