import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./StudentWork.scss";
import { Col, Container, Row } from "react-bootstrap";
import CommonHeading from "../../../common/CommonHeading/CommonHeading";
import {
  ArtImages,
  VectorArt,
  Graphics,
} from "../../../assets/Student_Work/ArtImages";
import Header from "../../../common/Header/Header";

const StudentWork = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [animationKey, setAnimationKey] = useState(0);

  const categories = {
    All: [...ArtImages, ...VectorArt, ...Graphics],
    "Vector Art": VectorArt,
    "Graphic Designing": Graphics,
    "Digital Art": ArtImages,
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setAnimationKey((prev) => prev + 1); // Increment key to retrigger animation
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the appearance of children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Header />
      <section className="student">
        <Container>
          <CommonHeading heading="Student Work" className="student_heading" />
          <div className="student_btn">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`student_btn_item ${
                  selectedCategory === category ? "active" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <Row className="student_work_gallery mt-5 ">
            <AnimatePresence mode="wait">
              <motion.div
                key={animationKey}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="row"
              >
                {categories[selectedCategory].map((image, index) => (
                  <Col lg={3} md={4} sm={6} xs={6}>
                    <motion.div
                      key={index}
                      variants={itemVariants}
                    >
                      <img src={image} alt={`Artboard ${index + 1}`} />
                    </motion.div>
                  </Col>
                ))}
              </motion.div>
            </AnimatePresence>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default StudentWork;
