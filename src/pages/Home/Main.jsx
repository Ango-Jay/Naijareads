import React from "react";
import ReactDOM from "react-dom";
import { Container, Col, Row } from "reactstrap";
import NavBar from "../../components/Nav";
import "./main.css";
import { ReactComponent as Banner } from "../../assets/image2vector.svg";
import BookGallery from "../../components/BookGallery";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Banner />
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
      </React.Fragment>
    );
  }
}

export default Main;
