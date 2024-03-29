import { faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SnorkelImg from "../../assets/para.jpg";

const Para = () => {
  const data = [
    {
      name: "Para Sailing",
      link: "https://book.peek.com/s/c6d1204a-2544-41d2-ae16-bfe4d8cd7833/y0Kye",
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
            <h1>Para-Sailing</h1>
            <div>
              <p>
                Soaring 300 FT above Azul waters with 360 panoramic views of
                Montgeo Bay is what you will experience with Kellys Watersports.
                Our certified crew ensures that all guests (Max 10) are attended
                to and briefed on safety. Then you’re ready to fly! Take off and
                land your 10-minute flight right from the deck of the boat. With
                single, double, and triple harnesses available your parasail
                will carry you, your family, and friends high above the clear
                blue waters of Grace Bay and nearby coral reef.
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

export default Para;
