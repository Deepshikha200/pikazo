import React from "react";
import CommonModal from "../CommonModal";
import test from "../../../assets/images/test.png";
import { Col, Row } from "react-bootstrap";
import "./TestimonialModal.scss";

const TestimonialModal = ({ show, handleClose }) => {
  return (
    <CommonModal
      size="lg"
      show={show}
      handleClose={handleClose}
      heading="Testimonial"
    >
      <Row>
        <Col lg={3} sm={3} xs={4}>
          <img src={test} alt="" loading="lazy" />
        </Col>
        <Col lg={3} sm={3} xs={4}>
          <img src={test} alt="" loading="lazy" />
        </Col>
        <Col lg={3} sm={3} xs={4}>
          <img src={test} alt="" loading="lazy" />
        </Col>
        <Col lg={3} sm={3} xs={4}>
          <img src={test} alt="" loading="lazy" />
        </Col>
        <Col lg={3} sm={3} xs={4}>
          <img src={test} alt="" loading="lazy" />
        </Col>
        <Col lg={3} sm={3} xs={4}>
          <img src={test} alt="" loading="lazy" />
        </Col>
        <Col lg={3} sm={3} xs={4}>
          <img src={test} alt="" loading="lazy"/>
        </Col>
        <Col lg={3} sm={3} xs={4}>
          <img src={test} alt="" loading="lazy"/>
        </Col>
      </Row>
    </CommonModal>
  );
};

export default TestimonialModal;
