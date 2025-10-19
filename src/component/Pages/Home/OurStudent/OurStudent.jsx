import {  useState } from "react";
import Slider from "react-slick";
import { Shimmer } from "react-shimmer";
import CommonHeading from "../../../../common/CommonHeading/CommonHeading";
import { AllImages } from "../../../../assets/Student_Work/ArtImages";
import { useNavigate } from "react-router-dom";
import { useStudent } from "../../../../hooks/useAnimate";
import "./OurStudent.scss";

const OurStudent = () => {
  const navigate = useNavigate();
  const [loadedVideos, setLoadedVideos] = useState({});
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

  const settings_img = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <section className="our_student">
      <CommonHeading heading="Our Students Work" className="heading mb-4" />
      <div className="infinite-slider">
        <Slider {...settings_img}>
          {AllImages.map((src, index) => (
            <div key={index} className="slide-img">
              <img
                src={src}
                alt={`students_work_${index}`}
                onClick={() => navigate("/students-work")}
              />
            </div>
          ))}
        </Slider>
      </div>
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
