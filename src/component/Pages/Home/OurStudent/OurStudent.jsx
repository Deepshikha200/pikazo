import React, { useState } from "react";
import Slider from "react-slick";
import { Shimmer } from "react-shimmer";
import CommonHeading from "../../../../common/CommonHeading/CommonHeading";
import { AllImages } from "../../../../assets/Student_Work/ArtImages";
import "./OurStudent.scss";
import { useNavigate } from "react-router-dom";

const OurStudent = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();
  const [loadedVideos, setLoadedVideos] = useState({});
  const motionGraphicsLinks = [
    "https://www.youtube.com/embed/4WLDBVRUsUE",
    "https://www.youtube.com/embed/1KdOjq70N9k",
    "https://www.youtube.com/embed/lVBeiq0hQTM",
    "https://www.youtube.com/embed/fRle1f95Uoo",
    "https://www.youtube.com/embed/0PGVZuxS47k",
    "https://www.youtube.com/embed/N6fgrYksWw4",
    "https://www.youtube.com/embed/IbGWa6R21rE",
    "https://www.youtube.com/embed/3jEr25nXYMU",
    "https://www.youtube.com/embed/xHskODr8pIw",
    "https://www.youtube.com/embed/xoF6s2GC9fM",
    "https://www.youtube.com/embed/MsjkeYfPWKY",
    "https://www.youtube.com/embed/ncTcIGtAb4M",
    "https://www.youtube.com/embed/AKFDelPXVsI",
    "https://www.youtube.com/embed/RqRXKwdALyQ",
  ];

  return (
    <section className="our-student">
      <CommonHeading heading="Our Students Work" className="heading mb-4" />
      <section className="insta_con">
        <div className="instagram_flex">
          <div className="instagram_scroll">
            {/* {AllImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                onClick={() => navigate("/students-work")}
              />
            ))} */}
            {Array(10)
              .fill(AllImages)
              .flat()
              .map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt=""
                  onClick={() => navigate("/students-work")}
                />
              ))}
          </div>
        </div>
      </section>
      <>
        <div className=" youtube_slider">
          <Slider {...settings}>
            {motionGraphicsLinks.map((link, index) => (
              <div key={index} className="slider-item">
                <div className="image-container">
                  <div className="img-wrap" style={{ position: "relative" }}>
                    {!loadedVideos[index] && (
                      <Shimmer width={"100%"} height={200} />
                    )}
                    <iframe
                      width="100%"
                      height="200"
                      src={link}
                      style={{
                        display: loadedVideos[index] ? "block" : "none",
                      }}
                      onLoad={() =>
                        setLoadedVideos((prev) => ({ ...prev, [index]: true }))
                      }
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </>
    </section>
  );
};

export default OurStudent;
