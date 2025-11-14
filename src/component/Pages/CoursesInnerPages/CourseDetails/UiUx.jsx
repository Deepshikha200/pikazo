import React from "react";
import img from "../../../../assets/images/banner/UI UX Banner.png";
import CoursesInnerPages from "../CoursesInnerPages";
const UiUx = () => {
  const faqData = [
    {
      ques: "Module 1: Introduction to UI/UX Design",
      ans: [
        {
          con1: "What is UI/UX Design? Overview and Importance",
          con2: "Differences Between UI and UX Design",
          con3: "The Role of a UI/UX Designer: Skills and Responsibilities",
          con4: "The Design Process: From Research to Development",
          con5: "Understanding the User-Centered Design Approach",
          con6: "Key Elements of a Good User Experience",
          con7: "Exploring Design Systems and Standards",
          con8: "Case Studies: Successful UI/UX Designs",
          con9: "Introduction to UI/UX Design Tools",
        },
      ],
    },
    {
      ques: "Module 2: User Research and Analysis",
      ans: [
        {
          con1: "The Importance of User Research in UX Design",
          con2: "Conducting Stakeholder Interviews",
          con3: "Understanding User Personas: Defining Your Audience",
          con4: "Mapping the Customer Journey: Identifying Pain Points",
          con5: "Competitive Analysis: Learning from Competitors",
          con6: "Research Methods: Surveys, Interviews, and Field Studies",
          con7: "Tools for User Research: Google Forms, Typeform, and Hotjar",
          con8: "Analyzing and Organizing Research Data",
          con9: "Translating Research Insights into Design Goals",
        },
      ],
    },
    {
      ques: "Module 3: Principles of UX Design",
      ans: [
        {
          con1: "What Makes a Great User Experience?",
          con2: "The UX Design Process: Ideation to Validation",
          con3: "Information Architecture: Structuring Content for Usability",
          con4: "Designing User Flows and Navigation",
          con5: "Wireframing Basics: Blueprint for UX",
          con6: "The Role of Prototyping in UX Design",
          con7: "Heuristic Evaluation: Nielsen’s 10 Usability Heuristics",
          con8: "Emotional Design: Creating Engaging User Experiences",
          con9: "Testing UX Concepts Through Iteration",
        },
      ],
    },
    {
      ques: "Module 4: Principles of UI Design",
      ans: [
        {
          con1: "The Role of Visual Design in UI",
          con2: "Color Theory and Its Application in Interfaces",
          con3: "Typography in UI Design: Legibility and Hierarchy",
          con4: "Iconography: Designing and Using Icons Effectively",
          con5: "Layout and Grid Systems for Screen Design",
          con6: "Creating Consistency with Design Systems",
          con7: "Visual Hierarchy: Guiding the User’s Attention",
          con8: "Responsive Design: Adapting UI for Different Devices",
          con9: "Case Studies: Analyzing Well-Designed Interfaces",
        },
      ],
    },
    {
      ques: "Module 5: Wireframing and Prototyping",
      ans: [
        {
          con1: "What are Wireframes? Low-Fidelity vs. High-Fidelity",
          con2: "Creating Wireframes: Best Practices",
          con3: "Tools for Wireframing: Figma, Sketch, Adobe XD",
          con4: "Introduction to Prototyping: Bringing Designs to Life",
          con5: "Creating Clickable Prototypes for Testing",
          con6: "Designing for Interactivity and Feedback",
          con7: "Using Animation to Enhance Prototypes",
          con8: "Rapid Prototyping Techniques for Iteration",
          con9: "Testing Prototypes with Real Users",
        },
      ],
    },
    {
      ques: "Module 6: Interaction Design and Microinteractions",
      ans: [
        {
          con1: "What is Interaction Design? Core Concepts and Principles",
          con2: "Designing for User Actions: Buttons, Forms, and Gestures",
          con3: "Microinteractions: The Small Details That Matter",
          con4: "Adding Motion to Interfaces: Animations and Transitions",
          con5: "Feedback and Affordance: Keeping Users Informed",
          con6: "Designing for Touch and Click Interactions",
          con7: "Tools for Interaction Design: After Effects, ProtoPie",
          con8: "Enhancing Usability Through Intuitive Interactions",
          con9: "Evaluating Interaction Design Through Usability Testing",
        },
      ],
    },
    {
      ques: "Module 7: Usability Testing and User Feedback",
      ans: [
        {
          con1: "The Importance of Usability Testing in UX",
          con2: "Planning and Conducting Usability Tests",
          con3: "Creating Test Scenarios and Tasks",
          con4: "Observing and Analyzing User Behavior",
          con5: "Collecting Feedback: Direct and Indirect Methods",
          con6: "Iterating Designs Based on Usability Findings",
          con7: "Tools for Usability Testing: Maze, UsabilityHub",
          con8: "Common Usability Issues and How to Fix Them",
          con9: "Presenting Findings to Stakeholders",
        },
      ],
    },
    {
      ques: "Module 8: Accessibility and Inclusive Design",
      ans: [
        {
          con1: "Understanding Accessibility: Why It Matters",
          con2: "Designing for All Users: Inclusive Design Principles",
          con3: "Accessibility Standards: WCAG Guidelines",
          con4: "Testing Designs for Accessibility: Color Contrast, Screen Readers",
          con5: "Designing for Different Abilities: Visual, Auditory, and Motor",
          con6: "Creating Accessible Forms and Navigation",
          con7: "Tools for Accessibility Testing: AXE, Lighthouse",
          con8: "Building Inclusivity Into the Design Process",
          con9: "Case Studies: Accessible and Inclusive Designs",
        },
      ],
    },
    {
      ques: "Module 9: Tools and Technologies in UI/UX",
      ans: [
        {
          con1: "Overview of Popular UI/UX Tools: Figma, Adobe XD, Sketch",
          con2: "Collaborative Design and Feedback Tools: InVision, Zeplin",
          con3: "Creating Design Systems Using Tools",
          con4: "Introduction to UX Writing: Crafting Microcopy",
          con5: "Introduction to HTML/CSS for UI Designers",
          con6: "Handoff Between Designers and Developers",
          con7: "Exploring Advanced Tools: Framer, ProtoPie",
          con8: "Building a Workflow with Plugins and Extensions",
          con9: "Keeping Up with UI/UX Industry Trends",
        },
      ],
    },
    {
      ques: "Module 10: Final Project and Portfolio Development",
      ans: [
        {
          con1: "Defining a Final Project: Real or Hypothetical",
          con2: "Conducting Research and Creating Personas",
          con3: "Designing Wireframes and Prototypes",
          con4: "Testing and Iterating Designs Based on Feedback",
          con5: "Documenting the Design Process for Portfolios",
          con6: "Preparing a Professional Portfolio for UI/UX Careers",
          con7: "Creating Case Studies to Showcase Your Work",
          con8: "Presenting Final Projects to Peers and Mentors",
          con9: "Course Wrap-Up: Next Steps in a UI/UX Career",
        },
      ],
    },
  ];

  const jobs = [
    "UI Designer",
    "UX Designer",
    "Interaction Designer",
    "Product Designer",
    "UX Researcher",
    "Information Architect",
    "Visual Designer",
    "Wireframe Specialist",
    "Prototyping Specialist",
    "Accessibility Designer",
    "Design System Manager",
    "Mobile App UI/UX Designer",
    "Web Designer",
    "Service Designer",
    "UX Writer",
    "Usability Analyst",
    "UI/UX Consultant",
    "Design Thinking Facilitator",
    "Freelance UI/UX Designer",
    "UI/UX Instructor/Trainer",
  ];

  return (
    <section>
      <CoursesInnerPages
        subtitle="UI/UX Designing"
        description="This course focuses on designing user-friendly and visually appealing digital experiences. Students will learn about user research, wireframing, prototyping, and usability testing using tools like Figma, Adobe XD, and Sketch. By the end, learners will create intuitive designs for websites and mobile apps."
        src={img}
        faqData={faqData}
        jobs={jobs}
      />
    </section>
  );
};

export default UiUx;
