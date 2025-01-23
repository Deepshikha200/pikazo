import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "./Course.scss";
import course1 from "../../../../assets/images/course1.png";
import course2 from "../../../../assets/images/course2.png";
import course3 from "../../../../assets/images/course3.png";
import course4 from "../../../../assets/images/course4.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Course = () => {
  const data = [
    {
      img: course1,
      title: "3 Months Short Term",
      desc: "A 3-month short-term course focuses on core skills in Animation, VFX, or Game Design. It provides hands-on training in industry-standard tools, project-based learning, and portfolio development to prepare students for creative careers.",
      link: "Read More",
    },
    {
      img: course2,
      title: "6 Months Certification",
      desc: "A diploma course in Animation, VFX, or Game Design (12–18 months) offers advanced training in creative tools, techniques, and workflows. It includes practical projects and portfolio building to prepare students for professional careers.",
      link: "Read More",
    },
    {
      img: course3,
      title: "1+ Year Diploma in Animation",
      desc: "A degree course in Animation, VFX, or Game Design (3 years) offers comprehensive training in design principles, advanced tools, and creative storytelling. It includes practical projects, internships, and portfolio development, preparing students for high-level careers in the entertainment and gaming industries.",
      link: "Read More",
    },
    {
      img: course4,
      title: "3+ Year Degree Program",
      desc: "A 6-month course in Animation, VFX, or Game Design provides focused training on essential tools and techniques. It covers key topics like 2D/3D animation, visual effects, and basic game design. The course emphasizes hands-on projects and portfolio building, equipping students with job-ready skills for creative industries.",
      link: "Read More",
    },
  ];

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
        <Row className="">
          {data.map((item, index) => (
            <Col
              xl={3}
              lg={4}
              md={4}
              sm={6}
              key={index}
              className=" mb-5 mb-lg-0"
            >
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.77, delay: index * 0.5 }}
                className="course_col d-flex align-items-center justify-content-center flex-column gap-lg-4 gap-2 me-lg-5  me-0 h-100 "
              >
                <div className="mb-20 ">
                  <img src={item.img} alt="" />
                </div>
                <h4 className="text-center">{item.title}</h4>
                <p className="text-center text-grey">{item.desc}</p>
                <Link>{item.link}</Link>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Course;
