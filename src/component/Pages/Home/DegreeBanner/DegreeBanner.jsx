import React from "react";
import dark_logo from "../../../../assets/images/dark_logo.png";
import light_logo from "../../../../assets/images/light_logo.png";
import banner_light from "../../../../assets/images/banner_light.png";
import banner_dark from "../../../../assets/images/banner_dark.png";
import "./DegreeBanner.scss";

import { Col, Container, Row } from "react-bootstrap";
import CommonButton from "../../../../common/CommonButton/CommonButton";
import { ButtonArrow } from "../../../../assets/images/Icons/SvgIcons";

const DegreeBanner = () => {
  return (
    <section className="degree_banner">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="mt-5 degree_banner_col">
              <div className="img_con">
                <img src={dark_logo} alt="" />
              </div>
              <h2>
                Build Your Future with Our <p> Degree Programs! </p>
              </h2>
              <div className="enroll_btn one">
                <button>Enroll Now</button>
                <span>
                  <ButtonArrow />
                </span>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div>
              <img src={banner_light} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="degree_banner_row-two">
        <div className=" degree_banner_col d-flex justify-content-between">
          <div className="dark_text">
            <div className="img_con mt-5  pt-4">
              <img src={light_logo} alt="" />
            </div>
            <h2 className="mb-0">
              Build Your Future with Our <p> Degree Programs! </p>
            </h2>
            <span>
              Earn a degree in Animation, VFX, Game Design, or Film Making and
              build a successful creative career.
            </span>
            <div className="enroll_btn ">
              <button>Enroll Now</button>
              <span>
                <ButtonArrow />
              </span>
            </div>
          </div>
          {/* <div>
              <img src={banner_dark} alt="" />
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default DegreeBanner;
