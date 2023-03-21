import { faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scubaImg from "../../assets/scuba.jpg";

const Scuba = () => {
  const data = [
    {
      name: "Discover Scuba Diver",
      link: "https://book.peek.com/s/c6d1204a-2544-41d2-ae16-bfe4d8cd7833/zqK2w",
    },
    {
      name: "Padi Scuba Diver",
      link: "https://book.peek.com/s/c6d1204a-2544-41d2-ae16-bfe4d8cd7833/k4oJO",
    },
    {
      name: "Single Tank Dive",
      link: "https://book.peek.com/s/c6d1204a-2544-41d2-ae16-bfe4d8cd7833/jPKxA",
    },
    {
      name: "Double Tank Dive",
      link: "https://book.peek.com/s/c6d1204a-2544-41d2-ae16-bfe4d8cd7833/xpKBM",
    },
    {
      name: "Night Dives",
      link: "https://book.peek.com/s/c6d1204a-2544-41d2-ae16-bfe4d8cd7833/Zdbol",
    },
    {
      name: "Refresher",
      link: "https://book.peek.com/s/c6d1204a-2544-41d2-ae16-bfe4d8cd7833/RWw43",
    },
    {
      name: "Padi Open Water Course",
      link: "https://book.peek.com/s/c6d1204a-2544-41d2-ae16-bfe4d8cd7833/jPKlR",
    },
    {
      name: "Advanced Course",
      link: "https://book.peek.com/s/c6d1204a-2544-41d2-ae16-bfe4d8cd7833/1zeBd",
    },
    {
      name: "Rescue Course",
      link: "https://book.peek.com/s/c6d1204a-2544-41d2-ae16-bfe4d8cd7833/xpK7A",
    },
  ];
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
        <div>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "14px",
              marginTop: "14px",
            }}
          >
            Activities
          </h2>
          <div className="activities">
            {data.map((item) => (
              <div className="activity">
                <div className="content">
                  <h3>{item.name}</h3>
                  <button>
                    <a
                      href={item.link}
                      class="replace-with-your-class(es)"
                      data-button-text="Book Now"
                    >
                      Book Now
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Scuba;
