import React from "react";
import listPic from "../../public/assets/llgr.jpg";
import { Container, Row, Col } from "reactstrap";

const LoveList = () => {
  return (
    <div className="my-4">
      <h3>Love lists ?</h3>
      <Container>
        <Row>
          <Col className="d-inline " xs="6" sm="6" lg="6">
            <h5>Best Books of the 20th Century</h5>
            <p className="d-inline">8000 books | </p>
            <p className="d-inline">5000 voters</p>
          </Col>
          <Col className="ml-2" xs="6" sm="6" lg="6">
            <Container>
              <Row>
                <Col xs="3" lg="3">
                  {" "}
                  <img className="mr-1" src={listPic} alt="list pic" />
                </Col>
                <Col xs="3" lg="3">
                  {" "}
                  <img className="mr-1" src={listPic} alt="list pic" />
                </Col>
                <Col xs="3" lg="3">
                  {" "}
                  <img className="mr-1" src={listPic} alt="list pic" />
                </Col>
                <Col xs="3" lg="3">
                  <img className="mr-1" src={listPic} alt="list pic" />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
};

export default LoveList;
