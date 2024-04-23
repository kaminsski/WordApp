import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer style={{backgroundColor:"rgba(0, 0, 0, 1)"}} className=" shadow">
      <Container className="py-4">
        <Row className="justify-content-between align-items-center">
          <Col xs="auto">
            <span className="display-6 font-italic text-white fw-bold">WordApp</span>
          </Col>
          <Col xs="auto">
            <ul className="list-unstyled d-flex mb-0">
              <li className="mr-3">
                <a href="#" className="text-decoration-none">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <p style={{color:"white"}} className=" text-center text-white">
           2024{" "}
          <a href="https://github.com/kaminsski" className="text-decoration-none text-primary">
            Kanat™
          </a>{" "}
          All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}
