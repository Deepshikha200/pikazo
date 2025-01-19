import React, { useEffect, useRef } from "react";
import "./CoursesInnerPages.scss";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { RedCross } from "../../../assets/images/Icons/SvgIcons";
import { motion } from "motion/react";
import test from "../../../assets/images/test.png";
// import img1 from "../../../assets/images/banner/Artboard1.png";

const CoursesInnerPages = ({
subtitle,
  description,
  description1,
  imageSrc,
  faqData,
  src,
}) => {
  return (
    <section className="inner-courses">
      <div>
        <img src={src} alt="" />
      </div>
      <div className="inner-courses-preview">
        <Container>
          <Row>
            <Col lg={8} className="preview-col">
              <h2 className="text-lg-start text-center">Course Overview</h2>
              <h3>{subtitle}</h3>
              <p>{description}</p>
              <p>{description1}</p>
            </Col>
            <Col lg={4}>
              <motion.div className="test_img">
                <img src={test} alt="" className="test_img1" />
                <img src={test} alt="" className="test_img2" />
              </motion.div>
              {/* <GetInTocuh /> */}
            </Col>
          </Row>

          <div className="course_accordion">
            <Accordion defaultActiveKey="0">
              {faqData.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>
                    <span className="mx-4">
                      <RedCross />
                    </span>
                    {item.ques}
                  </Accordion.Header>
                  <Accordion.Body>
                    {item.ans.map((content, contentIndex) => (
                      <ul key={contentIndex} className="course-list">
                        {Object.entries(content).map(([key, value]) => (
                          <li key={key}>{value}</li>
                        ))}
                      </ul>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default CoursesInnerPages;
