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
      ques: "Module 1 : Introduction to Graphic Design and Design Principles",
      ans: [
        {
          con1: "Introduction to Graphic Design",
          con2: "History and Evolution of Graphic Design",
          con3: "Types of Graphic Design (Print, Digital, Branding)",
          con4: "The Role of a Graphic Designer",
          con5: "Overview of the Design Process",
          con6: "The Importance of Visual Communication",
          con7: "Design Principles: Contrast",
          con8: "Design Principles: Alignment and Repetition",
          con9: "Design Principles: Proximity, Balance, Hierarchy, and Space",
        },
      ],
    },
    {
      ques: "Module 2 : Working with Adobe Photoshop",
      ans: [
        {
          con1: "Introduction to Photoshop Interface",
          con2: "Basic Navigation in Photoshop",
          con3: "2D creature",
          con4: "Working with Layers in Photoshop",
          con5: "Image Adjustment Techniques: Brightness, Contrast, Levels",
          con6: "Working with Selections: Marquee, Lasso, Magic Wand",
          con7: "Using Masks and Layer Effects",
          con8: "Introduction to Photoshop Brushes and Filters",
          con9: "Exporting Files: Formats and Resolutions",
        },
      ],
    },

    {
      ques: "Module 3 : Typography & Layout Design",
      ans: [
        {
          con1: "Introduction to Typography",
          con2: "Font Families: Serif, Sans-Serif, Display, Script",
          con3: "Typeface Selection for Different Projects",
          con4: "Creating Typographic Hierarchy",
          con5: "Leading, Kerning, and Tracking",
          con6: "Designing for Print vs. Digital Media",
          con7: " The Grid System for Layout Design",
          con8: "Alignment and Spacing in Layouts",
          con9: "Working with White Space and Visual Flow",
        },
      ],
    },
    {
      ques: "Module 4 : Working with Adobe Illustrator",
      ans: [
        {
          con1: "Introduction to Illustrator Interface",
          con2: "Difference Between Vector and Raster Graphics",
          con3: "Pen Tool: Creating Shapes and Paths",
          con4: "Shape Tools: Rectangle, Ellipse, Polygon, Star",
          con5: "Working with the Pathfinder Tool",
          con6: "Using the Direct Selection Tool for Fine-tuning",
          con7: "Color Theory and Applying Gradients",
          con8: "Working with Brushes and Patterns",
          con9: "Preparing and Exporting Vector Artwork",
        },
      ],
    },
    {
      ques: "Module 5 : Branding and Identity Design",
      ans: [
        {
          con1: "Introduction to Brand Identity",
          con2: "The Importance of a Logo in Branding",
          con3: "Logo Design Process: Research and Conceptualization",
          con4: "Color Psychology in Branding",
          con5: "Typography for Branding",
          con6: "Designing Business Cards and Letterheads",
          con7: "Brand Guidelines and Consistency",
          con8: "Designing Social Media Assets for Branding",
          con9: "The Role of Imagery in Brand Identity",
        },
      ],
    },

    {
      ques: "Module 6 : Final Project & Review",
      ans: [
        {
          con1: "Planning the Final Project: Concept Development",
          con2: "Creating a Logo for a Brand",
          con3: "Designing Business Collateral: Business Cards, Letterheads",
          con4: "Creating Social Media Templates for the Brand",
          con5: "Working on a Website Mockup or Digital Design",
          con6: "Reviewing and Refining Your Design Work",
          con7: "Presentation Skills: How to Present Your Design",
          con8: "Peer Feedback and Critiques",
          con9: "Final Project Submission and Portfolio Development",
        },
      ],
    },
  ];

  const jobs = [
    "Graphic designer",
    "Brand Identity Designer",
    "Visual Designer",
    "Packaging Designer",
    "Print Designer",
    "Creative Director",
    "Art Director",
    "Marketing Designer",
    "Publication Designer",
    "Digital Designer",
    "UI/UX Designer",
    "Infographic Designer",
    "Environmental Graphic Designer",
    "Advertising Designer",
    "Freelance Graphic Designer",
    "Poster Designer",
    "Layout Artist",
    "Typography Specialist",
    "Social Media Designer",
    "Exhibition Designer",
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
        description="This course explores the principles of visual communication and design, focusing on creating impactful and professional designs. Students will learn branding, typography, layout design, and color theory while mastering tools like Adobe Photoshop, Illustrator, and InDesign. By the end, learners will create logos, brochures, posters, packaging, and digital content.
"
        src={img1}
        faqData={faqData}
        jobs={jobs}
      />

      <Container>
        <div className="text-center py-5">
          <h2 className="text-center  graphic_heading">Student Work</h2>
          <Row className="mt-lg-5 mt-3">
            <AnimatePresence mode="wait">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="row"
              >
                {Graphics.map((image, index) => (
                  <Col lg={3} md={4} sm={6} xs={6}>
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
