import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Nav from "./Nav";
import { NavLink as Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header>
      <div className="container">
        <div className="header">
          <h1 style={{ color: "#000000" }}>
            Dive<span style={{ color: "#52CF3D" }}>Jamaica</span>
          </h1>
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
                  isActive ? { color: "#52cf3d" } : undefined
                }
              >
                <li>Discover</li>
              </Link>
              <Link
                to="/services"
                style={({ isActive }) =>
                  isActive ? { color: "#52cf3d" } : undefined
                }
              >
                <li>Services</li>
              </Link>
              <Link
                to="/about-us"
                style={({ isActive }) =>
                  isActive ? { color: "#52cf3d" } : undefined
                }
              >
                <li>About Us</li>
              </Link>
              {/* <Link
                to="/our-team"
                style={({ isActive }) =>
                  isActive ? { color: "#52cf3d" } : undefined
                }
              >
                <li>Our Team</li>
              </Link> */}
              <Link
                to="/plans"
                style={({ isActive }) =>
                  isActive ? { color: "#52cf3d" } : undefined
                }
              >
                <li>Plans</li>
              </Link>
              <Link
                to="/gallery"
                style={({ isActive }) =>
                  isActive ? { color: "#52cf3d" } : undefined
                }
              >
                <li>Gallery</li>
              </Link>
              <Link
                to="/contact-us"
                style={({ isActive }) =>
                  isActive ? { color: "#52cf3d" } : undefined
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
