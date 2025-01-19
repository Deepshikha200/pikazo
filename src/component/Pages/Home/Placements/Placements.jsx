import React from "react";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./Placements.scss";
import { PlacementImg } from "../../../../assets/Student_Work/ArtImages.js";

const Placements = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="placements">
      <Container>
        <div>
          <h2 className="text-center">Our Placements</h2>
          <Slider {...settings}>
            {PlacementImg.map((image, index) => (
              <div key={index} className="placements_img ">
                <img
                  src={image}
                  alt={`Placement ${index + 1}`}
                  className="border"
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Placements;
