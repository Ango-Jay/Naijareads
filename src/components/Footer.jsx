import React from "react";
import { Container, Col, Row, List } from "reactstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright
} from "react-icons/fa";
import { IconContext } from "react-icons";
import google_play from "../../public/assets/google_play.png";
import apple_play from "../../public/assets/apple_play.svg";

const Footer = () => {
  return (
    <div className="footergallery-bg footer_padding">
      <Container>
        <Row>
          <Col className="ml-auto" xs="3">
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
          <Col className="ml-auto" xs="3">
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
          <Col className="ml-auto" xs="3">
            <h5 className="footer_text">CONNECT</h5>
            <IconContext.Provider value={{ className: "footer_icons" }}>
              <FaFacebook className="mx-1" />
              <FaTwitter className="mx-1" />
              <FaInstagram className="mx-1" />
              <FaLinkedinIn className="mx-1" />
            </IconContext.Provider>
          </Col>
          <Col xs="3" className="mr-auto">
            <div>
              <img
                role="button"
                className=" footer-btn "
                src={google_play}
                alt="google_play"
              />

              <img
                role="button"
                className=" footer-btn"
                src={apple_play}
                alt="apple_store"
              />
            </div>

            <div>
              <p className="text-center">
                <FaRegCopyright className="mx-1" />
                2021 Goodreads, Inc. Desktop version
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
