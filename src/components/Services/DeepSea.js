import { faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeepSeaImg from "../../assets/deep.jpg";

const DeepSea = () => {
  const data = [
    {
      name: "Deep Sea Fishing - Full Day",
      link: "https://www.peek.com/s/c6d1204a-2544-41d2-ae16-bfe4d8cd7833/pxKz0",
    },
    {
      name: "Deep Sea Fishing - Half Day (4 Hours)",
      link: "https://book.peek.com/s/c6d1204a-2544-41d2-ae16-bfe4d8cd7833/9oX89",
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
        <div>
          <h1 className="activity-heading" style={{ textAlign: "center", marginBottom: "14px" }}>
            Activities
          </h1>
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

export default DeepSea;
