import React from "react";
import img from "../../../../assets/Student_Work/Graphics/Artboard1.png";
import CoursesInnerPages from "../CoursesInnerPages";
import img2 from "../../../../assets/images/banner/Artboard23.png";
import { Col, Container, Row } from "react-bootstrap";

const MotionGraphics = () => {
  const faqData = [
    {
      ques: " Module 1",
      ans: [
        {
          con1: "Fundamental of design",
          con2: "Lay out design",
          con3: "Colour theories",
          con4: "Illustration",
          con5: "Vector and raster",
          con6: "Framing in composition",
          con7: "Logo motion design",
          con8: "Font customs design",
          con9: "Animated shapes & graphic sign",
        },
      ],
    },
    {
      ques: " Module 2",
      ans: [
        {
          con1: "Character animation",
          con2: "Title & graphic Effects",
          con3: "Color theory",
          con4: "2 .5 D Parallax",
          con5: "Matte Painting",
          con6: "Typography Techniques",
          con7: "Digital Compositing",
          con8: "Particle Effects",
          con9: "Masking effects",
          con10: "Hologram Effect",
        },
      ],
    },
    {
      ques: " Module 3",
      ans: [
        {
          con1: "Third party plugin",
          con2: "Explainer video",
          con3: "Info graphic",
          con4: "Advance effect",
        },
      ],
    },
  ];

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

  return (
    <section>
      <CoursesInnerPages
        // title="Become a Master in"
        subtitle="Motion Graphics"
        description="Pikazo Institute is proud to offer a comprehensive motion graphics course for students looking to gain a deep understanding of the techniques and tools used in the creation of dynamic visual effects for film, television, and digital media. The course is designed to teach students the fundamental principles of motion graphics and animation, as well as the software and techniques used in the industry."
        description1="Throughout the course, students will learn how to create and manipulate 2D and 3D graphics, work with key frame animation, and use compositing techniques to bring their designs to life. Students will also gain hands-on experience with industry-standard software such as Adobe after Effects, Cinema 4D, and more. The course is taught by industry professionals who bring real-world experience and expertise to the classroom, and provide students with the skills and knowledge they need to succeed in the competitive world of motion graphics."
        src={img2}
        // buttonText="Upgrade your skill with Pikazo"
        faqData={faqData} // Pass the FAQ data here
      />
      <Container>
        <div className="text-center py-5">
          <h2 className="text-center  graphic_heading">Student Work</h2>
          <Row>
            {motionGraphicsLinks.map((item, index) => (
              <Col lg={3} sm={6} xs={12} className="mb-4">
                <div key={index} className="py-3">
                  <iframe
                    width="100%"
                    height="200"
                    src={item}
                    title={`Video ${index + 1}`}
                    allowFullScreen
                  ></iframe>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default MotionGraphics;
