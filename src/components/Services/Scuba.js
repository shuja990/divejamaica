import scubaImg from "../../assets/scuba.jpg";

const Scuba = () => {
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
            <h3 style={{ color: "#db021c" }}>ABOUT US</h3>
            <h1>Scuba Diving</h1>
            <div>
              <p>
                For Scuba Diving – Diving and Flying is not recommended. All
                participants will be required to complete a health questionnaire
                prior to diving. For persons with a medical conditions they are
                required to get a release from a doctor.
              </p>
              <br />
              <ul>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                  }}
                >
                  <p>SINGLE TANK DIVE</p>
                  <p>$60.00</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                  }}
                >
                  <p>DOUBLE TANK DIVE</p> <p>$100.00</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                  }}
                >
                  <p>EQUIPMENT RENTAL</p> <p>$20.00</p>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                  }}
                >
                  <p>REFRESHER</p> <p>$120.00</p>
                </li>
              </ul>
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
              src={scubaImg}
              alt="female guide"
            />
          </div>
          <div></div>
        </div>
      </div>
    </article>
  );
};

export default Scuba;
