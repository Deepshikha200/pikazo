import React from "react";
import img from "../../../../assets/images/banner/Artboard22.png";
import CoursesInnerPages from "../CoursesInnerPages";
const DigitalMarketing = () => {
  const faqData = [
    {
      ques: " Module 1",
      ans: [
        {
          con1: "Principles of digital marketing",
          con2: "Web site development",
          con3: "Search engine marketing",
          con4: "Search engine optimization",
          con5: "Email marketing",
          con6: "Online reputation management",
          con7: "Google AdSense and affiliate marketing",
        },
      ],
    },
    {
      ques: " Module 2",
      ans: [
        {
          con1: "Google banner adds",
          con2: "Advance illustration",
          con3: "Image manipulation",
          con4: "Campaign management",
          con5: "Campaign quality score",
          con6: "Analysis for Google , yahoo and Bing ads",
          con7: "Google PPC ad words",
          con8: "Search engine optimization of the web site",
          con9: "Keywords research and analysis",
          con10: "Free lancing projects for students",
          con11: "Concept of link building",
        },
      ],
    },
    {
      ques: " Module 3",
      ans: [
        {
          con1: "LSI (latent semantic indexing )",
          con2: "Web master and Google analystic",
          con3: "Directory submission on web",
          con4: "Up skilling of marketing professionals",
          con5: "Dynamic optimization of the web site",
          con6: "Students can learn to promote business and market agencies",
          con7: "Career growth of digital marketing",
          con8: "Branding and marketing analytics",
        },
      ],
    },
  ];
  return (
    <section>
      <CoursesInnerPages
        subtitle="Digital Marketing "
        description="The Pikazo Institute offers top-notch training in graphic design, focusing on digital design, website design, and front-end development. Our course covers essential tools like Adobe Photoshop, Illustrator, and InDesign, alongside concepts such as UX/UI design, responsive design, and mobile-first design."
        description1="Students gain hands-on experience through workshops, guest lectures, and real-world projects, preparing them for careers in advertising, marketing, branding, and more. Upon completion, students receive a diploma, equipping them with the skills needed to thrive in various industries. Join us to kickstart your career in graphic design!"
        src={img}
        faqData={faqData}
      />
    </section>
  );
};

export default DigitalMarketing;
