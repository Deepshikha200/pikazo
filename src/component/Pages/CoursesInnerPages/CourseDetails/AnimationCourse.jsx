import React from "react";
import img from "../../../../assets/images/banner/Animation Banner.png";
import CoursesInnerPages from "../CoursesInnerPages";
const AnimationCourse = () => {
  const faqData = [
    {
      ques: "Module 1: Introduction to Animation and Basic Principles",
      ans: [
        {
          con1: "History and Evolution of Animation",
          con2: "The Role of an Animator: Traditional vs. Digital Animation",
          con3: "The 12 Principles of Animation",
          con4: "Understanding Timing and Spacing in Animation",
          con5: "Keyframes and In-betweens: The Basics of Animation",
          con6: "Storyboarding: Planning and Visualizing Animation",
          con7: "Introduction to Animation Formats and Workflows",
          con8: "Animation vs. Motion Graphics: Key Differences",
          con9: "The Importance of Storytelling in Animation",
        },
      ],
    },
    {
      ques: "Module 2: Working with Adobe Animate: Interface and Basic Tools",
      ans: [
        {
          con1: "Introduction to Adobe Animate Interface",
          con2: "Creating and Setting Up Animation Projects",
          con3: "Drawing Tools: Brushes, Pencil, and Shapes",
          con4: "Working with Layers and Layer Folders",
          con5: "Understanding the Timeline and Keyframes",
          con6: "The Concept of Frames per Second (FPS) and Frame Rates",
          con7: "Basic Animation Tools: Classic Tweens and Motion Tweens",
          con8: "Exporting Animated GIFs, SWF, and Video Files",
          con9: "Introduction to Symbol Creation and Reusability",
        },
      ],
    },
    {
      ques: "Module 3: Character Animation and Motion Studies",
      ans: [
        {
          con1: "Introduction to Character Design for Animation",
          con2: "The Basics of Rigging: Creating a Simple Character",
          con3: "Key Poses and Breakdown Poses: Establishing Motion",
          con4: "Working with Inbetweens: Creating Fluid Motion",
          con5: "Animating Walk Cycles: Understanding Human Movement",
          con6: "Animating Facial Expressions and Lip Syncing",
          con7: "Timing and Spacing in Character Animation",
          con8: "The Importance of Overlapping Action in Animation",
          con9: "Introduction to Animating Simple Interactions and Props",
        },
      ],
    },
    {
      ques: "Module 4: Advanced Animation Techniques: Tweening and Keyframes",
      ans: [
        {
          con1: "Understanding Tweening: Classic vs. Motion Tweens",
          con2: "Creating Smooth and Complex Animation Using Keyframes",
          con3: "Using Easing (Ease In/Ease Out) for More Realistic Motion",
          con4: "Working with Shape Tweens and Morphing",
          con5: "Animation Techniques for Complex Movements (e.g., Flying, Bouncing)",
          con6: "Creating Looping Animations (Walk Cycles, Rotating Objects)",
          con7: "3D Space in 2D Animation: Working with Depth and Perspective",
          con8: "Advanced Layer Techniques: Masking, Blending, and Motion Paths",
          con9: "Keyframe Animation Best Practices: Avoiding Jittery Motion",
        },
      ],
    },
    {
      ques: "Module 5: 2D Animation Production and Backgrounds",
      ans: [
        {
          con1: "Setting Up a Scene: Layout and Background Creation",
          con2: "Introduction to Background Animation and Moving Elements",
          con3: "Understanding the Role of the Animator vs. the Background Artist",
          con4: "Parallax Scrolling: Creating Depth in Animated Scenes",
          con5: "Creating Atmospheric Effects (e.g., Wind, Rain, Smoke)",
          con6: "Lighting and Shadows in Animation",
          con7: "Using Color to Enhance Mood and Emotion",
          con8: "Compositing Animated Elements into the Background",
          con9: "Finalizing a Scene: Adding Details and Polish",
        },
      ],
    },
    {
      ques: "Module 6: Final Project & Review",
      ans: [
        {
          con1: "Planning the Final Animation Project: Concept, Script, and Storyboard",
          con2: "Character and Scene Design for the Final Project",
          con3: "Creating Keyframes, Breakdown, and In-between Animations",
          con4: "Refining Animation with Tweens and Easing",
          con5: "Sound Design: Adding Voiceovers, Music, and Effects",
          con6: "Rendering Final Animation for Multiple Formats (GIF, Video, SWF)",
          con7: "Final Review and Group Critiques",
          con8: "Presenting Your Final Animation Project",
          con9: "Portfolio Development and Exporting Work for Online Showcases",
        },
      ],
    },
  ];

  const jobs = [
    "2D Animator",
    "3D Animator",
    "Animation Director",
    "Stop-Motion Animator",
    "Character Animator",
    "Storyboard Artist",
    "Animation Rigging Artist",
    "Visual Development Artist",
    "Game Animator",
    "Technical Animator",
    "Motion Capture Specialist",
    "Animation Producer",
    "Layout Artist",
    "Special Effects Animator",
    "Environment Designer (Animation)",
    "Animation Scriptwriter",
    "Animator for Educational Content",
    "Animator for Advertisements",
    "Freelance Animator",
    "AR/VR Animator",
  ];

  return (
    <section>
      <CoursesInnerPages
        subtitle="Animation"
        description="The Animation course covers the foundational principles of 2D and 3D animation, including character design, rigging, and movement. Students will learn storytelling and timing while mastering tools like Toon Boom, Maya, and Blender. The course prepares learners to create animations for films, games, and advertisements."
        src={img}
        faqData={faqData}
        jobs={jobs}
      />
    </section>
  );
};

export default AnimationCourse;
