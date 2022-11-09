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
              For Scuba Diving – Diving and Flying is not recommended. All
              participants will be required to complete a health questionnaire
              prior to diving. For persons with a medical conditions they are
              required to get a release from a doctor.
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
              Soaring 300 FT above Azul waters with 360 panoramic views of
              Montgeo Bay is what you will experience with Kellys Watersports.
              Our certified crew ensures that all guests (Max 10) are attended
              to and briefed on safety. Then you’re ready to fly! Take off and
              land your 10-minute flight right from the deck of the boat. With
              single, double, and triple harnesses available your parasail will
              carry you, your family, and friends high above the clear blue
              waters of Grace Bay and nearby coral reef.
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
              Deep Sea fishing draws all anglers, from beginners to
              professionals, straight to our jetty for their thrilling adventure
              with us. Marlin, wahoo, dorado, tuna, bonito and more all offer
              sporting action to boast about. Spend an unforgettable voyage off
              the West Coast, well-beyond the reefs, to the areas of incredible
              depths where the monster fish dwell as the sea floor drops off
              past the 3000m mark.
            </p>
          </div>
          <div
            className="tour-guide tour"
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <FontAwesomeIcon className="icon" icon={faSuitcaseRolling} />
            <h2>Snorkeling</h2>
            <p></p>
          </div>
          <div
            className="tour-guide tour"
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <FontAwesomeIcon className="icon" icon={faSuitcaseRolling} />
            <h2>Water Ski, wake board + knee board</h2>
            <p></p>
          </div>
          <div
            className="tour-guide tour"
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <FontAwesomeIcon className="icon" icon={faSuitcaseRolling} />
            <h2>Speed Boat</h2>
            <p></p>
          </div>
          <div
            className="tour-guide tour"
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <FontAwesomeIcon className="icon" icon={faSuitcaseRolling} />
            <h2>Glass bottom boat</h2>
            <p></p>
          </div>
          <div
            className="tour-guide tour"
            data-aos="fade-up-right"
            data-aos-duration="1100"
          >
            <FontAwesomeIcon className="icon" icon={faSuitcaseRolling} />
            <h2>Willy boat rides</h2>
            <p></p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleTwo;
