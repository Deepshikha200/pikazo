import React from "react";
import CoursesInnerPages from "../CoursesInnerPages";
import img from "../../../../assets/images/banner/Artboard1.png";


const VFXCourse = () => {
  const faqData = [
    {
      ques: " Module 1",
      ans: [
        {
          con1: "Fundamental of visual effects",
          con2: "Introduction of VFX and SFX",
          con3: "History of visual effect compositing",
          con4: "Introduction of rotoscoping & masking",
          con5: "Introduction of paint",
          con6: "Green screen remove (keying)",
          con7: "Camera tracking",
          con8: "3D camera tracking",
          con9: "Parallax effect",
          con10: "Title and text effects",
          con11: "Background replacement",
          con9: "Using mattes & alpha",
        },
      ],
    },
    {
      ques: " Module 2",
      ans: [
        {
          con1: "Color correction",
          con2: "Tracking and stabilizing",
          con3: "Emitters and FX particle",
          con4: "Dynamic",
          con5: "Match move",
          con6: "Rotomation",
          con7: "Creating 3D environment",
          con8: "Lighting and rendering",
        },
      ],
    },
    {
      ques: " Module 3",
      ans: [
        {
          con1: "Live shoot video for VFX",
          con2: "Create 3D object in live action footage",
          con3: "3D Passes compositing",
          con4: "Advance VFX paint and clean-up",
          con5: "Advance VFX roto and hair & fur",
          con6: "Fluid particle Emitte",
          con7: "Emitte",
          con8: "VFX compositing",
        },
      ],
    },
  ];
  return (
    <section>
      <CoursesInnerPages
        subtitle="VFX Course"
        description="The Pikazo Institute offers top-notch training in graphic design, focusing on digital design, website design, and front-end development. Our course covers essential tools like Adobe Photoshop, Illustrator, and InDesign, alongside concepts such as UX/UI design, responsive design, and mobile-first design."
        description1="Students gain hands-on experience through workshops, guest lectures, and real-world projects, preparing them for careers in advertising, marketing, branding, and more. Upon completion, students receive a diploma, equipping them with the skills needed to thrive in various industries. Join us to kickstart your career in graphic design!"
        src={img}
        faqData={faqData}
      />
    </section>
  );
};

export default VFXCourse;
