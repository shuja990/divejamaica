import "animate.css";

import Scuba from "../assets/scuba.jpg";
import Snork from "../assets/snork.jpg";
import Speed from "../assets/speed.jpg";
import Para from "../assets/para.jpg";
import Board from "../assets/board.jpg";
import Deep from "../assets/deep.jpg";

import { useNavigate } from "react-router-dom";

const ArticleTwo = ({ margin }) => {
  const navigate = useNavigate();
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
            style={{ backgroundImage: `url(${Scuba})` }}
            onClick={() => navigate("/scuba-diving")}
          >
            {/* <FontAwesomeIcon className="icon" icon={faSuitcaseRolling} /> */}
            <div className="name-container">
              <h2>Scuba Diving</h2>
            </div>
            {/* <p>
              For Scuba Diving – Diving and Flying is not recommended. All
              participants will be required to complete a health questionnaire
              prior to diving. For persons with a medical conditions they are
              required to get a release from a doctor.
            </p> */}
          </div>
          <div
            className="booking tour"
            data-aos="fade-up-left"
            style={{ backgroundImage: `url(${Para})` }}
            onClick={() => navigate("/para-sailing")}
            data-aos-duration="1200"
          >
            <div className="name-container">
              <h2>Para Sailing</h2>
            </div>
            {/* <p>
              Soaring 300 FT above Azul waters with 360 panoramic views of
              Montgeo Bay is what you will experience with Kellys Watersports.
              Our certified crew ensures that all guests (Max 10) are attended
              to and briefed on safety. Then you’re ready to fly! Take off and
              land your 10-minute flight right from the deck of the boat. With
              single, double, and triple harnesses available your parasail will
              carry you, your family, and friends high above the clear blue
              waters of Grace Bay and nearby coral reef.
            </p> */}
          </div>
          <div
            className="choices tour"
            data-aos="fade-down-right"
            style={{ backgroundImage: `url(${Deep})` }}
            onClick={() => navigate("/deep-sea-fishing")}
            data-aos-duration="1300"
          >
            <div className="name-container">
              <h2>Deep Sea Fishing</h2>
            </div>
            {/* <p>
              Deep Sea fishing draws all anglers, from beginners to
              professionals, straight to our jetty for their thrilling adventure
              with us. Marlin, wahoo, dorado, tuna, bonito and more all offer
              sporting action to boast about. Spend an unforgettable voyage off
              the West Coast, well-beyond the reefs, to the areas of incredible
              depths where the monster fish dwell as the sea floor drops off
              past the 3000m mark.
            </p> */}
          </div>
          <div
            style={{ backgroundImage: `url(${Snork})` }}
            className="tour-guide tour"
            data-aos="fade-up-right"
            onClick={() => navigate("/snorkeling")}
            data-aos-duration="1100"
          >
            <div className="name-container">
              <h2>Snorkeling</h2>
            </div>
            <p></p>
          </div>
          <div
            style={{ backgroundImage: `url(${Board})` }}
            className="tour-guide tour"
            onClick={() => navigate("/water-ski")}
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <div className="name-container">
              <h2>Water Ski, wake board + knee board</h2>
            </div>
            <p></p>
          </div>
          <div
            className="tour-guide tour"
            style={{ backgroundImage: `url(${Speed})` }}
            data-aos="fade-up-right"
            onClick={() => navigate("/speed-boat")}
            data-aos-duration="1100"
          >
            <div className="name-container">
              <h2>Speed Boat</h2>
            </div>
            <p></p>
          </div>
          <div
            className="tour-guide tour"
            style={{ backgroundImage: `url(${Scuba})` }}
            data-aos="fade-up-right"
            onClick={() => navigate("/glass-bottom-boat")}
            data-aos-duration="1100"
          >
            <div className="name-container">
              <h2>Glass bottom boat</h2>
            </div>
            <p></p>
          </div>
          <div
            className="tour-guide tour"
            style={{ backgroundImage: `url(${Scuba})` }}
            onClick={() => navigate("/willy-boat-rides")}
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <div className="name-container">
              <h2>Willy boat rides</h2>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleTwo;
