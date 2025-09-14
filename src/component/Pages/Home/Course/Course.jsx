import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import "./Course.scss";
import { motion } from "framer-motion";
import {
  ButtonArrow,
  OneYear,
  SixMonths,
  ThreeMonths,
  ThreeYear,
} from "../../../../assets/images/Icons/SvgIcons";
import { Col, Container, Row } from "react-bootstrap";
import ContactUsModal from "../../../../common/Modal/ContactUsModal";

const Course = () => {
  const data = [
    {
      img: <ThreeMonths />,
      title: "3 Months Short Term",
      desc: "A 3-month short-term course focuses on core skills in Animation, VFX, or Game Design. It provides hands-on training in industry-standard tools, project-based learning, and portfolio development to prepare students for creative careers.",
    },
    {
      img: <SixMonths />,
      title: "6 Months Certification",

      desc: "A 6-month course in Animation, VFX, or Game Design provides focused training on essential tools and techniques. It covers key topics like 2D/3D animation, visual effects, and basic game design. The course emphasizes hands-on projects and portfolio building, equipping students with job-ready skills for creative industries.",
    },
    {
      img: <OneYear />,
      title: "1 Year Diploma Course",

      desc: "A diploma course in Animation, VFX, or Game Design (12–18 months) offers advanced training in creative tools, techniques, and workflows. It includes practical projects and portfolio building to prepare students for professional careers.",
    },
    {
      img: <ThreeYear />,
      title: "3 Year Degree Program",
      desc: "A degree course in Animation, VFX, or Game Design (3 years) offers comprehensive training in design principles, advanced tools, and creative storytelling. It includes practical projects, internships, and portfolio development, preparing students for high-level careers in the entertainment and gaming industries.",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <section className="course py-60">
      <Marquee
        pauseOnHover={true}
        pauseOnClick={true}
        className="moving_text mb-lg-5 mb-3"
      >
        Your creative career starts here.
      </Marquee>
      <Container>
        <Row className="course-container">
          {data.map((item, index) => (
            <Col
              xl={3}
              lg={4}
              md={6}
              sm={6}
              xs={12}
              className="mb-5 course_col"
              key={index}
            >
              <motion.div
                className="course-box mx-2"
                animate={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                key={index}
              >
                <div className="heading_text">
                  <h4>{item.title}</h4>
                  <div className="image">{item.img}</div>
                </div>
                <div className="description">{item.desc}</div>
                <div className="enroll_btn_con">
                  <div
                    className="enroll_btn"
                    onClick={() => setShowModal(true)}
                  >
                    <button>Enroll Now</button>
                  </div>
                </div>
              </motion.div>
              <ContactUsModal
                show={showModal}
                handleClose={() => setShowModal(false)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Course;
