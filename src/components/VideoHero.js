import React, { useEffect } from "react";
import Video from "../assets/headerVid.mp4";
const VideoHero = () => {
  useEffect(() => {
    document.getElementById("vid").play();
  }, []);

  return (
    <div className="video-header">
      <video autoPlay loop className="video" id="vid">
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
      </div>
    </div>
  );
};

export default VideoHero;
