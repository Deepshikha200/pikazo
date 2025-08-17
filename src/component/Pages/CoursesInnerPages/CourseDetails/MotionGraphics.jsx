import React from "react";
import img from "../../../../assets/Student_Work/Graphics/Artboard1.png";
import CoursesInnerPages from "../CoursesInnerPages";
import img2 from "../../../../assets/images/banner/Artboard23.png";
import { Col, Container, Row } from "react-bootstrap";

const MotionGraphics = () => {
  const faqData = [
    {
      ques: "Module 1: Introduction to Motion Graphics and Animation Principles",
      ans: [
        {
          con1: "Introduction to Motion Graphics",
          con2: "History and Evolution of Motion Graphics",
          con3: "The Role of Motion Graphics in Media and Advertising",
          con4: "Animation Principles",
          con5: "Importance of Storyboarding in Motion Graphics",
          con6: "Introduction to Keyframes and Animation Curves",
          con7: "Types of Motion Graphics: 2D, 3D, Kinetic Typography",
        },
      ],
    },
    {
      ques: "Module 2: Working with Adobe After Effects: Basics and Interface",
      ans: [
        {
          con1: "Introduction to Adobe After Effects Interface",
          con2: "Navigating the Timeline and Composition Panel",
          con3: "Importing Media Files into After Effects",
          con4: "Layer Basics: Types of Layers (Text, Shape, Solid, Video)",
          con5: "Understanding the Keyframe Timeline",
          con6: "Transforming Layers: Position, Scale, Rotation, Opacity",
          con7: "Working with the Composition Settings and Resolution",
          con8: "Using Effects and Presets",
          con9: "Introduction to Rotoscoping and Masking Techniques",
        },
      ],
    },
    {
      ques: "Module 3: Typography Animation and Effects",
      ans: [
        {
          con1: "Introduction to Typography in Motion Graphics",
          con2: "Basic Typography Animation Techniques",
          con3: "Text Animators: Using Position, Scale, Rotation",
          con4: "Creating Kinetic Typography: Timing and Rhythm",
          con5: "Working with Typography Presets and Effects",
          con6: "Adding Expressions to Automate Typography Animations",
          con7: "Using the Text Tool to Create 3D Text in After Effects",
          con8: "Advanced Typography Techniques: Tracking and 3D Integration",
          con9: "Exporting and Rendering Text-Based Animations",
        },
      ],
    },
    {
      ques: "Module 4: Working with 3D Elements and Camera in After Effects",
      ans: [
        {
          con1: "Introduction to 3D Space in After Effects",
          con2: "Converting Layers into 3D Layers",
          con3: "Understanding the 3D Camera and Lights",
          con4: "Working with the Camera Tool: Movement and Angles",
          con5: "Using Null Objects to Control 3D Layers",
          con6: "3D Text and Shape Layers: Creating a 3D Environment",
          con7: "Depth of Field and Camera Focus in 3D",
          con8: "Working with 3D Animation Presets",
          con9: "Rendering 3D Animations in After Effects",
        },
      ],
    },
    {
      ques: "Module 5: Compositing and Visual Effects",
      ans: [
        {
          con1: "Introduction to Compositing in After Effects",
          con2: "Using Adjustment Layers for Non-destructive Editing",
          con3: "Green Screen and Chroma Keying",
          con4: "Working with Blend Modes and Layer Styles",
          con5: "Applying Visual Effects: Particle Systems and Simulations",
          con6: "Motion Tracking and Stabilization",
          con7: "Creating Transitions and Animated Sequences",
          con8: "Integrating Video and Sound Effects in Motion Graphics",
          con9: "Rendering and Exporting Final Compositions",
        },
      ],
    },
    {
      ques: "Module 6: Final Project & Review",
      ans: [
        {
          con1: "Planning the Final Motion Graphics Project",
          con2: "Storyboarding for a Motion Graphics Animation",
          con3: "Creating an Animated Logo or Intro Sequence",
          con4: "Integrating Typography, Imagery, and Video into the Project",
          con5: "Adding Music and Sound Effects to Enhance Motion Graphics",
          con6: "Reviewing Animation Timing and Transitions",
          con7: "Peer Feedback and Instructor Critiques",
          con8: "Final Project Presentation and Refinement",
          con9: "Portfolio Development and Exporting Final Work",
        },
      ],
    },
  ];

  const jobs = [
    "Motion Graphics Designer",
    "2D Animator",
    "3D Animator",
    "Video Editor (Specializing in Motion Design)",
    "Broadcast Designer",
    "Visual Effects Artist (VFX)",
    "Title Designer for Films/TV",
    "Content Creator (with Motion Graphics Skills)",
    "Multimedia Artist",
    "Animation Director",
    "Kinetic Typography Designer",
    "Character Animator",
    "Explainer Video Artist",
    "Technical Animator",
    "Advertising Motion Designer",
    "AR/VR Graphics Specialist",
    "Game Animator",
    "Motion Graphics Consultant",
    "Corporate Video Animator",
    "Projection Mapping Artist",
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
        subtitle="Motion Graphics"
        description="The Motion Graphics course focuses on bringing designs to life through animation and movement. Students will explore 2D and 3D animation, kinetic typography, and visual effects. Using tools like Adobe After Effects and Cinema 4D, learners will create engaging visual content for advertisements, films, and social media."
        src={img2}
        faqData={faqData}
        jobs={jobs}
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
