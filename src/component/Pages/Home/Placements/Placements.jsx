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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {pages[currentPage].map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`placement-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
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
