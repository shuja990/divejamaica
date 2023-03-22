import React from "react";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Brochure1 from "../assets/b1.jpeg";
import Brochure2 from "../assets/b2.jpeg";
const Brochure = () => {
  const images = [
    {
      src: Brochure1,
      original: Brochure1,
      width: "50%",
      thumbnail: Brochure1,
      thumbnailWidth: "50%",
      thumbnailHeight: 500,
      height: 500,
    },
    {
      src: Brochure2,
      original: Brochure2,
      width: "50%",
      thumbnail: Brochure2,
      thumbnailWidth: "50%",
      thumbnailHeight: 500,
      height: 500,
    },
  ];
  const [index, setIndex] = useState(-1);
  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);
  return (
    <article>
      <div className="container">
        <div
          className="article-two-header"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h4 style={{ color: "#E30C28" }}>Brochures</h4>
          <h1>Live these moments with us</h1>
        </div>
        <div className="article-three" style={{ flexDirection: "column" }}>
          {/* <Gallery
            images={images}
            onClick={handleClick}
            showLightboxThumbnails={true}
            enableLightbox={true}
            enableImageSelection={false}
          />
          {!!currentImage && (
            <Lightbox
              mainSrc={currentImage.original}
              imageTitle={currentImage.caption}
              mainSrcThumbnail={currentImage.src}
              nextSrc={nextImage.original}
              nextSrcThumbnail={nextImage.src}
              prevSrc={prevImage.original}
              prevSrcThumbnail={prevImage.src}
              onCloseRequest={handleClose}
              onMovePrevRequest={handleMovePrev}
              onMoveNextRequest={handleMoveNext}
            />
          )} */}
          <img src={Brochure1} alt="Brochure" style={{ maxWidth: "100vw" }} />
          <img src={Brochure2} alt="Brochure" style={{ maxWidth: "100vw" }} />
        </div>
      </div>
    </article>
  );
};

export default Brochure;
