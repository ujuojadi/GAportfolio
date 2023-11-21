import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import image2 from "../images/logo.png";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

function Footer() {
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
          Contact Us
        </h1>
      </div>
      <footer class="lighter pt-5 mt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-3">
              <ul class=" nav nav-social">
                <li class="nav-item">
                  <img src={image2} width="60" height="60" alt="" />
                  <p style={{ display: "inline", fontStyle: "italic" }}>
                    JessicaOjadi
                  </p>
                </li>
                <li class="nav-item">
                  <a href="https://twitter.com/Adlantique4You?s=08">
                    <img
                      src="adimage/Adlantique_files/twitter-primary.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li class="nav-item">
                  <a href="https://www.linkedin.com/in/adlantique-adlantique-08a719196">
                    <img
                      src="adimage/Adlantique_files/linkedin-primary.svg"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-8">
              <div class="row justify-content-between six">
                <div class="col-lg-4 mb-3">
                  <ol class="navbar-nav styled" style={{ fontStyle: "italic" }}>
                    <li>
                      <h6>Contact Details</h6>
                    </li>
                    <li>
                      Phone Number : <b>+13375572068</b>
                    </li>
                    <li>
                      Address: <b>511B Bertrand Drive Louisiana Lafayette</b>
                    </li>
                    <li>
                      Drop a message: <input type="text" />
                      <button
                        class="btn btn-success"
                        style={{ display: "block", marginTop: "4px" }}
                      >
                        Submit
                      </button>
                    </li>
                  </ol>
                </div>
                <div class="col-lg-4 mb-3">
                  <ol class=" navbar-nav styled">
                    <li>
                      <h6>Company</h6>
                    </li>
                    <li>
                      <span>
                        <BsFacebook />
                      </span>
                      Facebook
                    </li>
                    <li>
                      {" "}
                      <span>
                        <FaTwitterSquare />
                      </span>
                      Twitter
                    </li>
                    <li>
                      {" "}
                      <span>
                        <FaInstagramSquare />
                      </span>
                      Instagram
                    </li>
                    <li>
                      {" "}
                      <span>
                        <BsLinkedin />
                      </span>
                      Linkedin ko
                    </li>
                  </ol>
                </div>
                <div class="col-lg-4">
                  <p>
                    Whatever is worth doing is worth doing well. Give or Take
                    Nothing last forever.......
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
