import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import "./FormPage.scss";
import img2 from "../../../../assets/images/aboutimg11.jpg";
import img1 from "../../../../assets/images/aboutimg12.jpg";
import CommonButton from "../../../../common/CommonButton/CommonButton";
import GetInTocuh from "../../../../common/GetInTocuh/GetInTocuh";
import {
  FaceBookIcon,
  Instagram,
  Linkdin,
  Youtube,
} from "../../../../assets/images/Icons/SvgIcons";

const FormPage = () => {
  const formRef = useRef(null);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="form" id="about-us" ref={formRef}>
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <div className="form_col">
              <motion.div
                className="form_col_img first mt-md-0 mt-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
              >
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  src={img1}
                  alt=""
                />
              </motion.div>
              <motion.div
                className="form_col_img second"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
              >
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  src={img2}
                  alt=""
                />
              </motion.div>
            </div>
          </Col>
          <Col lg={5} md={6}>
            <motion.div
              className="form_col_text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <motion.h2
                data-content="One of the Most "
                className="mb-20"
                variants={scaleIn}
              >
                WHO WE ARE?
              </motion.h2>
              <p>
                Pikazzo is an institute experienced with 2D & 3D Animation,
                Visual effects (VFX), Motion Graphics, Video editing,
                photography, and Film making and is based in Chandigarh. We have
                been providing students industrial training for 5+ years and now
                we are offering a commercial platform for students to help build
                a career.
              </p>
              <br />
              <p>
                We offer 2D & 3D animation, Visual effects (VFX), Graphic
                Designing, Photography, Cinematography, Film making, Gaming, and
                much more with trained professional artists who have worked in
                the industry for more than 5+ years.
              </p>
              {/* <CommonButton text="Learn More" className="learn_more_btn" /> */}
              <div className=" d-flex gap-3 justify-content-center  justify-content-lg-start   mt-5">
                <span>
                  <a
                    href="https://www.linkedin.com/company/pikazoinstitute/"
                    target="_blank"
                  >
                    <Linkdin />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.instagram.com/pikazoinstitute/"
                    target="_blank"
                  >
                    <Instagram />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.youtube.com/@pikazoinstitute"
                    target="_blank"
                  >
                    <Youtube />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.facebook.com/PikazoInstitute/"
                    target="_blank"
                  >
                    <FaceBookIcon />
                  </a>
                </span>
              </div>
            </motion.div>
          </Col>
          <Col lg={3} md={12} className="d-md-block d-none">
            <GetInTocuh />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FormPage;
