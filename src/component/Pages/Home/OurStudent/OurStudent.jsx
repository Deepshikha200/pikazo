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

  return (
    <section className="our-student">
      <Container>
        <CommonHeading heading="Our Students Work" className="heading" />
        <Slider {...settings}>
          {allImages.map((image, index) => (
            <div key={index} className="slider-item">
              <div className="image-container">
                <img src={image} alt={`Artwork ${index + 1}`} />
                <div className="overlay">
                  {/* <button
                    className="view-more-btn"
                    onClick={() => handleViewMoreClick(image)}
                  >
                    View More
                  </button> */}

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
      </Container>
    </section>
  );
};

export default OurStudent;
