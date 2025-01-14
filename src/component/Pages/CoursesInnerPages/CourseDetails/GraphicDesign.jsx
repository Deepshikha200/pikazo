import React from "react";
import CoursesInnerPages from "../CoursesInnerPages";
import img from "../../../../assets/Student_Work/Graphics/Artboard1.png";
import { Col, Container, Row } from "react-bootstrap";
import { Graphics } from "../../../../assets/Student_Work/ArtImages";
import { AnimatePresence, motion } from "framer-motion";
import img1 from "../../../../assets/images/banner/Artboard11.png";

const GraphicDesign = () => {
  const faqData = [
    {
      ques: " Module 1",
      ans: [
        {
          con1: "Fundamental of design",
          con2: "Lay out design",
          con3: "Colour theories",
          con5: "Illustration",
          con6: "Vector and raster",
          con7: "Framing in composition",
          con8: "Logo design",
          con9: "Font customs design",
          con10: "Create unique shapes and graphic styling",
          con11: "Styling graphic and shapes",
        },
      ],
    },
    {
      ques: " Module 2",
      ans: [
        {
          con1: "Typographic",
          con2: "Advance illustration",
          con3: "Image manipulation",
          con5: "Creating collages and template",
          con6: "Digital art",
          con7: "Digital panting",
          con8: "Product advertisement",
          con9: "Magazine cover",
          con10: "Matt painting",
          con11: "Product design",
          con12: "Advertisement design",
          con13: "Color combination Theory",
          con14: "2D creature",
        },
      ],
    },
    {
      ques: " Module 3",
      ans: [
        {
          con1: "Modern brochures",
          con2: "Business kit",
          con3: "UI & UX",
          con5: "Creative visualization",
          con6: "Magazines",
          con7: "Books design",
          con8: "Social media design",
          con9: "Wed page design",
          con10: "Advertisement design",
          con11: "Advanced design",
          con12: "Rendering",
          con13: "File formats and rendering",
        },
      ],
    },
  ];

  const jobs = [
    "Graphic designer",
    "Advertisement designer",
    "Website designer",
    "Brand designer",
    "User interface designer",
    "UI & UX designer",
    "Packaging designer",
    "Printing and newspaper",
    "Creative read",
    "Magazine designer",
  ];

  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
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

  return (
    <section className="pb-5">
      <CoursesInnerPages
        subtitle="Graphics Designing"
        description="The Pikazo Institute offers top-notch training in graphic design, focusing on digital design, website design, and front-end development. Our course covers essential tools like Adobe Photoshop, Illustrator, and InDesign, alongside concepts such as UX/UI design, responsive design, and mobile-first design."
        description1="Students gain hands-on experience through workshops, guest lectures, and real-world projects, preparing them for careers in advertising, marketing, branding, and more. Upon completion, students receive a diploma, equipping them with the skills needed to thrive in various industries. Join us to kickstart your career in graphic design!"
        src={img1}
        faqData={faqData}
      />
      <div className="text-center py-5">
        <h2 className="text-center  graphic_heading">Applicable jobs</h2>
      </div>
      <Container>
        <ul className="course-list mb-5">
          {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
        <div className="text-center py-5">
          <h2 className="text-center  graphic_heading">Student Work</h2>

          <Row className="mt-5">
            <AnimatePresence mode="wait">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="row"
              >
                {Graphics.map((image, index) => (
                  <Col lg={3} md={4} sm={6}>
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className=" student_work_image mb-20"
                    >
                      <img src={image} alt={`Placement ${index + 1}`} />{" "}
                    </motion.div>
                  </Col>
                ))}
              </motion.div>
            </AnimatePresence>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default GraphicDesign;
