import React, { useEffect, useRef, useState } from "react";
import "./CoursesInnerPages.scss";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { ButtonArrow, RedCross } from "../../../assets/images/Icons/SvgIcons";
import GetInTocuh from "./../../../common/GetInTocuh/GetInTocuh";
import CommonButton from "../../../common/CommonButton/CommonButton";
import ContactUsModal from "../../../common/Modal/ContactUsModal";

const CoursesInnerPages = ({
  subtitle,
  description,
  description1,
  faqData,
  jobs,
  src,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="inner-courses">
      <div className="inner-courses-top">
        <img src={src} alt="" className="inner-courses-img" loading="lazy" />
        <div className="inner-courses-top-button">
          {/* <CommonButton text="Enroll Now" svgIcon={<ButtonArrow />} className="white_text"
            onClick={() => setShowModal(true)}
          /> */}
        </div>
      </div>
      <ContactUsModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
      <div className="inner-courses-preview">
        <Container>
          <Row>
            <Col lg={9} md={12} className="preview-col">
              <h3 className="text-lg-start text-center">Course Overview</h3>
              <h2 className="subtitle_text">{subtitle} Cousre in Chandigarh</h2>
              <p>{description}</p>
              <p>{description1}</p>
            </Col>
            <Col lg={3} md={12}>
              <GetInTocuh />
            </Col>
          </Row>
          <div className="course_accordion">
            <Accordion defaultActiveKey="0">
              {faqData.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>
                    <span className="mx-lg-4 mx-0 me-2 me-lg-0">
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
          <div className="text-center py-5">
            <h2 className="text-center  graphic_heading">Applicable jobs</h2>
          </div>
          <ul className="course-list work mb-5">
            {jobs.map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
};

export default CoursesInnerPages;
