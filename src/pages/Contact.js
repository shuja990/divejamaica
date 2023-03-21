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
        <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.122793318432!2d-77.9275567!3d18.4780963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed980614832b2dd%3A0xf91d9168883ce675!2sKelly's%20Watersports%20-%20Jamaica%20WaterSports%20Activities!5e0!3m2!1sen!2s!4v1679355458266!5m2!1sen!2s"
            height={450}
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
      </div>
    </article>
  );
};

export default Contact;
