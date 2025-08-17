import React from "react";
import img from "../../../../assets/Student_Work/Graphics/Artboard1.png";
import CoursesInnerPages from "../CoursesInnerPages";
import cinemato from "../../../../assets/images/banner/cinemato.png";

const Cinematography = () => {
  const faqData = [
    {
      ques: "Module 1: Fundamentals of Cinematography",
      ans: [
        {
          con1: "Introduction to Cinematography: The Role of a Cinematographer",
          con2: "The Evolution of Cinematography: Film to Digital",
          con3: "Understanding the Camera: Sensors, Lenses, and Accessories",
          con4: "Exposure Triangle: ISO, Aperture, and Shutter Speed",
          con5: "Frame Rates and Their Impact on Visual Style",
          con6: "Understanding Focal Lengths: Wide-Angle, Standard, and Telephoto Lenses",
          con7: "Depth of Field and Focus Techniques",
          con8: "Aspect Ratios: Choosing the Right Format for Storytelling",
          con9: "Overview of Cinematic Visual Language",
        },
      ],
    },
    {
      ques: "Module 2: Camera Operation and Movement",
      ans: [
        {
          con1: "Types of Cameras: DSLRs, Mirrorless, Cinema Cameras",
          con2: "How to Set Up and Operate a Camera",
          con3: "Tripods, Gimbals, and Dollies: Tools for Camera Stability",
          con4: "Camera Movement: Pan, Tilt, Dolly, Truck, and Crane Shots",
          con5: "Advanced Movements: Steadicam, Jib, and Handheld Techniques",
          con6: "Using Drones for Aerial Cinematography",
          con7: "Rolling Shutter and Motion Blur: Understanding Limitations",
          con8: "Slow Motion and Time-Lapse Techniques",
          con9: "Practical Exercise: Shooting Dynamic Sequences",
        },
      ],
    },
    {
      ques: "Module 3: Lighting Techniques and Color Theory",
      ans: [
        {
          con1: "The Science of Light: Hard Light vs. Soft Light",
          con2: "Types of Lights: Tungsten, LED, HMI, and Fluorescent",
          con3: "Three-Point Lighting Setup: Key, Fill, and Back Light",
          con4: "Understanding Color Temperature: Warm and Cool Tones",
          con5: "Using Gels and Filters to Enhance Visual Style",
          con6: "Practical Lighting for Day and Night Scenes",
          con7: "Motivated Lighting: Natural vs. Artificial Sources",
          con8: "Shadows and Contrast: Creating Mood and Atmosphere",
          con9: "Color Theory in Cinematography: Evoking Emotion Through Color",
        },
      ],
    },
    {
      ques: "Module 4: Shot Composition and Visual Storytelling",
      ans: [
        {
          con1: "The Rule of Thirds and Other Composition Rules",
          con2: "Framing Techniques: Close-Up, Medium, Wide, and Extreme Shots",
          con3: "Using Negative Space Effectively",
          con4: "Leading Lines, Patterns, and Symmetry in Cinematic Frames",
          con5: "Depth in Cinematography: Foreground, Midground, and Background",
          con6: "Visual Continuity: Matching Shots Across Scenes",
          con7: "The Use of Camera Angles: Low Angle, High Angle, and Overhead Shots",
          con8: "Storyboarding and Pre-Visualization Techniques",
          con9: "Conveying Emotion and Narrative Through Visuals",
        },
      ],
    },
    {
      ques: "Module 5: Cinematography Styles and Genres",
      ans: [
        {
          con1: "Cinematic Styles: Realism, Expressionism, and Minimalism",
          con2: "Lighting and Composition for Action Films",
          con3: "Cinematography in Horror: Shadows, Colors, and Tension",
          con4: "Romantic Films: Soft Lighting and Close-Up Shots",
          con5: "The Aesthetic of Sci-Fi: Color Palettes and Advanced VFX Shots",
          con6: "Documentary Cinematography: Natural Light and Handheld Shots",
          con7: "Creative Techniques in Experimental Cinematography",
          con8: "The Influence of Famous Cinematographers (e.g., Roger Deakins, Emmanuel Lubezki)",
          con9: "Adapting Cinematography for Different Budgets and Technologies",
        },
      ],
    },
    {
      ques: "Module 6: Final Project & Review",
      ans: [
        {
          con1: "Planning Your Cinematic Sequence: Concept and Mood Board",
          con2: "Shooting the Project: Applying Cinematography Techniques",
          con3: "Reviewing the Shots: Analyzing Composition, Lighting, and Movement",
          con4: "Post-Processing: Basic Color Grading for Cinematic Look",
          con5: "Incorporating Feedback: Refining Your Work",
          con6: "Final Presentation: Screening and Peer Review",
          con7: "Building a Cinematography Portfolio",
          con8: "Exploring Career Paths in Cinematography",
          con9: "Wrap-Up: Reflecting on the Journey and Future Growth",
        },
      ],
    },
  ];

  const jobs = [
    "Director of Photography (Cinematographer)",
    "Camera Operator",
    "Steadicam Operator",
    "Gaffer (Lighting Technician)",
    "Key Grip",
    "Assistant Camera (AC)",
    "Drone Cinematographer",
    "Lighting Designer (Cinematography)",
    "Underwater Cinematographer",
    "Wildlife Cinematographer",
    "Sports Cinematographer",
    "Event Cinematographer",
    "Music Video Cinematographer",
    "Commercial Cinematographer",
    "Corporate Film Cinematographer",
    "Documentary Cinematographer",
    "Film Unit Still Photographer",
    "Cinematography Teacher",
    "Freelance Cinematographer",
    "Experimental Cinematographer",
  ];

  return (
    <section>
      <CoursesInnerPages
        subtitle="Cinematography"
        description="The Cinematography course focuses on the art of visual storytelling through camera work and lighting. Students will learn about framing, composition, lighting setups, and shot techniques. The course provides practical knowledge to create visually stunning scenes for films, TV, and commercials."
        src={cinemato}
        faqData={faqData}
        jobs={jobs}
      />
    </section>
  );
};

export default Cinematography;
