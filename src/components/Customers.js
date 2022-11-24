import yellowStar from "../assets/yellowStar.png";
import avatarOne from "../assets//avatarOne.png";
import { useRef } from "react";

const Customers = (props) => {
  const imgRef = useRef();
  const handleError = () => {
    imgRef.current.src = avatarOne;
  };
  return (
    <div className="customers" style={{ border: props.border }}>
      <div className="">
        <img
          src={props.avatar ? props.avatar : avatarOne}
          alt="avatar-one"
          onError={handleError}
          ref={imgRef}
        />
      </div>
      <h3>{props.userName}</h3>
      <hr />
      <p>{props.text}</p>
      <div className="star-rating">
        {new Array(props.rating).fill("").map((rating) => (
          <img src={yellowStar} alt="yellowStar" />
        ))}
      </div>
    </div>
  );
};

export default Customers;
