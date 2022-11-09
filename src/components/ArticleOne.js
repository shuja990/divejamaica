import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";

import star from "../assets/star.png";
import explorer from "../assets/explorer.png";
import security from "../assets/security.jpg";
import aeroplane from "../assets/aeroplane.png";
import aeroplanefumes from "../assets/aeroplane-fumes.png";

const ArticleOne = () => {
  return (
    <article>
      <div className="container">
        <div
          className="article-one"
          id="article-one"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="article-one-content">
            <div className="article-one--h1">
              <h1>
                NEVER STOP <span>EXPLORING</span> THE WORLD{" "}
                <FontAwesomeIcon
                  style={{ color: "#db021c" }}
                  icon={faEarthAmerica}
                />
              </h1>
              <img src={star} className="star-one" alt="star-one" />
              <img src={star} className="star-two" alt="star-two" />
              <img src={star} className="star-three" alt="star-three" />
              <img className="aeroplane" src={aeroplane} alt="aeroplane" />
              <img
                className="aeroplane-fumes"
                src={aeroplanefumes}
                alt="aeroplane"
              />
            </div>
            <p>
              Welcome to Kelly’s Water Sports Jamaica Ltd! We specialize in fun
              water sports activities such as; scuba diving, parasailing,
              tubing, snorkeling, deep sea fishing and glass bottom boat rides.
              Take the opportunity to venture across our beautiful ocean and
              explore some of the world’s most dynamic marine life. Our tours
              provide the perfect experience for family, friends and couples.
            </p>
            <div className="explore-now">
              <button>Explore Now</button>
              <img src={star} className="exploreStar-one" alt="star-one" />
              <img src={star} className="exploreStar-two" alt="star-two" />
            </div>
          </div>
          <div
            className="article-one-explorer"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <img src={star} className="travel-star-one" alt="star-three" />
            <img src={star} className="travel-star-two" alt="star-three" />
            <img className="explorer" src={explorer} alt="explorer" />
            <div className="explorer-security">
              <img src={security} alt="security" />
              <div>
                <h3>24/7</h3>
                <p>Ensure security</p>
              </div>
            </div>
            {/* <div className="explorer-support">
              <div className="support-circle">
                <FontAwesomeIcon icon={faCheck} style={{ color: "white" }} />
              </div>
              <div>
                <h3>24/7</h3>
                <p>Guide Support</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleOne;
