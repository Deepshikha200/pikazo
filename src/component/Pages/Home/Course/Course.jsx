import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import "./Course.scss";
import course1 from "../../../../assets/images/course1.png";
import course2 from "../../../../assets/images/course2.png";
import course3 from "../../../../assets/images/course3.png";
import course4 from "../../../../assets/images/course4.png";
import { motion } from "framer-motion";

const Course = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const data = [
    {
      img: course1,
      title: "3 Months Short Term",
      desc: "A 3-month short-term course focuses on core skills in Animation, VFX, or Game Design. It provides hands-on training in industry-standard tools, project-based learning, and portfolio development to prepare students for creative careers.",
    },
    {
      img: course2,
      title: "6 Months Certification",
      desc: "A diploma course in Animation, VFX, or Game Design (12–18 months) offers advanced training in creative tools, techniques, and workflows. It includes practical projects and portfolio building to prepare students for professional careers.",
    },
    {
      img: course3,
      title: "1+ Year Diploma in Animation",
      desc: "A degree course in Animation, VFX, or Game Design (3 years) offers comprehensive training in design principles, advanced tools, and creative storytelling. It includes practical projects, internships, and portfolio development, preparing students for high-level careers in the entertainment and gaming industries.",
    },
    {
      img: course4,
      title: "3+ Year Degree Program",
      desc: "A 6-month course in Animation, VFX, or Game Design provides focused training on essential tools and techniques. It covers key topics like 2D/3D animation, visual effects, and basic game design. The course emphasizes hands-on projects and portfolio building, equipping students with job-ready skills for creative industries.",
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
      <div className="course-container">
        {data.map((item, index) => (
          <motion.div
            className={`course-box ${
              expandedIndex === index ? "expanded" : ""
            }`}
            key={index}
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          >
            <div className="image-container">
              <img src={item.img} alt="" />
            </div>
            <h4>{item.title}</h4>
            <div
              className={`description ${expandedIndex === index ? "show" : ""}`}
            >
              {item.desc}
            </div>
            <button>
              {expandedIndex === index ? "Show Less" : "Read More"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Course;
