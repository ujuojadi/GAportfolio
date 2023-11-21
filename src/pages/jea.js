import React from "react";
import book from "../images/book.jpg";

const Jea = () => {
  return (
    <>
      <div>
        <section class="blonge mb-0">
          <div class="container text-center">
            <h4>
              <a class="pauses" href="/iconstruct/projects">
                RECE<span class="spans mt-4">NT PROJE</span>CTS
              </a>
            </h4>
          </div>

          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="container">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-lg-4  mb-4">
                      <img class="w-100" src={book} alt="First slide" />
                    </div>
                    <div class="col-lg-4 mb-4">
                      <img class="w-100" src={book} alt="First slide" />
                    </div>
                    <div class="col-lg-4  mb-4">
                      <img class="w-100" src={book} alt="First slide" />
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-lg-4  mb-4">
                      <img class="w-100" src={book} alt="First slide" />
                    </div>
                    <div class="col-lg-4  mb-4">
                      <img class="w-100" src={book} alt="First slide" />
                    </div>
                    <div class="col-lg-4  mb-4">
                      <img class="w-100" src={book} alt="First slide" />
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row">
                    <div class="col-lg-4  mb-4">
                      <img class="w-100" src={book} alt="First slide" />
                    </div>
                    <div class="col-lg-4  mb-4">
                      <img class="w-100" src={book} alt="First slide" />
                    </div>
                    <div class="col-lg-4  mb-4">
                      <img class="w-100" src={book} alt="First slide" />
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Jea;
