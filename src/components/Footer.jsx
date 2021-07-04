import React from "react";
import { Container, Col, Row, List } from "reactstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <Container className="footergallery-bg">
      <Row>
        <Col>
          <h5 className="footer_text">COMPANY</h5>
          <List type="unstyled">
            <a href="#" className="footer_links">
              {" "}
              <li>About us</li>{" "}
            </a>
            <a href="#" className="footer_links">
              {" "}
              <li>Careers</li>{" "}
            </a>
            <a href="#" className="footer_links">
              {" "}
              <li>Terms</li>{" "}
            </a>
            <a href="#" className="footer_links">
              {" "}
              <li>Privacy</li>{" "}
            </a>
            <a href="#" className="footer_links">
              {" "}
              <li>Interest Based Ads</li>{" "}
            </a>
            <a href="#" className="footer_links">
              {" "}
              <li>Ads Preferences</li>{" "}
            </a>
            <a href="#" className="footer_links">
              {" "}
              <li>Help</li>{" "}
            </a>
          </List>
        </Col>
        <Col>
          <h5 className="footer_text">WORK WITH US</h5>
          <List type="unstyled">
            <a href="#" className="footer_links">
              {" "}
              <li>Authors</li>
            </a>
            <a href="#" className="footer_links">
              {" "}
              <li>Advertise</li>
            </a>
            <a href="#" className="footer_links">
              {" "}
              <li>Authors and ads bloc</li>
            </a>
            <a href="#" className="footer_links">
              {" "}
              <li>API</li>
            </a>
          </List>
        </Col>
        <Col>
          <h5 className="footer_text">CONNECT</h5>
          <IconContext.Provider value={{ className: "footer_icons" }}>
            <FaFacebook className="mx-1" />
            <FaTwitter className="mx-1" />
            <FaInstagram className="mx-1" />
            <FaLinkedinIn className="mx-1" />
          </IconContext.Provider>
        </Col>
      </Row>
      <p>2021 Goodreads, Inc. Desktop version</p>
    </Container>
  );
};

export default Footer;
