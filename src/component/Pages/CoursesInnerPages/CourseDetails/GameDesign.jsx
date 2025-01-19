import React from "react";
import img from "../../../../assets/images/banner/Artboard15.png";
import CoursesInnerPages from "../CoursesInnerPages";
const GameDesign = () => {
  const faqData = [
    {
      ques: " Module 1 (Fundamentals of Game Design)",
      ans: [
        {
          con1: "Introduction to game design principles",
          con2: "Understanding game mechanics and player engagement",
          con3: "Game genres and their characteristics",
          con4: "Game design documentation (GDD)",
          con5: "Prototyping and iterative design",
        },
      ],
    },
    {
      ques: " Module 2 (Level Design and Game Environments)",
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
      ques: " Module 3 (User Interface (UI) and User Experience (UX))",
      ans: [
        {
          con1: "Principles of user interface design",
          con2: "UI layout and visual hierarchy",
          con3: "Input methods and control schemes",
          con4: "Heads-up display (HUD) design",
          con5: "Accessibility considerations in-game UI",
        },
      ],
    },
  ];
  return (
    <section>
      <CoursesInnerPages
        subtitle="Game Designing"
        description="The Game Design course is designed to equip students with the skills and knowledge necessary to create engaging and immersive gaming experiences. This comprehensive program covers a wide range of topics, including game mechanics, level design, storytelling, user interface (UI) design, and programming principles. Students will learn to conceptualize, design, and develop games across various platforms, such as PC, consoles, and mobile devices."
        description1="The course aims to develop a strong foundation in game design principles, allowing students to understand the underlying mechanics that make games enjoyable and addictive. Through hands-on projects and practical assignments, students will gain experience in using industry-standard game development tools and engines."
        src={img}
        faqData={faqData}
      />
    </section>
  );
};

export default GameDesign;
