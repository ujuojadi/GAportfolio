import React from "react";
import Header from "../components/header";
import image1 from "../images/backg.jpg";
import image4 from "../images/black.jpg";
import image5 from "../images/brown.jpg";
import Image from "react-bootstrap/Image";
import Me from "../images/me.JPG";
import Typewriter from "./Typewriter";
import {
  Carousel,
  Card,
  Container,
  Row,
  Col,
  ContainerFluid,
} from "react-bootstrap";
import CrossFade from "./CrossFade";

const Home = () => {
  return (
    <div class="lightSpeedIn">
      <div className="home">
        <Header />
        <div>
          <Container>
            <Row>
              <Col>
                <Typewriter />
              </Col>
              <Col>
                <CrossFade />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
