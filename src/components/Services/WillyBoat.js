import SnorkelImg from "../../assets/snork.jpg";

const WillyBoat = () => {
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
            <h1>Willy Boat Rides</h1>
            <div>
              <p></p>
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
              src={SnorkelImg}
              alt="female guide"
            />
          </div>
          <div></div>
        </div>
      </div>
    </article>
  );
};

export default WillyBoat;
