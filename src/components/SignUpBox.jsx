import React from "react";
import { Container, Col, Row, Button } from "reactstrap";
import { FaAmazon, FaFacebookSquare, FaApple } from "react-icons/fa";

const SignUpIn = () => {
  return (
    <Container className="sign-up">
      <Row>
        <Col>
          <h5 className="font-bold text-center">Discover and read more</h5>
          <Button className=" fb-button">
            <FaFacebookSquare className="mx-1 text-center" />
            Continue with Facebook
          </Button>
          <Button className=" am-button">
            <FaAmazon className="mx-1 text-center" /> Continue with Amazon
          </Button>
          <Button outline className="ap-button">
            <FaApple className="mx-1 text-center" />
            Continue with Apple
          </Button>
          <Button className="em-button">Sign up wtih E-mail</Button>
          <p className="text_small text-center m-1">
            By creating an account, you agree to the Goodreads Terms of Service
            and Privacy Policy.
          </p>
          <hr />
          <h5 className="text-center">
            Already a member ? <a href="#">Sign in</a>
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpIn;
