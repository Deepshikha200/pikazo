import React from "react";
import img from "../../../../assets/images/banner/Artboard14.png";
import CoursesInnerPages from "../CoursesInnerPages";
const Photography = () => {
  const faqData = [
    {
      ques: " Module 1",
      ans: [
        {
          con1: "Fundamental of photography",
          con2: "Introduction of aperture & shutter speed",
          con3: "ISO Settings",
          con4: "Manual shooting modes",
          con5: "Automatic & semiautomatic modes",
          con6: "Framing & composition",
          con7: "History of photography",
          con8: "Formats (RAW  JPEG)",
          con9: "Understanding on shoot lighting",
          con10: "Camera setting",
          con11: "Color theory",
          con12: "Understanding different types of lenses",
          con13: "Manual & autofocusing techniques",
          con12: "Color grading & color correction",
          con12: "Raw image data processing",
        },
      ],
    },
    {
      ques: " Module 2",
      ans: [
        {
          con1: "Understanding camera equipment",
          con2: "Indoor photography",
          con3: "Outdoor photography",
          con4: "Wild life photography",
          con5: "Travel photography",
          con6: "Nature photography",
          con7: "Landscape photography",
          con8: "Commercial photography",
          con9: "Product photography",
          con10: "Modal portfolio photography",
          con11: "Candidate photography",
          con12: "Portrait photography",
        },
      ],
    },
  ];
  return (
    <section>
      <CoursesInnerPages
        subtitle="Photography Course"
        description="The Pikazo Institute offers top-notch training in graphic design, focusing on digital design, website design, and front-end development. Our course covers essential tools like Adobe Photoshop, Illustrator, and InDesign, alongside concepts such as UX/UI design, responsive design, and mobile-first design."
        description1="Students gain hands-on experience through workshops, guest lectures, and real-world projects, preparing them for careers in advertising, marketing, branding, and more. Upon completion, students receive a diploma, equipping them with the skills needed to thrive in various industries. Join us to kickstart your career in graphic design!"
        src={img}
        faqData={faqData}
      />
    </section>
  );
};

export default Photography;
