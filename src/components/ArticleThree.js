import Tourism from "./Tourism";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";

import imageOne from "./image1.png";

const ArticleThree = () => {
  return (
    <article>
      <div className="container">
        <div
          className="article-two-header"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h4 style={{ color: "#E30C28" }}>Our Team</h4>
          <h1>Meet our Team</h1>
        </div>
        <div className="article-three">
          <Swiper
            // install Swiper modules
            className="swiper"
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={100}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Tourism
                image={imageOne}
                cost="$200"
                center="Cluff Wayne"
                location="Dive Master"
                rating="4.5"
                review="2.2k"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Tourism
                image={imageOne}
                cost="$200"
                center="Kelly"
                location="Dive Master"
                rating="4.5"
                review="2.2k"
              />{" "}
            </SwiperSlide>
            <SwiperSlide>
              <Tourism
                image={imageOne}
                cost="$200"
                center="Netty"
                location="Dive Master"
                rating="4.5"
                review="2.2k"
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <Tourism
                image={imageFour}
                cost="$720"
                center="Anitkabir Monument"
                location="Ankara, Turkey"
                rating="4.5"
                review="4k"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Tourism
                image={imageFive}
                cost="$350"
                center="Trevi Fountain"
                location="Roma, Lazio, Italy"
                rating="4.5"
                review="5.2k"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Tourism
                image={imageSix}
                cost="$840"
                center="Brown Concrete Tower"
                location="Mexico City, CDMX Mexico"
                rating="4.5"
                review="1.2k"
              />
            </SwiperSlide> */}
          </Swiper>
          <div className="tour-desktop">
            <Tourism
              image={imageOne}
              cost="$200"
              center="Cluff Wayne"
              location="Dive Master"
              rating="4.5"
              review="2.2k"
            />
            <Tourism
              image={imageOne}
              cost="$200"
              center="Kelly"
              location="Dive Master"
              rating="4.5"
              review="2.2k"
            />
            <Tourism
              image={imageOne}
              cost="$200"
              center="Netty"
              location="Dive Master"
              rating="4.5"
              review="2.2k"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleThree;
