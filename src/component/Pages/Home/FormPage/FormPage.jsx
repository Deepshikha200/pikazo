import React, { useEffect, useRef } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./FormPage.scss";
import img2 from "../../../../assets/images/aboutimg11.jpg";
import img1 from "../../../../assets/images/aboutimg12.jpg";
import { motion } from "framer-motion";
import CommonButton from "../../../../common/CommonButton/CommonButton";
import GetInTocuh from "../../../../common/GetInTocuh/GetInTocuh";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FormPage = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".form_col_img.first img", {
        scrollTrigger: {
          trigger: ".form_col_img.first img",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.from(".form_col_img.second img", {
        scrollTrigger: {
          trigger: ".form_col_img.second img",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: 50,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.from(".form_col_text", {
        scrollTrigger: {
          trigger: ".form_col_text",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.from(".form_col_text h2", {
        scrollTrigger: {
          trigger: ".form_col_text h2",
          start: "top 90%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="form py-60" id="about-us" ref={formRef}>
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <div className="form_col">
              <motion.div className="form_col_img first">
                <img src={img1} alt="" />
              </motion.div>
              <motion.div className="form_col_img second">
                <img src={img2} alt="" />
              </motion.div>
            </div>
          </Col>
          <Col lg={5} md={6}>
            <div className="form_col_text">
              <h2 data-content="One of the Most " className="mb-20">
                WHO WE ARE?
              </h2>
              <p>
                Pikazo is an institute experienced with 2D & 3D Animation,
                Visual effects (VFX), Motion Graphics, Video editing,
                photography, and Film making and is based in Chandigarh. We
                have been providing students industrial training for 5+ years
                and Now we are offering commercial platform for students to
                help build a career.
              </p>
              <br />
              <p>
                We offer 2D & 3D animation, Visual effects ( VFX), Graphic
                Designing, Photography, Cinematography, Flim making, Gaming, and
                much more with trained professional artists who worked in the
                industry for more than 5+ years.
              </p>

              <CommonButton text="Learn More" className="learn_more_btn" />
            </div>
          </Col>
          <Col lg={3} md={12}>
            <GetInTocuh />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FormPage;
