import star from "./star.png";
import femaleTour from "./femaleTour.png";
import mark from "./mark.png";
import love from "./inlove-face.png";
import smile from "./smile-face.png";
import confused from "./confused-face.png";
import angry from "./angry-face.png";

const ArticleFour = () => {
  return (
    <article>
      <div className="container">
        <div className="article-four" id="article-four">
          <div
            className="aboutUs"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <h3 style={{ color: "#db021c" }}>ABOUT US</h3>
            <h1>Say Yes to Fun in the Sun!</h1>
            <p>
              Welcome to Kelly’s Water Sports Jamaica Ltd! We specialize in fun
              filled water sports activities such as; scuba diving, parasailing,
              tubing, snorkeling, deep sea fishing and glass bottom boat rides.
              Take the opportunity to venture across our beautiful ocean and
              explore some of the world’s most dynamic marine life. Our tours
              provide the perfect experience for family, friends and couples. We
              Offer a Variety of activities Make Kelly’s Watersports your one
              stop vacation package! We have your every watersport needs!
              Whether it is snorkeling, scuba diving, parasailing or fishing, we
              have it covered! Choose us today! Are You In? Explore one of
              Jamaica’s PADI 5 Star Dive Centers. We are there with you along
              the way. Try out our Discover Scuba Diving Programme where we
              provide one on one training experience. We provide the right
              lessons for each level. For more information, please contact us.
            </p>
            <div className="years-experiences">
              <div data-aos="flip-left" data-aos-duration="1000">
                <h1>15+</h1>
                <p>Years Experience</p>
              </div>
              <div data-aos="flip-up" data-aos-duration="1000">
                <h1>320k+</h1>
                <p>Successful Trip</p>
              </div>
              <div data-aos="flip-down" data-aos-duration="1000">
                <h1>40k+</h1>
                <p>Happy Customer</p>
              </div>
            </div>
          </div>
          <div
            className="female-guide"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <img
              className="female-traveller"
              style={{ width: "100%" }}
              src={femaleTour}
              alt="female-guide"
            />
            <div className="experiences">
              <h5>How was your Experiences</h5>
              <div className="emoji">
                <img src={love} />
                <img src={smile} />
                <img src={confused} />
                <img src={angry} />
              </div>
            </div>
            <img src={star} className="redStar1" />
            <img src={star} className="redStar2" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleFour;
