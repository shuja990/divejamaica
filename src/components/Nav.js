import { Link } from "react-router-dom";
const Nav = (props) => {
  // const [isActive, setIsActive] = useState(props.toggle);

  const handleClick = () => {
    props.setToggle(true);
  };

  return (
    <nav
      className="nav"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="500"
    >
      <ul className="nav-menu">
        <Link to="/" onClick={handleClick}>
          <li>Discover</li>
        </Link>
        <Link to="/services" onClick={handleClick}>
          <li>Activities</li>
        </Link>
        <Link to="/about-us" onClick={handleClick}>
          <li>About Us</li>
        </Link>
        {/* <Link to="/our-team" onClick={handleClick}>
          <li>Our Team</li>
        </Link> */}
        <Link to="/gallery" onClick={handleClick}>
          <li>Gallery</li>
        </Link>
        <Link to="/contact-us" onClick={handleClick}>
          <li>Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
