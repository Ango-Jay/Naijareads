import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Col, Row } from "reactstrap";
import NavBar from "../../components/Nav";
import "./main.css";
import BookGallery from "../../components/BookGallery";
import Footer from "../../components/Footer";
import SignUpBox from "../../components/SignUpBox";
import SearchSection from "../../components/SearchSection";
import QuoteSection from "../../components/QuoteSection";
import BestBooks from "../../components/BestBooks";
import NewSect from "../../components/NewsSect";
import LoveList from "../../components/LoveList";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SignUpBox />
        <div role="img" className="banner_bg position-relative"></div>

        <Container className="section_left">
          <Row className="initial-divs-row">
            <Col className="initial-divs">
              <h4>Deciding what to read next?</h4>
              <p>
                You’re in the right place. Tell us what titles or genres you’ve
                enjoyed in the past, and we’ll give you surprisingly insightful
                recommendations.
              </p>
            </Col>
            <Col className="initial-divs">
              <h4>What are your friends reading?</h4>
              <p>
                Chances are your friends are discussing their favorite (and
                least favorite) books on Goodreads.
              </p>
            </Col>{" "}
          </Row>
          <Row>
            <Col xs="8" md="8" sm="8" lg="8">
              <BookGallery />
              <SearchSection />
              <QuoteSection />
              <BestBooks />
            </Col>

            <Col xs="4" md="4" sm="4" lg="4">
              <NewSect />
              <LoveList />
            </Col>
          </Row>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
