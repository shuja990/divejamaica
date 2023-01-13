import React from "react";
import { useNavigate } from "react-router-dom";
import FooterForm from "./FooterForm";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div data-aos="zoom-in-left" data-aos-duration="1000">
            <h2>Quicklinks</h2>
            <ul>
              <li onClick={() => navigate("/")}>Discover</li>
              <li onClick={() => navigate("/services")}>Services</li>
              <li onClick={() => navigate("/about-us")}>About Us</li>
              <li onClick={() => navigate("/contact-us")}>Contact</li>
            </ul>
          </div>
          <div data-aos="zoom-in-right" data-aos-duration="1000">
            <h2>Contact</h2>
            <ul>
              <li>Address: Harmony Beach Park, Montego Bay, Jamaica</li>
              <li>
                Phone : <a href="tel:+1-876-893-2859"> 1-876-893-2859</a>
              </li>
              <li>
                Email :{" "}
                <a href="mailto:kellyswatersports@gmail.com">
                  kellyswatersports@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <FooterForm />
        </div>
        <div className="dev-details">
          <small>
            <h5>Copyright {new Date().getFullYear()}</h5>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
