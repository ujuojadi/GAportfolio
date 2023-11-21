import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import image2 from "../images/logo.png";
import image4 from "../images/black.jpg";

function Header() {
  return (
    <>
      <Navbar bg="" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={image2}
                width="60"
                height="60"
                className="d-inline-block align-top "
              />{" "}
              <p style={{ display: "inline", fontStyle: "italic" }}>
                JessicaOjadi
              </p>
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#home">About Me</Nav.Link>
              <Nav.Link href="#features">Experience</Nav.Link>
              <Nav.Link href="#pricing">Hobbies</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
