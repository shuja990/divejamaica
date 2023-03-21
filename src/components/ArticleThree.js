import Tourism from "./Tourism";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";

import imageOne from "../assets/image1.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";

const ArticleThree = () => {
  return (
    <article>
      <div className="">
        <div
          className=""
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* <h4 style={{ color: "#E30C28" }}>Our Team</h4>
          <h1>Meet our Team</h1> */}
        </div>
        <div className="article-three">
          <img
            src={img1}
            style={{margin:"5px"}}
            alt="link"
            onClick={() =>
              window
                .open(
                  "http://divejamaica.net/wp-content/uploads/2018/03/c9646c94-7e68-479f-a927-2378c5866e16.mp4",
                  "_blank"
                )
                .focus()
            }
          />
          <img
            style={{margin:"5px"}}
            src={img2}
            alt="link"
            onClick={() =>
              window
                .open("https://www.padi.com/courses?irra=23936", "_blank")
                .focus()
            }
          />
          <img
            style={{margin:"5px"}}
            src={img3}
            alt="link"
            onClick={() =>
              window
                .open(
                  "https://www.tripadvisor.com/Attraction_Review-g147311-d6204812-Reviews-Kelly_s_Water_Sports-Montego_Bay_Saint_James_Parish_Jamaica.html",
                  "_blank"
                )
                .focus()
            }
          />
          <img
            style={{margin:"5px"}}
            src={img4}
            alt="link"
            onClick={() =>
              window
                .open(
                  "https://www.visitjamaica.com/listing/kellys-water-sports/2434/",
                  "_blank"
                )
                .focus()
            }
          />
          {/* <div className="tour-desktop">
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
          </div> */}
        </div>
      </div>
    </article>
  );
};

export default ArticleThree;

//  {/* <Swiper
//     // install Swiper modules
//     className="swiper"
//     modules={[Navigation, Pagination, A11y, Autoplay]}
//     spaceBetween={100}
//     slidesPerView={1}
//     navigation
//     autoplay={{ delay: 2500 }}
//     pagination={{ clickable: true }}
//   >
//     <SwiperSlide>
//       <Tourism
//         image={imageOne}
//         cost="$200"
//         center="Cluff Wayne"
//         location="Dive Master"
//         rating="4.5"
//         review="2.2k"
//       />
//     </SwiperSlide>
//     <SwiperSlide>
//       <Tourism
//         image={imageOne}
//         cost="$200"
//         center="Kelly"
//         location="Dive Master"
//         rating="4.5"
//         review="2.2k"
//       />{" "}
//     </SwiperSlide>
//     <SwiperSlide>
//       <Tourism
//         image={imageOne}
//         cost="$200"
//         center="Netty"
//         location="Dive Master"
//         rating="4.5"
//         review="2.2k"
//       />
//     </SwiperSlide>
//     {/* <SwiperSlide>
//       <Tourism
//         image={imageFour}
//         cost="$720"
//         center="Anitkabir Monument"
//         location="Ankara, Turkey"
//         rating="4.5"
//         review="4k"
//       />
//     </SwiperSlide>
//     <SwiperSlide>
//       <Tourism
//         image={imageFive}
//         cost="$350"
//         center="Trevi Fountain"
//         location="Roma, Lazio, Italy"
//         rating="4.5"
//         review="5.2k"
//       />
//     </SwiperSlide>
//     <SwiperSlide>
//       <Tourism
//         image={imageSix}
//         cost="$840"
//         center="Brown Concrete Tower"
//         location="Mexico City, CDMX Mexico"
//         rating="4.5"
//         review="1.2k"
//       />
//     </SwiperSlide> */}
//   </Swiper> */}
