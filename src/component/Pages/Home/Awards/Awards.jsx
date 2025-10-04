import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import Artboard1 from "../../../../assets/images/Artboard1.png";
import Artboard2 from "../../../../assets/images/Artboard2.png";
import Artboard3 from "../../../../assets/images/Artboard3.png";
import Artboard4 from "../../../../assets/images/Artboard4.png";
import Artboard5 from "../../../../assets/images/Artboard5.png";
import Artboard6 from "../../../../assets/images/Artboard6.png";
import Artboard7 from "../../../../assets/images/Artboard7.png";
import "./Awards.scss";

const Awards = () => {
  const boxes = [
    Artboard3,
    Artboard1,
    Artboard7,
    Artboard5,
    Artboard4,
    Artboard2,
    Artboard6,
  ];

  return (
    <section className="affiliation">
      <div className="aff_bg"></div>
      <Container>
        <h4 className="affiliation_heading">
          <span>Our Affiliations</span>
        </h4>
        <div className="d-lg-block d-none">
          <Row className="justify-content-center ">
            {boxes.slice(0, 4).map((img, index) => (
              <Col
                key={index}
                lg={3}
                md={4}
                sm={6}
                xs={6}
                className="d-flex justify-content-center "
              >
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.07,
                    transition: { duration: 0.2, delay: 0.1 },
                  }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="affiliation_img"
                >
                  <img src={img} alt={`Affiliation ${index + 1}`} />
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="d-lg-none d-block">
          <Row className=" justify-content-center">
            {boxes.map((img, index) => (
              <Col
                key={index}
                lg={3}
                md={4}
                sm={6}
                xs={6}
                className="d-flex justify-content-center "
              >
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.07,
                    transition: { duration: 0.2, delay: 0.2 },
                  }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="affiliation_img"
                >
                  <img src={img} alt={`Affiliation ${index + 1}`} />
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="d-lg-block d-none">
          <Row className="justify-content-center">
            {boxes.slice(4).map((img, index) => (
              <Col
                key={index}
                lg={3}
                md={4}
                sm={6}
                xs={6}
                className="d-flex justify-content-center "
              >
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.07,
                    transition: { duration: 0.2, delay: 0.2 },
                  }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="affiliation_img"
                >
                  <img src={img} alt={`Affiliation ${index + 5}`} />
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>

        <p className="text-center text-white fw-bold fs-1">
          We Partner with the Top Government Educational Bodies, Universities,
          Colleges and Studios.
        </p>
      </Container>
    </section>
  );
};

export default Awards;
