import React from "react";
import img from "../../../../assets/images/banner/Artboard14.png";
import CoursesInnerPages from "../CoursesInnerPages";
const Photography = () => {
  const faqData = [
    {
      ques: "Module 1: Introduction to Photography and Camera Basics",
      ans: [
        {
          con1: "History of Photography: From Film to Digital",
          con2: "Understanding Different Types of Cameras (DSLR, Mirrorless, Point-and-Shoot)",
          con3: "Camera Anatomy: Lenses, Sensors, and Viewfinders",
          con4: "Introduction to Camera Modes: Auto, Manual, Aperture Priority, Shutter Priority",
          con5: "Understanding Focal Length and Field of View",
          con6: "Introduction to ISO, Aperture, and Shutter Speed (The Exposure Triangle)",
          con7: "How to Hold and Stabilize Your Camera for Sharp Images",
          con8: "Shooting in RAW vs. JPEG: Advantages and Differences",
          con9: "Introduction to File Formats: TIFF, PNG, and JPEG",
        },
      ],
    },
    {
      ques: "Module 2: Exposure Settings and Lighting Techniques",
      ans: [
        {
          con1: "Understanding Exposure: Brightness and Darkness in an Image",
          con2: "How Aperture Affects Depth of Field (DOF) and Image Clarity",
          con3: "Shutter Speed: Freezing Motion vs. Creating Motion Blur",
          con4: "ISO: Balancing Sensitivity and Image Noise",
          con5: "The Exposure Triangle: Balancing Aperture, Shutter Speed, and ISO",
          con6: "Understanding Histogram: Exposure Compensation and Clipping",
          con7: "Natural Light: Using Available Light for Portraits and Landscapes",
          con8: "Artificial Lighting: Introduction to Flash, LED Lights, and Studio Lighting",
          con9: "Modifying Light: Reflectors, Diffusers, and Softboxes",
        },
      ],
    },
    {
      ques: "Module 3: Composition and Framing Techniques",
      ans: [
        {
          con1: "Rule of Thirds: Balancing the Elements of an Image",
          con2: "Leading Lines: Drawing the Viewer’s Eye Through the Frame",
          con3: "Symmetry and Patterns in Photography",
          con4: "Negative Space: Making the Subject Stand Out",
          con5: "Framing and Perspective: Changing the Viewpoint for Impact",
          con6: "Depth and Layers: Creating a Sense of Space in a Photograph",
          con7: "Understanding Depth of Field: How to Isolate Subjects",
          con8: "Using Color and Contrast to Create Visual Impact",
          con9: "Composition Challenges: Breaking the Rules for Creative Impact",
        },
      ],
    },
    {
      ques: "Module 4: Photography Genres and Styles",
      ans: [
        {
          con1: "Portrait Photography: Lighting, Posing, and Expression",
          con2: "Landscape Photography: Capturing Scenic Views and Nature",
          con3: "Street Photography: Candid Moments in Urban Environments",
          con4: "Product Photography: Showcasing Products with Commercial Appeal",
          con5: "Architectural Photography: Capturing Buildings and Structures",
          con6: "Fashion Photography: Styling, Lighting, and Creative Direction",
          con7: "Macro Photography: Close-Up Shots of Small Subjects",
          con8: "Action and Sports Photography: Freezing Movement and Energy",
          con9: "Conceptual Photography: Creating Photos with Meaning or Story",
        },
      ],
    },
    {
      ques: "Module 5: Post-Processing Techniques in Lightroom and Photoshop",
      ans: [
        {
          con1: "Introduction to Post-Processing: Enhancing Your Images",
          con2: "Editing in Adobe Lightroom: Basic Adjustments (Exposure, Contrast, etc.)",
          con3: "Working with RAW Files in Lightroom: Non-Destructive Editing",
          con4: "Color Correction: White Balance, HSL, and Tint Adjustments",
          con5: "Advanced Editing in Photoshop: Layers, Masks, and Selections",
          con6: "Retouching: Removing Blemishes, Skin Smoothing, and Object Removal",
          con7: "Enhancing Portraits: Skin Tones, Eyes, and Teeth Whitening",
          con8: "Adding Effects and Textures to Images: Creative Editing Techniques",
          con9: "Sharpening, Noise Reduction, and Exporting Final Images",
        },
      ],
    },
    {
      ques: "Module 6: Final Project & Review",
      ans: [
        {
          con1: "Planning Your Final Photography Project: Concept, Theme, and Location",
          con2: "Shooting for Your Final Project: Applying What You’ve Learned",
          con3: "Reviewing and Critiquing Your Images: What Works and What Doesn’t",
          con4: "Post-Processing Your Final Images: Enhancing and Refining Photos",
          con5: "Final Presentation: Compiling and Showcasing Your Work",
          con6: "Building a Photography Portfolio: Selecting and Arranging Your Best Images",
          con7: "Preparing Photos for Print and Online Portfolios",
          con8: "Feedback and Review: Evaluating Your Progress",
          con9: "Career in Photography: How to Market Your Work and Gain Clients",
        },
      ],
    },
  ];

  const jobs = [
    "Portrait Photographer",
    "Product Photographer",
    "Fashion Photographer",
    "Wedding/Event Photographer",
    "Wildlife Photographer",
    "Landscape Photographer",
    "Travel Photographer",
    "Photojournalist",
    "Food Photographer",
    "Commercial/Advertising Photographer",
    "Architectural Photographer",
    "Sports Photographer",
    "Fine Art Photographer",
    "Headshot Photographer",
    "Editorial Photographer",
    "Stock Photographer",
    "Forensic Photographer",
    "Social Media Content Photographer",
    "Drone Photographer",
    "Freelance Photographer",
  ];

  return (
    <section>
      <CoursesInnerPages
        subtitle="Photography "
        description="The Photography course teaches the technical and creative aspects of capturing images. Students will learn camera operation, lighting techniques, composition, and post-processing using software like Adobe Lightroom and Photoshop. They will specialize in various genres, including portrait, landscape, fashion, and product photography."
        src={img}
        faqData={faqData}
        jobs={jobs}
      />
    </section>
  );
};

export default Photography;
