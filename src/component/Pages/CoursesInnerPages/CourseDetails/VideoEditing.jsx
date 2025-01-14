import React from "react";
import CoursesInnerPages from "../CoursesInnerPages";
import img from "../../../../assets/images/banner/Artboard2.png";

const VideoEditing = () => {
  const faqData = [
    {
      ques: "Module 1",
      ans: [
        {
          con1: "Basics fundamentals & audio and video editing",
          con2: "Lay out design",
          con3: "Color theory for video editing",
          con4: "File formats for Audio & video",
          con5: "Image size & file size workflow",
          con6: "Proxy",
          con7: "Sequence cuts",
          con8: "Masking",
          con9: "Graphic animation",
          con10: "Title Animation",
          con11: "Transition",
          con12: "Speed ramping",
          con13: "Multi-camera editing",
          con14: "Clip & cuts matching",
          con15: "Video effects",
        },
      ],
    },
    {
      ques: "Module 2",
      ans: [
        {
          con1: "2D creature",
          con2: "Videography",
          con3: "Image manipulation",
          con4: "Raw Footage Editing",
          con5: "Non-linear editing",
          con6: "Footage Stabilization",
          con7: "Blending modes",
          con8: "Color Correction",
          con9: "Matt painting",
          con10: "Color Grading",
          con11: "Lumetri colors",
          con12: "Keying",
          con13: "Camera tracking",
          con14: "Reade scopes & color wheels",
          con15: "Using LUTs",
        },
      ],
    },
    {
      ques: "Module 3",
      ans: [
        {
          con1: "Advance Transition",
          con2: "Audio Mixing",
          con3: "Advance tools",
          con4: "Skin retouching",
          con5: "Parallax Effects",
          con6: "Advance effects",
          con7: "Rendering Formats",
          con8: "Rendering File formats conversion",
        },
      ],
    },
  ];

  return (
    <section>
      <CoursesInnerPages
        subtitle="Video Editing Course"
        description="The Pikazo Institute offers top-notch training in graphic design, focusing on digital design, website design, and front-end development. Our course covers essential tools like Adobe Photoshop, Illustrator, and InDesign, alongside concepts such as UX/UI design, responsive design, and mobile-first design."
        description1="Students gain hands-on experience through workshops, guest lectures, and real-world projects, preparing them for careers in advertising, marketing, branding, and more. Upon completion, students receive a diploma, equipping them with the skills needed to thrive in various industries. Join us to kickstart your career in graphic design!"
        src={img}
        faqData={faqData}
      />
    </section>
  );
};

export default VideoEditing;
