import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import ControlledCarousel from "./ControlledCarousel";

const Experience = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", marginTop: "10px" }}>
          My Experience
        </h1>
      </div>
      <div className="experience">
        <section className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h1 style={{ borderBottom: "2px solid white" }}> Xerde Tech.</h1>
              <span>
                <p>Job Function: FullStack Developer</p>
                <p>Location: Lagos Nigeria </p>
              </span>
              <p>
                I created two websites while working for this company, I also{" "}
                <span onClick={handleClick}>
                  <BsFillArrowRightCircleFill backgroundColor="white" />
                </span>{" "}
                {open ? (
                  " trained 10 new incoming student. My experience with my prev company was amazing"
                ) : (
                  <span onClick={handleClick}>
                    <BsFillArrowRightCircleFill backgroundColor="white" />
                  </span>
                )}{" "}
              </p>{" "}
            </div>
            <div>
              <img src="" alt="" className="about-image" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Experience;
