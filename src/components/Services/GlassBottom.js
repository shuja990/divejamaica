import { faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SnorkelImg from "../../assets/glass.jpg";

const GlassBottom = () => {
  const data = [
    {
      name: "Glass Bottom Boat",
      link: "https://book.peek.com/s/c6d1204a-2544-41d2-ae16-bfe4d8cd7833/oxKRA",
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
            <h1>Glass Bottom Boat</h1>
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
        <div>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "14px",
              marginTop: "14px",
            }}
          >
            {" "}
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

export default GlassBottom;
