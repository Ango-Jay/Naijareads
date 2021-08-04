import React from "react";
import SearchBar from "./SearchBar";
import { Container, Row, Col } from "reactstrap";

const SearchSection = () => {
  return (
    <Container className="section_left">
      <Row>
        <Col lg="12" xs="12" md="12" sm="12">
          <h2>Search and browse books</h2>
        </Col>
        <Col>
          <SearchBar />
        </Col>
      </Row>
      <Row>
        <Col className="search-links">
          <p>Art</p>
          <p>Biography</p>
          <p>Business</p>
          <p>Children's</p>
          <p>Christain</p>
          <p>Classics</p>
          <p>Comics</p>
          <p>Cookbooks</p>
        </Col>
        <Col className="search-links">
          <p>Ebooks</p>
          <p>Fantasy</p>
          <p>Fiction</p>
          <p>Graphic Novels</p>
          <p>Historical Fiction</p>
          <p>History</p>
          <p>Horror</p>
          <p>Memoir</p>
        </Col>
        <Col className="search-links">
          <p>Music</p>
          <p>Mystery</p>
          <p>Nonfiction</p>
          <p>Poetry</p>
          <p>Psychology</p>
          <p>Romance</p>
          <p>Science</p>
          <p>Science Fiction</p>
        </Col>
        <Col className="search-links">
          <p>Self Help</p>
          <p>Sports</p>
          <p>Thriller</p>
          <p>Travel</p>
          <p>Young Adults</p>
          <p>More genres</p>
        </Col>
      </Row>
    </Container>
  );
};
export default SearchSection;
