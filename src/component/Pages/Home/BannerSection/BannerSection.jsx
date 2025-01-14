import React, { useState, useRef } from "react";
import img1 from "../../../../assets/images/banner.jpg";
import img2 from "../../../../assets/images/bannerf1.jpg";
// import img3 from "../../../../assets/images/bannerf2.jpg";
import img4 from "../../../../assets/images/banner1.jpeg";

import Slider from "react-slick";
import "./BannerSection.scss";
import { motion } from "framer-motion"; // Ensure correct import
import CommonButton from "../../../../common/CommonButton/CommonButton";

const BannerSection = () => {
  const content = [
    {
      image: img1,
      text: "Lights Camera Inspire",
    },
    {
      image: img4,
      text: "Where creativity meets technology",
    },
    {
      image: img2,
      text: "Where ideas become games",
    },
    // {
    //   image: img3,
    //   text: "Your Journey  Success3",
    // },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3300,
    vertical: true,
    verticalSwiping: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const textAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: 0.2,
      duration: 1.2,
      // ease: [0.17, 0.67, 0.83, 0.87],
      ease: "easeInOut",
    },
  };

  const ButtonAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: 0.2,
      duration: 1.2,
      // ease: [0.17, 0.67, 0.83, 0.87],
      ease: "easeInOut",
    },
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <section className="banner">
      <Slider ref={sliderRef} {...settings}>
        {content.map((item, index) => (
          <div key={index}>
            <div
              className="banner-container"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="overlay-text">
                <motion.h1
                  key={`text-${index}-${currentSlide}`}
                  className="banner_heading"
                  initial="initial"
                  animate="animate"
                  {...textAnimation}
                >
                  {item.text}
                </motion.h1>
                <motion.div
                  key={`button-${index}-${currentSlide}`}
                  initial="initial"
                  animate="animate"
                  {...ButtonAnimation}
                >
                  <CommonButton text="Get Started" />
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="banner_btn">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={currentSlide === index ? "btn-active" : "btn-inactive"}
          >
            {/* {index + 1} */}
          </button>
        ))}
        {/* 
        <button onClick={() => goToSlide(0)}>Go to Image 1</button>
        <button onClick={() => goToSlide(1)}>Go to Image 2</button>
        <button onClick={() => goToSlide(2)}>Go to Image 3</button> */}
      </div>
    </section>
  );
};

export default BannerSection;
