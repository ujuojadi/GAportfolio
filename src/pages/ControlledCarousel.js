import React, { useState } from "react";
import {
  Carousel,
  Card,
  Container,
  Row,
  Col,
  ContainerFluid,
} from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import image3 from "../images/plant.jpg";
import ecommerce from "../images/ecommerce.png";
import iconstruct from "../images/iconstruct.png";
import { Link } from "react-router-dom";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div>
        <h1
          style={{
            textAlign: "center",
            marginTop: "15px",
            marginBottom: "30px",
          }}
        >
          Projects
        </h1>
      </div>
      <div className="experience">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          style={{ marginBottom: "40px" }}
        >
          <Carousel.Item className="pity">
            <Container>
              <Row class="justify-content-space-around">
                <Col class="col-lg-6">
                  <div style={{ paddingLeft: "80px" }}>
                    <h1>
                      <span>Ecommerce Application</span>
                    </h1>
                    <span></span>
                    <p class="mt-3">
                      An e-commerce web based system with receipt and invoice
                      generation, streamlining financial management
                      record-keeping and boosting efficiency by 20%{" "}
                      {open ? (
                        " Identify key metrics and transform raw data into meaningful actionable information"
                      ) : (
                        <span onClick={handleClick}>
                          <BsFillArrowRightCircleFill backgroundColor="white" />
                        </span>
                      )}{" "}
                    </p>{" "}
                  </div>
                </Col>
                <Col class="col-lg-6">
                  <div>
                    <a href="https://main--magical-jelly-0e9bdd.netlify.app/">
                      <img
                        className=""
                        src={ecommerce}
                        alt="Second slide"
                        style={{
                          width: "35rem",
                          height: "20rem",
                          paddingLeft: "80px",
                        }}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item>
            <Container>
              <Row>
                <Col class="col-lg-6">
                  <div style={{ paddingLeft: "80px", marginBottom: "90px" }}>
                    <h1>
                      <span>Iconstruct Engineering Firm</span>
                    </h1>
                    <p class="mt-3">
                      A web application for an engineering firm to book
                      appointment, make payments with receipt and invoice
                      generation, streamlining financial management
                      record-keeping and boosting efficiency by 20%{" "}
                      {open ? (
                        " that meet user requirements and procedures technique."
                      ) : (
                        <span onClick={handleClick}>
                          <BsFillArrowRightCircleFill backgroundColor="white" />
                        </span>
                      )}{" "}
                    </p>{" "}
                  </div>
                </Col>
                <Col class="col-lg-6">
                  <div>
                    <a href="https://coniweb.netlify.app/">
                      <img
                        className=""
                        src={iconstruct}
                        alt="Second slide"
                        style={{
                          width: "35rem",
                          height: "20rem",
                          paddingLeft: "100px",
                        }}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col class="col-lg-6">
                  <div style={{ paddingLeft: "80px" }}>
                    <h1>
                      <span style={{ borderBottom: "2px solid white" }}>
                        Graphic Designs
                      </span>
                    </h1>
                    <p class="mt-3">Projects on Graphic designs using Canva </p>{" "}
                  </div>
                </Col>
                <Col class="col-lg-6">
                  <div>
                    <a href="https://jessicaojay1-my-canva-site.my.canva.site/projects">
                      <img
                        className=""
                        src={image3}
                        alt="Second slide"
                        style={{
                          width: "35rem",
                          height: "20rem",
                          paddingLeft: "100px",
                        }}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default ControlledCarousel;
