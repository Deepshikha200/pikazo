import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CommonHeading from "../../../../common/CommonHeading/CommonHeading";
import "./Projects.scss";
import CommonButton from "../../../../common/CommonButton/CommonButton";
import { motion } from "framer-motion";
import img from "../../../../assets/images/course1.png";

const Projects = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const rows = [
    {
      id: 1,
      img: img,
      content: "Bhediya",
      text: "",
      text1: "Randon Text",
      text2: "Random Text 2",
      text3: "Random Text 3",
    },
    {
      id: 2,
      img: img,
      content: "Fighter",
      text: "",
      text1: "Randon Text",
      text2: "Random Text 5",
      text3: "Random Text 6",
    },
    {
      id: 3,
      img: img,
      content: "Brahmastra",
      text: "",
      text1: "Randon Text",
      text2: "Random Text 8",
      text3: "Random Text 9",
    },
  ];

  return (
    <section className="projects py-60">
      <Container>
        <CommonHeading heading="Our Projects" />
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h3 className="projects_text">5000+ projects already done</h3>
          <CommonButton text="More Work" className="m-0 more_btn" />
        </div>

        <div className="projects-table">
          {rows.map((row, index) => (
            <div
              key={row.id}
              className={`project-row ${hoveredRow === index ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              {hoveredRow === index && (
                <motion.div
                  className="project-image"
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={row.img} alt={`Project ${index + 1}`} />
                </motion.div>
              )}
              <div className="project-content">
                <p className="project-title">{row.content}</p>
              </div>
              <div className="project-content">
                <p>{row.text}</p>
              </div>
              <div className="project-content">
                <p>{row.text1}</p>
              </div>
              <div className="project-content">
                <p>{row.text2}</p>
              </div>
              <div className="project-action">
                <a href="#readmore">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
