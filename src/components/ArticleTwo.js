import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "animate.css";

import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";

import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

import { faLocation } from "@fortawesome/free-solid-svg-icons";

const ArticleTwo = ({ margin }) => {
  return (
    <article>
      <div className="container">
        <div className="article-two-header">
          <h4 style={{ color: "#CD0118" }}>WHAT WE OFFER</h4>
          <h1>We Offer Best Services</h1>
        </div>
        <div className="article-two" id="article-two">
          <div
            className="tour-guide tour"
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <FontAwesomeIcon className="icon" icon={faSuitcaseRolling} />
            <h2>Scuba Diving</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              nullam ante tellus dictumst.
            </p>
          </div>
          <div
            className="booking tour"
            data-aos="fade-up-left"
            data-aos-duration="1200"
          >
            <FontAwesomeIcon className="icon" icon={faNewspaper} />
            <h2>Para Sailing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              nullam ante tellus dictumst.
            </p>
          </div>
          <div
            className="choices tour"
            data-aos="fade-down-right"
            data-aos-duration="1300"
          >
            <FontAwesomeIcon className="icon" icon={faLocation} />
            <h2>Deep Sea Fishing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              nullam ante tellus dictumst.
            </p>
          </div>
          <div
            className="tour-guide tour"
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <FontAwesomeIcon className="icon" icon={faSuitcaseRolling} />
            <h2>Snorkeling</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              nullam ante tellus dictumst.
            </p>
          </div>
          <div
            className="tour-guide tour"
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <FontAwesomeIcon className="icon" icon={faSuitcaseRolling} />
            <h2>Water Ski, wake board + knee board</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              nullam ante tellus dictumst.
            </p>
          </div>
          <div
            className="tour-guide tour"
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <FontAwesomeIcon className="icon" icon={faSuitcaseRolling} />
            <h2>Speed Boat</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              nullam ante tellus dictumst.
            </p>
          </div>
          <div
            className="tour-guide tour"
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <FontAwesomeIcon className="icon" icon={faSuitcaseRolling} />
            <h2>Glass bottom boat</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              nullam ante tellus dictumst.
            </p>
          </div>
          <div
            className="tour-guide tour"
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <FontAwesomeIcon className="icon" icon={faSuitcaseRolling} />
            <h2>Willy boat rides</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              nullam ante tellus dictumst.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleTwo;
