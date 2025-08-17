import React from "react";
import { Container } from "react-bootstrap";
import "./Testimonial.scss";
import test1 from "../../../../assets/images/Testimonials/test1.png";
import test2 from "../../../../assets/images/Testimonials/test2.png";
import test3 from "../../../../assets/images/Testimonials/test3.png";
import test4 from "../../../../assets/images/Testimonials/test4.png";
import test5 from "../../../../assets/images/Testimonials/test5.png";
import test6 from "../../../../assets/images/Testimonials/test6.png";
import test7 from "../../../../assets/images/Testimonials/test7.png";
import test8 from "../../../../assets/images/Testimonials/test8.png";
import test9 from "../../../../assets/images/Testimonials/test9.png";
import test10 from "../../../../assets/images/Testimonials/test10.png";
import test11 from "../../../../assets/images/Testimonials/test11.png";
import test12 from "../../../../assets/images/Testimonials/test12.png";
import test13 from "../../../../assets/images/Testimonials/test13.png";
import test14 from "../../../../assets/images/Testimonials/test14.png";

import Slider from "react-slick";
import CommonHeading from "../../../../common/CommonHeading/CommonHeading";
import { TestimonialsPhone } from "../../../../assets/Student_Work/ArtImages";

const Testimonial = () => {
  const testimonials = [
    test10,
    test9,
    test1,
    test2,
    test14,
    test3,
    test4,
    test5,
    test6,
    test7,
    test13,
    test8,
    test11,
    test12,
  ];
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="testimonial ">
        <Container>
          <div className=" testimonial_con">
            <h2 className="testimonial-title">Testimonials</h2>
            <div className="testimonial-grid">
              {testimonials.map((image, index) => (
                <div
                  key={index}
                  className={`testimonial-card test${index + 1}`}
                >
                  <img src={image} alt={`Testimonial ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section>
        <div className="testimonial_phone ">
          <CommonHeading heading="Testimonials" />
          <Slider {...settings}>
            {TestimonialsPhone.map((image, index) => (
              <img key={index} src={image} alt={`Testimonial ${index + 1}`} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
