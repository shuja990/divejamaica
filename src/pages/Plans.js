import {
  faBook,
  faCameraRetro,
  faFish,
  faShip,
  faSwimmer,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Plans = () => {
  return (
    <article>
      <div className="container">
        <div
          className="article-two-header"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h4 style={{ color: "#E30C28" }}>Plans and Packages</h4>
          <h1>Your beach fun starts here</h1>
        </div>
        <div className="plan-packages" id="article-two">
          <div
            className="tour-guide tour"
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <FontAwesomeIcon className="icon" icon={faWater} />
            <h2>NON-MOTORIESED ACTIVITIES</h2>
            <p></p>
          </div>
          <div
            className="booking tour"
            data-aos="fade-up-left"
            data-aos-duration="1200"
          >
            <FontAwesomeIcon className="icon" icon={faFish} />
            <h2>Fishing</h2>
            <p></p>
          </div>
          <div
            className="choices tour"
            data-aos="fade-down-right"
            data-aos-duration="1300"
          >
            <FontAwesomeIcon className="icon" icon={faShip} />
            <h2>MOTORIESED ACTIVITIES</h2>
            <p></p>
          </div>
          <div
            className="tour-guide tour"
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <FontAwesomeIcon className="icon" icon={faSwimmer} />
            <h2>Scuba Diving</h2>
            <p></p>
          </div>
          <div
            className="tour-guide tour"
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <FontAwesomeIcon className="icon" icon={faCameraRetro} />
            <h2>Digital Underwater Camera</h2>
            <p></p>
          </div>
          <div
            className="tour-guide tour"
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <FontAwesomeIcon className="icon" icon={faBook} />
            <h2>Courses</h2>
            <p></p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Plans;
