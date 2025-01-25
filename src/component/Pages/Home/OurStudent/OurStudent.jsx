import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import CommonHeading from "../../../../common/CommonHeading/CommonHeading";
import {
  ArtImages,
  VectorArt,
  Graphics,
} from "../../../../assets/Student_Work/ArtImages";
import "./OurStudent.scss";
import CommonButton from "../../../../common/CommonButton/CommonButton";
import { useNavigate } from "react-router-dom";

const OurStudent = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();
  const allImages = [...ArtImages, ...VectorArt, ...Graphics];

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
        <div className="mt-4">
          <Slider {...settings}>
            {motionGraphicsLinks.map((image, index) => (
              <div key={index} className="slider-item">
                <div className="image-container">
                  <div className="img-wrap">
                    {/* <img src={image} alt={`Artwork ${index + 1}`} /> */}
                    <iframe
                      width="100%"
                      height="200"
                      src={image}
                      allowFullScreen
                    ></iframe>
                  </div>
                  {/* <div className="overlay">
                    <CommonButton
                      text="View More"
                      className="view-more-btn"
                      onClick={() => navigate("/student-work")}
                    />
                  </div> */}
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
