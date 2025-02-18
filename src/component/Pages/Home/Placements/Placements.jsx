import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Placements.scss";
import { PlacementImg } from "../../../../assets/Student_Work/ArtImages.js";
import CommonHeading from "../../../../common/CommonHeading/CommonHeading.jsx";

const Placements = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 8;

  const pages = [];
  for (let i = 0; i < PlacementImg.length; i += imagesPerPage) {
    pages.push(PlacementImg.slice(i, i + imagesPerPage));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [pages.length]);

  return (
    <section className="placements" id="placement">
      <Container>
        <Row className="align-items-center">
          <Col lg={3} sm={12}>
            <CommonHeading heading="Our Top Placements" className="heading" />
          </Col>
          <Col lg={9} sm={12}>
            <div className="placement_img">
              <motion.div
                key={currentPage}
                initial={{ rotateY: 0, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 0, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                {pages[currentPage].map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`placement-${index}`}
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.2 }}
                    height={200}
                    width={200}
                  />
                ))}
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Placements;
