import React from "react";
import { Container, Col, Row, Button } from "reactstrap";
import { FaAmazon, FaFacebookSquare, FaApple } from "react-icons/fa";

const SignUpIn = () => {
  return (
    <Container className="padding">
      <Row>
        <Col>
          <h5 className="font-bold text-center">Discover and read more</h5>
          <Button className="text-center m-2">
            <FaFacebookSquare className="mx-1 " />
            Continue with Facebook
          </Button>
          <Button className="text-center m-2">
            <FaAmazon className="mx-1 " /> Continue with Amazon
          </Button>
          <Button outline className="text-center m-2">
            <FaApple className="mx-1 " />
            Continue with Apple
          </Button>
          <Button className="text-center m-2">Sign up wtih E-mail</Button>
          <p className="font_small text-center m-1">
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
