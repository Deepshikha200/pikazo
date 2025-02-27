import React from "react";
import dark_logo from "../../../../assets/images/dark_logo.png";

import banner_light from "../../../../assets/images/banner_light.png";
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
              {/* <div className="enroll_btn one">
                <button>Enroll Now</button>
                <span>
                  <ButtonArrow />
                </span>
              </div> */}
            </div>
          </Col>
          <Col lg={4}>
            <div>
              <img src={banner_light} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DegreeBanner;
