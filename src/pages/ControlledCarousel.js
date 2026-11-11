
import React, { useState } from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import image3 from "../images/plant.jpg";
import ecommerce from "../images/ecommerce.png";
import iconstruct from "../images/iconstruct.png";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleSelect = (selectedIndex) => {
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
          {/* PROJECT 1: ECOMMERCE */}
          <Carousel.Item className="pity">
            <Container>
              <Row className="justify-content-space-around">
                <Col lg={6}>
                  <div style={{ paddingLeft: "80px" }}>
                    <h1>
                      <span>Ecommerce Application</span>
                    </h1>

                    <p className="mt-3">
                      An e-commerce web based system with
                      receipt and invoice generation,
                      streamlining financial management
                      record-keeping and boosting efficiency
                      by 20%{" "}
                      {open ? (
                        " Identify key metrics and transform raw data into meaningful actionable information"
                      ) : (
                        <span onClick={handleClick}>
                          <BsFillArrowRightCircleFill />
                        </span>
                      )}
                    </p>
                  </div>
                </Col>

                <Col lg={6}>
                  <div>
                    <a href="https://main--magical-jelly-0e9bdd.netlify.app/">
                      <img
                        src={ecommerce}
                        alt="Ecommerce Application"
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

          {/* PROJECT 2: ENGINEERING WEBSITE */}
          <Carousel.Item>
            <Container>
              <Row>
                <Col lg={6}>
                  <div
                    style={{
                      paddingLeft: "80px",
                      marginBottom: "90px",
                    }}
                  >
                    <h1>
                      <span>Simple Web Page</span>
                    </h1>

                    <p className="mt-3">
                      A web application for an engineering
                      firm to book appointment, make
                      payments with receipt and invoice
                      generation, streamlining financial
                      management record-keeping and
                      boosting efficiency by 20%{" "}
                      {open ? (
                        " that meet user requirements and procedures technique."
                      ) : (
                        <span onClick={handleClick}>
                          <BsFillArrowRightCircleFill />
                        </span>
                      )}
                    </p>
                  </div>
                </Col>

                <Col lg={6}>
                  <div>
                    <a href="https://coniweb.netlify.app/">
                      <img
                        src={iconstruct}
                        alt="Engineering Website"
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

          {/* PROJECT 3: GRAPHIC DESIGNS */}
          <Carousel.Item>
            <Container>
              <Row>
                <Col lg={6}>
                  <div style={{ paddingLeft: "80px" }}>
                    <h1>
                      <span
                        style={{
                          borderBottom: "2px solid white",
                        }}
                      >
                        Graphic Designs
                      </span>
                    </h1>

                    <p className="mt-3">
                      Projects on various Graphic designs
                    </p>
                  </div>
                </Col>

                <Col lg={6}>
                  <div>
                    <a href="https://jessicaojay1-my-canva-site.my.canva.site/projects">
                      <img
                        src={image3}
                        alt="Graphic Designs"
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

          {/* PROJECT 4: ADLANTIQUE */}
          <Carousel.Item>
            <Container>
              <Row className="align-items-center">
                <Col lg={6}>
                  <div
                    style={{
                      paddingLeft: "80px",
                      marginBottom: "40px",
                    }}
                  >
                    <h1>
                      <span
                        style={{
                          borderBottom: "2px solid white",
                        }}
                      >
                        Adlantique
                      </span>
                    </h1>

                    <h5
                      className="mt-3"
                      style={{ color: "#f0d9b5" }}
                    >
                      Advertising & Business Platform
                    </h5>

                    <p className="mt-3">
                      A responsive advertising and
                      business services website designed
                      to help businesses explore
                      advertising solutions and
                      promotional packages.
                    </p>

                    <p>
                      Built using HTML, CSS, JavaScript,
                      and Bootstrap, featuring service
                      listings, business packages,
                      interactive elements, and user
                      registration interfaces.
                    </p>

                    <a
                      href="https://github.com/ujuojadi/adlantique"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "15px",
                        padding: "12px 24px",
                        backgroundColor: "#ffffff",
                        color: "#222222",
                        textDecoration: "none",
                        borderRadius: "8px",
                        fontWeight: "bold",
                      }}
                    >
                      View Project{" "}
                      <BsFillArrowRightCircleFill />
                    </a>
                  </div>
                </Col>

                <Col lg={6}>
                  <div
                    style={{
                      padding: "20px",
                      textAlign: "center",
                    }}
                  >
                    <a
                      href="https://github.com/ujuojadi/adlantique"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://raw.githubusercontent.com/ujuojadi/adlantique/master/adimage/bannerad.png"
                        alt="Adlantique advertising website"
                        style={{
                          width: "100%",
                          maxWidth: "500px",
                          height: "auto",
                          maxHeight: "320px",
                          objectFit: "contain",
                          borderRadius: "12px",
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
