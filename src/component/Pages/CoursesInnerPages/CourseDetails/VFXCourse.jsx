import React from "react";
import CoursesInnerPages from "../CoursesInnerPages";
import img from "../../../../assets/images/banner/Artboard1.png";

const VFXCourse = () => {
  const faqData = [
    {
      ques: "Module 1: Introduction to VFX and Basic Concepts",
      ans: [
        {
          con1: "Overview of Visual Effects: The Role of VFX in Film and Media",
          con2: "Understanding VFX Terminology: Rotoscoping, Compositing, Matte Painting, etc.",
          con3: "History and Evolution of Visual Effects in Cinema",
          con4: "Types of VFX: Practical Effects vs. Digital Effects",
          con5: "The VFX Pipeline: Pre-Production, Production, and Post-Production",
          con6: "The Importance of Storytelling in Visual Effects",
          con7: "VFX in Film, Television, and Advertising",
          con8: "Introduction to VFX Software: After Effects, Nuke, Houdini, Blender",
          con9: "Understanding Visual Effects Shots: Live Action vs. CG Elements",
        },
      ],
    },
    {
      ques: "Module 2: Working with Adobe After Effects: Interface and Tools for VFX",
      ans: [
        {
          con1: "Introduction to Adobe After Effects Interface",
          con2: "Setting Up a Project for VFX: Composition and Timeline Settings",
          con3: "Importing Footage and Organizing Layers for VFX Work",
          con4: "Using Masks and Mattes to Isolate Elements",
          con5: "Working with Adjustment Layers and Effects",
          con6: "Applying Motion Graphics in Live Action Footage",
          con7: "Using 3D Layers and Cameras for VFX Shots",
          con8: "Basics of Keyframing and Animation for Visual Effects",
          con9: "Rendering and Exporting VFX Shots from After Effects",
        },
      ],
    },
    {
      ques: "Module 3: Compositing Techniques and Green Screen Keying",
      ans: [
        {
          con1: "Introduction to Compositing: Combining Elements to Create a Seamless Scene",
          con2: "Working with Multiple Layers and Effects in After Effects",
          con3: "Understanding the Green Screen/Chroma Keying Process",
          con4: "Using the Keylight Effect for Green Screen Removal",
          con5: "Fixing Keying Issues: Spill Suppression, Matte Choking, and Edge Refinement",
          con6: "Working with Alpha Channels and Pre-Composing",
          con7: "Color Grading and Matching to Ensure Seamless Integration",
          con8: "Rotoscoping: Creating Masks for Objects that Move",
          con9: "Adding Realistic Shadows and Reflections for Integrated Elements",
        },
      ],
    },
    {
      ques: "Module 4: Motion Tracking and Camera Mapping",
      ans: [
        {
          con1: "Introduction to Motion Tracking: Understanding the Process and Tools",
          con2: "Using After Effects' Built-in Motion Tracker for 2D Tracking",
          con3: "Working with 3D Tracking: Understanding Camera Movement",
          con4: "Tracking Objects and Integrating CG Elements into Live Action Shots",
          con5: "Introduction to Camera Mapping: Recreating Camera Movement in 3D",
          con6: "Advanced Motion Tracking with Mocha (or other tracking software)",
          con7: "Working with 3D Cameras and Null Objects for Tracking Shots",
          con8: "Stabilizing Footage for VFX Integration",
          con9: "Refining Tracked Data and Fixing Tracking Errors",
        },
      ],
    },
    {
      ques: "Module 5: 3D Integration and Matte Painting",
      ans: [
        {
          con1: "Introduction to 3D VFX: The Role of 3D Models in VFX Production",
          con2: "Working with 3D Elements in After Effects and Blender",
          con3: "Integrating 3D Models into Live Action Footage",
          con4: "Creating Digital Matte Paintings for Backgrounds",
          con5: "Techniques for Creating Realistic Sky Replacement and Set Extensions",
          con6: "Using HDRI Images for Lighting in 3D Scenes",
          con7: "Camera Matching and 3D Rendering for VFX Shots",
          con8: "Rendering 3D Layers and Compositing with Live Action Footage",
          con9: "Adding Particle Effects: Smoke, Fire, Explosions, and Water Effects",
        },
      ],
    },
    {
      ques: "Module 6: Final Project & Review",
      ans: [
        {
          con1: "Planning the Final VFX Project: Concept, Storyboard, and Shot List",
          con2: "Combining Multiple VFX Techniques in a Single Sequence",
          con3: "Creating a Realistic Composite Using Green Screen, 3D Models, and Motion Tracking",
          con4: "Adding Effects: Particle Simulations, Fire, Smoke, Water",
          con5: "Color Grading and Final Touches on VFX Shots",
          con6: "Exporting Final Compositions for Film, Television, or Digital Media",
          con7: "Reviewing Final Project and Refining Elements Based on Feedback",
          con8: "Presenting the Final VFX Project to the Class",
          con9: "Developing a VFX Portfolio: Preparing for a Career in Visual Effects",
        },
      ],
    },
  ];

  const jobs = [
    "Visual Effects Artist",
    "Compositor",
    "Matte Painter",
    "Lighting Artist (VFX)",
    "VFX Supervisor",
    "Special Effects Supervisor",
    "Roto Artist",
    "Texture Artist",
    "Simulation Artist",
    "Matchmove Artist",
    "VFX Producer",
    "Environment Artist (VFX)",
    "Technical Director (VFX)",
    "Crowd Simulation Specialist",
    "Digital Sculptor",
    "Virtual Production Specialist",
    "Stereoscopic Artist",
    "Motion Capture Specialist (VFX)",
    "Pipeline Developer",
    "Freelance VFX Artist",
  ];

  return (
    <section>
      <CoursesInnerPages
        subtitle="VFX "
        description="This course introduces students to the world of Visual Effects, covering compositing, rotoscoping, matte painting, and green screen keying. Using software like Nuke, After Effects, and Houdini, students will create stunning visual effects for films, TV, and advertisements.
"
        src={img}
        faqData={faqData}
        jobs={jobs}
      />
    </section>
  );
};

export default VFXCourse;
