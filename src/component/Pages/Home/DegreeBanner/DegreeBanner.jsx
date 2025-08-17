import React from "react";
import dark_logo from "../../../../assets/images/dark_logo.png";

import banner_light from "../../../../assets/images/banner_light.png";
import "./DegreeBanner.scss";

import { Col, Container, Row } from "react-bootstrap";
import CommonButton from "../../../../common/CommonButton/CommonButton";
import { ButtonArrow } from "../../../../assets/images/Icons/SvgIcons";
import GetInTocuh from "../../../../common/GetInTocuh/GetInTocuh";
import Marquee from "react-fast-marquee";

const DegreeBanner = () => {
  return (
    <section className="degree_banner">
      <Marquee
        pauseOnHover={true}
        pauseOnClick={true}
        className="moving_text mb-lg-5 mb-3"
      >
        Admission open &nbsp; Admission open &nbsp; Admission open
        &nbsp;Admission open&nbsp; Admission open &nbsp;Admission open
        &nbsp;Admission open&nbsp; Admission open&nbsp; Admission open
        &nbsp;Admission open&nbsp; Admission open&nbsp; Admission open
        &nbsp;Admission open&nbsp; Admission open &nbsp;Admission open
        &nbsp;Admission open&nbsp; Admission open&nbsp; Admission open
        &nbsp;Admission open&nbsp;
      </Marquee>
      <Container>
        <Row className="justify-content-between">
          <Col lg={4}>
            <div>
              <img
                src={banner_light}
                alt="banner_light"
                className="banner_light"
              />
            </div>
          </Col>
          <Col lg={5}>
            <div className="mt-5 degree_banner_col">
              <h3 className="mb-5">Apply now for Scholarship</h3>
              <GetInTocuh />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DegreeBanner;
