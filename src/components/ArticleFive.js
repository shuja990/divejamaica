import Customers from "./Customers";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";

const ArticleFive = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews();
  }, []);
  const getReviews = () => {
    var config = {
      method: "get",
      url: "/.netlify/functions/auth-fetch",
      headers: { "Access-Control-Allow-Origin": "*" },
    };

    axios(config)
      .then(function (response) {
        setReviews(response.data.data.result.reviews);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <article>
      <div className="container">
        <div className="article-five" data-aos="zoom-out">
          <h1 data-aos="zoom-in" data-aos-duration="1000">
            What Our Customers Says About Us
          </h1>

          <div className="testinomy">
            <Swiper
              // install Swiper modules
              className="swiper"
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={100}
              slidesPerView={1}
              navigation
              loop
              autoplay={{ delay: 2500 }}
              pagination={{ clickable: true }}
            >
              {reviews?.map((review) => (
                <SwiperSlide>
                    <Customers
                      avatar={review?.profile_photo_url}
                      userName={review?.author_name}
                      text={review.text}
                      rating={review.rating}
                    />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleFive;
