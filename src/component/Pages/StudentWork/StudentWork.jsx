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

  const motionGraphicsLinks = [
    "https://www.youtube.com/embed/4WLDBVRUsUE",
    "https://www.youtube.com/embed/1KdOjq70N9k",
    "https://www.youtube.com/embed/lVBeiq0hQTM",
    "https://www.youtube.com/embed/fRle1f95Uoo",
    "https://www.youtube.com/embed/0PGVZuxS47k",
    "https://www.youtube.com/embed/N6fgrYksWw4",
    "https://www.youtube.com/embed/IbGWa6R21rE",
    "https://www.youtube.com/embed/3jEr25nXYMU",
  ];

  const videoEditingLinks = [
    "https://www.youtube.com/embed/xHskODr8pIw",
    "https://www.youtube.com/embed/xoF6s2GC9fM",
    "https://www.youtube.com/embed/MsjkeYfPWKY",
    "https://www.youtube.com/embed/ncTcIGtAb4M",
    "https://www.youtube.com/embed/AKFDelPXVsI",
    "https://www.youtube.com/embed/RqRXKwdALyQ",
  ];

  const categories = {
    All: [...ArtImages, ...VectorArt, ...Graphics],
    "Vector Art": VectorArt,
    "Digital Art": ArtImages,
    "Graphic Designing": Graphics,
    "Motion Graphics": motionGraphicsLinks,
    "Video Editing": videoEditingLinks,
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
          <Row className="student_work_gallery mt-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={animationKey}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="row"
              >
                {categories[selectedCategory].map((item, index) => (
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    xs={6}
                    key={index}
                    className="mb-20"
                  >
                    <motion.div variants={itemVariants}>
                      {selectedCategory === "Motion Graphics" ||
                      selectedCategory === "Video Editing" ? (
                        <iframe
                          width="100%"
                          height="200"
                          src={item}
                          title={`Video ${index + 1}`}
                          // frameBorder="0"
                          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <img src={item} alt={`Artboard ${index + 1}`} />
                      )}
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
