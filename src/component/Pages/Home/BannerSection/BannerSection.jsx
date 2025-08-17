import React, { useState, useRef } from "react";
import img1 from "../../../../assets/images/banner.jpg";
import unreal from "../../../../assets/images/bannerf1.jpg";
import amd from "../../../../assets/images/banner1.jpeg";
import img3 from "../../../../assets/images/banner_update.jpg";
import degree from "../../../../assets/images/banner_in1.jpeg";
import degree2 from "../../../../assets/images/banner_in2.jpeg";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "./BannerSection.scss";
import GetInTocuh from "../../../../common/GetInTocuh/GetInTocuh";

const BannerSection = () => {
  const content = [
    {
      image: amd,
    },
    {
      image: degree,
    },
    {
      image: unreal,
    },
    {
      image: degree2,
    },
    {
      image: img1,
    },
    {
      image: img3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    vertical: true,
    verticalSwiping: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const textAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: 0.2,
      duration: 1.2,
      ease: "easeInOut",
    },
  };

  const ButtonAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: 0.2,
      duration: 1.2,
      ease: "easeInOut",
    },
  };

  return (
    <section className="banner" id="banner">
      <h1 className="d-block d-md-none mt-4">
        <span>Top Animation Institute in Chandigarh </span>
      </h1>
      <div className="d-block d-md-none px-5">
        <GetInTocuh />
      </div>
      <Slider ref={sliderRef} {...settings}>
        {content.map((item, index) => (
          <div key={index}>
            <div
              className="banner-container"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="overlay-text">
                <motion.div
                  key={`button-${index}-${currentSlide}`}
                  initial="initial"
                  animate="animate"
                  {...ButtonAnimation}
                ></motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <h1 className="d-none d-md-block">
        <span>Top Animation Institute in Chandigarh</span>
      </h1>
    </section>
  );
};

export default BannerSection;
