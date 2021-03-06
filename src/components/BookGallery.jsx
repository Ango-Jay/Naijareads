import React from "react";
import { Container, Col, Row } from "reactstrap";
import book from "../../public/assets/gr_bookgall.jpg";
import arrow from "../../public/assets/gr_arow.png";

const BookGallery = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="bookgallery-bg">
            <h5>What will you discover?</h5>
            <div classname="source-book-gall">
              <p className="book-gall-text">Because Brian liked...</p>
              <img className="sbook-gall-img" src={book} alt="test book" />
              <img className="sbook-gall-img" src={book} alt="test book" />
              <img className=" sbook-gall-img" src={book} alt="test book" />
              <img
                className=" sbook-gall-img"
                src={book}
                alt="test book"
              />{" "}
            </div>
            <div>
              <img src={arrow} alt="arrow" />
            </div>
            <div className="result-book-img">
              <p className=" book-gall-text ">he discovered:</p>
              <p>Historical Fiction, Book Club</p>
              <img className="rbook-gall-img" src={book} alt="test book" />
              <canvas className="canvas"></canvas>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookGallery;
