import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import CommonHeading from "../../../../common/CommonHeading/CommonHeading";
import {
  ArtImages,
  VectorArt,
  GraphicsNew,
} from "../../../../assets/Student_Work/ArtImages";
import "./OurStudent.scss";
import CommonButton from "../../../../common/CommonButton/CommonButton";
import { useNavigate } from "react-router-dom";
import {
  LeftArrow,
  RightArrow,
} from "../../../../assets/images/Icons/SvgIcons";

const OurStudent = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 3,
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

  const settings2 = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerPadding: "150px",
        },
      },
    ],
  };

  const navigate = useNavigate();
  const allImages = [...ArtImages, ...VectorArt, ...GraphicsNew];

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
      <Container>
        <CommonHeading heading="Our Students Work" className="heading mb-4" />
        <Slider {...settings2}>
          {allImages.map((image, index) => (
            <div key={index} className="slider-item">
              <div className="image-container">
                <div className="img-wrap">
                  <img src={image} alt={`Artwork ${index + 1}`} />
                </div>
                <div className="overlay">
                  <CommonButton
                    text="View More"
                    className="view-more-btn"
                    onClick={() => navigate("/student-work")}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="mt-5 py-5">
          <Slider {...settings}>
            {motionGraphicsLinks.map((image, index) => (
              <div key={index} className="slider-item">
                <div className="image-container">
                  <div className="img-wrap">
                    <iframe
                      width="100%"
                      height="200"
                      src={image}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default OurStudent;
