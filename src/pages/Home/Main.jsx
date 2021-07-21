import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Col, Row } from "reactstrap";
import NavBar from "../../components/Nav";
import "./main.css";
import BookGallery from "../../components/BookGallery";
import Footer from "../../components/Footer";
import SignUpBox from "../../components/SignUpBox";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <SignUpBox />

        <div role="img" className="banner_bg position-relative"></div>

        <Container>
          <Row>
            <Col>
              <h4>Deciding what to read next?</h4>
              <p>
                You’re in the right place. Tell us what titles or genres you’ve
                enjoyed in the past, and we’ll give you surprisingly insightful
                recommendations.
              </p>
            </Col>
            <Col>
              <h4>What are your friends reading?</h4>
              <p>
                Chances are your friends are discussing their favorite (and
                least favorite) books on Goodreads.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <BookGallery sm={{ size: 6, order: 2, offset: 1 }} />
            </Col>
          </Row>
        </Container>
        <Footer className="pt-3 mt-5" />
      </React.Fragment>
    );
  }
}

export default Main;
