import DeepSeaImg from "../../assets/deep.jpg";

const DeepSea = () => {
  return (
    <article>
      <div className="container">
        <div className="article-four" id="article-four">
          <div
            style={{ marginTop: "28px" }}
            className="aboutUs"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <h1>Deep Sea Fishing</h1>
            <div>
              <p>
                Deep Sea fishing draws all anglers, from beginners to
                professionals, straight to our jetty for their thrilling
                adventure with us. Marlin, wahoo, dorado, tuna, bonito and more
                all offer sporting action to boast about. Spend an unforgettable
                voyage off the West Coast, well-beyond the reefs, to the areas
                of incredible depths where the monster fish dwell as the sea
                floor drops off past the 3000m mark.
              </p>
              <br />
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
              src={DeepSeaImg}
              alt="female guide"
            />
          </div>
          <div></div>
        </div>
      </div>
    </article>
  );
};

export default DeepSea;
