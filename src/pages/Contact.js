import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

const Contact = () => {
  return (
    <article>
      <div className="container">
        <div className="article-four" id="article-four" style={{ gap: "50px" }}>
          <div
            style={{ marginTop: "28px" }}
            className="aboutUs"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <h3 style={{ color: "#db021c" }}>CONTACT US</h3>
            <h1>Send us your queries</h1>
            <form className="form-contact">
              <input
                type="email"
                placeholder="Name"
                name="email"
                className="input-contact"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                className="input-contact"
                required
              />
              <textarea
                placeholder="Message"
                name="email"
                rows={5}
                className="input-contact"
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div
            className="female-guide"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <ul>
              <li style={{ margin: "9px 8px" }}>
                Harmony Beach Park, Montego Bay, Jamaica
              </li>
              <li style={{ margin: "9px 8px" }}>
                <a href="tel:+1-876-893-2859"> 1-876-893-2859</a>
              </li>
              <li style={{ margin: "9px 8px" }}>
                <a href="mailto:kellyswatersports@gmail.com">
                  kellyswatersports@gmail.com
                </a>
              </li>
            </ul>
            <div className="social-media">
              <img style={{ margin: "9px 8px" }} src={fb} alt="facebook" />
              <img src={twitter} style={{ margin: "9px 8px" }} alt="twitter" />
              <img
                src={instagram}
                style={{ margin: "9px 8px" }}
                alt="instagram"
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </article>
  );
};

export default Contact;
