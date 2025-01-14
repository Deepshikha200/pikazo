import React from "react";
import img from "../../../../assets/images/banner/Artboard24.png";
import CoursesInnerPages from "../CoursesInnerPages";
const UiUx = () => {
  const faqData = [
    {
      ques: " Module 1 (Design Thinking and User Research)",
      ans: [
        {
          con1: "Introduction to user experience (UX) design",
          con2: "Design thinking principles and methodologies",
          con3: "User research methods (interviews,usability testing)",
          con4: "Persona development and user scenarios",
          con5: "Empathy mapping and problem framing",
        },
      ],
    },
    {
      ques: " Module 2 (Interaction Design and Information Architecture)",
      ans: [
        {
          con1: "Level design principles and techniques",
          con2: "Environmental storytelling and world-building",
          con3: "Level geometry and architecture",
          con4: "Creating collages and template",
          con5: "Gameplay pacing and flow",
          con6: "Play testing and level iteration",
        },
      ],
    },
    {
      ques: " Module 3 (Visual Design and Branding)",
      ans: [
        {
          con1: "Principles of visual design (typography, color theory, layout)",
          con2: "UI design patterns and trends",
          con3: "Branding and style guide development",
          con4: "High-fidelity prototyping and design tools",
          con5: "Design systems and component libraries",
        },
      ],
    },
  ];
  return (
    <section>
      <CoursesInnerPages
        subtitle="UI/UX Designing"
        description="The goal of the UI/UX Design course is to give students the abilities and information needed to develop captivating, logical, and user-friendly digital experiences. A wide number of subjects are covered in this extensive program, such as usability testing, graphic design, interaction design, user research, and prototyping. Students will gain knowledge on how to use design thinking approaches and ideas to produce end-user-focused products and user interfaces. "
        description1="With a solid understanding of user-friendly design concepts, students will be able to design interfaces that are not only attractive but also highly efficient and accessible. Students will have practical experience utilizing industry-standard design tools and processes through assignments and hands-on projects.

"
        src={img}
        faqData={faqData}
      />
    </section>
  );
};

export default UiUx;
