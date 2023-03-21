import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Video from "../assets/headerVid.mp4";
const VideoHero = () => {
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, [vidRef]);

  const navigate = useNavigate();

  return (
    <div className="video-header">
      <video
        playsinline
        autoplay
        muted
        loop
        className="video"
        id="vid"
        ref={vidRef}
      >
        <source src={Video} type="video/mp4" />
      </video>
      <div class="contentVideo">
        <h1> Welcome to Kelly’s Water Sports Jamaica</h1>
        <p>
          We specialize in fun water sports activities such as; scuba diving,
          parasailing, tubing, snorkeling, deep sea fishing and glass bottom
          boat rides. Take the opportunity to venture across our beautiful ocean
          and explore some of the world’s most dynamic marine life. Our tours
          provide the perfect experience for family, friends and couples.
        </p>
        <button className="book-now" onClick={()=>navigate('/services')}>Book Now</button>
      </div>
    </div>
  );
};

export default VideoHero;
