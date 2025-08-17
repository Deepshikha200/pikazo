import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./StudentWork.scss";
import { Col, Container, Row } from "react-bootstrap";
import CommonHeading from "../../../common/CommonHeading/CommonHeading";
import {
  ArtImages,
  VectorArt,
  Graphics,
  StudentUpdate,
} from "../../../assets/Student_Work/ArtImages";
import Header from "../../../common/Header/Header";
import student_img from "../../../assets/images/student_work.png";
import student_work_mobile from "../../../assets/images/student_work_mobile.png";

const StudentWork = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [animationKey, setAnimationKey] = useState(0);
  //h

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
    All: [...StudentUpdate, ...ArtImages, ...VectorArt, ...Graphics],
    "3D": StudentUpdate,
    "Digital Art": ArtImages,
    "Vector Art": VectorArt,
    "Graphic Designing": Graphics,
    "Motion Graphics": motionGraphicsLinks,
    "Video Editing": videoEditingLinks,
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setAnimationKey((prev) => prev + 1);
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        <div className="student_img">
          <img
            src={student_img}
            alt="student_img"
            className="d-md-block d-none"
          />
          <img
            src={student_work_mobile}
            alt="student_img"
            className="d-md-none d-block"
          />

          <h2 className="student_heading">Student Work</h2>
        </div>
        <div className="student_con">
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
          <Row className="student_work_gallery grid-container mt-5">
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
                    xl={2}
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
                        <img
                          src={item}
                          alt={`Artboard ${index + 1}`}
                          className="artboard"
                        />
                      )}
                    </motion.div>
                  </Col>
                ))}
              </motion.div>
            </AnimatePresence>
          </Row>
        </div>
      </section>
    </>
  );
};

export default StudentWork;
