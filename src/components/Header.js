import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Nav from "./Nav";
import { NavLink as Link } from "react-router-dom";
import Logo from '../assets/logo.png'

const Header = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header style={{background:"rgb(82, 207, 61)"}}>
      <div className="container-header">
        <div className="header">
          <img src={Logo} alt="Kelly Water Sports" width={130} height={50}/>
          <div
            className="icon-toggle"
            style={{ fontSize: "1.3rem" }}
            onClick={handleToggle}
          >
            {toggle ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faXmark} />
            )}
          </div>
          <div className="desktop-menu">
            <ul>
              <Link
                to="/"
                style={({ isActive }) =>
                  isActive ? { color: "#fff" } : undefined
                }
              >
                <li>Discover</li>
              </Link>
              <Link
                to="/services"
                style={({ isActive }) =>
                  isActive ? { color: "#fff" } : undefined
                }
              >
                <li>Activities</li>
              </Link>
              <Link
                to="/about-us"
                style={({ isActive }) =>
                  isActive ? { color: "#fff" } : undefined
                }
              >
                <li>About Us</li>
              </Link>
              {/* <Link
                to="/our-team"
                style={({ isActive }) =>
                  isActive ? { color: "#fff" } : undefined
                }
              >
                <li>Our Team</li>
              </Link> */}
              {/* <Link
                to="/plans"
                style={({ isActive }) =>
                  isActive ? { color: "#fff" } : undefined
                }
              >
                <li>Plans</li>
              </Link> */}
              <Link
                to="/gallery"
                style={({ isActive }) =>
                  isActive ? { color: "#fff" } : undefined
                }
              >
                <li>Gallery</li>
              </Link>
              <Link
                to="/contact-us"
                style={({ isActive }) =>
                  isActive ? { color: "#fff" } : undefined
                }
              >
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
        </div>
        {toggle ? "" : <Nav setToggle={setToggle} />}
      </div>
    </header>
  );
};

export default Header;
